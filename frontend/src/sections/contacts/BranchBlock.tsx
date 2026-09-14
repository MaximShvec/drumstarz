import { useMemo, useState } from "react";
import { YoutubePlayer } from "../../components/media/YoutubePlayer";
import { Reveal } from "../../components/Reveal";
import { Button } from "../../components/ui/Button";
import { Segmented } from "../../components/ui/Segmented";
import { useBooking } from "../../context/BookingContext";
import { BRANCHES, type BranchSlug, type RouteKind } from "../../data/branches";
import { SITE } from "../../data/site";
import { cn } from "../../lib/cn";

type Props = {
  slug: BranchSlug;
  initialFloor?: string;
  initialRoute?: RouteKind;
  onShowMap: (slug: BranchSlug) => void;
};

export function BranchBlock({ slug, initialFloor, initialRoute, onShowMap }: Props) {
  const { openBooking } = useBooking();
  const branch = BRANCHES[slug];
  const flipped = slug === "second";

  const [floorKey, setFloorKey] = useState(() => {
    if (branch.slug !== "first") return "3-5";
    return branch.floors.some((f) => f.key === initialFloor) ? initialFloor! : "3-5";
  });
  const [route, setRoute] = useState<RouteKind>(initialRoute === "driving" ? "driving" : "walking");

  const activeVideo = useMemo(() => {
    if (branch.slug === "first") {
      const floor = branch.floors.find((f) => f.key === floorKey) ?? branch.floors[0];
      return {
        id: floor.videos[route].id,
        title: `${floor.videos[route].tab} — ${branch.title}, ${floor.label}`,
      };
    }
    const item = branch.routes.find((r) => r.key === route) ?? branch.routes[0];
    return { id: item.id, title: `${item.tab} — ${branch.title}` };
  }, [branch, floorKey, route]);

  return (
    <article id={`branch-${slug}`} className="relative scroll-mt-28 py-10 lg:py-16">
      <div className="relative grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div
          className={cn(
            "relative z-10 flex min-w-0 flex-col lg:col-span-5",
            flipped ? "lg:order-2 lg:pl-6" : "lg:order-1",
          )}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{branch.name}</p>
          <h3 className="mt-3 font-display text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            {branch.title}
          </h3>
          <p className="mt-4 text-lg text-cream/70">{branch.displayAddress}</p>

          <ul className="mt-6 space-y-2 text-cream/80">
            <li>
              <a href={SITE.phoneHref} className="link-draw">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="link-draw break-all">
                {SITE.email}
              </a>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button className="px-6 py-3" onClick={() => onShowMap(slug)}>
              Проложить маршрут
            </Button>
            <Button variant="outline" className="px-6 py-3" onClick={openBooking}>
              Записаться на занятие
            </Button>
          </div>

          <span
            aria-hidden="true"
            className="mt-10 hidden select-none font-display text-[clamp(5rem,8vw,8.5rem)] font-extrabold leading-none text-transparent [-webkit-text-stroke:2px_rgba(26,212,161,0.72)] lg:block"
          >
            {branch.number}
          </span>
        </div>

        <div
          id={`branch-${slug}-routes`}
          className={cn(
            "relative z-10 min-w-0 scroll-mt-28 lg:col-span-7",
            flipped ? "lg:order-1" : "lg:order-2",
          )}
        >
          <Reveal>
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-void shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)]">
              <YoutubePlayer
                key={activeVideo.id}
                id={activeVideo.id}
                title={`Смотреть маршрут: ${activeVideo.title}`}
                className="aspect-video w-full"
              />
            </div>
            <div className="mt-5 space-y-3">
              {branch.slug === "first" ? (
                <>
                  <Segmented
                    tone="mint"
                    aria-label={`Этаж филиала ${branch.title}`}
                    value={floorKey}
                    onChange={setFloorKey}
                    options={branch.floors.map((floor) => ({ value: floor.key, label: floor.label }))}
                  />
                  <Segmented
                    tone="mint"
                    aria-label={`Маршрут до ${branch.title}`}
                    value={route}
                    onChange={setRoute}
                    options={[
                      { value: "walking", label: "Пешком" },
                      { value: "driving", label: "На машине" },
                    ]}
                  />
                </>
              ) : (
                <Segmented
                  tone="mint"
                  aria-label={`Маршрут до ${branch.title}`}
                  value={route}
                  onChange={setRoute}
                  options={branch.routes.map((item) => ({ value: item.key, label: item.tab }))}
                />
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}
