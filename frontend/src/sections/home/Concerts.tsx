import { CONCERT_YOUTUBE_ID } from "../../data/trainers";
import { Reveal } from "../../components/Reveal";
import { YoutubePlayer } from "../../components/media/YoutubePlayer";

export function Concerts() {
  return (
    <section id="concerts" className="bg-void py-24 lg:py-32" aria-labelledby="concerts-title">
      <div className="container-site">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Результаты учеников</p>
          <h2 id="concerts-title" className="mt-3 max-w-[18ch] font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
            Посмотри, как проходят отчётные концерты
          </h2>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-[1.8rem] border border-white/8">
            <YoutubePlayer
              id={CONCERT_YOUTUBE_ID}
              title="Смотреть видео отчётного концерта"
              poster="/assets/img/events/gallery-04.jpg"
              className="aspect-video w-full"
            />
            <span className="pointer-events-none absolute left-6 top-6 rounded-full bg-void/70 px-4 py-2 text-xs uppercase tracking-[0.18em] text-cream/80">
              Видео ученика
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
