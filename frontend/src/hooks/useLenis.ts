import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function scrollToId(id: string, offset = -96) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset, duration: 1.05 });
    return;
  }
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function setLenisStopped(stopped: boolean) {
  if (stopped) lenisInstance?.stop();
  else lenisInstance?.start();
}

export function useLenis() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
    });
    lenisInstance = lenis;
    return () => {
      lenisInstance = null;
      lenis.destroy();
    };
  }, []);
}
