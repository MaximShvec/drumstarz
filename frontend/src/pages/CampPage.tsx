import { useState } from "react";
import {
  CAMP_DAYS,
  CAMP_FACTS,
  CAMP_FAQ,
  CAMP_GALLERY,
  CAMP_INCLUDED,
  CAMP_MAP_URL,
  CAMP_YOUTUBE_ID,
} from "../data/camp";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { scrollToId } from "../hooks/useLenis";
import { Reveal } from "../components/Reveal";
import { YoutubePlayer } from "../components/media/YoutubePlayer";
import { Button, ButtonAnchor } from "../components/ui/Button";
import { Lightbox } from "../components/ui/Lightbox";
import { CampForm } from "../sections/camp/CampForm";
import { cn } from "../lib/cn";

function scrollToForm() {
  scrollToId("camp-form");
}

export function CampPage() {
  const [openDay, setOpenDay] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useDocumentMeta(
    "Барабанный лагерь Drumstarz — летний лагерь для детей 7–15 лет",
    "Барабанный лагерь DRUMSTARZ, 5–10 июля 2026: барабаны, музыка, спорт и новые друзья на природе в 40 км от Риги. Дети 7–15 лет, 470 € за неделю, питание и трансфер включены.",
  );

  return (
    <>
      <section className="relative isolate min-h-[92svh]" aria-labelledby="camp-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/assets/img/camp/hero-outdoor-stage.jpg"
            alt=""
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.45)_0%,rgba(7,10,8,0.18)_40%,rgba(7,10,8,0.92)_100%)]" />
        </div>

        <div className="container-site relative z-10 grid min-h-[92svh] items-end gap-10 pb-16 pt-32 xl:grid-cols-[minmax(0,1fr)_minmax(19rem,23rem)] xl:pb-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-mint/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Летний лагерь · 6 дней у озера
            </p>
            <h1
              id="camp-hero-title"
              className="mt-5 max-w-[12ch] break-words font-display text-[2.65rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
            >
              Барабанный лагерь Drumstarz
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Неделя вдали от привычной рутины: барабаны, музыка, спорт и новые друзья — на настоящей сцене посреди леса
              и озёр в 40 км от Риги. Предыдущий музыкальный опыт не важен.
            </p>
            <Button className="mt-8 px-8 py-4" onClick={scrollToForm}>
              Записаться в лагерь
            </Button>
          </div>

          <aside
            className="min-w-0 w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-void/72 p-6 backdrop-blur-md md:p-7"
            aria-labelledby="camp-facts-title"
          >
            <p id="camp-facts-title" className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Коротко о лагере
            </p>
            <dl className="mt-6 divide-y divide-white/8 border-y border-white/8">
              {CAMP_FACTS.map((item) => (
                <div key={item.label} className="flex items-baseline justify-between gap-3 py-3">
                  <dt className="text-sm text-cream/45">{item.label}</dt>
                  <dd className="text-right font-display text-lg font-semibold leading-tight">{item.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-display text-5xl font-extrabold leading-none tracking-[-0.04em]">
              470
              <span className="ml-1 text-2xl">€</span>
            </p>
            <p className="mt-2 text-sm text-cream/50">за 6 дней / 5 ночей</p>
            <Button className="mt-6 w-full py-3.5" onClick={scrollToForm}>
              Записаться в лагерь
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="camp-intro-title">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">Барабаны, музыка, дружба</p>
              <h2
                id="camp-intro-title"
                className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
              >
                Неделя, непохожая на обычное лето
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                Хотите попробовать что-то новенькое и необычное для ваших детей? Чтобы они отключились от повседневной
                рутины и весело провели летнюю неделю? Приглашаем в барабанный лагерь DRUMSTARZ!
              </p>
              <p className="mt-4 max-w-xl text-ink-soft">
                Ребёнка ждёт красочная развлекательная программа и уникальные мероприятия каждый день, о которых
                позаботились наши лучшие преподаватели: игра на барабанах, музыка, спортивные активности, вкусная еда
                четыре раза в день, новые друзья и незабываемые эмоции.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <img
                src="/assets/img/camp/concept-girl-drummer.jpg"
                alt="Девочка играет на барабанной установке на летнем лагере DRUMSTARZ"
                className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col gap-6 rounded-[1.6rem] bg-void p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="font-display text-2xl font-semibold sm:text-3xl">Опыт не важен</p>
                <p className="mt-3 max-w-2xl text-cream/65">
                  Уже через пять дней занятий под наставничеством профессиональных преподавателей каждый участник
                  сыграет ритм под любимую песню — или даже собственное барабанное соло.
                </p>
              </div>
              <Button className="shrink-0 px-8 py-4" onClick={scrollToForm}>
                Записаться
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="camp-program-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Программа лагеря</p>
            <h2
              id="camp-program-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              Как проходит неделя
            </h2>
            <p className="mt-4 max-w-xl text-cream/60">
              Шесть дней с понятным ритмом: занятия и спорт до обеда, вода и игры после, а вечером — костёр, диско или
              кино. Открывайте день за днём.
            </p>
          </Reveal>

          <ul className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {CAMP_DAYS.map((day, i) => {
              const expanded = openDay === i;
              return (
                <li key={day.num}>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-start justify-between gap-4 py-6 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpenDay(expanded ? -1 : i)}
                  >
                    <span className="flex min-w-0 items-start gap-5">
                      <span className="font-display text-sm tracking-[0.22em] text-mint">{day.num}</span>
                      <span>
                        <span className="block font-display text-xl font-semibold sm:text-2xl">{day.day}</span>
                        <span className="mt-1 block text-sm text-cream/45">{day.date}</span>
                      </span>
                    </span>
                    <span className="mt-1 text-mint" aria-hidden="true">
                      {expanded ? "—" : "+"}
                    </span>
                  </button>
                  <div className={cn("faq-answer", expanded && "is-open")}>
                    <div>
                      {day.note ? <p className="pb-3 pl-12 text-sm text-cream/50">{day.note}</p> : null}
                      <ol className="divide-y divide-white/6 pb-6 pl-12">
                        {day.items.map((item) => (
                          <li key={`${day.num}-${item.time}-${item.text}`} className="grid gap-2 py-3 sm:grid-cols-[4.5rem_1fr]">
                            <span className="font-display text-sm tracking-[0.12em] text-mint/80">{item.time}</span>
                            <span className="text-cream/70">{item.text}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-sm text-cream/40">Активности могут меняться и дополняться в зависимости от погоды.</p>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="camp-video-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">Смотрите сами</p>
            <h2
              id="camp-video-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              Как это было
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">
              Кадры из прошлого барабанного лагеря DRUMSTARZ — та самая атмосфера, которая ждёт и в этом сезоне.
            </p>
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <YoutubePlayer
              id={CAMP_YOUTUBE_ID}
              title="Барабанный лагерь DRUMSTARZ — видео"
              className="aspect-video w-full rounded-[1.6rem]"
              poster="/assets/img/camp/hero-outdoor-stage.jpg"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="camp-gallery-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Прошлый лагерь в кадрах</p>
            <h2
              id="camp-gallery-title"
              className="mt-4 max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
            >
              Настоящие моменты, а не постановка
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            {CAMP_GALLERY.map((item, i) => (
              <li
                key={item.src}
                className={cn(
                  "group overflow-hidden rounded-[1.2rem]",
                  i === 0 && "col-span-2 h-56 md:col-span-7 md:row-span-2 md:h-[480px]",
                  i === 1 && "h-40 md:col-span-5 md:h-[232px]",
                  i === 2 && "h-40 md:col-span-5 md:h-[232px]",
                  i === 3 && "h-40 md:col-span-3 md:h-[210px]",
                  i === 4 && "h-40 md:col-span-3 md:h-[210px]",
                  i === 5 && "h-40 md:col-span-3 md:h-[210px]",
                  i === 6 && "h-40 md:col-span-3 md:h-[210px]",
                )}
              >
                <button
                  type="button"
                  className="relative block h-full w-full cursor-pointer"
                  onClick={() => setGalleryIndex(i)}
                  aria-label={`Открыть фото: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="camp-location-title">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">Стоимость и локация</p>
            <h2
              id="camp-location-title"
              className="mt-4 max-w-[10ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              470 € за неделю
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Около 40 км от Риги. Отправление на автобусе — от барабанной школы по адресу Šarlotes 18a, в первый день
              лагеря.
            </p>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug">
              Игра на барабанах, музыка, спорт, вкусная еда четыре раза в день, новые друзья и незабываемые эмоции
            </p>
            <ButtonAnchor
              href={CAMP_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-4"
            >
              Посмотреть на карте
            </ButtonAnchor>
          </Reveal>

          <Reveal delay={80}>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">Даты</dt>
                <dd className="font-display text-xl font-semibold">5–10 июля 2026</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">Возраст</dt>
                <dd className="font-display text-xl font-semibold">7–15 лет</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">Питание</dt>
                <dd className="font-display text-xl font-semibold">4 раза в день</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">Адрес</dt>
                <dd className="max-w-[18ch] text-right font-display text-xl font-semibold leading-snug">
                  «Turbas», Turkalne, Ogres nov., LV-5015
                </dd>
              </div>
            </dl>
            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {CAMP_INCLUDED.map((item) => (
                <li key={item.num} className="flex items-start gap-5 py-5">
                  <span className="font-display text-sm tracking-[0.22em] text-mint-dim">{item.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="camp-faq-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Чаво</p>
            <h2
              id="camp-faq-title"
              className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
            >
              Частые вопросы
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <ul className="divide-y divide-white/8 border-y border-white/8">
              {CAMP_FAQ.map((item, i) => {
                const expanded = openFaq === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left"
                      aria-expanded={expanded}
                      onClick={() => setOpenFaq(expanded ? -1 : i)}
                    >
                      <span className="flex items-start gap-4">
                        <span className="font-display text-sm tracking-[0.22em] text-mint">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-medium leading-snug">{item.q}</span>
                      </span>
                      <span className="mt-1 text-mint" aria-hidden="true">
                        {expanded ? "—" : "+"}
                      </span>
                    </button>
                    <div className={cn("faq-answer", expanded && "is-open")}>
                      <div>
                        <p className="pb-5 pl-12 text-cream/60">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Reveal>
              <div className="rounded-[1.6rem] border border-white/10 bg-panel p-8 lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.18em] text-mint">Летний лагерь</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">470 € за всю неделю</h3>
                <ul className="mt-6 divide-y divide-white/8 border-y border-white/8 text-sm text-cream/65">
                  <li className="py-3">5–10 июля 2026 · дети 7–15 лет</li>
                  <li className="py-3">Проживание и 4-разовое питание</li>
                  <li className="py-3">Автобус от Šarlotes 18a, Rīga</li>
                </ul>
                <Button className="mt-8 w-full py-4" onClick={scrollToForm}>
                  Записаться в лагерь
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CampForm />
      <Lightbox
        items={CAMP_GALLERY}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onIndex={setGalleryIndex}
      />
    </>
  );
}
