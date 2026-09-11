import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import { useLenis } from "./hooks/useLenis";
import { SiteLayout } from "./components/layout/SiteLayout";
import { HomePage } from "./pages/HomePage";
import { PlaceholderPage } from "./pages/PlaceholderPage";

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
        <Route path="/trainers" element={<PlaceholderPage title="Преподаватели" />} />
        <Route path="/contacts" element={<PlaceholderPage title="Контакты" />} />
        <Route path="/percussions" element={<PlaceholderPage title="Перкуссии" />} />
        <Route path="/events" element={<PlaceholderPage title="Мероприятия" />} />
        <Route path="/kids" element={<PlaceholderPage title="Детский праздник" />} />
        <Route path="/giftcard" element={<PlaceholderPage title="Подарочная карта" />} />
        <Route path="/camp" element={<PlaceholderPage title="Летний лагерь" />} />
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
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, [hash, pathname]);
}
