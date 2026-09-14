export const SITE = {
  name: "DRUMSTARZ",
  city: "RIGA",
  tagline: "Школа барабанов №1 в Риге!",
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
  { label: "Цены", to: "/#prices" },
  { label: "Преподаватели", to: "/trainers" },
  { label: "FAQ", to: "/#faq" },
  { label: "Контакты", to: "/contacts" },
] as const;

export const EXTRAS = [
  { label: "Перкуссии", to: "/percussions" },
  { label: "Праздник для взрослых", to: "/events" },
  { label: "Детский праздник", to: "/kids" },
  { label: "Подарок", to: "/giftcard" },
] as const;

export const FOOTER_SCHOOL = [
  { label: "Цены и тарифы", to: "/#prices" },
  { label: "Преподаватели школы", to: "/trainers" },
  { label: "Частые вопросы", to: "/#faq" },
] as const;

export const FOOTER_FORMATS = [
  { label: "Перкуссия", to: "/percussions" },
  { label: "Подарочная карта", to: "/giftcard" },
  { label: "Мероприятия", to: "/events" },
  { label: "Летний лагерь", to: "/camp" },
] as const;
