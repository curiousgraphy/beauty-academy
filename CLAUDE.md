# CLAUDE.md — working rules for this repo

Rules every contributor (human or Claude Code) must follow. They encode
decisions already baked into the codebase — breaking them creates inconsistency
that's expensive to undo. Read this before editing.

---

## 1. `lib/data.ts` is the single source of truth

**All content lives in `lib/data.ts`.** Components and pages must read from it —
never hardcode copy, prices, dates, URLs, FAQ text, or image paths in JSX.

- Each page has its own export block: `masterPage`, `youthPage`, `proPage`;
  the home page uses the top-level exports (`hero`, `events`, `about`,
  `schedule`, `partners`, `faq`, `finalCta`, …). Shared bits: `site`, `nav`,
  `venues`.
- Types live next to their data (`EventInfo`, `CraftItem`, `ConsentItem`,
  `RsvpData`, `TicketData`, …). Reuse/extend them; don't redefine shapes inline.
- Adding content = add a field/entry in `data.ts`, then render it. If you catch
  yourself typing a user-visible string inside a `.tsx`, stop and move it.

## 2. Images go through the data layer + `asset()`

- Every `ImageSlot` has an `id`, `placeholder`, and `src` field in `data.ts`.
  Real images live in `public/images/*.webp`; set `src: "/images/<name>.webp"`.
  Leave `src: null` to show the labelled placeholder box.
- **Never write a raw `<img src="/...">`.** Plain `<img>`/logo paths must be
  wrapped with `asset(path)` (`lib/asset.ts`) so they resolve under the GitHub
  Pages base path (`/beauty-academy`). `ImageSlot` already does this internally.
- Fonts are loaded via `next/font/local` in `app/layout.tsx` — do **not**
  re-add `@font-face { url("/fonts/…") }` to CSS (absolute URLs 404 under the
  subpath).

## 3. Reuse the shared components

Before building UI, check `components/`. Shared, page-agnostic:
`Nav`, `Footer`, `CTA`, `ImageSlot`, `EventCard`, `VenueCard`.

- `CTA` is the only button — variants `rose | mint | outline`, sizes `md | lg`.
  Don't hand-roll buttons.
- `Nav` is configured per page via props: `active` (current href), `badge`
  (`{ text, tone: "ink"|"mint"|"pink" }`), `cta` (`{ label, href, variant }`).
- Page-specific components (`CraftRow`, `AmbassadorCard`, `CircuitCard`,
  `RsvpFlow`, `TicketReserve`) stay with their page; generalize into
  `components/` only if a second page needs them.

## 4. Styling conventions

- **Inline `style={{}}` + CSS custom properties.** No Tailwind, no CSS modules.
  All tokens are `--cbb-*` in `app/globals.css :root` (colors, shadows, fonts).
  Use the tokens; never hardcode hex like `#DC6E88` — use `var(--cbb-rose)`.
- `:hover`, `@media`, keyframes, `<details>`, focus rings — can't be inline, so
  they live in `globals.css` as classes (`.cbb-btn-rose:hover`, `.cbb-input`,
  `.cbb-marquee-track`, …). Add there and reference by `className`.
- **Per-page responsive CSS is scoped.** Detail pages wrap their root in a
  scope class — `.cbb-pro` / `.cbb-youth` / `.cbb-master` — and their `@media`
  rules are written as `.cbb-pro [data-r="…"] { … }`. Keep new page-specific
  responsive rules scoped this way so they never leak across pages. (The home
  page uses the unscoped shared `[data-r="hero"|"events"|…]` rules.)
- Layout hooks use `data-r="…"` attributes (e.g. `hero`, `events`, `tech`,
  `roster`, `rsvpgrid`, `steptrack`) that the media queries target.

## 5. Brand invariants — do not change

- **Track colors are fixed and must not be mixed:**
  **Pro = pink / rose** (`--cbb-pink`, `--cbb-rose`, `--cbb-rose-ink`),
  **Youth = mint** (`--cbb-mint`, `--cbb-mint-tint`, `--cbb-mint-deep`).
  A component that themes by track (e.g. `EventCard`, `CraftRow`, `VenueCard`)
  must pick its palette from the track, not invent colors.
- **The three confirmed Hero headlines are frozen — do not reword:**
  | Page | Headline |
  |---|---|
  | `/` | **K-Beauty's Glow Arrives in NYC.** (only "Glow" is rose) |
  | `/pro` | **From Glass Skin to Bridal Mastery.** |
  | `/youth` | **Your Glow, Your Way.** |
- Display headings use the oblique treatment `transform: skewX(-9deg)` (see the
  `Skew` helper in each page). Keep it.

## 6. Before you finish

- `npm run build` must pass (it type-checks + does the static export).
- For visual/interactive changes, run the app and check the actual render
  (the RSVP and ticket flows are client components — verify state transitions),
  and confirm **no console errors**.
- Verify the **GitHub Pages export** when touching assets/links/config:
  `NEXT_PUBLIC_BASE_PATH=/beauty-academy npm run build`, then confirm `out/`
  has no bare `/images` or `/fonts` references (everything prefixed with
  `/beauty-academy/`).
- Commit only when asked. End commit messages with the
  `Co-Authored-By: Claude …` trailer.
