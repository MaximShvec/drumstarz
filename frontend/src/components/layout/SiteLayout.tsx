import type { ReactNode } from "react";
import { BookingModal } from "../booking/BookingModal";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Перейти к содержимому
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <BookingModal />
    </>
  );
}
