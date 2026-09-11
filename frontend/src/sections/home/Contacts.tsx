import { useEffect, useRef, useState } from "react";
import { BRANCHES, type BranchSlug } from "../../data/branches";
import { SITE } from "../../data/site";
import { Reveal } from "../../components/Reveal";
import { Button, ButtonAnchor, ButtonLink } from "../../components/ui/Button";
import { Segmented } from "../../components/ui/Segmented";
import { useBooking } from "../../context/BookingContext";
import { mapsEmbed } from "../../lib/youtube";
import { cn } from "../../lib/cn";

const BRANCH_OPTIONS = (Object.keys(BRANCHES) as BranchSlug[]).map((key) => ({
  value: key,
  label: BRANCHES[key].name,
}));

export function Contacts() {
  const { openBooking } = useBooking();
  const [slug, setSlug] = useState<BranchSlug>("first");
  const [mapReady, setMapReady] = useState(false);
  const mapGen = useRef(0);
  const onMapLoad = useRef<() => void>(() => undefined);
  const branch = BRANCHES[slug];

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
    <section id="contacts" className="bg-void py-24 lg:py-32" aria-labelledby="contacts-title">
      <div className="container-site">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">Контакты</p>
              <h2 id="contacts-title" className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
                Как нас найти
              </h2>
            </div>
            <p className="max-w-md text-cream/60">
              Два филиала в центре Риги. Удобно добраться и на машине, и на общественном транспорте.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Segmented
              tabs
              tone="mint"
              aria-label="Выбор филиала"
              value={slug}
              onChange={(next) => {
                mapGen.current += 1;
                setMapReady(false);
                setSlug(next);
              }}
              options={BRANCH_OPTIONS}
            />

            <div key={slug} className="branch-swap mt-6 rounded-[1.4rem] border border-white/8 bg-panel p-6" role="tabpanel">
              <p className="text-xs uppercase tracking-[0.18em] text-cream/40">{branch.name}</p>
              <p className="mt-2 font-display text-2xl">{branch.displayAddress}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-3" role="group" aria-label="Маршрут до выбранного филиала">
              <ButtonLink to={`/contacts?branch=${slug}&route=walking`} variant="outline" className="px-5 py-2.5">
                Пешком
              </ButtonLink>
              <ButtonLink to={`/contacts?branch=${slug}&route=driving`} className="px-5 py-2.5">
                На машине
              </ButtonLink>
            </div>

            <ul className="mt-8 space-y-4">
              <li>
                <p className="text-xs uppercase tracking-[0.16em] text-cream/40">Телефон и Whatsapp</p>
                <a href={SITE.phoneHref} className="link-draw text-lg">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <p className="text-xs uppercase tracking-[0.16em] text-cream/40">Email</p>
                <a href={SITE.emailHref} className="link-draw text-lg">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={openBooking}>Записаться на бесплатный урок</Button>
              <ButtonAnchor href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
                <img src="/assets/icons/whatsapp.png" alt="" className="h-4 w-4" />
                WhatsApp
              </ButtonAnchor>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[1.6rem] border border-white/8 bg-panel">
            <div
              className={cn(
                "absolute inset-0 z-10 flex items-center justify-center bg-panel",
                mapReady
                  ? "pointer-events-none opacity-0 transition-opacity duration-500"
                  : "opacity-100",
              )}
              aria-hidden={mapReady}
            >
              <div className="flex flex-col items-center gap-3">
                <span className="map-loader size-12 rounded-full border-[3px] border-mint/20 border-t-mint" />
                <span className="text-xs uppercase tracking-[0.2em] text-cream/40">Загружаем карту</span>
              </div>
            </div>
            <iframe
              key={slug}
              className={cn(
                "h-full min-h-[360px] w-full grayscale contrast-125 transition-opacity duration-700",
                mapReady ? "opacity-100" : "opacity-0",
              )}
              src={mapsEmbed(branch.mapAddress)}
              title={`Карта: филиал DRUMSTARZ на ${branch.mapAddress}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => onMapLoad.current()}
            />
            <span className="sr-only">Карта: {branch.displayAddress}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
