import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLocale } from "../i18n/LocaleContext";
import { ButtonLink } from "../components/ui/Button";

export function NotFoundPage() {
  const { t } = useLocale();
  useDocumentMeta(t.notFound.metaTitle, t.notFound.metaDescription, { noindex: true });

  return (
    <section className="container-site flex min-h-svh flex-col justify-center pb-24 pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-mint">404</p>
      <h1 className="mt-4 max-w-[12ch] font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.04em] sm:text-7xl">
        {t.notFound.title}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-cream/70">{t.notFound.lead}</p>
      <ButtonLink to="/" className="mt-8 w-fit px-8 py-4">
        {t.notFound.home}
      </ButtonLink>
    </section>
  );
}
