import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FOOTER_FORMATS, FOOTER_SCHOOL, SITE } from "../../data/site";
import { useLocale } from "../../i18n/LocaleContext";

export function Footer() {
  const { t, href } = useLocale();

  return (
    <footer className="border-t border-white/8 bg-void-2">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to={href("/")} className="inline-flex items-center gap-3">
            <img src="/assets/img/logo.svg" alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-sm tracking-[0.16em]">Drumstarz Riga</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/55">{t.footer.blurb}</p>
          <div className="mt-5 flex gap-3">
            <Social href={SITE.instagram} label="Instagram DRUMSTARZ">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </Social>
            <Social href={SITE.facebook} label="Facebook DRUMSTARZ">
              <path
                fill="currentColor"
                d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"
              />
            </Social>
            <Social href={SITE.youtube} label="YouTube DRUMSTARZ">
              <path
                fill="currentColor"
                d="M22 12s0-3.2-.4-4.7a2.8 2.8 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.8 2.8 0 0 0 2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.8 2.8 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.8 2.8 0 0 0 2-2C22 15.2 22 12 22 12zM10 15V9l5.2 3-5.2 3z"
              />
            </Social>
          </div>
        </div>

        <FooterCol title={t.footer.school}>
          {FOOTER_SCHOOL.map((item) => (
            <li key={item.id}>
              <Link to={href(item.to)} className="link-draw text-sm text-cream/60">
                {t.footer[item.id]}
              </Link>
            </li>
          ))}
          <li>
            <span className="text-sm text-cream/60">{t.footer.news}</span>
          </li>
        </FooterCol>

        <FooterCol title={t.footer.formats}>
          {FOOTER_FORMATS.map((item) => (
            <li key={item.to}>
              <Link to={href(item.to)} className="link-draw text-sm text-cream/60">
                {t.footer[item.id]}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title={t.footer.contact}>
          <li>
            <a href={SITE.phoneHref} className="link-draw text-sm text-cream/60">
              {SITE.phone}
            </a>
          </li>
          <li>
            <a href={SITE.emailHref} className="link-draw text-sm text-cream/60">
              {SITE.email}
            </a>
          </li>
        </FooterCol>
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-white/8 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
        <p>DRUMSTARZ © {SITE.year}. {t.footer.rights}</p>
        <p className="flex gap-4">
          <span>{t.footer.privacy}</span>
          <span>{t.footer.terms}</span>
        </p>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-mint">{title}</p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="icon-btn flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-cream/70"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4">
        {children}
      </svg>
    </a>
  );
}
