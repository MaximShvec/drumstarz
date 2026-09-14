import { useState } from "react";
import { PERCUSSION_GALLERY, PERCUSSION_PLANS, PERCUSSION_WHY } from "../data/percussions";
import { usePercussions } from "../content/useCopy";
import { useLocale } from "../i18n/LocaleContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { scrollToId } from "../hooks/useLenis";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/media/Photo";
import { Button, ButtonAnchor } from "../components/ui/Button";
import { Lightbox } from "../components/ui/Lightbox";
import { PercussionsForm } from "../sections/percussions/PercussionsForm";
import { cn } from "../lib/cn";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=T%C4%93rbatas%20iela%2076%2C%20R%C4%ABga%2C%20Latvia";

function scrollToForm() {
  scrollToId("percussions-form");
}

export function PercussionsPage() {
  const copy = usePercussions();
  const { t } = useLocale();
  const [openFaq, setOpenFaq] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);

  useDocumentMeta(copy.metaTitle, copy.metaDescription);

  const plans = PERCUSSION_PLANS.map((plan, i) => ({ ...plan, ...copy.plans[i] }));
  const why = PERCUSSION_WHY.map((item, i) => ({ num: item.num, ...copy.why[i] }));
  const gallery = PERCUSSION_GALLERY.map((item, i) => ({ src: item.src, alt: copy.alts[i] ?? item.alt }));

  return (
    <>
      <section className="relative isolate min-h-[88svh] overflow-hidden" aria-labelledby="percussions-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo
            src="/assets/img/percussions/hero-group.webp"
            alt=""
            sizes="100vw"
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.35)_0%,rgba(7,10,8,0.2)_35%,rgba(7,10,8,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,transparent_0%,rgba(7,10,8,0.5)_100%)]" />
        </div>

        <div className="container-site relative z-10 grid min-h-[88svh] items-end gap-10 pb-16 pt-32 xl:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] xl:pb-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-mint/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              {copy.heroKicker}
            </p>
            <h1
              id="percussions-hero-title"
              className="mt-5 max-w-[13ch] font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
            >
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">{copy.heroLead}</p>
            <Button className="mt-8 px-8 py-4" onClick={scrollToForm}>
              {copy.ctaFree}
            </Button>
          </div>

          <aside
            className="min-w-0 w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-void/72 p-6 backdrop-blur-md md:p-7"
            aria-labelledby="percussions-plans-title"
          >
            <p id="percussions-plans-title" className="font-display text-xl font-semibold">
              {copy.plansTitle}
            </p>
            <p className="mt-1 text-sm text-cream/50">{copy.plansLead}</p>
            <ul className="mt-5 divide-y divide-white/8">
              {plans.map((plan) => (
                <li key={plan.name} className="flex items-end justify-between gap-3 py-3.5 first:pt-0">
                  <div className="min-w-0">
                    <p className="flex flex-wrap items-center gap-x-2 gap-y-2 font-display text-lg leading-tight">
                      {plan.name}
                      {plan.ribbon ? (
                        <span
                          className={cn(
                            "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]",
                            plan.featured ? "bg-mint text-void" : "bg-lime text-ink",
                          )}
                        >
                          {plan.ribbon}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-2.5 text-xs text-cream/45">{plan.meta}</p>
                  </div>
                  <p className="shrink-0 text-right font-display text-2xl font-semibold leading-none">
                    {plan.unit}
                    <span className="ml-0.5 text-base text-cream/55">€</span>
                    <span className="mt-1 block text-[10px] font-medium uppercase tracking-[0.14em] text-cream/40">
                      {copy.perLesson}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            <Button className="mt-6 w-full py-3.5" onClick={scrollToForm}>
              {copy.book}
            </Button>
          </aside>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="percussions-intro-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.introKicker}</p>
            <h2
              id="percussions-intro-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.introTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy.introLead}</p>
          </Reveal>
          <Reveal delay={80}>
            <Photo
              src="/assets/img/percussions/circle-djembe.webp"
              alt={copy.introAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
            />
          </Reveal>
        </div>

        <div className="container-site mt-12">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[1.8rem] bg-void p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <p className="font-display text-3xl font-semibold leading-tight sm:text-4xl">{copy.firstFree}</p>
                <p className="mt-3 max-w-xl text-sm text-cream/60">{copy.firstFreeLead}</p>
              </div>
              <Button className="px-8 py-4" onClick={scrollToForm}>
                {copy.book}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="percussions-instruments-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.instrumentsKicker}</p>
            <h2
              id="percussions-instruments-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.instrumentsTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/65">{copy.instrumentsLead}</p>
            <ol className="mt-10 divide-y divide-white/8">
              {copy.instruments.map((name, i) => (
                <li key={name} className="flex items-baseline gap-5 py-4">
                  <span className="font-display text-sm tracking-[0.22em] text-mint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl font-semibold">{name}</span>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={80}>
            <Photo
              src="/assets/img/percussions/ensemble-instruments.webp"
              alt={copy.ensembleAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-void pb-24 lg:pb-32" aria-labelledby="percussions-gallery-title">
        <div className="container-site">
          <Reveal>
            <h2
              id="percussions-gallery-title"
              className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl"
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
                  i === 3 && "col-span-2 h-44 md:col-span-8 md:h-[210px]",
                  i === 4 && "col-span-2 h-40 md:col-span-4 md:h-[210px]",
                )}
              >
                <button
                  type="button"
                  className="relative block h-full w-full cursor-pointer"
                  onClick={() => setGalleryIndex(i)}
                  aria-label={`${t.common.openPhoto}: ${item.alt}`}
                >
                  <Photo
                    src={item.src}
                    alt=""
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="percussions-why-title">
        <div className="container-site">
          <Reveal>
            <h2
              id="percussions-why-title"
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
                className={cn("border-t border-ink/10 py-8", i % 2 ? "md:translate-y-6" : "")}
              >
                <span className="font-display text-sm tracking-[0.22em] text-mint-dim">{item.num}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 max-w-md text-ink-soft">{item.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="percussions-schedule-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.scheduleKicker}</p>
            <h2
              id="percussions-schedule-title"
              className="mt-4 font-display text-5xl font-extrabold leading-[0.9] tracking-[-0.03em] sm:text-7xl"
            >
              {copy.scheduleTitle}
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-cream/40">{copy.duration}</dt>
              <dd className="mt-2 font-display text-3xl font-semibold">{copy.durationValue}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-cream/40">{copy.address}</dt>
              <dd className="mt-2 font-display text-3xl font-semibold">Rīga, Tērbatas iela 76</dd>
            </div>
          </dl>
          <p className="mt-6 text-cream/55">{copy.parking}</p>
          <ButtonAnchor href={MAP_URL} target="_blank" rel="noopener noreferrer" className="mt-8 px-7 py-3.5">
            {copy.mapCta}
          </ButtonAnchor>
          <Reveal className="mt-14">
            <p className="rounded-[1.6rem] border border-white/8 bg-white/4 px-8 py-8 font-display text-2xl font-semibold leading-snug text-cream/90 sm:text-3xl">
              {copy.switchOff}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="percussions-faq-title">
        <div className="container-site">
          <Reveal>
            <h2 id="percussions-faq-title" className="font-display text-4xl font-extrabold sm:text-5xl">
              {copy.faqTitle}
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
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
                        <span className="font-display text-lg font-medium leading-snug">{item.q}</span>
                        <span className="mt-1 text-mint-dim" aria-hidden="true">
                          {expanded ? "—" : "+"}
                        </span>
                      </button>
                      <div className={cn("faq-answer", expanded && "is-open")}>
                        <div>
                          <p className="pb-5 text-ink-soft">{item.a}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Reveal>
              <div className="rounded-[1.6rem] bg-void p-8 text-cream lg:sticky lg:top-28">
                <h3 className="font-display text-2xl font-semibold leading-tight">{copy.cardTitle}</h3>
                <ul className="mt-6 space-y-3 text-sm text-cream/65">
                  {copy.cardLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Button className="mt-8 w-full py-4" onClick={scrollToForm}>
                  {copy.ctaFreeShort}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <PercussionsForm />
      <Lightbox
        items={gallery}
        index={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onIndex={setGalleryIndex}
      />
    </>
  );
}
