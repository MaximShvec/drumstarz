import { YoutubePlayer } from "../../components/media/YoutubePlayer";
import { useTrainersCopy } from "../../content/useCopy";
import { useLocale } from "../../i18n/LocaleContext";
import { youtubePoster } from "../../lib/youtube";
import { cn } from "../../lib/cn";
import type { TRAINERS } from "../../data/trainers";

type Trainer = (typeof TRAINERS)[number];

export function TrainerCard({ trainer, index }: { trainer: Trainer; index: number }) {
  const copy = useTrainersCopy();
  const { t } = useLocale();
  const flipped = index % 2 === 1;

  return (
    <article
      id={`trainer-${trainer.id}`}
      className="group/card relative scroll-mt-28 py-10 lg:py-16"
    >
      <div className="relative grid items-stretch gap-8 lg:grid-cols-12 lg:gap-0">
        <div
          className={cn(
            "relative isolate min-w-0 lg:col-span-5",
            flipped ? "order-2 lg:order-2" : "order-2 lg:order-1",
          )}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-void-2">
            <img
              src="/assets/img/trainers/card-background-vector.svg"
              alt=""
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-1/2 w-[140%] max-w-none -translate-y-1/2 opacity-50",
                flipped ? "right-[-20%]" : "left-[-20%]",
              )}
            />
            <div className="pointer-events-none absolute inset-x-6 bottom-8 h-2/3 rounded-full bg-mint/25 blur-3xl" />
            <img
              src={trainer.photo}
              alt={`${trainer.name} — ${t.common.trainerPhoto}`}
              loading="lazy"
              decoding="async"
              className="relative z-10 mx-auto h-[22rem] w-full object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03] sm:h-[28rem] lg:h-[36rem]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-void to-transparent lg:hidden" />
          </div>

          <div
            className={cn(
              "relative z-20 mt-[-3.5rem] px-4 sm:mt-[-4.5rem] lg:absolute lg:bottom-10 lg:mt-0 lg:w-[22rem] lg:px-0",
              flipped ? "lg:left-[-18%]" : "lg:right-[-18%]",
            )}
          >
            <div className="overflow-hidden rounded-[1.25rem] border border-white/15 bg-void shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)]">
              <YoutubePlayer
                id={trainer.youtubeId}
                title={`${t.common.watchTrainer} ${trainer.name}`}
                poster={youtubePoster(trainer.youtubeId, "maxres")}
                className="aspect-video w-full"
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            "relative z-10 order-1 flex min-w-0 flex-col justify-start lg:col-span-7 lg:min-h-[36rem] lg:pb-8 lg:pt-8",
            flipped ? "lg:order-1 lg:items-end lg:pr-8 lg:text-right" : "lg:order-2 lg:items-start lg:pl-10",
          )}
        >
          <div
            className={cn(
              "relative flex h-full w-full max-w-xl flex-col",
              flipped && "lg:ml-auto",
            )}
          >
            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.24em] text-mint">
              {copy.role}
            </p>
            <h3 className="relative z-10 mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {trainer.name}
            </h3>
            <p className="relative z-10 mt-5 max-w-md text-lg leading-relaxed text-cream/70">{copy.bios[trainer.id]}</p>
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute -right-1 top-5 z-0 select-none font-display text-[4.75rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:1.5px_rgba(26,212,161,0.28)] sm:text-8xl",
                "lg:relative lg:right-auto lg:top-auto lg:mt-auto lg:pt-10 lg:text-[clamp(5.5rem,9vw,9.5rem)] lg:[-webkit-text-stroke:2px_rgba(26,212,161,0.72)]",
                flipped ? "lg:self-start" : "lg:self-end",
              )}
            >
              {trainer.number}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
