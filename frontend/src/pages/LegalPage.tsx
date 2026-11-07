import { legalText, type LegalKind } from "../content/legal";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLocale } from "../i18n/LocaleContext";

const META: Record<LegalKind, Record<"lv" | "ru" | "en", { title: string; description: string }>> = {
  cookies: {
    lv: { title: "Sīkdatņu politika — DRUMSTARZ", description: "Kā DRUMSTARZ izmanto sīkdatnes vietnē drumstarz.lv." },
    ru: { title: "Политика cookies — DRUMSTARZ", description: "Как DRUMSTARZ использует cookies на drumstarz.lv." },
    en: { title: "Cookie policy — DRUMSTARZ", description: "How DRUMSTARZ uses cookies on drumstarz.lv." },
  },
  privacy: {
    lv: { title: "Privātuma politika — DRUMSTARZ", description: "DRUMSTARZ privātuma politika." },
    ru: { title: "Политика конфиденциальности — DRUMSTARZ", description: "Политика конфиденциальности DRUMSTARZ." },
    en: { title: "Privacy policy — DRUMSTARZ", description: "DRUMSTARZ privacy policy." },
  },
  terms: {
    lv: { title: "Lietošanas noteikumi — DRUMSTARZ", description: "DRUMSTARZ vietnes lietošanas noteikumi." },
    ru: { title: "Пользовательское соглашение — DRUMSTARZ", description: "Пользовательское соглашение сайта DRUMSTARZ." },
    en: { title: "Terms of use — DRUMSTARZ", description: "DRUMSTARZ website terms of use." },
  },
};

export function LegalPage({ kind }: { kind: LegalKind }) {
  const { locale } = useLocale();
  const meta = META[kind][locale];
  useDocumentMeta(meta.title, meta.description);
  const text = legalText(kind, locale);
  const [title, ...rest] = text.split(/\n\n+/);

  return (
    <article className="container-site pb-12 pt-32">
      <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        {title}
      </h1>
      <div className="mt-10 max-w-3xl space-y-5 text-base leading-relaxed text-cream/75">
        {rest.map((paragraph) => (
          <p key={paragraph.slice(0, 48)} className="whitespace-pre-wrap">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
