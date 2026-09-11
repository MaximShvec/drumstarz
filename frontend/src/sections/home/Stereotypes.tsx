import { useState } from "react";
import { LEVEL_CARDS, type LevelKey } from "../../data/home";
import { Reveal } from "../../components/Reveal";
import { Segmented } from "../../components/ui/Segmented";

export function Stereotypes() {
  const [level, setLevel] = useState<LevelKey>("new");
  const cards = LEVEL_CARDS[level];

  return (
    <section id="stereotypes" className="bg-paper py-24 text-ink lg:py-32" aria-labelledby="stereotypes-title">
      <div className="container-site">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint-dim">
                Теперь заниматься музыкой — не скучно!
              </p>
              <h2 id="stereotypes-title" className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
                Ломаем
                <br />
                стереотипы
              </h2>
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute -top-10 right-0 font-display text-8xl font-extrabold text-ink/6">
                01
              </span>
              <p className="font-display text-xl">DRUMSTARZ — это школа нового поколения.</p>
              <p className="mt-3 text-ink-soft leading-relaxed">
                У нас нет скучных упражнений и формальностей — только живое общение, поддержка и настоящая музыкальная практика. Мы помогаем каждому раскрыть свой потенциал, почувствовать ритм и поверить, что заниматься музыкой может быть по-настоящему увлекательно!
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Segmented
            tone="dark"
            aria-label="Ваш уровень подготовки"
            value={level}
            onChange={setLevel}
            options={[
              { value: "new", label: "Я новичок" },
              { value: "experienced", label: "Я с опытом" },
            ]}
          />
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal
              key={`${level}-${card.title}`}
              as="li"
              delay={i * 80}
              className="group relative isolate min-h-[420px] overflow-hidden rounded-[1.6rem] bg-ink"
            >
              <img
                src={card.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
              <span className="absolute left-6 top-6 font-display text-sm tracking-[0.2em] text-mint">
                0{i + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-7 text-cream">
                <h3 className="font-display text-3xl font-semibold">{card.title}</h3>
                <p className="mt-2 text-cream/70">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
