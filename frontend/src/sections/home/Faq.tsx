import { useState } from "react";
import { FAQ } from "../../data/home";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { LineInput } from "../../components/ui/Field";
import { useBooking } from "../../context/BookingContext";
import { cn } from "../../lib/cn";

export function Faq() {
  const { openBooking } = useBooking();
  const [open, setOpen] = useState(4);

  return (
    <section id="faq" className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="faq-title">
      <div className="container-site">
        <Reveal>
          <h2 id="faq-title" className="font-display text-4xl font-extrabold sm:text-5xl">
            Вопросы новичка
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-dim">
              Возможно, их уже задавали:
            </p>
            <ul className="mt-6 divide-y divide-ink/10 border-y border-ink/10">
              {FAQ.map((item, i) => {
                const expanded = open === i;
                return (
                  <li key={item.q}>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-start justify-between gap-4 py-5 text-left"
                      aria-expanded={expanded}
                      onClick={() => setOpen(expanded ? -1 : i)}
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
              <h3 className="font-display text-2xl font-semibold leading-tight">
                Или просто оставьте заявку и мы всё расскажем!
              </h3>
              <p className="mt-3 text-sm text-cream/60">
                Оставьте заявку — и мы поможем вам сделать первый шаг в мир музыки!
              </p>
              <div className="mt-8 space-y-5">
                <LineInput placeholder="Ваше имя" aria-label="Ваше имя" autoComplete="name" />
                <LineInput placeholder="Номер телефона" aria-label="Номер телефона" autoComplete="tel" type="tel" />
                <Button className="w-full py-4" onClick={openBooking}>
                  Отправить заявку
                </Button>
                <p className="text-center text-xs uppercase tracking-[0.16em] text-cream/35">
                  Ответим в течение часа
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
