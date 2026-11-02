import { stripLocale } from "../i18n/paths";

const PAGES: { test: (path: string) => boolean; source: string; sourceLabel: string }[] = [
  { test: (path) => path === "/percussions", source: "percussions", sourceLabel: "Перкуссия" },
  { test: (path) => path === "/events", source: "events", sourceLabel: "Мероприятия" },
  { test: (path) => path === "/kids", source: "kids", sourceLabel: "Детский праздник" },
  { test: (path) => path === "/giftcard", source: "giftcard", sourceLabel: "Подарочная" },
  { test: (path) => path === "/camp", source: "camp", sourceLabel: "Лагерь" },
  { test: (path) => path === "/trainers", source: "trainers", sourceLabel: "Преподаватели" },
  { test: (path) => path === "/contacts", source: "contacts", sourceLabel: "Контакты" },
  {
    test: (path) => path === "/jaunumi" || path === "/novosti" || path === "/blog" || path.startsWith("/jaunumi/") || path.startsWith("/novosti/") || path.startsWith("/blog/"),
    source: "news",
    sourceLabel: "Новости",
  },
];

export function leadFromPath(pathname: string) {
  const path = stripLocale(pathname);
  const match = PAGES.find((item) => item.test(path));
  return {
    source: match?.source ?? "drums",
    sourceLabel: match?.sourceLabel ?? "Барабаны",
    page: path || "/",
  };
}
