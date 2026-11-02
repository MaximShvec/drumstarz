/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_RECAPTCHA_SITE_KEY?: string;
}

declare module "*.txt?raw" {
  const src: string;
  export default src;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
