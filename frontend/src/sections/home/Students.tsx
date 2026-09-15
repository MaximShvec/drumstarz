import { STUDENT_PHOTOS } from "../../data/home";
import { useHome } from "../../content/useCopy";
import { Reveal } from "../../components/Reveal";
import { cn } from "../../lib/cn";

type Tile = (typeof STUDENT_PHOTOS)[number];

function StudentTile({ photo, className }: { photo: Tile; className?: string }) {
  return (
    <span className={cn("block overflow-hidden rounded-lg bg-ink/8", className)}>
      <img
        src={photo.src}
        alt=""
        width={photo.w}
        height={photo.h}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        style={{ aspectRatio: `${photo.w} / ${photo.h}` }}
      />
    </span>
  );
}

function TitleBlock() {
  const copy = useHome();

  return (
    <div className="max-w-[18rem]">
      <h2 className="font-display text-[1.7rem] font-extrabold uppercase leading-[1.05] sm:text-3xl md:text-[2.5rem] md:leading-[1.18]">
        {copy.students.title}
        <br />
        {copy.students.titleLine2}
      </h2>
      <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{copy.students.lead}</p>
    </div>
  );
}

export function Students() {
  const copy = useHome();
  const [
    a1,
    a2,
    b1,
    b2,
    b3,
    c1,
    d1,
    wide,
    c2,
    d3,
    d4,
  ] = STUDENT_PHOTOS;

  return (
    <section id="students" className="bg-paper py-16 text-ink lg:py-24" aria-label={copy.students.aria}>
      <div className="container-site">
        <Reveal className="mb-8 md:hidden">
          <TitleBlock />
        </Reveal>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:hidden">
          {STUDENT_PHOTOS.map((photo) => (
            <StudentTile key={photo.src} photo={photo} />
          ))}
        </div>

        <Reveal className="hidden md:flex md:items-start md:gap-[17px]">
          <div className="flex min-w-0 flex-1 flex-col gap-[17px]">
            <TitleBlock />
            <StudentTile photo={a1} />
            <StudentTile photo={a2} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[17px]">
            <StudentTile photo={b1} />
            <StudentTile photo={b2} />
            <StudentTile photo={b3} />
          </div>
          <div className="flex min-w-0 flex-[2] flex-col gap-[17px]">
            <div className="flex gap-[17px]">
              <StudentTile photo={c1} className="min-w-0 flex-1" />
              <StudentTile photo={d1} className="min-w-0 flex-1" />
            </div>
            <StudentTile photo={wide} />
            <div className="flex gap-[17px]">
              <StudentTile photo={c2} className="min-w-0 flex-1" />
              <div className="flex min-w-0 flex-1 flex-col gap-[17px]">
                <StudentTile photo={d3} />
                <StudentTile photo={d4} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
