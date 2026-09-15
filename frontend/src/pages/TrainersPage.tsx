import { TRAINERS } from "../data/trainers";
import { useTrainersCopy } from "../content/useCopy";
import { useBooking } from "../context/BookingContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/media/Photo";
import { Button } from "../components/ui/Button";
import { TrainerCard } from "../sections/trainers/TrainerCard";

export function TrainersPage() {
  const { openBooking } = useBooking();
  const copy = useTrainersCopy();

  useDocumentMeta(copy.metaTitle, copy.metaDescription);

  return (
    <>
      <section className="relative isolate min-h-[78svh] overflow-hidden" aria-labelledby="trainers-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo
            src="/assets/images/contacts-hero-drums-backdrop.webp"
            alt=""
            sizes="100vw"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.4)_0%,rgba(7,10,8,0.25)_40%,rgba(7,10,8,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,8,0.45)_100%)]" />
        </div>
        <div className="container-site relative z-10 flex min-h-[78svh] flex-col justify-end pb-16 pt-32 lg:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.kicker}</p>
          <h1
            id="trainers-hero-title"
            className="mt-4 break-words font-display text-[1.9rem] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
          >
            {copy.title}
            <br />
            {copy.titleLine2}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">{copy.lead}</p>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="trainers-intro-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.introKicker}</p>
            <h2
              id="trainers-intro-title"
              className="mt-4 break-words font-display text-[2.15rem] font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.introTitle}
              <br />
              {copy.introTitleLine2}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy.introBody}</p>
          </Reveal>
          <Reveal delay={80}>
            <Photo
              src="/assets/img/section3/why-drumstarz-bg.webp"
              alt={copy.introAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-16 lg:py-24" aria-labelledby="trainers-list-title">
        <div className="container-site">
          <h2 id="trainers-list-title" className="sr-only">
            {copy.listTitle}
          </h2>
          <ul className="divide-y divide-white/8">
            {TRAINERS.map((trainer, i) => (
              <Reveal key={trainer.id} as="li" delay={Math.min(i * 30, 120)}>
                <TrainerCard trainer={trainer} index={i} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-void pb-24 lg:pb-32" aria-labelledby="trainers-cta-title">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[1.8rem] border border-mint/25 bg-panel p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h2 id="trainers-cta-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {copy.ctaTitle}
                  <br />
                  {copy.ctaTitleLine2}
                </h2>
                <p className="mt-3 max-w-lg text-sm text-cream/60">{copy.ctaLead}</p>
              </div>
              <Button className="px-8 py-4" onClick={openBooking}>
                {copy.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
