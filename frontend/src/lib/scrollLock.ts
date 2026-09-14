import { setLenisStopped } from "../hooks/useLenis";

let locks = 0;
let prevOverflow = "";
let prevPadding = "";
let prevOverscroll = "";

export function lockBodyScroll() {
  if (locks === 0) {
    const root = document.documentElement;
    const gap = window.innerWidth - root.clientWidth;
    prevOverflow = document.body.style.overflow;
    prevPadding = document.body.style.paddingRight;
    prevOverscroll = root.style.overscrollBehavior;
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${gap}px`;
    root.style.setProperty("--scrollbar-compensation", `${gap}px`);
    root.style.overscrollBehavior = "none";
    setLenisStopped(true);
  }
  locks += 1;

  return () => {
    locks = Math.max(0, locks - 1);
    if (locks > 0) return;
    document.body.style.overflow = prevOverflow;
    document.body.style.paddingRight = prevPadding;
    document.documentElement.style.overscrollBehavior = prevOverscroll;
    document.documentElement.style.removeProperty("--scrollbar-compensation");
    setLenisStopped(false);
  };
}
