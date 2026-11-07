import { Link, Navigate, useParams } from "react-router-dom";
import news from "../data/news.json";
import { useDocumentMeta } from "../hooks/useDocumentMeta";
import { useLocale } from "../i18n/LocaleContext";
import type { Locale } from "../i18n/locales";

export type NewsArticle = {
  date: string;
  image: string;
  slug: Record<Locale, string>;
  title: Record<Locale, string>;
  paragraphs: Record<Locale, string[]>;
};

const ARTICLES = news as NewsArticle[];

export function newsBase(locale: Locale) {
  if (locale === "ru") return "/novosti";
  if (locale === "en") return "/blog";
  return "/jaunumi";
}

const LIST_META: Record<Locale, { title: string; description: string; heading: string; kicker: string }> = {
  lv: {
    title: "Jaunumi — DRUMSTARZ",
    description: "DRUMSTARZ bungu skolas jaunumi Rīgā.",
    heading: "Skolas jaunumi",
    kicker: "Blogs",
  },
  ru: {
    title: "Новости — DRUMSTARZ",
    description: "Новости школы барабанов DRUMSTARZ в Риге.",
    heading: "Блог школы барабанов",
    kicker: "Новости",
  },
  en: {
    title: "News — DRUMSTARZ",
    description: "News from the DRUMSTARZ drum school in Riga.",
    heading: "School news",
    kicker: "Blog",
  },
};

function formatDate(value: string) {
  const [year, month, day] = value.split("-");
  if (!year || !month || !day) return value;
  return `${day}.${month}.${year}`;
}

export function NewsListPage() {
  const { locale, href } = useLocale();
  const meta = LIST_META[locale];
  useDocumentMeta(meta.title, meta.description);
  const base = newsBase(locale);

  return (
    <section className="container-site pb-12 pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-mint">{meta.kicker}</p>
      <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl">
        {meta.heading}
      </h1>
      <ul className="mt-12 grid gap-8 md:grid-cols-2">
        {ARTICLES.map((article) => (
          <li key={article.slug[locale]}>
            <Link to={href(`${base}/${article.slug[locale]}`)} className="group block">
              {article.image ? (
                <img
                  src={article.image}
                  alt=""
                  className="aspect-[16/10] w-full rounded-[1.4rem] object-cover"
                  loading="lazy"
                />
              ) : null}
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-cream/45">{formatDate(article.date)}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold leading-tight group-hover:text-mint">
                {article.title[locale]}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function NewsArticlePage() {
  const { slug } = useParams();
  const { locale, href } = useLocale();
  const base = newsBase(locale);
  const article = ARTICLES.find((item) => item.slug[locale] === slug);
  useDocumentMeta(article?.title[locale] ?? LIST_META[locale].title, article?.paragraphs[locale][0] ?? LIST_META[locale].description);

  if (!article) return <Navigate to={href(base)} replace />;

  return (
    <article className="container-site pb-12 pt-32">
      <Link to={href(base)} className="link-draw text-sm text-mint">
        ← {LIST_META[locale].kicker}
      </Link>
      <p className="mt-6 text-xs uppercase tracking-[0.16em] text-cream/45">{formatDate(article.date)}</p>
      <h1 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
        {article.title[locale]}
      </h1>
      {article.image ? (
        <img src={article.image} alt="" className="mt-8 aspect-[16/9] w-full rounded-[1.6rem] object-cover" />
      ) : null}
      <div className="mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-cream/75">
        {article.paragraphs[locale].map((paragraph) => (
          <p key={paragraph.slice(0, 64)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
