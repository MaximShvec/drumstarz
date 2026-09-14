import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import { useLenis, scrollToId } from "./hooks/useLenis";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { LocaleProvider } from "./i18n/LocaleContext";
import type { Locale } from "./i18n/locales";

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
        <Routes>
          <Route path="/lv/*" element={<RedirectDefaultLocale />} />
          <Route path="/ru/*" element={<LocalizedApp locale="ru" />} />
          <Route path="/en/*" element={<LocalizedApp locale="en" />} />
          <Route path="/*" element={<LocalizedApp locale="lv" />} />
        </Routes>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </SiteLayout>
  );
}

function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const id = hash.replace("#", "");
    const timer = window.setTimeout(() => {
      if (!id) {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }
      scrollToId(id);
    }, 160);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);
}
