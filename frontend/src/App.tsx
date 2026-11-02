import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import { ConsentProvider } from "./context/ConsentContext";
import { useLenis, scrollToId } from "./hooks/useLenis";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { LegalPage } from "./pages/LegalPage";
import { NewsArticlePage, NewsListPage } from "./pages/NewsPage";
import { LocaleProvider, useLocale } from "./i18n/LocaleContext";
import type { Locale } from "./i18n/locales";

const LEGACY: { from: string; to: string }[] = [
  { from: "bungas-berniem", to: "/kids" },
  { from: "bungas-pieaugusiem", to: "/events" },
  { from: "cenas", to: "/#prices" },
  { from: "davana", to: "/giftcard" },
  { from: "konfidencialitates-politika", to: "/privacy" },
  { from: "kontakti", to: "/contacts" },
  { from: "lietosanas-noteikumi", to: "/terms" },
  { from: "nometne", to: "/camp" },
  { from: "pasniedzeji", to: "/trainers" },
  { from: "perkusijas", to: "/percussions" },
  { from: "barabani-detskie", to: "/kids" },
  { from: "barabani-vzroslim", to: "/events" },
  { from: "ceni", to: "/#prices" },
  { from: "lager", to: "/camp" },
  { from: "perkussii", to: "/percussions" },
  { from: "podarok", to: "/giftcard" },
  { from: "politika-konfidentsialnosti", to: "/privacy" },
  { from: "polzovatelskoe-soglashenie", to: "/terms" },
  { from: "prepodavateli", to: "/trainers" },
  { from: "for-adults", to: "/events" },
  { from: "for-children", to: "/kids" },
  { from: "instructors", to: "/trainers" },
  { from: "prices", to: "/#prices" },
  { from: "privacy-policy", to: "/privacy" },
  { from: "terms-of-service", to: "/terms" },
  { from: "faq", to: "/#faq" },
];

const TrainersPage = lazy(() => import("./pages/TrainersPage").then((m) => ({ default: m.TrainersPage })));
const ContactsPage = lazy(() => import("./pages/ContactsPage").then((m) => ({ default: m.ContactsPage })));
const PercussionsPage = lazy(() => import("./pages/PercussionsPage").then((m) => ({ default: m.PercussionsPage })));
const EventsPage = lazy(() => import("./pages/EventsPage").then((m) => ({ default: m.EventsPage })));
const KidsPage = lazy(() => import("./pages/KidsPage").then((m) => ({ default: m.KidsPage })));
const GiftcardPage = lazy(() => import("./pages/GiftcardPage").then((m) => ({ default: m.GiftcardPage })));
const CampPage = lazy(() => import("./pages/CampPage").then((m) => ({ default: m.CampPage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage })));

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ConsentProvider>
        <Routes>
          <Route path="/lv/*" element={<RedirectDefaultLocale />} />
          <Route path="/ru/*" element={<LocalizedApp locale="ru" />} />
          <Route path="/en/*" element={<LocalizedApp locale="en" />} />
          <Route path="/*" element={<LocalizedApp locale="lv" />} />
        </Routes>
        </ConsentProvider>
      </BookingProvider>
    </BrowserRouter>
  );
}

function RedirectDefaultLocale() {
  const { pathname, search, hash } = useLocation();
  const rest = pathname.replace(/^\/lv/, "") || "/";
  return <Navigate to={`${rest}${search}${hash}`} replace />;
}

function LocalizedApp({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <AppShell />
    </LocaleProvider>
  );
}

function AppShell() {
  useLenis();
  useHashScroll();

  return (
    <SiteLayout>
      <Suspense fallback={<div className="min-h-svh bg-void" aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="trainers" element={<TrainersPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="percussions" element={<PercussionsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="kids" element={<KidsPage />} />
          <Route path="giftcard" element={<GiftcardPage />} />
          <Route path="camp" element={<CampPage />} />
          <Route path="jaunumi" element={<NewsListPage />} />
          <Route path="jaunumi/:slug" element={<NewsArticlePage />} />
          <Route path="novosti" element={<NewsListPage />} />
          <Route path="novosti/:slug" element={<NewsArticlePage />} />
          <Route path="blog" element={<NewsListPage />} />
          <Route path="blog/:slug" element={<NewsArticlePage />} />
          <Route path="cookies" element={<LegalPage kind="cookies" />} />
          <Route path="privacy" element={<LegalPage kind="privacy" />} />
          <Route path="terms" element={<LegalPage kind="terms" />} />
          {LEGACY.map((item) => (
            <Route key={item.from} path={item.from} element={<LegacyRedirect to={item.to} />} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}

function LegacyRedirect({ to }: { to: string }) {
  const { href } = useLocale();
  return <Navigate to={href(to)} replace />;
}

function useHashScroll() {
  const { hash, pathname, search } = useLocation();

  useEffect(() => {
    const id = hash.replace("#", "");
    const params = new URLSearchParams(search);
    const hasRouteTarget = params.has("branch") || params.has("route");
    const timer = window.setTimeout(() => {
      if (!id) {
        if (!hasRouteTarget) window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      scrollToId(id);
    }, 160);
    return () => window.clearTimeout(timer);
  }, [hash, pathname, search]);
}
