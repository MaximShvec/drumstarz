import { LOCALES } from "../i18n/locales";
import { localizePathname } from "../i18n/paths";

export const SITE_PAGES = [
  "/",
  "/trainers",
  "/contacts",
  "/percussions",
  "/events",
  "/kids",
  "/giftcard",
  "/camp",
] as const;

export function buildSitemap(origin: string) {
  const host = origin.replace(/\/$/, "");
  const loc = (path: string, locale: (typeof LOCALES)[number]) =>
    `${host}${localizePathname(path, locale)}`;

  const urls = SITE_PAGES.map((path) => {
    const alternates = [
      ...LOCALES.map(
        (locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${loc(path, locale)}" />`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(path, "lv")}" />`,
    ].join("\n");

    return `  <url>
    <loc>${loc(path, "lv")}</loc>
${alternates}
    <changefreq>weekly</changefreq>
  </url>`;
  }).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export function buildRobots(origin: string) {
  return `User-agent: *
Allow: /
Disallow: /lv
Disallow: /lv/

Sitemap: ${origin.replace(/\/$/, "")}/sitemap.xml
`;
}
