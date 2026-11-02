import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const origin = (process.env.VITE_SITE_URL ?? "https://drumstarz.vercel.app").replace(/\/$/, "");
const lastmod = new Date().toISOString().slice(0, 10);
const locales = ["lv", "ru", "en"];
const pages = [
  "/",
  "/trainers",
  "/contacts",
  "/percussions",
  "/events",
  "/kids",
  "/giftcard",
  "/camp",
  "/cookies",
  "/privacy",
  "/terms",
];

const newsPaths = { lv: "/jaunumi", ru: "/novosti", en: "/blog" };

function localize(path, locale) {
  if (locale === "lv") return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

function loc(path, locale) {
  return `${origin}${localize(path, locale)}`;
}

const urls = pages
  .map((path) => {
    const alternates = [
      ...locales.map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${loc(path, locale)}" />`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${loc(path, "lv")}" />`,
    ].join("\n");

    return `  <url>
    <loc>${loc(path, "lv")}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`;
  })
  .join("\n");

const newsAlternates = [
  ...locales.map((locale) => `    <xhtml:link rel="alternate" hreflang="${locale}" href="${origin}${localize(newsPaths[locale], locale)}" />`),
  `    <xhtml:link rel="alternate" hreflang="x-default" href="${origin}${newsPaths.lv}" />`,
].join("\n");

const newsUrl = `  <url>
    <loc>${origin}${newsPaths.lv}</loc>
${newsAlternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
${newsUrl}
</urlset>
`;

const robots = `User-agent: *
Allow: /
Disallow: /lv
Disallow: /lv/

Sitemap: ${origin}/sitemap.xml
`;

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
writeFileSync(join(root, "sitemap.xml"), sitemap);
writeFileSync(join(root, "robots.txt"), robots);
console.log(`Wrote sitemap.xml and robots.txt for ${origin}`);
