import type { ReactNode } from "react";
import { useLocale } from "../../i18n/LocaleContext";
import { BookingModal } from "../booking/BookingModal";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useLocale();
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#main">
        {t.skip}
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <BookingModal />
    </>
  );
}
