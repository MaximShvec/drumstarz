import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LOCALES, LOCALE_LABEL } from "./locales";
import { useLocale } from "./LocaleContext";
import { localizePathname, stripLocale } from "./paths";
import { cn } from "../lib/cn";

export function LanguageSwitcher({
  className,
  align = "end",
  drop = "down",
}: {
  className?: string;
  align?: "start" | "end";
  drop?: "down" | "up";
}) {
  const { locale, t } = useLocale();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const bare = stripLocale(location.pathname);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className={cn("relative", className)} ref={rootRef}>
      <button
        type="button"
        className="link-draw flex cursor-pointer items-center gap-1 px-2 py-2 text-xs font-semibold tracking-[0.16em] text-cream/75"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.langAria}
        onClick={() => setOpen((v) => !v)}
      >
        {LOCALE_LABEL[locale]}
        <svg
          viewBox="0 0 24 24"
          className={cn("h-3.5 w-3.5 transition-transform duration-300", open && "rotate-180")}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open ? (
        <ul
          className={cn(
            "absolute z-20 min-w-[4.75rem] rounded-2xl border border-white/10 bg-panel p-1.5 shadow-glow",
            align === "end" ? "right-0" : "left-0",
            drop === "up" ? "bottom-full mb-2" : "top-full mt-2",
          )}
          role="listbox"
          aria-label={t.langAria}
        >
          {LOCALES.map((item) => {
            const to = `${localizePathname(bare, item)}${location.search}${location.hash}`;
            const current = item === locale;
            return (
              <li key={item} role="option" aria-selected={current}>
                <Link
                  to={to}
                  aria-current={current ? "true" : undefined}
                  className={cn(
                    "relative block rounded-xl px-3 py-2 text-xs font-semibold tracking-[0.16em] transition-colors hover:text-mint",
                    current ? "text-mint" : "text-cream/70",
                  )}
                >
                  {LOCALE_LABEL[item]}
                </Link>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
