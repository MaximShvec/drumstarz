# DRUMSTARZ frontend — agent handbook

Read this before changing the site. Visual language lives in `design-system/drumstarz/MASTER.md`. How that language was chosen is below. This file is also how the React app is put together.

## Product

Drum school in Riga. Live studio, real stage, booking-led conversion. Dark cinematic music site — not SaaS, not a generic template.

Default language is **Latvian**. Russian and English are prefixed.

Production today: GitHub `main` → Vercel, root directory `frontend`. Live URL: `https://drumstarz.vercel.app`.

## Commands

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview
```

Do not commit unless the user asks. Do not commit secrets.

## Stack

Vite 8 + React 19 + TypeScript + React Router 7 + Tailwind v4. No i18next. No shadcn as the visual identity.

Key libraries: `lenis`, `yet-another-react-lightbox`, `@fontsource-variable/manrope`, `@fontsource-variable/unbounded`.

## Visual approach

The look is **authorial**, not a component-kit site. Do not start a new page from shadcn, HeroUI, 21st.dev / Magic MCP, or a generic “SaaS landing” template. Those make an even card grid. This product needs full-bleed media, type, and section rhythm.

**Base skill:** [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (`ui-ux-pro-max-skill`). It is design intelligence (styles, type pairings, anti-patterns, a checklist) — not a React library. We ran it once at the start, with the mint brand DNA, and wrote the result into `design-system/drumstarz/MASTER.md`.

**Day-to-day: the skill is not required.** Open `design-system/drumstarz/MASTER.md`, then copy the rhythm of an existing page (`HomePage`, `CampPage`, `KidsPage`). Tokens in `src/index.css` and components in `src/components/ui/` already implement the system. If MASTER and the live UI disagree, the live UI + MASTER win; do not re-roll a new style from the skill.

**Open the skill again only if** the user asks to change the visual language (new style, new palette, new type). Then: run UI UX Pro Max → update `MASTER.md` → change tokens and a few screens. Do not invoke it to add a section, a form, or a locale.

**How the skill is used (only in that rare case):** install or attach [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill), point it at this product (drum school, cinematic / editorial dark, mint, Unbounded + Manrope, Cyrillic), and treat its output as input to `MASTER.md` — not as code to paste. 21st MCP was considered and rejected: it is a catalog of generic React/Tailwind blocks, closer to shadcn than to this site.

## Visual rules

Follow `design-system/drumstarz/MASTER.md`. Short version:

- Cinematic editorial dark. Full-bleed media, oversized Unbounded titles, sharp dark ↔ paper cuts, numbered indexes, grain, restrained mint.
- Tokens: `void` `#070A08`, `panel` `#121A16`, `paper` `#E8EEE9`, `mist` `#F4F7F5`, `cream` `#F3F1EA`, `ink` `#0C100E`, `mint` `#1AD4A1`, `mint-deep` `#0C9B78`, `lime` `#D4F56E`.
- Display: Unbounded. Body: Manrope. Cyrillic required. Do not use Oswald / Open Sans.
- Motion: Lenis, short reveals 500–700ms, image hover scale 1.06 / 600ms, respect `prefers-reduced-motion`.
- Avoid: purple/pink AI gradients, equal SaaS card grids, emoji icons, centering everything, copying the shadcn look, neon `#00cc99` on every control.
- A11y: contrast ≥ 4.5:1, mint focus ring, `cursor-pointer` on clickable elements, keyboard for modal / accordion / tabs / mobile nav.

Tokens are in `src/index.css` (`@theme`). Shared UI: `src/components/ui/` (`Button`, `Field`, `Modal`, `Segmented`, `Lightbox`).

## Folder map

```
src/
  App.tsx                 locale routing + page routes
  pages/                  one file per route
  sections/               page sections (home/*, camp, kids, …)
  components/             layout, booking, media, ui
  content/                translated copy (lv / ru / en)
  data/                   stable IDs, images, prices, phones
  i18n/                   locales, paths, UI chrome, switcher
  hooks/                  SEO, Lenis
  lib/                    submit stub, SEO, YouTube, telegram
  context/BookingContext.tsx
public/assets/            images, video, icons — already in the repo
```

- **`src/content/*.ts`** — every string the user sees. Overlay by locale. This is what you edit for copy.
- **`src/data/*.ts`** — structure that must stay the same across languages: trainer slugs, photo paths, YouTube IDs, prices, branch addresses, phone numbers.
- **`src/i18n/ui.ts`** — chrome: header, footer, booking modal, generic form errors, 404, breadcrumbs.

Do not translate phones, emails, street addresses, prices, trainer names, YouTube IDs, or image paths.

## Routes and i18n

| Locale | Home | Inner page |
|---|---|---|
| `lv` (default) | `/` | `/camp` |
| `ru` | `/ru` | `/ru/camp` |
| `en` | `/en` | `/en/camp` |

`/lv/...` redirects to the unprefixed path.

Pages: `/`, `/trainers`, `/contacts`, `/percussions`, `/events`, `/kids`, `/giftcard`, `/camp`, plus `*` → `NotFoundPage` (`noindex`).

Home hashes: `/#prices`, `/#faq`, `/#top`. `HashOrRoute` in the header keeps same-page hashes as `#...` and localizes the rest.

Helpers: `src/i18n/paths.ts` (`stripLocale`, `localizePathname`, `localizeHref`). `useLocale()` → `{ locale, t, href, to, path }`. `ButtonLink` localizes `to` automatically.

Language switcher is a dropdown (`src/i18n/LanguageSwitcher.tsx`). It keeps pathname + search + hash.

When you add a page:

1. Add a route in `App.tsx` (lazy, like the others). Home stays eager.
2. Add nav/footer ids in `src/data/site.ts` if it belongs in chrome.
3. Add labels in `src/i18n/ui.ts` (`nav` / `extrasItems` / `footer` / `crumbs`) for lv, ru, en.
4. Add copy in `src/content/<page>.ts` as `Record<Locale, …>` and a hook in `src/content/useCopy.ts`.
5. Call `useDocumentMeta(title, description)` so title, canonical, hreflang, OG and JSON-LD update.
6. Add the path to `SITE_PAGES` in `src/lib/sitemap.ts` **and** `public/sitemap.xml`.

## Pages already shipped

| Path | Page | Notes |
|---|---|---|
| `/` | `HomePage` | Hero video, pricing, trial, teachers, FAQ, contacts |
| `/trainers` | `TrainersPage` | Cards + YouTube |
| `/contacts` | `ContactsPage` | Two branches, map, lead form |
| `/percussions` | `PercussionsPage` | Group classes |
| `/events` | `EventsPage` | Adult party |
| `/kids` | `KidsPage` | Kids party |
| `/giftcard` | `GiftcardPage` | Gift card |
| `/camp` | `CampPage` | Summer camp |

Booking modal is global (`BookingContext` + `BookingModal` in `SiteLayout`). Open it with `useBooking().openBooking`.

## Forms

All forms go through `submitApplicationForm` in `src/lib/submit.ts`. It is a **stub**: it returns `{ status: "not_configured" }` and must not fake success.

Each form already sends a `source` string. See `BACKEND.md` for the payload shapes.

Client validation lives in the form. Shared field UI is `LineField` / `LineTextarea` / `LineSelect`.

## SEO

`useDocumentMeta(title, description, extras?)` writes title, description, robots, canonical, hreflang, OG, Twitter, JSON-LD (`MusicSchool`, `WebPage`, breadcrumbs, FAQ on home).

Origin: `VITE_SITE_URL` or `https://drumstarz.vercel.app` (`src/data/site.ts`).

`public/robots.txt`, `public/sitemap.xml`, `public/og.jpg`. Vercel SPA fallback is in `vercel.json`.

This is a client-rendered SPA. Google runs JS. Social crawlers that do not run JS will see the Latvian homepage tags from `index.html`.

## Media and performance

- Hero: poster is LCP (`/assets/images/hero-drums-bw-poster.webp`). Video (`/assets/video/hero-drums-bw.mp4`) mounts after a short delay. `?hero=image` or `prefers-reduced-motion` skips the video. Photos in `public/` are WebP with 800/1280 `srcset` via `Photo`. Keep `og.jpg` for social crawlers. New photos: `npm install --no-save sharp && node scripts/to-webp.mjs && node scripts/gen-srcset.mjs`.
- Below-fold images: `loading="lazy"` `decoding="async"`. Page heroes: `fetchPriority="high"`.
- YouTube: click-to-play via `YoutubePlayer` (`youtube-nocookie`).
- Telegram WebApp script loads only if the UA contains `Telegram`.
- Fonts are self-hosted. Do not add Google Fonts back.

## Working rules

- Verify UI in the browser when you change layout, routing, or state. One screenshot is not a check.
- Keep locale state consistent: if you write a path, go through `href` / `to` / `localizePathname`.
- Reuse `Button`, `Field`, `Modal`, `Reveal`. Do not invent a second design system.
- `public/assets` is already in git. Do not add huge unoptimized binaries without need.
- After adding a user-facing string, add lv + ru + en in the same change.
- Typecheck with `npx tsc -b` before you call the work done.
