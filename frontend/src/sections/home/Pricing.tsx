import { PRICING } from "../../data/home";
import { useHome } from "../../content/useCopy";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { useBooking } from "../../context/BookingContext";
import { useLocale } from "../../i18n/LocaleContext";
import { cn } from "../../lib/cn";

export function Pricing() {
  const { openBooking } = useBooking();
  const copy = useHome();
  const { t } = useLocale();

  return (
    <section id="prices" className="bg-void py-24 lg:py-32" aria-labelledby="pricing-title">
      <div className="container-site">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.pricing.kicker}</p>
          <h2 id="pricing-title" className="mt-3 font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">
            {copy.pricing.title}
          </h2>
          <p className="mt-3 text-cream/60">
            {copy.pricing.audienceBefore}
            <span className="text-mint">{copy.pricing.audienceAccent}</span>
            {copy.pricing.audienceAfter}
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-mint/25 bg-panel">
            <img
              src="/assets/img/events/why-bg.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-35"
            />
            <div className="relative flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div className="flex items-center gap-5">
                <span className="flex size-14 shrink-0 aspect-square items-center justify-center rounded-full bg-mint font-display text-xl text-void">
                  1
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{copy.pricing.trialTitle}</h3>
                  <p className="text-cream/60">
                    {copy.pricing.trialDurationBefore}
                    <span className="text-cream">{copy.pricing.trialDuration}</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <p className="font-display text-5xl font-extrabold text-mint">
                  0<span className="text-2xl">€</span>
                </p>
                <Button onClick={openBooking}>{t.book}</Button>
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PRICING.map((card, i) => {
            const text = copy.pricing.cards[i];
            return (
              <Reveal
                key={card.unit}
                as="li"
                delay={i * 60}
                className={cn(
                  "flex h-full flex-col overflow-hidden rounded-[1.6rem] border bg-panel",
                  card.featured ? "border-mint/50 shadow-glow" : "border-white/8",
                )}
              >
                <div className="relative h-52">
                  <img src={card.photo} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-panel to-transparent" />
                  {text.ribbon ? (
                    <span
                      className={cn(
                        "absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold",
                        card.featured ? "bg-mint text-void" : "bg-lime text-ink",
                      )}
                    >
                      {text.ribbon}
                    </span>
                  ) : null}
                  <div className="absolute bottom-4 left-5">
                    <h3 className="font-display text-2xl">{text.name}</h3>
                    <p className="text-sm text-cream/55">{text.kind}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-cream/70">
                      {text.lessons}
                    </span>
                    {card.discount ? (
                      <span className="rounded-full bg-mint/15 px-3 py-1 text-xs text-mint">{card.discount}</span>
                    ) : null}
                  </div>
                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-cream/40">{t.common.perLesson}</p>
                  <p className="font-display text-3xl font-semibold">{card.unit}</p>
                  <p className="mt-2 text-sm text-cream/55">{text.note}</p>
                  <div className="mt-auto pt-6">
                    <p className="mb-4 text-sm text-cream/50">
                      <strong className="text-xl text-cream">{card.total}</strong> {t.common.passPrice}
                    </p>
                    <Button
                      variant={card.featured ? "primary" : "outline"}
                      className="w-full"
                      onClick={openBooking}
                    >
                      {t.book}
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
