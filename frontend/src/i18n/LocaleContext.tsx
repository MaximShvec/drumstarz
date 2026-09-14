import { createContext, useContext, useEffect, useMemo, type ReactNode } from "react";
import { LOCALE_HTML, type Locale } from "./locales";
import { localizeHref, localizePathname, localizeTo } from "./paths";
import { UI, type UiCopy } from "./ui";
import type { To } from "react-router-dom";

type LocaleContextValue = {
  locale: Locale;
  t: UiCopy;
  href: (path: string) => string;
  to: (path: To) => To;
  path: (pathname: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: UI[locale],
      href: (path) => localizeHref(path, locale),
      to: (path) => localizeTo(path, locale),
      path: (pathname) => localizePathname(pathname, locale),
    }),
    [locale],
  );

  useEffect(() => {
    document.documentElement.lang = LOCALE_HTML[locale];
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
