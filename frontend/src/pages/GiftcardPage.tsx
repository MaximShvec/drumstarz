import { useState } from "react";
import { GIFTCARD_EXPERIENCE, GIFTCARD_PLANS, GIFTCARD_STEPS, type GiftcardPlanId } from "../data/giftcard";
import { useGiftcard } from "../content/useCopy";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { scrollToId } from "../hooks/useLenis";
import { Reveal } from "../components/Reveal";
import { Photo } from "../components/media/Photo";
import { Button } from "../components/ui/Button";
import { GiftcardForm } from "../sections/giftcard/GiftcardForm";
import { cn } from "../lib/cn";

function scrollToForm() {
  scrollToId("giftcard-form");
}

export function GiftcardPage() {
  const copy = useGiftcard();
  const [openFaq, setOpenFaq] = useState(0);
  const [plan, setPlan] = useState<GiftcardPlanId>("4-lessons");

  useDocumentMeta(copy.metaTitle, copy.metaDescription);

  const plans = GIFTCARD_PLANS.map((item) => ({ ...item, ...copy.plans[item.id] }));
  const experience = GIFTCARD_EXPERIENCE.map((step, i) => ({ num: step.num, ...copy.experience[i] }));
  const steps = GIFTCARD_STEPS.map((step, i) => ({ num: step.num, ...copy.steps[i] }));

  return (
    <>
      <section className="relative isolate min-h-[88svh]" aria-labelledby="giftcard-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <Photo
            src="/assets/img/giftcard/hero-drummer.webp"
            alt=""
            sizes="100vw"
            fetchPriority="high"
            className="h-full w-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.42)_0%,rgba(7,10,8,0.2)_40%,rgba(7,10,8,0.92)_100%)]" />
        </div>

        <div className="container-site relative z-10 grid min-h-[88svh] items-end gap-10 pb-16 pt-32 xl:grid-cols-[minmax(0,1fr)_minmax(18rem,22rem)] xl:pb-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-full border border-mint/45 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-mint">
              {copy.heroKicker}
            </p>
            <h1
              id="giftcard-hero-title"
              className="mt-5 max-w-[11ch] break-words font-display text-[2.65rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
            >
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/70">{copy.heroLead}</p>
            <Button className="mt-8 px-8 py-4" onClick={scrollToForm}>
              {copy.choose}
            </Button>
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-cream/40">{copy.pricesLine}</p>
            <p className="mt-2 text-sm text-cream/50">{copy.noExperience}</p>
          </div>

          <Reveal delay={80}>
            <Photo
              src="/assets/img/giftcard/real-cert.webp"
              alt={copy.certAlt}
              sizes="(min-width: 1280px) 22rem, (min-width: 768px) 40vw, 100vw"
              className="w-full max-w-sm rounded-[1.4rem] object-cover shadow-[0_24px_60px_-20px_rgba(0,0,0,0.65)] xl:max-w-none"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="giftcard-emotion-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.emotionKicker}</p>
            <h2
              id="giftcard-emotion-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.emotionTitle}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{copy.emotionLead}</p>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug sm:text-3xl">{copy.emotionPunch}</p>
          </Reveal>
          <Reveal delay={80} className="relative">
            <Photo
              src="/assets/img/giftcard/emotion-studio.webp"
              alt={copy.emotionAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
            />
            <p className="absolute bottom-5 left-5 rounded-full bg-void/80 px-4 py-2 text-sm text-cream backdrop-blur-sm">
              <span className="font-display font-semibold">{copy.lessonBadge}</span>
              <span className="ml-2 text-cream/55">{copy.lessonNote}</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="giftcard-pricing-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.pricingKicker}</p>
            <h2
              id="giftcard-pricing-title"
              className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.pricingTitle}
            </h2>
            <p className="mt-4 max-w-xl text-cream/60">{copy.pricingLead}</p>
          </Reveal>

          <ul className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {plans.map((item, i) => (
              <Reveal key={item.id} as="li" delay={i * 60}>
                <button
                  type="button"
                  className="grid w-full cursor-pointer gap-8 py-10 text-left md:grid-cols-[minmax(0,1fr)_16rem] md:items-center"
                  onClick={() => {
                    setPlan(item.id);
                    scrollToForm();
                  }}
                >
                  <div className="flex gap-6">
                    <span className="font-display text-sm tracking-[0.22em] text-mint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-2xl font-semibold sm:text-3xl">{item.title}</span>
                        {item.ribbon ? (
                          <span className="rounded-full bg-lime px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink">
                            {item.ribbon}
                          </span>
                        ) : null}
                      </p>
                      <p className="mt-2 text-sm text-cream/45">{item.meta}</p>
                      <p className="mt-4 max-w-xl text-cream/65">{item.copy}</p>
                      <p className="mt-5 font-display text-5xl font-extrabold leading-none tracking-[-0.04em]">
                        {item.price}
                        <span className="ml-1 text-2xl">€</span>
                      </p>
                    </div>
                  </div>
                  <Photo src={item.photo} alt="" sizes="(min-width: 768px) 16rem, 100vw" loading="lazy" className="h-44 w-full rounded-[1.2rem] object-cover md:h-52" />
                </button>
              </Reveal>
            ))}
          </ul>

          <Button className="mt-10 px-8 py-4" onClick={scrollToForm}>
            {copy.order}
          </Button>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="giftcard-experience-title">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.expKicker}</p>
            <h2
              id="giftcard-experience-title"
              className="mt-4 max-w-[12ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.expTitle}
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">{copy.expLead}</p>
            <ol className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
              {experience.map((step) => (
                <li key={step.num} className="flex gap-5 py-5">
                  <span className="font-display text-sm tracking-[0.22em] text-mint-dim">{step.num}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold">{step.title}</h3>
                    <p className="mt-1 text-sm text-ink-soft">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-8 font-display text-2xl font-semibold leading-snug">{copy.expPunch}</p>
          </Reveal>
          <Reveal delay={80}>
            <Photo
              src="/assets/img/giftcard/experience-main.webp"
              alt={copy.expAlt}
              sizes="(min-width: 1024px) 50vw, 100vw"
              loading="lazy"
              className="h-full min-h-80 w-full rounded-[1.6rem] object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-void py-24 lg:py-32" aria-labelledby="giftcard-steps-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.stepsKicker}</p>
            <h2
              id="giftcard-steps-title"
              className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl"
            >
              {copy.stepsTitle}
            </h2>
            <p className="mt-4 max-w-xl text-cream/55">{copy.stepsLead}</p>
          </Reveal>
          <ol className="mt-14 divide-y divide-white/8 border-y border-white/8">
            {steps.map((step, i) => (
              <Reveal key={step.num} as="li" delay={i * 50} className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr]">
                <span className="font-display text-sm tracking-[0.22em] text-mint">{step.num}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">{step.title}</h3>
                  <p className="mt-3 max-w-2xl text-cream/60">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <p className="mt-10 text-sm uppercase tracking-[0.16em] text-cream/40">{copy.stepsFor}</p>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="giftcard-faq-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">{copy.faqKicker}</p>
            <h2
              id="giftcard-faq-title"
              className="mt-4 max-w-[14ch] font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-5xl"
            >
              {copy.faqTitle}
            </h2>
            <p className="mt-4 max-w-xl text-ink-soft">{copy.faqLead}</p>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
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
                      <span className="flex items-start gap-4">
                        <span className="font-display text-sm tracking-[0.22em] text-mint-dim">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-lg font-medium leading-snug">{item.q}</span>
                      </span>
                      <span className="mt-1 text-mint-dim" aria-hidden="true">
                        {expanded ? "—" : "+"}
                      </span>
                    </button>
                    <div className={cn("faq-answer", expanded && "is-open")}>
                      <div>
                        <p className="pb-5 pl-12 text-ink-soft">{item.a}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Reveal>
              <div className="rounded-[1.6rem] bg-void p-8 text-cream lg:sticky lg:top-28">
                <p className="text-xs uppercase tracking-[0.18em] text-mint">{copy.cardKicker}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{copy.cardTitle}</h3>
                <p className="mt-3 text-sm text-cream/65">{copy.cardLead}</p>
                <dl className="mt-6 divide-y divide-white/8 border-y border-white/8">
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-cream/45">{copy.lesson1}</dt>
                    <dd className="font-display text-2xl font-semibold">35 €</dd>
                  </div>
                  <div className="flex items-baseline justify-between py-3">
                    <dt className="text-sm text-cream/45">{copy.lesson4}</dt>
                    <dd className="font-display text-2xl font-semibold">115 €</dd>
                  </div>
                </dl>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/40">{copy.noExpChip}</p>
                <Button className="mt-8 w-full py-4" onClick={scrollToForm}>
                  {copy.order}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GiftcardForm plan={plan} onPlan={setPlan} />
    </>
  );
}
