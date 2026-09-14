import { SITE } from "../data/site";
import { BRANCHES } from "../data/branches";
import { LOCALES, LOCALE_OG, type Locale } from "../i18n/locales";
import { localizePathname } from "../i18n/paths";

export type FaqItem = { q: string; a: string };

export function absoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE.origin}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageUrl(barePath: string, locale: Locale) {
  return absoluteUrl(localizePathname(barePath || "/", locale));
}

export function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function upsertLink(rel: string, href: string, extras?: Record<string, string>) {
  const extra = extras
    ? Object.entries(extras)
        .map(([k, v]) => `[${k}="${v}"]`)
        .join("")
    : rel === "canonical"
      ? ":not([hreflang])"
      : "";
  let el = document.head.querySelector(`link[rel="${rel}"]${extra}`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    if (extras) {
      for (const [k, v] of Object.entries(extras)) el.setAttribute(k, v);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function schoolGraph(locale: Locale) {
  const home = pageUrl("/", locale);
  return {
    "@type": "MusicSchool",
    "@id": `${SITE.origin}/#school`,
    name: "DRUMSTARZ",
    alternateName: "DRUMSTARZ Riga",
    url: home,
    logo: absoluteUrl("/assets/img/logo.svg"),
    image: absoluteUrl(SITE.ogImage),
    telephone: "+37126253158",
    email: SITE.email,
    priceRange: "€€",
    foundingDate: "2013",
    sameAs: [SITE.instagram, SITE.facebook, SITE.youtube],
    areaServed: { "@type": "City", name: "Riga", addressCountry: "LV" },
    address: {
      "@type": "PostalAddress",
      streetAddress: BRANCHES.first.mapAddress,
      addressLocality: "Rīga",
      addressCountry: "LV",
    },
    location: [
      {
        "@type": "Place",
        name: "DRUMSTARZ Šarlotes",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Šarlotes iela 18A",
          addressLocality: "Rīga",
          addressCountry: "LV",
        },
      },
      {
        "@type": "Place",
        name: "DRUMSTARZ Tērbatas",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Tērbatas iela 76",
          addressLocality: "Rīga",
          addressCountry: "LV",
        },
      },
    ],
  };
}

export function seoGraph({
  locale,
  title,
  description,
  canonical,
  crumbs,
  faqs,
}: {
  locale: Locale;
  title: string;
  description: string;
  canonical: string;
  crumbs: { name: string; url: string }[];
  faqs?: readonly FaqItem[];
}) {
  const graph: Record<string, unknown>[] = [
    schoolGraph(locale),
    {
      "@type": "WebSite",
      "@id": `${SITE.origin}/#website`,
      url: pageUrl("/", locale),
      name: "DRUMSTARZ",
      inLanguage: LOCALES,
      publisher: { "@id": `${SITE.origin}/#school` },
    },
    {
      "@type": "WebPage",
      "@id": `${canonical}#webpage`,
      url: canonical,
      name: title,
      description,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE.origin}/#website` },
      about: { "@id": `${SITE.origin}/#school` },
      primaryImageOfPage: absoluteUrl(SITE.ogImage),
    },
  ];

  if (crumbs.length) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function applyDocumentSeo({
  locale,
  barePath,
  title,
  description,
  image,
  noindex,
  crumbs,
  faqs,
}: {
  locale: Locale;
  barePath: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
  crumbs: { name: string; url: string }[];
  faqs?: readonly FaqItem[];
}) {
  const canonical = pageUrl(barePath, locale);
  const imageUrl = absoluteUrl(image ?? SITE.ogImage);

  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
  upsertMeta("name", "author", "DRUMSTARZ");
  upsertLink("canonical", canonical);

  for (const item of LOCALES) {
    upsertLink("alternate", pageUrl(barePath, item), { hreflang: item });
  }
  upsertLink("alternate", pageUrl(barePath, "lv"), { hreflang: "x-default" });

  upsertMeta("property", "og:site_name", "DRUMSTARZ");
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:image", imageUrl);
  upsertMeta("property", "og:image:alt", title);
  upsertMeta("property", "og:locale", LOCALE_OG[locale]);
  document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach((el) => el.remove());
  LOCALES.filter((item) => item !== locale).forEach((item) => {
    const el = document.createElement("meta");
    el.setAttribute("property", "og:locale:alternate");
    el.setAttribute("content", LOCALE_OG[item]);
    document.head.appendChild(el);
  });

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", imageUrl);

  upsertJsonLd(
    "seo-graph",
    seoGraph({ locale, title, description, canonical, crumbs, faqs: noindex ? undefined : faqs }),
  );
}
