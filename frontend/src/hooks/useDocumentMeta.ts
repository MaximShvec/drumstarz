import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLocale } from "../i18n/LocaleContext";
import { stripLocale } from "../i18n/paths";
import { applyDocumentSeo, pageUrl, type FaqItem } from "../lib/seo";

const CRUMB_KEYS = [
  "trainers",
  "contacts",
  "percussions",
  "events",
  "kids",
  "giftcard",
  "camp",
] as const;

type CrumbKey = (typeof CRUMB_KEYS)[number];

function isCrumbKey(value: string): value is CrumbKey {
  return (CRUMB_KEYS as readonly string[]).includes(value);
}

export function useDocumentMeta(
  title: string,
  description?: string,
  extras?: { image?: string; noindex?: boolean; faqs?: readonly FaqItem[] },
) {
  const { locale, t } = useLocale();
  const location = useLocation();
  const bare = stripLocale(location.pathname) || "/";
  const desc = description ?? "";
  const image = extras?.image;
  const noindex = extras?.noindex;
  const faqs = extras?.faqs;

  useEffect(() => {
    const crumbs = [{ name: t.crumbs.home, url: pageUrl("/", locale) }];
    if (bare !== "/") {
      const key = bare.replace(/^\//, "");
      crumbs.push({
        name: isCrumbKey(key) ? t.crumbs[key] : title,
        url: pageUrl(bare, locale),
      });
    }

    applyDocumentSeo({
      locale,
      barePath: bare,
      title,
      description: desc,
      image,
      noindex,
      crumbs,
      faqs,
    });
  }, [bare, desc, faqs, image, locale, noindex, t, title]);
}
