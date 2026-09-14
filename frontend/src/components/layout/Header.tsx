import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { EXTRAS, NAV, SITE } from "../../data/site";
import { useBooking } from "../../context/BookingContext";
import { useLocale } from "../../i18n/LocaleContext";
import { LanguageSwitcher } from "../../i18n/LanguageSwitcher";
import { samePath, stripLocale } from "../../i18n/paths";
import { Button } from "../ui/Button";
import { cn } from "../../lib/cn";
import { lockBodyScroll } from "../../lib/scrollLock";

export function Header() {
  const { openBooking } = useBooking();
  const { t, href } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [extrasOpen, setExtrasOpen] = useState(false);
  const extrasRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const extrasActive = EXTRAS.some((item) => stripLocale(location.pathname) === item.to);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExtrasOpen(false);
  }, [location]);

  useEffect(() => {
    if (!open) return;
    return lockBodyScroll();
  }, [open]);

  useEffect(() => {
    if (!extrasOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (extrasRef.current?.contains(e.target as Node)) return;
      setExtrasOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExtrasOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("keydown", onKey);
    };
  }, [extrasOpen]);

  return (
    <>
      {extrasOpen ? (
        <div
          className="fixed inset-0 z-40"
          aria-hidden="true"
          onPointerDown={() => setExtrasOpen(false)}
        />
      ) : null}
      <header className="fixed inset-x-0 top-0 z-50 pr-[var(--scrollbar-compensation)]">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 -z-10 transition-colors duration-300",
            scrolled || open ? "bg-void/85 backdrop-blur-md" : "bg-transparent",
          )}
          aria-hidden="true"
        />
        <div className="container-site flex h-[72px] items-center justify-between gap-4 lg:h-[88px]">
          <Link to={href("/")} className="flex shrink-0 items-center gap-3" aria-label={t.homeAria}>
            <img src="/assets/img/logo.svg" alt="" width={48} height={48} className="h-10 w-10 lg:h-12 lg:w-12" />
            <span className="hidden font-display text-sm font-semibold tracking-[0.18em] text-cream sm:block">
              DRUMSTARZ
            </span>
          </Link>

          <nav className="hidden items-center gap-1 min-[980px]:flex" aria-label={t.navAria}>
            {NAV.map((item) => (
              <HashOrRoute
                key={item.to}
                to={item.to}
                className={cn(
                  "link-draw px-3 py-2 text-sm",
                  !item.to.includes("#") && stripLocale(location.pathname) === item.to
                    ? "text-mint"
                    : "text-cream/75",
                )}
              >
                {t.nav[item.id]}
              </HashOrRoute>
            ))}
            <div className="relative" ref={extrasRef}>
              <button
                type="button"
                className={cn(
                  "link-draw flex cursor-pointer items-center gap-1 px-3 py-2 text-sm",
                  extrasActive ? "text-mint" : "text-cream/75",
                )}
                aria-expanded={extrasOpen}
                aria-haspopup="true"
                onClick={() => setExtrasOpen((v) => !v)}
              >
                {t.extras}
                <svg
                  viewBox="0 0 24 24"
                  className={cn("h-4 w-4 transition-transform duration-300", extrasOpen && "rotate-180")}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {extrasOpen ? (
                <ul className="absolute left-0 top-full z-10 mt-2 min-w-56 rounded-2xl border border-white/10 bg-panel p-2 shadow-glow">
                  {EXTRAS.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={href(item.to)}
                        className={() =>
                          cn(
                            "relative block rounded-xl px-4 py-2.5 text-sm transition-colors before:absolute before:left-2 before:top-1/2 before:h-0 before:w-0.5 before:-translate-y-1/2 before:rounded-full before:bg-mint before:transition-all hover:text-mint hover:before:h-4",
                            stripLocale(location.pathname) === item.to ? "text-mint before:h-4" : "text-cream/80",
                          )
                        }
                      >
                        {t.extrasItems[item.id]}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitcher className="hidden md:block" />
            <a href={SITE.phoneHref} className="link-draw hidden text-sm text-cream/80 md:inline">
              {SITE.phone}
            </a>
            <Button variant="primary" className="hidden px-5 py-2.5 text-xs uppercase tracking-[0.14em] sm:inline-flex" onClick={openBooking}>
              {t.book}
            </Button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.whatsappAria}
              className="icon-btn hidden h-10 w-10 items-center justify-center rounded-full border border-white/10 sm:flex"
            >
              <img src="/assets/icons/whatsapp.png" alt="" className="h-5 w-5" />
            </a>
            <button
              type="button"
              className="relative flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/15 min-[980px]:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.closeMenu : t.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-3.5 w-[18px]" aria-hidden="true">
                <span
                  className="absolute left-0 right-0 h-px bg-cream"
                  style={{
                    top: "50%",
                    transform: open ? "translateY(-50%) rotate(45deg)" : "translateY(-6px)",
                    transition: "transform 0.3s ease",
                  }}
                />
                <span
                  className="absolute left-0 right-0 h-px bg-cream"
                  style={{
                    top: "50%",
                    transform: open ? "translateY(-50%) rotate(-45deg)" : "translateY(6px)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={cn("mobile-nav fixed inset-0 z-40 bg-void min-[980px]:hidden", open && "is-open")}
        role="dialog"
        aria-modal={open}
        aria-label={t.mobileMenu}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain pt-[72px]">
          <nav
            className="container-site flex min-h-full flex-col pb-[max(2.5rem,env(safe-area-inset-bottom))]"
            aria-label={t.navMobileAria}
          >
            {NAV.map((item, i) => (
              <HashOrRoute
                key={item.to}
                to={item.to}
                className="mobile-nav-item block border-b border-white/10 py-4 font-display text-3xl tracking-tight text-cream"
                style={{ animationDelay: `${90 + i * 55}ms` }}
                onClick={() => setOpen(false)}
              >
                {t.nav[item.id]}
              </HashOrRoute>
            ))}
            <p
              className="mobile-nav-item pt-6 text-xs uppercase tracking-[0.2em] text-mint"
              style={{ animationDelay: `${90 + NAV.length * 55}ms` }}
            >
              {t.extras}
            </p>
            {EXTRAS.map((item, i) => (
              <NavLink
                key={item.to}
                to={href(item.to)}
                className={() =>
                  cn("mobile-nav-item py-2.5 text-lg", stripLocale(location.pathname) === item.to ? "text-mint" : "text-cream/80")
                }
                style={{ animationDelay: `${140 + (NAV.length + i) * 55}ms` }}
                onClick={() => setOpen(false)}
              >
                {t.extrasItems[item.id]}
              </NavLink>
            ))}
            <div
              className="mobile-nav-item mt-auto flex flex-col gap-3 pt-10"
              style={{ animationDelay: `${200 + (NAV.length + EXTRAS.length) * 55}ms` }}
            >
              <LanguageSwitcher className="w-fit" drop="up" align="start" />
              <a href={SITE.phoneHref} className="link-draw w-fit text-cream/70">
                {SITE.phone}
              </a>
              <Button
                className="w-full py-4"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
              >
                {t.book}
              </Button>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-2 text-mint"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

function HashOrRoute({
  to,
  className,
  children,
  onClick,
  style,
}: {
  to: string;
  className?: string;
  children: string;
  onClick?: () => void;
  style?: CSSProperties;
}) {
  const location = useLocation();
  const { href } = useLocale();
  const localized = href(to);
  const hashIndex = localized.indexOf("#");
  const pathname = hashIndex === -1 ? localized : localized.slice(0, hashIndex) || "/";
  const hash = hashIndex === -1 ? "" : localized.slice(hashIndex);

  if (hash && samePath(location.pathname, pathname)) {
    return (
      <a href={hash} className={className} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <NavLink
      to={hash ? { pathname, hash } : localized}
      end
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}
