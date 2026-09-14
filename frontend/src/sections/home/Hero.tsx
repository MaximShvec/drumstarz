import { useEffect, useRef } from "react";
import { useBooking } from "../../context/BookingContext";
import { useHome } from "../../content/useCopy";
import { Button } from "../../components/ui/Button";

export function Hero() {
  const { openBooking } = useBooking();
  const copy = useHome();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const params = new URLSearchParams(window.location.search);
    const forceImage = params.get("hero") === "image" || reduced.matches;
    if (forceImage) {
      video.pause();
      return;
    }
    video.muted = true;
    video.play().catch(() => undefined);
  }, []);

  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src="/assets/video/hero-drums-bw.mp4"
          poster="/assets/images/hero-drums-bw-poster.jpg"
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.35)_0%,rgba(7,10,8,0.2)_40%,rgba(7,10,8,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,8,0.45)_100%)]" />
      </div>

      <div className="container-site relative z-10 flex min-h-svh flex-col justify-end pb-16 pt-32 lg:pb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-mint">Riga · since 2013</p>
        <h1 className="mt-5 max-w-[18ch] font-display text-[clamp(2.6rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.04em] text-cream">
          DRUMSTARZ
          <span className="block text-mint">RIGA</span>
        </h1>
        <p className="mt-4 font-display text-xl text-cream/80 sm:text-3xl">{copy.tagline}</p>

        <div className="mt-10 grid max-w-3xl gap-6 text-sm text-cream/70 sm:grid-cols-2 sm:text-base">
          <p>
            {copy.hero.leadBefore}
            <strong className="font-semibold text-cream">{copy.hero.leadStrong}</strong>
          </p>
          <p>{copy.hero.concert}</p>
        </div>

        <p className="mt-8 text-cream/55">{copy.hero.start}</p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button variant="outline" className="px-8 py-4 text-base" onClick={openBooking}>
            {copy.hero.ctaBefore} <strong className="ml-1">{copy.hero.ctaStrong}</strong>
          </Button>
          <span className="text-xs uppercase tracking-[0.2em] text-cream/35">{copy.hero.scroll}</span>
        </div>
      </div>
    </section>
  );
}
