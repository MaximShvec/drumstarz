import { useEffect, useRef, useState } from "react";
import { STUDENT_PHOTOS } from "../../data/home";
import { Reveal } from "../../components/Reveal";

export function Students() {
  const mobileRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const root = mobileRef.current;
    if (!root) return;
    const tiles = [...root.querySelectorAll("[data-student-tile]")];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = tiles.indexOf(visible.target);
        if (i >= 0) setIndex(i + 1);
      },
      { root, threshold: 0.6 },
    );
    tiles.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="students" className="bg-paper py-24 text-ink lg:py-32" aria-label="Наши ученики">
      <div className="container-site">
        <Reveal>
          <h2 className="font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
            Наши
            <br />
            ученики
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Наши ученики — это дети и взрослые, которые однажды взяли в руки палочки и открыли для себя мир ритма.
          </p>
        </Reveal>

        <div
          ref={mobileRef}
          className="no-scrollbar mt-10 flex snap-x gap-3 overflow-x-auto md:hidden"
        >
          {STUDENT_PHOTOS.map((src) => (
            <img
              key={src}
              data-student-tile
              src={src}
              alt=""
              loading="lazy"
              className="h-72 w-[78%] shrink-0 snap-center rounded-[1.2rem] object-cover"
            />
          ))}
        </div>
        <p className="mt-3 text-sm text-ink-soft md:hidden">
          {index} / {STUDENT_PHOTOS.length}
        </p>

        <div className="mt-12 hidden grid-cols-4 gap-3 md:grid">
          {STUDENT_PHOTOS.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className={`h-full min-h-40 w-full rounded-[1.1rem] object-cover ${i === 7 ? "col-span-2 row-span-2 min-h-80" : ""} ${i === 0 ? "row-span-2 min-h-80" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
