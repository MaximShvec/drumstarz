# DRUMSTARZ frontend — интеграция с Laravel

Краткая техсправка для бэкенда. Фронт — отдельное Vite SPA (React). Сейчас деплоится на Vercel. Формы ещё не ходят на сервер.

## Что это

| | |
|---|---|
| Стек | Vite 8, React 19, TypeScript, React Router 7 |
| Сборка | `cd frontend && npm run build` → статика в `frontend/dist/` |
| Языки | `lv` (канон, без префикса), `ru` (`/ru/...`), `en` (`/en/...`) |
| API | нет. Все заявки идут в заглушку `src/lib/submit.ts` |

Публичные ассеты уже лежат в `frontend/public/assets/` и попадают в `dist/assets/`.

## Как отдать из Laravel

Два рабочих варианта. Не смешивать.

### A. Laravel отдаёт собранный SPA (проще)

1. `npm run build` в CI.
2. Содержимое `frontend/dist/` положить в `public/` (или в `public/spa/` и поправить `base` в Vite).
3. Все **не-файловые** GET должны отдавать `index.html` (как сейчас `vercel.json`).

```php
// routes/web.php — после API и админки
Route::get('/{any}', function () {
    return file_get_contents(public_path('index.html'));
})->where('any', '^(?!api|sanctum|storage).*$');
```

Статику (`/assets/*`, `/og.jpg`, `/robots.txt`, `/sitemap.xml`) Laravel должен отдать как файлы, не через SPA fallback.

### B. Vite внутри Laravel (Inertia / Blade не нужны)

Если решите собирать фронт пайплайном Laravel Vite — это уже другой каркас. Текущий код рассчитан на собственный `index.html` и клиентский роутер. Для интеграции заявок достаточно варианта A плюс JSON API.

## URL, которые должен понимать сервер

Один и тот же UI, три адреса:

| Страница | LV | RU | EN |
|---|---|---|---|
| Главная | `/` | `/ru` | `/en` |
| Преподаватели | `/trainers` | `/ru/trainers` | `/en/trainers` |
| Контакты | `/contacts` | `/ru/contacts` | `/en/contacts` |
| Перкуссия | `/percussions` | `/ru/percussions` | `/en/percussions` |
| Мероприятия | `/events` | `/ru/events` | `/en/events` |
| Детский праздник | `/kids` | `/ru/kids` | `/en/kids` |
| Подарочная карта | `/giftcard` | `/ru/giftcard` | `/en/giftcard` |
| Лагерь | `/camp` | `/ru/camp` | `/en/camp` |

`/lv/...` фронт редиректит на путь без префикса. Не плодите `/lv` на бэкенде.

Якоря только на клиенте: `/#prices`, `/#faq`.

`VITE_SITE_URL` задаёт канонический origin (сейчас `https://drumstarz.vercel.app`). После переезда на домен школы проставьте его в сборке — от него считаются canonical, Open Graph и sitemap.

## Точка интеграции заявок

Единственный клиентский вход: `frontend/src/lib/submit.ts`.

Сейчас:

```ts
export async function submitApplicationForm(payload: Record<string, unknown>): Promise<SubmitResult>
// всегда { status: "not_configured" }
```

Фронт **не рисует успех**, пока не придёт `{ status: "ok" }`. Не меняйте этот контракт без правки всех форм.

Замените тело функции на `fetch` к Laravel. Пример:

```ts
const res = await fetch(`${import.meta.env.VITE_API_URL}/api/leads`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Locale": document.documentElement.lang, // lv | ru | en
  },
  body: JSON.stringify(payload),
});
```

Ожидаемые ответы:

| HTTP | Тело | Поведение UI |
|---|---|---|
| 204 / 200 | `{ "status": "ok" }` или пусто | успех (сейчас UI ещё не показывает отдельный success-state — его можно добавить вместе с API) |
| 422 | `{ "message": "...", "errors": { "phone": ["..."] } }` | вернуть `{ status: "error", message }` |
| 5xx / сеть | — | `{ status: "error", message }` |

CORS: если SPA и Laravel на разных доменах — разрешите origin фронта и `Content-Type`. CSRF для чистого JSON API обычно не нужен (отдельный `api` guard / Sanctum token). Если оставите `web` + cookie — отдайте CSRF и шлите `X-XSRF-TOKEN`.

Имеет смысл сразу писать заявки в БД **и** слать в Telegram/почту — продукт уже завязан на быстрый ответ менеджера.

## Поля, которые уже уходят с клиента

Общие: `name`, `phone`, `consent` (boolean), `source` (откуда форма). Плюс `email` / свободный текст там, где форма его спрашивает.

| `source` | Где | Дополнительно |
|---|---|---|
| *(нет, только name/phone/consent)* | модалка «бесплатный урок» | — |
| `contacts-lead` | контакты / блок на главной | `email?`, `message?` |
| `camp-form` | лагерь | `email`, `age?`, `message?` |
| `kids-form` | детский праздник | `email`, `date?`, `message?` |
| `events-form` | взрослый праздник | `email`, `date?`, `message?` |
| `giftcard-form` | подарочная карта | `email`, `plan` (`single` / пакет), `comment?` |
| `percussions-form` | перкуссия | `email`, `day?`, `message?` |

Клиент проверяет пустые обязательные поля и формат email. Телефон **не** нормализуется — примите строку, как есть (`+371 …` и локальный ввод). `consent === true` обязателен.

Рекомендуемая таблица `leads`: `id`, `source`, `locale`, `name`, `phone`, `email`, `payload` (JSON с остальным), `consent_at`, `created_at`, `status`.

## Что бэкенду не нужно отдавать

Контент страниц, цены, фото преподавателей, YouTube id, тексты lv/ru/en — всё зашито во фронте (`src/content/`, `src/data/`). CMS не подключена.

Контакты, которые фронт уже показывает (не переводить, не дублировать как «ещё один источник правды», пока не появится админка):

- телефон / WhatsApp: `+371 26 25 31 58`
- почта: `drumstarz.riga@gmail.com`
- филиалы: Šarlotes iela 18A; Tērbatas iela 76, Rīga

Если позже цены или слоты начнут жить в Laravel — отдайте JSON и замените только `src/data/*`, не вёрстку.

## SEO и служебные файлы

Фронт сам пишет title / description / canonical / hreflang / JSON-LD в `document` после гидрации.

Отдайте как статику (не через SPA fallback):

- `/robots.txt`
- `/sitemap.xml` — список URL на три языка
- `/og.jpg`

После смены домена пересоберите фронт с `VITE_SITE_URL=https://ваш-домен` и обновите sitemap.

Социальные кроулеры без JS увидят мета **латышской главной** из `index.html`. Для превью внутренних URL нужен SSR или пререндер — сейчас его нет.

## Окружение

| Переменная | Кто читает | Зачем |
|---|---|---|
| `VITE_SITE_URL` | сборка фронта | канонический origin |
| `VITE_API_URL` | ещё нет, добавить при интеграции | базовый URL Laravel API |

Префикс `VITE_` обязателен: Vite вшивает только его.

## Telegram

В шапке сайта для in-app браузера Telegram красится тёмным (`#070A08`). Скрипт `telegram-web-app.js` грузится только если UA содержит `Telegram`. К заявкам это не относится.

## Проверка после включения API

1. Модалка записи на главной — `name` + `phone`.
2. Форма на `/contacts` и `/ru/contacts` (locale в заголовке).
3. `/camp`, `/kids`, `/events`, `/giftcard`, `/percussions`.
4. Ошибка 422 не должна выглядеть как «отправка не настроена».
5. Успех не показывайте, пока фронт не начнёт обрабатывать `{ status: "ok" }`.
