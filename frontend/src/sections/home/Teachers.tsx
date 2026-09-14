import { useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { TRAINERS } from "../../data/trainers";
import { useHome } from "../../content/useCopy";
import { useLocale } from "../../i18n/LocaleContext";
import { Reveal } from "../../components/Reveal";
import { YoutubePlayer } from "../../components/media/YoutubePlayer";
import { ButtonLink } from "../../components/ui/Button";

export function Teachers() {
  const copy = useHome();
  const { t: ui, href } = useLocale();
  const scroller = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<string | null>(null);

  function scrollByDir(dir: -1 | 1) {
    const el = scroller.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.55), behavior: "smooth" });
  }

  return (
    <section id="teachers" className="bg-void py-24 lg:py-32" aria-labelledby="teachers-title">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.teachers.kicker}</p>
              <h2 id="teachers-title" className="mt-3 font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
                {copy.teachers.title}
                <br />
                {copy.teachers.titleLine2}
              </h2>
            </div>
            <p className="max-w-sm text-cream/60">{copy.teachers.lead}</p>
          </div>
        </Reveal>
      </div>

      <ul
        ref={scroller}
        id="teachers-list"
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-[max(1.25rem,calc((100%-1240px)/2+1.25rem))] pb-4"
      >
        {TRAINERS.map((t) => (
          <li key={t.id} className="w-[78vw] max-w-[340px] shrink-0 snap-start sm:w-[300px]">
            <article className="group overflow-hidden rounded-[1.5rem] bg-panel">
              <div className="relative aspect-[3/4] overflow-hidden">
                {active === t.id ? (
                  <YoutubePlayer
                    id={t.youtubeId}
                    title={`${ui.common.trainerVideo} ${t.name}`}
                    poster={t.photo}
                    autoPlay
                    className="absolute inset-0 h-full w-full"
                  />
                ) : (
                  <>
                    <img
                      src={t.photo}
                      alt={`${t.name} — ${ui.common.trainerPhoto}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
                    <button
                      type="button"
                      className="absolute inset-0 cursor-pointer"
                      aria-label={`${ui.common.watchTrainer} ${t.name}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(t.id);
                      }}
                    >
                      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-mint text-void shadow-[0_0_0_0_rgba(26,212,161,0.45)] transition-[transform,box-shadow] duration-500 group-hover:scale-110 group-hover:shadow-[0_0_0_14px_rgba(26,212,161,0)]">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6 fill-current">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  </>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                  <span className="font-display text-2xl">{t.name}</span>
                </div>
              </div>
              <div className="flex justify-end p-4">
                <Link
                  to={href(`/trainers#trainer-${t.id}`)}
                  className="group/more inline-flex items-center gap-1 text-sm text-mint"
                >
                  {ui.common.more}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 transition-transform duration-300 group-hover/more:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="container-site mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-2" role="group" aria-label={ui.common.trainersScroll}>
          <Arrow label={ui.common.trainersPrev} onClick={() => scrollByDir(-1)}>
            <path d="M15 6l-6 6 6 6" />
          </Arrow>
          <Arrow label={ui.common.trainersNext} onClick={() => scrollByDir(1)}>
            <path d="M9 6l6 6-6 6" />
          </Arrow>
        </div>
        <ButtonLink to="/trainers">{ui.common.allTrainers}</ButtonLink>
      </div>
    </section>
  );
}

function Arrow({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="icon-btn flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/15 text-cream"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        {children}
      </svg>
    </button>
  );
}
