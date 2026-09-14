import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import { useLenis, scrollToId } from "./hooks/useLenis";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { TrainersPage } from "./pages/TrainersPage";
import { ContactsPage } from "./pages/ContactsPage";
import { PercussionsPage } from "./pages/PercussionsPage";
import { EventsPage } from "./pages/EventsPage";
import { KidsPage } from "./pages/KidsPage";
import { GiftcardPage } from "./pages/GiftcardPage";
import { CampPage } from "./pages/CampPage";

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <AppShell />
      </BookingProvider>
    </BrowserRouter>
  );
}

function AppShell() {
  useLenis();
  useHashScroll();

  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trainers" element={<TrainersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/percussions" element={<PercussionsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/giftcard" element={<GiftcardPage />} />
        <Route path="/camp" element={<CampPage />} />
      </Routes>
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
