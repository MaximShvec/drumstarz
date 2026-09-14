export const LOCALES = ["lv", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "lv";
export const PREFIX_LOCALES = ["ru", "en"] as const;

export const LOCALE_LABEL: Record<Locale, string> = {
  lv: "LV",
  ru: "RU",
  en: "EN",
};

export const LOCALE_HTML: Record<Locale, string> = {
  lv: "lv",
  ru: "ru",
  en: "en",
};

export function isLocale(value: string | undefined): value is Locale {
  return value === "lv" || value === "ru" || value === "en";
}

export function isPrefixLocale(value: string | undefined): value is (typeof PREFIX_LOCALES)[number] {
  return value === "ru" || value === "en";
}
