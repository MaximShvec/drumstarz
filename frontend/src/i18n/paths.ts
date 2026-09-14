import type { To } from "react-router-dom";
import { DEFAULT_LOCALE, isPrefixLocale, type Locale } from "./locales";

export function stripLocale(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts[0] && isPrefixLocale(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  if (parts[0] === "lv") {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function localeFromPath(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  if (isPrefixLocale(first)) return first;
  return DEFAULT_LOCALE;
}

export function localizePathname(pathname: string, locale: Locale): string {
  const bare = stripLocale(pathname) || "/";
  if (locale === DEFAULT_LOCALE) return bare;
  if (bare === "/") return `/${locale}`;
  return `/${locale}${bare}`;
}

export function localizeHref(href: string, locale: Locale): string {
  if (!href || /^(https?:|tel:|mailto:|whatsapp:)/i.test(href)) return href;
  if (href.startsWith("#")) return href;
  const url = new URL(href, "http://local.invalid");
  return `${localizePathname(url.pathname, locale)}${url.search}${url.hash}`;
}

export function localizeTo(to: To, locale: Locale): To {
  if (typeof to === "string") return localizeHref(to, locale);
  if (typeof to === "number") return to;
  return {
    ...to,
    pathname: to.pathname ? localizePathname(to.pathname, locale) : to.pathname,
  };
}

export function samePath(a: string, b: string): boolean {
  const left = a.replace(/\/+$/, "") || "/";
  const right = b.replace(/\/+$/, "") || "/";
  return left === right;
}
