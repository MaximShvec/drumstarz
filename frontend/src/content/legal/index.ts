import cookieEn from "./cookie-policy-en.txt?raw";
import cookieLv from "./cookie-policy-lv.txt?raw";
import cookieRu from "./cookie-policy-ru.txt?raw";
import privacyEn from "./privacy-policy-en.txt?raw";
import privacyLv from "./privacy-policy-lv.txt?raw";
import privacyRu from "./privacy-policy-ru.txt?raw";
import termsEn from "./terms-of-use-en.txt?raw";
import termsLv from "./terms-of-use-lv.txt?raw";
import termsRu from "./terms-of-use-ru.txt?raw";
import type { Locale } from "../../i18n/locales";

export type LegalKind = "cookies" | "privacy" | "terms";

const TEXTS: Record<LegalKind, Record<Locale, string>> = {
  cookies: { lv: cookieLv, ru: cookieRu, en: cookieEn },
  privacy: { lv: privacyLv, ru: privacyRu, en: privacyEn },
  terms: { lv: termsLv, ru: termsRu, en: termsEn },
};

export function legalText(kind: LegalKind, locale: Locale) {
  return TEXTS[kind][locale].replace(/^\uFEFF/, "").trim();
}
