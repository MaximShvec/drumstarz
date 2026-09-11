import { TRIAL_STEPS } from "../../data/home";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { useBooking } from "../../context/BookingContext";

export function TrialSteps() {
  const { openBooking } = useBooking();

  return (
    <section id="trial-steps" className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="trial-steps-title">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">
                Как проходит пробное занятие
              </p>
              <h2 id="trial-steps-title" className="mt-3 font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
                От двери студии
                <br />
                до первого ритма
              </h2>
            </div>
            <p className="max-w-sm text-ink-soft">
              <strong className="text-ink">30 минут</strong>, шесть простых шагов — без давления и без обязательств.
            </p>
          </div>
        </Reveal>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[1.6rem] bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {TRIAL_STEPS.map((step, i) => (
            <li key={step.num} className="bg-mist p-8">
              <Reveal delay={i * 50}>
                <span className="font-display text-sm tracking-[0.2em] text-mint-dim">{step.num}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-ink-soft">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-8">
          <div className="flex flex-col gap-6 rounded-[1.6rem] bg-void p-8 text-cream md:flex-row md:items-center md:justify-between md:p-10">
            <div>
              <h3 className="font-display text-3xl font-semibold leading-tight">
                Готовы попробовать
                <br />
                без риска?
              </h3>
              <p className="mt-3 max-w-lg text-sm text-cream/60">
                Заполните форму — перезвоним в течение 1 рабочего часа, без обязательств.
              </p>
            </div>
            <Button variant="lime" className="px-8 py-4" onClick={openBooking}>
              Отправить заявку
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
