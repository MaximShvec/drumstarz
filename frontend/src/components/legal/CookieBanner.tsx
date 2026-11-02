import { useState } from "react";
import { Link } from "react-router-dom";
import { useConsent } from "../../context/ConsentContext";
import { useLocale } from "../../i18n/LocaleContext";
import type { Locale } from "../../i18n/locales";
import { Button } from "../ui/Button";

const COPY: Record<
  Locale,
  {
    text: string;
    accept: string;
    reject: string;
    settings: string;
    title: string;
    necessary: string;
    necessaryHint: string;
    analytics: string;
    analyticsHint: string;
    marketing: string;
    marketingHint: string;
    save: string;
    policy: string;
    footer: string;
  }
> = {
  lv: {
    text: "Obligātās sīkdatnes nodrošina vietnes darbību. Analītiskās un mārketinga sīkdatnes ieslēdzas tikai pēc jūsu piekrišanas.",
    accept: "Pieņemt visu",
    reject: "Noraidīt neobligātās",
    settings: "Iestatīt",
    title: "Sīkdatņu iestatījumi",
    necessary: "Obligātās",
    necessaryHint: "Vajadzīgas vietnes darbībai un jūsu izvēles saglabāšanai. Vienmēr ieslēgtas.",
    analytics: "Analītiskās",
    analyticsHint: "Apmeklējumu statistika. Pagaidām nav pieslēgta.",
    marketing: "Mārketinga",
    marketingHint: "Reklāma, iegultās kartes un video. Pagaidām nav pieslēgti.",
    save: "Saglabāt izvēli",
    policy: "Sīkdatņu politika",
    footer: "Sīkdatņu iestatījumi",
  },
  ru: {
    text: "Необходимые cookies нужны для работы сайта. Аналитические и маркетинговые включаются только после вашего согласия.",
    accept: "Принять все",
    reject: "Отклонить необязательные",
    settings: "Настроить",
    title: "Настройки cookies",
    necessary: "Строго необходимые",
    necessaryHint: "Нужны для работы сайта и сохранения вашего выбора. Всегда включены.",
    analytics: "Аналитические",
    analyticsHint: "Статистика посещений. Пока не подключены.",
    marketing: "Маркетинговые",
    marketingHint: "Реклама, встроенные карты и видео. Пока не подключены.",
    save: "Сохранить выбор",
    policy: "Политика cookies",
    footer: "Настройки cookies",
  },
  en: {
    text: "Necessary cookies keep the site working. Analytics and marketing cookies turn on only after you agree.",
    accept: "Accept all",
    reject: "Reject optional",
    settings: "Settings",
    title: "Cookie settings",
    necessary: "Strictly necessary",
    necessaryHint: "Required for the site and to store your choice. Always on.",
    analytics: "Analytics",
    analyticsHint: "Visit statistics. Not connected yet.",
    marketing: "Marketing",
    marketingHint: "Advertising, embedded maps and video. Not connected yet.",
    save: "Save choice",
    policy: "Cookie policy",
    footer: "Cookie settings",
  },
};

export function cookieSettingsLabel(locale: Locale) {
  return COPY[locale].footer;
}

export function cookiePolicyLabel(locale: Locale) {
  return COPY[locale].policy;
}

export function CookieBanner() {
  const { locale, href } = useLocale();
  const copy = COPY[locale];
  const { choice, settingsOpen, openSettings, acceptAll, rejectOptional, save, closeSettings } = useConsent();
  const [analytics, setAnalytics] = useState(choice?.analytics ?? false);
  const [marketing, setMarketing] = useState(choice?.marketing ?? false);

  const showBanner = choice === null;
  const showPanel = settingsOpen;

  if (!showBanner && !showPanel) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4">
      <div className="container-site">
        <div className="rounded-[1.4rem] border border-white/10 bg-void/95 p-5 text-cream shadow-[0_24px_60px_-24px_rgba(0,0,0,0.85)] backdrop-blur-md md:p-6">
          {showPanel ? (
            <div>
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-display text-xl font-semibold">{copy.title}</h2>
                <button type="button" className="cursor-pointer text-sm text-cream/60" onClick={closeSettings}>
                  ×
                </button>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="rounded-2xl border border-white/10 p-4">
                  <p className="font-semibold">{copy.necessary}</p>
                  <p className="mt-1 text-sm text-cream/60">{copy.necessaryHint}</p>
                </li>
                <Category
                  label={copy.analytics}
                  hint={copy.analyticsHint}
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Category
                  label={copy.marketing}
                  hint={copy.marketingHint}
                  checked={marketing}
                  onChange={setMarketing}
                />
              </ul>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button className="px-5 py-2.5" onClick={() => save({ analytics, marketing })}>
                  {copy.save}
                </Button>
                <Link to={href("/cookies")} className="link-draw self-center text-sm text-mint" onClick={closeSettings}>
                  {copy.policy}
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="min-w-0 text-sm leading-relaxed text-cream/75 md:flex-1">
                {copy.text}{" "}
                <Link to={href("/cookies")} className="link-draw text-mint">
                  {copy.policy}
                </Link>
              </p>
              <div className="flex flex-wrap gap-2 md:flex-nowrap md:shrink-0">
                <Button className="whitespace-nowrap px-4 py-2.5 text-sm" onClick={acceptAll}>
                  {copy.accept}
                </Button>
                <Button variant="outline" className="whitespace-nowrap px-4 py-2.5 text-sm" onClick={rejectOptional}>
                  {copy.reject}
                </Button>
                <Button
                  variant="ghost"
                  className="whitespace-nowrap px-4 py-2.5 text-sm"
                  onClick={() => {
                    setAnalytics(choice?.analytics ?? false);
                    setMarketing(choice?.marketing ?? false);
                    openSettings();
                  }}
                >
                  {copy.settings}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Category({
  label,
  hint,
  checked,
  onChange,
}: {
  label: string;
  hint: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <li className="rounded-2xl border border-white/10 p-4">
      <label className="flex cursor-pointer items-start justify-between gap-4">
        <span>
          <span className="block font-semibold">{label}</span>
          <span className="mt-1 block text-sm text-cream/60">{hint}</span>
        </span>
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-mint"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
      </label>
    </li>
  );
}
