# DRUMSTARZ — Design System

Source of truth for the new frontend look. This file is visual only. Copy lives in `src/content/` and `src/i18n/`.

Generated once from [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) plus the mint brand DNA. Later agents: read this file and the live pages. Do not re-run the skill unless the visual language itself is changing.

## Product

Drum school in Riga. Live studio, real stage, booking-led conversion. Dark cinematic music site, not SaaS and not a generic template.

## Pattern

Hero-centric + proof. CTA above the fold, repeated after trial steps and in FAQ.

## Style

Cinematic kinetic / editorial dark. Full-bleed media, oversized type, sharp section cuts (dark ↔ paper), numbered indexes, grain, restrained mint light.

## Color

Brand DNA stays mint/green. `#00cc99` is not a locked hex; the family is.

| Token | Hex | Use |
|---|---|---|
| void | `#070A08` | page background |
| panel | `#121A16` | elevated dark surfaces |
| paper | `#E8EEE9` | light sections |
| mist | `#F4F7F5` | cards on paper |
| cream | `#F3F1EA` | warm text on dark |
| ink | `#0C100E` | text on paper |
| mint | `#1AD4A1` | accent, links, focus |
| mint-deep | `#0C9B78` | primary CTA fill |
| lime | `#D4F56E` | rare highlight (sale, hit) |

## Typography

- Display: **Unbounded** — titles, nav wordmark energy
- Body: **Manrope** — UI, forms, paragraphs
- Indexes: Unbounded tabular-ish numbers, mint, tracking wide

Cyrillic required. Do not use Oswald / Open Sans.

## Motion

- Lenis smooth scroll
- Short reveals (opacity + translate), 500–700ms
- Hover: image scale 1.06, 600ms
- Respect `prefers-reduced-motion`

## Anti-patterns

- AI purple/pink gradients
- Equal padded SaaS card grids as the whole page
- Emoji as icons
- Centered everything
- Copying shadcn/21st look as the visual identity
- Pure `#00cc99` neon on every control

## Accessibility

- Text contrast ≥ 4.5:1
- Visible focus (mint ring)
- `cursor-pointer` on clickable elements
- Keyboard for modal, accordion, tabs, mobile nav
