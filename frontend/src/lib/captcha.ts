const SCRIPT_ID = "drumstarz-recaptcha";

type Grecaptcha = {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

function client(): Grecaptcha | undefined {
  return (window as Window & { grecaptcha?: Grecaptcha }).grecaptcha;
}

function loadScript(siteKey: string) {
  if (document.getElementById(SCRIPT_ID)) return Promise.resolve();
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("recaptcha"));
    document.head.appendChild(script);
  });
}

/** Invisible reCAPTCHA v3. Returns null until VITE_RECAPTCHA_SITE_KEY is set. */
export async function getCaptchaToken(action: string): Promise<string | null> {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  if (!siteKey) return null;
  await loadScript(siteKey);
  const grecaptcha = client();
  if (!grecaptcha) return null;
  return new Promise((resolve) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(siteKey, { action }).then(resolve).catch(() => resolve(null));
    });
  });
}
