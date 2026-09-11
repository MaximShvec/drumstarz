import { useEffect, useRef, useState } from "react";
import { youtubeEmbed, youtubePoster } from "../../lib/youtube";
import { cn } from "../../lib/cn";

export function YoutubePlayer({
  id,
  title,
  className,
  poster,
  autoPlay = false,
}: {
  id: string;
  title: string;
  className?: string;
  poster?: string;
  autoPlay?: boolean;
}) {
  const [playing, setPlaying] = useState(autoPlay);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!playing) return;
    const onDoc = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setPlaying(false);
      }
    };
    const timer = window.setTimeout(() => {
      document.addEventListener("click", onDoc);
    }, 0);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("click", onDoc);
    };
  }, [playing]);

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden bg-void", className)}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={youtubeEmbed(id)}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={poster ?? youtubePoster(id)}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-void/25" />
          <button
            type="button"
            className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center"
            onClick={() => setPlaying(true)}
            aria-label={title}
          >
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-mint text-void shadow-glow transition-transform duration-300 hover:scale-105">
              <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8 fill-current" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </>
      )}
    </div>
  );
}
