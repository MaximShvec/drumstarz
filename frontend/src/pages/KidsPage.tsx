import { useState } from "react";
import { KIDS_GALLERY, KIDS_INCLUDED, KIDS_PROGRAM, KIDS_WHY } from "../data/kids";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { scrollToId } from "../hooks/useLenis";
import { Reveal } from "../components/Reveal";
import { Button } from "../components/ui/Button";
import { Lightbox } from "../components/ui/Lightbox";
import { KidsForm } from "../sections/kids/KidsForm";
import { cn } from "../lib/cn";

function scrollToForm() {
  scrollToId("kids-booking");
}

export function KidsPage() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useDocumentMeta(
    "Детский праздник у барабанной установки — DRUMSTARZ",
    "Детский день рождения на настоящей сцене DRUMSTARZ в Риге: 2,5 часа с профессиональным барабанщиком, сцена, инструменты и угощения включены. Запись на бесплатную консультацию.",
  );

  return (
    <>
      <section className="relative isolate min-h-[92svh]" aria-labelledby="kids-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/assets/img/kids/hero-child-drummer.jpg"
            alt=""
            className="h-full w-full object-cover object-[70%_top]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.45)_0%,rgba(7,10,8,0.18)_40%,rgba(7,10,8,0.92)_100%)]" />
        </div>

        <div className="container-site relative z-10 grid min-h-[92svh] items-end gap-10 pb-16 pt-32 xl:grid-cols-[minmax(0,1fr)_minmax(19rem,23rem)] xl:pb-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-mint/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              Drum Kids · День рождения
            </p>
            <h1
              id="kids-hero-title"
              className="mt-5 max-w-[12ch] break-words font-display text-[2.65rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
            >
              Детский праздник за барабанной установкой
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">
              Впервые в городе: настоящий андерграунд для детей и праздник на профессиональной сцене.
            </p>
          </div>

          <aside
            className="min-w-0 w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-void/72 p-6 backdrop-blur-md md:p-7"
            aria-label="Условия праздника"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">Праздник под ключ</p>
            <p className="mt-4 font-display text-4xl font-extrabold leading-none">2,5 часа</p>
            <p className="mt-2 text-sm text-cream/50">От встречи гостей до торта и финальных фото.</p>
            <dl className="mt-6 divide-y divide-white/8 border-y border-white/8">
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-sm text-cream/45">/ Гость</dt>
                <dd className="font-display text-2xl font-semibold">30 €</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-sm text-cream/45">Минимум</dt>
                <dd className="font-display text-2xl font-semibold">300 €</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-sm text-cream/45">Гостей</dt>
                <dd className="font-display text-2xl font-semibold">До 20</dd>
              </div>
            </dl>
            <p className="mt-4 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/40">
              <span className="rounded-full border border-white/12 px-3 py-1">Сцена</span>
              <span className="rounded-full border border-white/12 px-3 py-1">Ритм</span>
              <span className="rounded-full border border-white/12 px-3 py-1">Друзья</span>
            </p>
            <Button className="mt-6 w-full py-3.5" onClick={scrollToForm}>
              Забронировать дату
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="kids-concept-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">Настоящий музыкальный опыт</p>
            <h2
              id="kids-concept-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              Ребёнок — главная звезда
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              На настоящей сцене ребёнок становится барабанщиком и создаёт ритмическое сопровождение к любимой песне.
            </p>
            <p className="mt-4 max-w-xl text-ink-soft">
              Праздник ведут профессиональные музыканты-барабанщики. Специальная подготовка не нужна: барабаны
              откликаются сразу, а первый уверенный ритм получается уже в начале программы.
            </p>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug sm:text-3xl">
              Любимая песня + настоящие барабаны
            </p>
          </Reveal>
          <Reveal delay={80}>
            <img
              src="/assets/img/kids/concept-group-jam.jpg"
              alt="Дети играют на барабанной установке на сцене DRUMSTARZ"
              className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="kids-program-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">2,5 часа в одном ритме</p>
            <h2
              id="kids-program-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              Как проходит праздник
            </h2>
          </Reveal>
          <ol className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {KIDS_PROGRAM.map((step, i) => (
              <Reveal key={step.num} as="li" delay={i * 50} className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr]">
                <div>
                  <span className="font-display text-sm tracking-[0.22em] text-mint">{step.num}</span>
                  <p className="mt-2 text-sm text-cream/45">{step.time}</p>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-cream/60">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl font-display text-2xl font-semibold leading-snug text-cream/90 sm:text-3xl">
            Можно прийти без опыта — инструменты и программа уже готовы.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="kids-pricing-title">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">Простая и прозрачная цена</p>
            <h2
              id="kids-pricing-title"
              className="mt-4 max-w-[10ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              Всё для праздника
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">
              Одна понятная стоимость — без скрытых доплат за сцену, инструменты или работу музыканта.
            </p>
            <p className="mt-8 font-display text-6xl font-extrabold leading-none tracking-[-0.04em] sm:text-7xl">
              30
              <span className="ml-1 text-3xl">€</span>
              <span className="ml-2 align-middle text-lg font-medium tracking-[0.08em] text-ink/45">/ Гость</span>
            </p>
            <p className="mt-5 flex flex-wrap gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/45">
              <span className="rounded-full border border-ink/12 px-3 py-1">2,5 часа под ключ</span>
              <span className="rounded-full border border-ink/12 px-3 py-1">Без доплат</span>
            </p>
            <p className="mt-8 text-sm text-ink/45">Вам остаётся выбрать дату и собрать друзей.</p>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">В праздник уже включено</p>
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {KIDS_INCLUDED.map((item) => (
                <li key={item.num} className="flex items-start gap-5 py-5">
                  <span className="font-display text-sm tracking-[0.22em] text-mint-dim">{item.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm uppercase tracking-[0.12em] text-ink/40">
              Минимум 300 € · До 20 гостей · Удобное расположение · Бесплатная парковка
            </p>
            <Button className="mt-8 px-8 py-4" onClick={scrollToForm}>
              Забронировать дату
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="kids-benefits-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Не просто громко — по-настоящему полезно</p>
            <h2
              id="kids-benefits-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              Почему детям это нравится
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-cream/40">05 причин · один общий ритм</p>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <article className="relative isolate overflow-hidden rounded-[1.6rem]">
                <img
                  src="/assets/img/kids/gallery-main-three-girls.jpg"
                  alt="Дети с барабанными палочками готовятся к выступлению"
                  className="h-full min-h-[28rem] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <span className="font-display text-sm tracking-[0.22em] text-mint">01</span>
                  <h3 className="mt-3 font-display text-3xl font-semibold">{KIDS_WHY[0].title}</h3>
                  <p className="mt-3 max-w-md text-cream/70">{KIDS_WHY[0].text}</p>
                </div>
              </article>
            </Reveal>
            <ul>
              {KIDS_WHY.slice(1).map((item, i) => (
                <Reveal key={item.num} as="li" delay={i * 50} className="border-t border-white/8 py-6 last:border-b">
                  <span className="font-display text-sm tracking-[0.22em] text-mint">{item.num}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-2 max-w-md text-cream/55">{item.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-void pb-24 lg:pb-32" aria-labelledby="kids-gallery-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Как это выглядит</p>
            <h2
              id="kids-gallery-title"
              className="mt-4 max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
            >
              Настоящая сцена. Настоящие эмоции.
            </h2>
            <p className="mt-4 max-w-xl text-cream/55">
              Без постановочных декораций — дети, музыка и момент, который хочется пересматривать.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            {KIDS_GALLERY.map((item, i) => (
              <li
                key={item.src}
                className={cn(
                  "group overflow-hidden rounded-[1.2rem]",
                  i === 0 && "col-span-2 h-56 md:col-span-7 md:row-span-2 md:h-[480px]",
                  i === 1 && "h-40 md:col-span-5 md:h-[232px]",
                  i === 2 && "h-40 md:col-span-5 md:h-[232px]",
                  i === 3 && "col-span-2 h-44 md:col-span-8 md:h-[210px]",
                  i === 4 && "col-span-2 h-40 md:col-span-4 md:h-[210px]",
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

      <KidsForm />
      <Lightbox
        items={KIDS_GALLERY}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onIndex={setGalleryIndex}
      />
    </>
  );
}
