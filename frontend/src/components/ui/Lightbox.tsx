import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { lockBodyScroll } from "../../lib/scrollLock";

const EXIT_MS = 420;
const SWIPE_PX = 88;

export type LightboxItem = {
  src: string;
  alt: string;
};

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: readonly LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndex: (index: number) => void;
}) {
  const open = index !== null;
  const [present, setPresent] = useState(open);
  const [entered, setEntered] = useState(false);
  const current = index !== null ? items[index] : null;
  const mediaRef = useRef<HTMLDivElement>(null);
  const swipeRef = useRef<{ id: number; x: number; y: number } | null>(null);

  useEffect(() => {
    if (open) {
      setPresent(true);
      return;
    }
    setEntered(false);
    if (!present) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setPresent(false);
      return;
    }
    const timer = window.setTimeout(() => setPresent(false), EXIT_MS);
    return () => window.clearTimeout(timer);
  }, [open, present]);

  useEffect(() => {
    if (!present || !open) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setEntered(true);
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setEntered(true));
    });
    return () => window.cancelAnimationFrame(frame);
  }, [present, open]);

  useEffect(() => {
    if (!present) return;
    const unlock = lockBodyScroll();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (index === null) return;
      if (e.key === "ArrowLeft") onIndex((index - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") onIndex((index + 1) % items.length);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      unlock();
      document.removeEventListener("keydown", onKey);
    };
  }, [present, index, onClose, onIndex, items.length]);

  useEffect(() => {
    setShift(0);
  }, [index]);

  function setShift(x: number) {
    const el = mediaRef.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.style.transform = "";
      el.style.opacity = "";
      return;
    }
    el.style.transform = x ? `translateX(${x}px)` : "";
    el.style.opacity = x ? String(Math.max(0.45, 1 - Math.abs(x) / 420)) : "";
  }

  function step(delta: number) {
    if (index === null) return;
    onIndex((index + delta + items.length) % items.length);
  }

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    swipeRef.current = { id: e.pointerId, x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    const start = swipeRef.current;
    if (!start || start.id !== e.pointerId) return;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    if (Math.abs(dx) >= Math.abs(dy)) setShift(dx);
    else setShift(0);
  }

  function finishPointer(e: ReactPointerEvent<HTMLDivElement>) {
    const start = swipeRef.current;
    if (!start || start.id !== e.pointerId) return;
    swipeRef.current = null;
    const dx = e.clientX - start.x;
    const dy = e.clientY - start.y;
    setShift(0);
    if (Math.abs(dx) >= SWIPE_PX && Math.abs(dx) > Math.abs(dy)) {
      step(dx < 0 ? 1 : -1);
      return;
    }
    if (dy >= SWIPE_PX && Math.abs(dy) > Math.abs(dx)) onClose();
  }

  if (!present || !current) return null;

  return (
    <div className="fixed inset-0 z-[80] flex touch-none items-center justify-center overscroll-none p-4 sm:p-8">
      <button
        type="button"
        className={cn(
          "absolute inset-0 cursor-pointer bg-void/88 backdrop-blur-sm transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          entered ? "opacity-100" : "opacity-0",
        )}
        aria-label="Закрыть"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={current.alt || "Фото с занятия"}
        className={cn(
          "relative z-10 flex max-h-[92vh] w-full max-w-[min(1120px,100%)] cursor-grab touch-none flex-col items-center active:cursor-grabbing",
          "transition-[opacity,translate,scale] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          entered ? "translate-y-0 scale-100 opacity-100" : "translate-y-4 scale-[0.98] opacity-0",
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}
      >
        <div ref={mediaRef} className="flex w-full items-center justify-center">
          <img
            src={current.src}
            alt={current.alt}
            draggable={false}
            className="max-h-[78vh] w-auto max-w-full rounded-[1.2rem] object-contain"
          />
        </div>

        <div className="mt-5 flex w-full items-center justify-between gap-4 text-cream">
          <p className="font-display text-sm tracking-[0.18em] text-cream/55">
            {String((index ?? 0) + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>
          <div
            className="flex items-center gap-2"
            onPointerDown={(e) => e.stopPropagation()}
          >
            <LightboxNav label="Предыдущее фото" onClick={() => step(-1)}>
              <path d="M15 6l-6 6 6 6" />
            </LightboxNav>
            <LightboxNav label="Следующее фото" onClick={() => step(1)}>
              <path d="M9 6l6 6-6 6" />
            </LightboxNav>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="absolute right-4 top-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-mint/50 hover:text-mint sm:right-6 sm:top-6"
        aria-label="Закрыть"
        onClick={onClose}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>
  );
}

function LightboxNav({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 text-cream/80 transition-colors hover:border-mint/50 hover:text-mint"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
        {children}
      </svg>
    </button>
  );
}
