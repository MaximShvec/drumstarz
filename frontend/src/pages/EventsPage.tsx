import { useState } from "react";
import { EVENTS_GALLERY, EVENTS_TIMELINE, EVENTS_WHY, EVENTS_YOUTUBE_ID } from "../data/events";
import { useEvents } from "../content/useCopy";
import { useLocale } from "../i18n/LocaleContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { scrollToId } from "../hooks/useLenis";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/media/Photo";
import { YoutubePlayer } from "../components/media/YoutubePlayer";
import { Button } from "../components/ui/Button";
import { Lightbox } from "../components/ui/Lightbox";
import { EventsForm } from "../sections/events/EventsForm";
import { cn } from "../lib/cn";

function scrollToForm() {
  scrollToId("booking-events");
}

export function EventsPage() {
  const copy = useEvents();
  const { t } = useLocale();
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useDocumentMeta(copy.metaTitle, copy.metaDescription);

  const timeline = EVENTS_TIMELINE.map((step, i) => ({ ...step, ...copy.timeline[i] }));
  const why = EVENTS_WHY.map((item, i) => ({ num: item.num, ...copy.why[i] }));
  const gallery = EVENTS_GALLERY.map((item, i) => ({ src: item.src, alt: copy.alts[i] ?? item.alt }));

  return (
    <>
      <section className="relative isolate min-h-[88svh] overflow-hidden lg:h-dvh" aria-labelledby="events-hero-title">
        <div className="absolute inset-0 bg-void" aria-hidden="true">
          <img
            src="/assets/img/events/hero-drummer.webp"
            alt=""
            width={962}
            height={650}
            fetchPriority="high"
            decoding="async"
            className="absolute top-1/2 right-0 h-[650px] w-[962px] max-w-none -translate-y-1/2"
            style={{
              maskImage:
                "linear-gradient(90deg, transparent 0%, #000 30%, #000 74%, transparent 100%), linear-gradient(180deg, transparent 0%, #000 16%, #000 84%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, #000 30%, #000 74%, transparent 100%), linear-gradient(180deg, transparent 0%, #000 16%, #000 84%, transparent 100%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#070A08_0%,rgba(7,10,8,0.72)_22%,rgba(7,10,8,0)_48%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.35)_0%,transparent_16%,transparent_70%,rgba(7,10,8,0.88)_100%)]" />
        </div>

        <div className="container-site relative z-10 grid min-h-[88svh] items-end gap-10 pb-16 pt-32 lg:h-dvh xl:grid-cols-[minmax(0,1fr)_minmax(19rem,23rem)] xl:pb-20">
          <div className="min-w-0 max-w-3xl">
            <p className="inline-flex rounded-full border border-mint/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              {copy.heroKicker}
            </p>
            <h1
              id="events-hero-title"
              className="mt-5 max-w-[14ch] break-words font-display text-[2.65rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
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
            aria-label={copy.priceTitle}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-mint">{copy.priceLabel}</p>
            <p className="mt-4 font-display text-4xl font-extrabold leading-none">
              30 €
              <span className="ml-2 text-base font-medium tracking-normal text-cream/50">{copy.perPerson}</span>
            </p>
            <dl className="mt-6 divide-y divide-white/8 border-y border-white/8">
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-sm text-cream/45">{copy.min}</dt>
                <dd className="font-display text-2xl font-semibold">300 €</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-sm text-cream/45">{copy.guests}</dt>
                <dd className="font-display text-2xl font-semibold">{copy.guestsValue}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-3 py-3">
                <dt className="text-sm text-cream/45">{copy.duration}</dt>
                <dd className="font-display text-2xl font-semibold">{copy.durationValue}</dd>
              </div>
            </dl>
            <Button className="mt-6 w-full py-3.5" onClick={scrollToForm}>
              {copy.book}
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="showcase-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2
              id="showcase-title"
              className="max-w-[11ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.showcaseTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy.showcaseLead}</p>
          </Reveal>
          <Reveal delay={80}>
            <YoutubePlayer
              id={EVENTS_YOUTUBE_ID}
              title={copy.videoTitle}
              className="aspect-video w-full rounded-[1.6rem]"
            />
          </Reveal>
        </div>

        <div className="container-site mt-12">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[1.8rem] bg-void p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{copy.bandTitle}</p>
                <p className="mt-3 max-w-xl text-sm text-cream/60">{copy.bandLead}</p>
              </div>
              <Button className="px-8 py-4" onClick={scrollToForm}>
                {copy.book}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 lg:py-32" aria-labelledby="timeline-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo src="/assets/img/events/why-bg.webp" alt="" sizes="100vw" loading="lazy" className="h-full w-full object-contain" />
          <div className="absolute inset-0 bg-void/82" />
        </div>
        <div className="container-site relative z-10">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.timelineKicker}</p>
            <h2
              id="timeline-title"
              className="mt-4 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-6xl"
            >
              {copy.timelineTitle}
            </h2>
          </Reveal>
          <ol className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {timeline.map((step, i) => (
              <Reveal key={step.mins} as="li" delay={i * 50} className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr]">
                <span className="font-display text-sm tracking-[0.22em] text-mint">{step.time}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-cream/60">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 max-w-2xl font-display text-2xl font-semibold leading-snug text-cream/90 sm:text-3xl">
            {copy.timelineClose}
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="pricing-events-title">
        <div className="container-site grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2
              id="pricing-events-title"
              className="max-w-[10ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.priceTitle}
            </h2>
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-ink/40">{copy.priceLabel}</p>
            <p className="mt-3 font-display text-6xl font-extrabold leading-none tracking-[-0.04em] sm:text-7xl">
              30
              <span className="ml-1 text-3xl">€</span>
              <span className="ml-2 align-middle text-lg font-medium tracking-[0.08em] text-ink/45">{copy.perPerson}</span>
            </p>
            <p className="mt-6 max-w-md text-ink-soft">{copy.priceLead}</p>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink/40">{copy.min}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">300 €</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink/40">{copy.guests}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">{copy.guestsValue}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink/40">{copy.duration}</dt>
                <dd className="mt-2 font-display text-2xl font-semibold">{copy.durationValue}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={80}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.includedKicker}</p>
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {copy.included.map((item, i) => (
                <li key={item} className="flex items-start gap-5 py-5">
                  <span className="font-display text-sm tracking-[0.22em] text-mint-dim">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl font-semibold leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 px-8 py-4" onClick={scrollToForm}>
              {copy.book}
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 lg:py-32" aria-labelledby="why-drums-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo src="/assets/img/events/why-bg.webp" alt="" sizes="100vw" loading="lazy" className="h-full w-full object-contain" />
          <div className="absolute inset-0 bg-void/84" />
        </div>
        <div className="container-site relative z-10">
          <Reveal>
            <h2
              id="why-drums-title"
              className="max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.whyTitle}
            </h2>
          </Reveal>
          <ul className="mt-16 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {why.map((item, i) => (
              <Reveal
                key={item.num}
                as="li"
                delay={i * 60}
                className={cn("border-t border-white/10 py-8", i === 0 && "md:col-span-2", i % 2 ? "md:translate-y-4" : "")}
              >
                <span className="font-display text-sm tracking-[0.22em] text-mint">{item.num}</span>
                {item.tag ? (
                  <span className="ml-3 rounded-full border border-mint/35 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-mint">
                    {item.tag}
                  </span>
                ) : null}
                <h3 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{item.title}</h3>
                <p className="mt-3 max-w-xl text-cream/60">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="gallery-title">
        <div className="container-site">
          <Reveal>
            <h2 id="gallery-title" className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
              {copy.galleryTitle}
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4">
            {gallery.map((item, i) => {
              const portrait = i >= 6;
              return (
                <li
                  key={item.src}
                  className={cn("overflow-hidden rounded-[1.2rem]", portrait ? "md:col-span-3" : "md:col-span-2")}
                >
                  <button
                    type="button"
                    className={cn("relative block w-full cursor-pointer", portrait ? "aspect-[3/4]" : "aspect-[3/2]")}
                    onClick={() => setGalleryIndex(i)}
                    aria-label={`${t.common.openPhoto}: ${item.alt}`}
                  >
                    <Photo
                      src={item.src}
                      alt=""
                      sizes="(min-width: 768px) 33vw, 50vw"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <EventsForm />
      <Lightbox
        items={gallery}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onIndex={setGalleryIndex}
      />
    </>
  );
}
