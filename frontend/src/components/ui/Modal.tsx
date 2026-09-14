import { useEffect, useId, useState, type ReactNode } from "react";
import { cn } from "../../lib/cn";
import { lockBodyScroll } from "../../lib/scrollLock";

const EXIT_MS = 420;

export function Modal({
  open,
  onClose,
  labelledBy,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  labelledBy?: string;
  children: ReactNode;
  className?: string;
}) {
  const fallbackTitleId = useId();
  const [present, setPresent] = useState(open);
  const [entered, setEntered] = useState(false);

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
    };
    document.addEventListener("keydown", onKey);
    return () => {
      unlock();
      document.removeEventListener("keydown", onKey);
    };
  }, [present, onClose]);

  if (!present) return null;

  const titleId = labelledBy ?? fallbackTitleId;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center overscroll-none p-0 sm:items-center sm:p-6">
      <button
        type="button"
        className={cn(
          "absolute inset-0 cursor-pointer bg-void/75 backdrop-blur-sm transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          entered ? "opacity-100" : "opacity-0",
        )}
        aria-label="Закрыть"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-t-[2rem] border border-white/10 bg-panel p-8 shadow-glow sm:max-w-lg sm:rounded-[2rem] sm:p-10",
          "origin-bottom sm:origin-center",
          "transition-[opacity,translate,scale] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:translate-none motion-reduce:scale-100",
          entered
            ? "translate-y-0 opacity-100 sm:scale-100"
            : "translate-y-full opacity-100 sm:translate-y-8 sm:scale-[0.96] sm:opacity-0",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
