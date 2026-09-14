import { useEffect, useRef, useState } from "react";
import { Reveal } from "../../components/Reveal";
import { useContactsCopy } from "../../content/useCopy";
import { BRANCH_LIST, type BranchSlug } from "../../data/branches";
import { useLocale } from "../../i18n/LocaleContext";
import { mapsEmbed } from "../../lib/youtube";
import { cn } from "../../lib/cn";

export function ContactsMap({
  slug,
  onSelect,
}: {
  slug: BranchSlug;
  onSelect: (slug: BranchSlug) => void;
}) {
  const [mapReady, setMapReady] = useState(false);
  const mapGen = useRef(0);
  const onMapLoad = useRef<() => void>(() => undefined);
  const copy = useContactsCopy();
  const { t } = useLocale();
  const branch = BRANCH_LIST.find((item) => item.slug === slug) ?? BRANCH_LIST[0];

  useEffect(() => {
    const gen = mapGen.current;
    let loaded = false;
    let minElapsed = false;

    const maybeReady = () => {
      if (gen !== mapGen.current) return;
      if (loaded && minElapsed) setMapReady(true);
    };

    onMapLoad.current = () => {
      loaded = true;
      maybeReady();
    };

    const minT = window.setTimeout(() => {
      minElapsed = true;
      maybeReady();
    }, 900);
    const maxT = window.setTimeout(() => {
      if (gen === mapGen.current) setMapReady(true);
    }, 5000);

    return () => {
      window.clearTimeout(minT);
      window.clearTimeout(maxT);
    };
  }, [slug]);

  return (
    <section id="map" className="scroll-mt-28 bg-void pb-24 lg:pb-32" aria-labelledby="contacts-map-title">
      <div className="container-site">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.mapKicker}</p>
          <h2 id="contacts-map-title" className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
            {copy.mapTitle}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {BRANCH_LIST.map((item) => {
            const active = item.slug === slug;
            return (
              <button
                key={item.slug}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  mapGen.current += 1;
                  setMapReady(false);
                  onSelect(item.slug);
                }}
                className={cn(
                  "flex cursor-pointer items-start justify-between gap-4 rounded-[1.4rem] border p-6 text-left transition-colors duration-300",
                  active
                    ? "border-mint/40 bg-panel"
                    : "border-white/8 bg-transparent hover:border-white/16",
                )}
              >
                <span>
                  <span className="block font-display text-2xl font-semibold">{item.title}</span>
                  <span className="mt-1 block text-sm text-cream/55">{item.mapAddress}</span>
                  <span className={cn("mt-3 block text-xs uppercase tracking-[0.16em]", active ? "text-mint" : "text-cream/35")}>
                    {copy.showOnMap}
                  </span>
                </span>
                <span
                  className={cn("mt-1 text-mint", active ? "opacity-100" : "opacity-35")}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mt-6 min-h-[360px] overflow-hidden rounded-[1.6rem] border border-white/8 bg-panel lg:min-h-[480px]">
          <div
            className={cn(
              "absolute inset-0 z-10 flex items-center justify-center bg-panel",
              mapReady ? "pointer-events-none opacity-0 transition-opacity duration-500" : "opacity-100",
            )}
            aria-hidden={mapReady}
          >
            <div className="flex flex-col items-center gap-3">
              <span className="map-loader size-12 rounded-full border-[3px] border-mint/20 border-t-mint" />
              <span className="text-xs uppercase tracking-[0.2em] text-cream/40">{t.common.mapLoading}</span>
            </div>
          </div>
          <iframe
            key={slug}
            className={cn(
              "h-full min-h-[360px] w-full grayscale contrast-125 transition-opacity duration-700 lg:min-h-[480px]",
              mapReady ? "opacity-100" : "opacity-0",
            )}
            src={mapsEmbed(branch.mapAddress)}
            title={`${t.common.mapBranch} ${branch.mapAddress}`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={() => onMapLoad.current()}
          />
        </div>
      </div>
    </section>
  );
}
