import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BRANCHES, type BranchSlug, type RouteKind } from "../data/branches";
import { SITE } from "../data/site";
import { useContactsCopy } from "../content/useCopy";
import { useBooking } from "../context/BookingContext";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLocale } from "../i18n/LocaleContext";
import { scrollToId } from "../hooks/useLenis";
import { Reveal } from "../components/Reveal";
import { Button, ButtonAnchor } from "../components/ui/Button";
import { BranchBlock } from "../sections/contacts/BranchBlock";
import { ContactsMap } from "../sections/contacts/ContactsMap";
import { ContactsLead } from "../sections/contacts/ContactsLead";

function isBranch(value: string | null): value is BranchSlug {
  return value === "first" || value === "second";
}

function isRoute(value: string | null): value is RouteKind {
  return value === "walking" || value === "driving";
}

export function ContactsPage() {
  const { openBooking } = useBooking();
  const copy = useContactsCopy();
  const { t } = useLocale();
  const [params] = useSearchParams();
  const [mapSlug, setMapSlug] = useState<BranchSlug>("first");

  const branchParam = params.get("branch");
  const routeParam = params.get("route");
  const initialBranch = isBranch(branchParam) ? branchParam : undefined;
  const initialRoute = isRoute(routeParam) ? routeParam : undefined;
  const initialFloor = params.get("floor") ?? undefined;

  useDocumentMeta(copy.metaTitle, copy.metaDescription);

  useEffect(() => {
    if (initialBranch) setMapSlug(initialBranch);
  }, [initialBranch]);

  useEffect(() => {
    if (!initialBranch) return;
    const branch = BRANCHES[initialBranch];
    const hasTarget =
      branch.slug === "first" ? Boolean(initialFloor || initialRoute) : Boolean(initialRoute);
    if (!hasTarget) return;

    const timer = window.setTimeout(() => {
      scrollToId(`branch-${initialBranch}-routes`);
    }, 180);
    return () => window.clearTimeout(timer);
  }, [initialBranch, initialFloor, initialRoute]);

  function showMap(slug: BranchSlug) {
    setMapSlug(slug);
    window.setTimeout(() => scrollToId("map"), 60);
  }

  return (
    <>
      <section className="relative isolate min-h-[78svh] overflow-hidden" aria-labelledby="contacts-hero-title">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="/assets/images/contacts-hero-drums-backdrop.jpg"
            alt=""
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.4)_0%,rgba(7,10,8,0.25)_40%,rgba(7,10,8,0.92)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,8,0.45)_100%)]" />
        </div>
        <div className="container-site relative z-10 flex min-h-[78svh] flex-col justify-end pb-16 pt-32 lg:pb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.heroKicker}</p>
          <h1
            id="contacts-hero-title"
            className="mt-4 max-w-[14ch] font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl"
          >
            {copy.heroTitle}
            <br />
            {copy.heroTitleLine2}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/70">{copy.heroLead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonAnchor href={SITE.phoneHref} className="px-6 py-3">
              {copy.call}
            </ButtonAnchor>
            <ButtonAnchor href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="px-6 py-3">
              <img src="/assets/icons/whatsapp.png" alt="" className="h-4 w-4" />
              WhatsApp
            </ButtonAnchor>
            <Button className="px-6 py-3" onClick={openBooking}>
              {t.book}
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-void py-16 lg:py-24" aria-labelledby="contacts-branches-title">
        <div className="container-site">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{copy.branchesKicker}</p>
            <h2 id="contacts-branches-title" className="mt-3 max-w-[16ch] font-display text-4xl font-extrabold leading-[0.95] sm:text-5xl">
              {copy.branchesTitle}
            </h2>
          </Reveal>

          <div className="mt-4 divide-y divide-white/8">
            <BranchBlock
              slug="first"
              initialFloor={initialBranch === "first" ? initialFloor : undefined}
              initialRoute={initialBranch === "first" ? initialRoute : undefined}
              onShowMap={showMap}
            />
            <BranchBlock
              slug="second"
              initialRoute={initialBranch === "second" ? initialRoute : undefined}
              onShowMap={showMap}
            />
          </div>
        </div>
      </section>

      <ContactsMap slug={mapSlug} onSelect={setMapSlug} />
      <ContactsLead />

      <section className="bg-void pb-24 lg:pb-32" aria-labelledby="contacts-promo-title">
        <div className="container-site">
          <Reveal>
            <div className="flex flex-col gap-6 rounded-[1.8rem] border border-mint/25 bg-panel p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h2 id="contacts-promo-title" className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
                  {copy.promoTitle}
                  <br />
                  {copy.promoTitleLine2}
                </h2>
                <p className="mt-3 max-w-lg text-sm text-cream/60">{copy.promoLead}</p>
              </div>
              <Button className="px-8 py-4" onClick={openBooking}>
                {t.book}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
