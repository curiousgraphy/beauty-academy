# CBB New York

Marketing site for **Colavo Beauty Bootcamp (CBB)** — a 2-day K-beauty event in
Manhattan (Jul 13–14, 2026). Four pages: a landing hub plus three event/profile
pages (Pro Masterclass, Youth Seminar, Ambassador).

🔗 **Live:** https://curiousgraphy.github.io/beauty-academy/

---

## Tech stack

| | |
|---|---|
| Framework | **Next.js 14** (App Router) — `14.2.15` |
| Language | TypeScript 5.5 · React 18.3 |
| Styling | **Inline styles + CSS custom properties** in `app/globals.css` (no Tailwind / CSS-in-JS lib) |
| Fonts | Pretendard via `next/font/local` (`app/layout.tsx`) |
| Content | Single data layer in `lib/data.ts` — no copy is hardcoded in components |
| Hosting | GitHub Pages (static export) via GitHub Actions |

> The design originated as HTML/CSS prototypes from Claude Design; this repo is
> the production re-implementation. Visual idiom: white canvas, Pretendard,
> oblique (`skewX(-9deg)`) display headings, soft-shadow rounded cards, a
> mint/pink/rose palette. **Read `CLAUDE.md` before editing.**

---

## Local development

Requirements: Node 18+ (CI uses Node 20).

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export → ./out  (output: 'export')
npm run start      # serve a production build
npm run lint       # next lint
```

Locally the site runs at `/` (root). The GitHub Pages build sets
`NEXT_PUBLIC_BASE_PATH=/beauty-academy` so it works under the project subpath —
see **Deployment**.

---

## Folder structure

```
app/
  layout.tsx          Root layout — loads Pretendard (next/font), metadata
  globals.css         Design tokens (:root --cbb-*), resets, keyframes,
                      hover classes, responsive @media (data-r based)
  page.tsx            /        landing hub
  pro/page.tsx        /pro     Pro Masterclass (wrapper .cbb-pro)
  youth/page.tsx      /youth   Youth Seminar   (wrapper .cbb-youth)
  master/page.tsx     /master  Ambassador      (wrapper .cbb-master)

components/
  Nav.tsx             *client* shared header (badge + CTA configurable per page)
  Footer.tsx          shared footer
  CTA.tsx             shared button (variants: rose | mint | outline)
  ImageSlot.tsx       shared image/placeholder box (base-path aware)
  EventCard.tsx       home: the two event cards
  VenueCard.tsx       home: schedule day cards
  CraftRow.tsx        master: "signature craft" alternating rows
  AmbassadorCard.tsx  master: collective roster cards
  CircuitCard.tsx     master: world-tour stops
  RsvpFlow.tsx        *client* youth: 4-step guardian-consent RSVP (UI only)
  TicketReserve.tsx   *client* pro: seat counter + reserve (UI only)

lib/
  data.ts             SINGLE SOURCE OF TRUTH for all content + types
  asset.ts            asset(path) — prefixes /public refs with the base path

public/
  fonts/              Pretendard *.woff2 (loaded via next/font)
  images/             37 .webp content images (hero, looks, venues, …)
  assets/             logos (colavo-logo, colavo-mark, leonia-logo)

.github/workflows/
  deploy.yml          build static export + deploy to GitHub Pages
```

### Page → section map

- **`/`** Hero · marquee · YouTube · "Who is CBB" stats · Two Events ·
  The Master · 2-day Schedule · Partners/Sponsors · FAQ · Final CTA · Footer
- **`/pro`** Hero · looks strip · 90-min Program · Benefits · **Tickets
  (interactive)** · Venue · FAQ · Final CTA
- **`/youth`** Hero · looks strip · Program · "Why free" · **RSVP 4-step flow
  (interactive)** · Venue · FAQ · Final CTA
- **`/master`** Hero · ambassador statement · Signature Craft (×4) ·
  The Collective (×3) · World-tour Circuit · Final CTA

---

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which runs
`npm run build` (static export to `out/`) with
`NEXT_PUBLIC_BASE_PATH=/beauty-academy` and publishes to GitHub Pages.

GitHub Pages **source is set to "GitHub Actions"** (not a branch). The static
export needs the base path because it's served from a project subpath
(`/beauty-academy/`); `basePath`/`assetPrefix` (next.config.mjs), `next/font`,
and `lib/asset.ts` together keep every link, font and image resolving correctly.

> A migration to **Vercel + a custom domain** is planned (see `HANDOFF.md`),
> which would remove the base-path requirement.

---

## Status

This is a **front-end-complete prototype**. The ticket-reservation and RSVP
flows are interactive UI mockups with **no backend** (no payment, no form
submission, no email). Seat counts are static placeholders. See `HANDOFF.md`
for the remaining work.
