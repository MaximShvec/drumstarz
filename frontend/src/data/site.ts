export const SITE = {
  name: "DRUMSTARZ",
  city: "RIGA",
  origin: (import.meta.env.VITE_SITE_URL ?? "https://drumstarz.vercel.app").replace(/\/$/, ""),
  ogImage: "/og.jpg",
  phone: "+371 26 25 31 58",
  phoneHref: "tel:+37126253158",
  whatsapp: "https://wa.me/37126253158",
  email: "drumstarz.riga@gmail.com",
  emailHref: "mailto:drumstarz.riga@gmail.com",
  instagram: "https://instagram.com/drumstarzlv",
  facebook: "https://facebook.com/drumstarz.riga",
  youtube: "https://youtube.com/@drumstarzriga9082",
  year: 2026,
} as const;

export const NAV = [
  { id: "prices", to: "/#prices" },
  { id: "trainers", to: "/trainers" },
  { id: "faq", to: "/#faq" },
  { id: "contacts", to: "/contacts" },
] as const;

export const EXTRAS = [
  { id: "percussions", to: "/percussions" },
  { id: "events", to: "/events" },
  { id: "kids", to: "/kids" },
  { id: "giftcard", to: "/giftcard" },
] as const;

export const FOOTER_SCHOOL = [
  { id: "schoolPrices", to: "/#prices" },
  { id: "schoolTrainers", to: "/trainers" },
  { id: "schoolFaq", to: "/#faq" },
] as const;

export const FOOTER_FORMATS = [
  { id: "formatPercussion", to: "/percussions" },
  { id: "formatGift", to: "/giftcard" },
  { id: "formatEvents", to: "/events" },
  { id: "formatCamp", to: "/camp" },
] as const;
