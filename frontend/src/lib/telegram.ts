const VOID = "#070a08";

type TelegramWebApp = {
  ready?: () => void;
  setHeaderColor?: (color: string) => void;
  setBackgroundColor?: (color: string) => void;
  setBottomBarColor?: (color: string) => void;
};

declare global {
  interface Window {
    Telegram?: { WebApp?: TelegramWebApp };
    TelegramWebviewProxy?: {
      postEvent: (event: string, data: string) => void;
    };
  }
}

function postNative(event: string, data: Record<string, string>) {
  try {
    window.TelegramWebviewProxy?.postEvent(event, JSON.stringify(data));
  } catch {
    /* not inside Telegram */
  }
}

export function applyTelegramChrome() {
  document.documentElement.style.backgroundColor = VOID;
  document.body.style.backgroundColor = VOID;

  const theme = document.querySelector('meta[name="theme-color"]');
  if (theme) theme.setAttribute("content", VOID);

  postNative("web_app_set_header_color", { color: VOID });
  postNative("web_app_set_background_color", { color: VOID });
  postNative("web_app_set_bottom_bar_color", { color: VOID });

  const webApp = window.Telegram?.WebApp;
  if (!webApp) return;

  webApp.ready?.();
  webApp.setHeaderColor?.(VOID);
  webApp.setBackgroundColor?.(VOID);
  webApp.setBottomBarColor?.(VOID);
}
