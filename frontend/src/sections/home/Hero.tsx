import { useEffect, useRef, useState } from "react";
import { useBooking } from "../../context/BookingContext";
import { useHome } from "../../content/useCopy";
import { Photo } from "../../components/media/Photo";
import { Button } from "../../components/ui/Button";

const HERO_VIDEO = "/assets/video/hero-drums-bw.mp4";
const HERO_POSTER = "/assets/images/hero-drums-bw-poster.webp";

export function Hero() {
  const { openBooking } = useBooking();
  const copy = useHome();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string>();

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const forceImage = new URLSearchParams(window.location.search).get("hero") === "image" || reduced.matches;
    if (forceImage) return;
    const timer = window.setTimeout(() => setVideoSrc(HERO_VIDEO), 600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    video.muted = true;
    video.play().catch(() => undefined);
  }, [videoSrc]);

  return (
    <section id="top" className="relative isolate min-h-svh overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Photo
          src={HERO_POSTER}
          alt=""
          sizes="100vw"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
        {videoSrc ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            poster={HERO_POSTER}
            muted
            loop
            playsInline
            preload="none"
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.62)_0%,rgba(7,10,8,0.5)_18%,rgba(7,10,8,0.78)_46%,rgba(7,10,8,0.94)_100%)] lg:bg-[linear-gradient(180deg,rgba(7,10,8,0.35)_0%,rgba(7,10,8,0.2)_40%,rgba(7,10,8,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,10,8,0.5)_100%)] lg:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(7,10,8,0.45)_100%)]" />
      </div>

      <div className="container-site relative z-10 flex min-h-svh flex-col justify-end pb-10 pt-28 lg:pb-20 lg:pt-32">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-mint lg:text-xs lg:tracking-[0.35em]">
          Riga · since 2013
        </p>
        <h1 className="mt-4 font-display text-[clamp(2.2rem,11.5vw,7.5rem)] font-extrabold leading-[0.86] tracking-[-0.045em] text-cream [text-shadow:0_10px_36px_rgba(0,0,0,0.55)] lg:mt-5 lg:max-w-[18ch] lg:text-[clamp(2.6rem,8vw,7.5rem)] lg:leading-[0.88] lg:tracking-[-0.04em] lg:[text-shadow:none]">
          <span className="block whitespace-nowrap">DRUMSTARZ</span>
          <span className="block text-mint">RIGA</span>
        </h1>
        <p className="mt-4 max-w-[14ch] font-display text-[1.95rem] font-semibold leading-[1.05] text-cream [text-shadow:0_8px_28px_rgba(0,0,0,0.6)] sm:max-w-none sm:text-3xl sm:font-normal sm:text-cream/80 sm:[text-shadow:none]">
          {copy.tagline}
        </p>

        <div className="mt-6 grid max-w-md gap-3 text-lg leading-snug text-cream sm:mt-10 sm:max-w-3xl sm:grid-cols-2 sm:gap-6 sm:text-base sm:text-cream/70">
          <p>
            {copy.hero.leadBefore}
            <strong className="font-semibold text-cream">{copy.hero.leadStrong}</strong>
          </p>
          <p>{copy.hero.concert}</p>
        </div>

        <p className="mt-5 text-lg font-medium text-cream sm:mt-8 sm:text-base sm:font-normal sm:text-cream/55">{copy.hero.start}</p>

        <div className="mt-6 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="sm:hidden">
            <Button
              variant="primary"
              className="w-full bg-mint! px-6 py-4 text-lg! font-extrabold text-void shadow-[0_14px_36px_-10px_rgba(26,212,161,0.55)]"
              onClick={openBooking}
            >
              {copy.hero.ctaBefore} <strong>{copy.hero.ctaStrong}</strong>
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button variant="outline" className="px-8 py-4 text-base" onClick={openBooking}>
              {copy.hero.ctaBefore} <strong>{copy.hero.ctaStrong}</strong>
            </Button>
          </div>
          <span className="text-center text-[0.7rem] uppercase tracking-[0.22em] text-cream/70 sm:text-left sm:text-xs sm:text-cream/55">
            {copy.hero.scroll}
          </span>
        </div>
      </div>
    </section>
  );
}
