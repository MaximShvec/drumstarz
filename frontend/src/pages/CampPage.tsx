import { useState } from "react";
import { CAMP_GALLERY, CAMP_MAP_URL, CAMP_YOUTUBE_ID } from "../data/camp";
import { useCamp } from "../content/useCopy";
import { useLocale } from "../i18n/LocaleContext";
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
  const copy = useCamp();
  const { t } = useLocale();
  const [openDay, setOpenDay] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useDocumentMeta(copy.metaTitle, copy.metaDescription);
  const gallery = CAMP_GALLERY.map((item, i) => ({ src: item.src, alt: copy.alts[i] ?? item.alt }));

  return (
    <>
      <section className="relative isolate min-h-[92svh]" aria-labelledby="camp-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/assets/img/camp/hero-outdoor-stage.webp"
            alt=""
            width={1600}
            height={900}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.45)_0%,rgba(7,10,8,0.18)_40%,rgba(7,10,8,0.92)_100%)]" />
        </div>

        <div className="container-site relative z-10 grid min-h-[92svh] items-end gap-10 pb-16 pt-32 xl:grid-cols-[minmax(0,1fr)_minmax(19rem,23rem)] xl:pb-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-mint/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              {copy.heroKicker}
            </p>
            <h1
              id="camp-hero-title"
              className="mt-5 max-w-[12ch] break-words font-display text-[2.65rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
            >
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">{copy.heroLead}</p>
            <Button className="mt-8 px-8 py-4" onClick={scrollToForm}>
              {copy.cta}
            </Button>
          </div>

          <aside
            className="min-w-0 w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-void/72 p-6 backdrop-blur-md md:p-7"
            aria-labelledby="camp-facts-title"
          >
            <p id="camp-facts-title" className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              {copy.factsTitle}
            </p>
            <dl className="mt-6 divide-y divide-white/8 border-y border-white/8">
              {(
                [
                  [copy.factLabels.dates, copy.facts.dates],
                  [copy.factLabels.age, copy.facts.age],
                  [copy.factLabels.location, copy.facts.location],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-3 py-3">
                  <dt className="text-sm text-cream/45">{label}</dt>
                  <dd className="text-right font-display text-lg font-semibold leading-tight">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-display text-5xl font-extrabold leading-none tracking-[-0.04em]">
              470
              <span className="ml-1 text-2xl">€</span>
            </p>
            <p className="mt-2 text-sm text-cream/50">{copy.perStay}</p>
            <Button className="mt-6 w-full py-3.5" onClick={scrollToForm}>
              {copy.cta}
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="camp-intro-title">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.introKicker}</p>
              <h2
                id="camp-intro-title"
                className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
              >
                {copy.introTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy.introP1}</p>
              <p className="mt-4 max-w-xl text-ink-soft">{copy.introP2}</p>
            </Reveal>
            <Reveal delay={80}>
              <img
                src="/assets/img/camp/concept-girl-drummer.webp"
                alt={copy.introAlt}
                className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col gap-6 rounded-[1.6rem] bg-void p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="font-display text-2xl font-semibold sm:text-3xl">{copy.experienceTitle}</p>
                <p className="mt-3 max-w-2xl text-cream/65">{copy.experienceLead}</p>
              </div>
              <Button className="shrink-0 px-8 py-4" onClick={scrollToForm}>
                {t.book}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="camp-program-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.programKicker}</p>
            <h2
              id="camp-program-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.programTitle}
            </h2>
            <p className="mt-4 max-w-xl text-cream/60">{copy.programLead}</p>
          </Reveal>

          <ul className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {copy.days.map((day, i) => {
              const expanded = openDay === i;
              return (
                <li key={day.day}>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-start justify-between gap-4 py-6 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpenDay(expanded ? -1 : i)}
                  >
                    <span className="flex min-w-0 items-start gap-5">
                      <span className="font-display text-sm tracking-[0.22em] text-mint">{String(i + 1).padStart(2, "0")}</span>
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
                          <li key={`${i}-${item.time}-${item.text}`} className="grid gap-2 py-3 sm:grid-cols-[4.5rem_1fr]">
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
          <p className="mt-8 text-sm text-cream/40">{copy.weatherNote}</p>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="camp-video-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.videoKicker}</p>
            <h2
              id="camp-video-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.videoTitle}
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">{copy.videoLead}</p>
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <YoutubePlayer
              id={CAMP_YOUTUBE_ID}
              title={copy.videoAria}
              className="aspect-video w-full rounded-[1.6rem]"
              poster="/assets/img/camp/hero-outdoor-stage.webp"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="camp-gallery-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.galleryKicker}</p>
            <h2
              id="camp-gallery-title"
              className="mt-4 max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
            >
              {copy.galleryTitle}
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-4">
            {gallery.map((item, i) => (
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
                  aria-label={`${t.common.openPhoto}: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.locationKicker}</p>
            <h2
              id="camp-location-title"
              className="mt-4 max-w-[10ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.locationTitle}
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink-soft">{copy.locationLead}</p>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug">{copy.locationPitch}</p>
            <ButtonAnchor
              href={CAMP_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 px-8 py-4"
            >
              {copy.mapCta}
            </ButtonAnchor>
          </Reveal>

          <Reveal delay={80}>
            <dl className="divide-y divide-ink/10 border-y border-ink/10">
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">{copy.locLabels.dates}</dt>
                <dd className="font-display text-xl font-semibold">{copy.locValues.dates}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">{copy.locLabels.age}</dt>
                <dd className="font-display text-xl font-semibold">{copy.locValues.age}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">{copy.locLabels.meals}</dt>
                <dd className="font-display text-xl font-semibold">{copy.locValues.meals}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-5">
                <dt className="text-sm uppercase tracking-[0.16em] text-ink/40">{copy.locLabels.address}</dt>
                <dd className="max-w-[18ch] text-right font-display text-xl font-semibold leading-snug">
                  «Turbas», Turkalne, Ogres nov., LV-5015
                </dd>
              </div>
            </dl>
            <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {copy.included.map((item, i) => (
                <li key={item.title} className="flex items-start gap-5 py-5">
                  <span className="font-display text-sm tracking-[0.22em] text-mint-dim">{String(i + 1).padStart(2, "0")}</span>
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.faqKicker}</p>
            <h2
              id="camp-faq-title"
              className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
            >
              {copy.faqTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <ul className="divide-y divide-white/8 border-y border-white/8">
              {copy.faq.map((item, i) => {
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
                <p className="text-xs uppercase tracking-[0.18em] text-mint">{copy.cardKicker}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{copy.cardTitle}</h3>
                <ul className="mt-6 divide-y divide-white/8 border-y border-white/8 text-sm text-cream/65">
                  {copy.cardLines.map((line) => (
                    <li key={line} className="py-3">
                      {line}
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full py-4" onClick={scrollToForm}>
                  {copy.cta}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CampForm />
      <Lightbox
        items={gallery}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onIndex={setGalleryIndex}
      />
    </>
  );
}
