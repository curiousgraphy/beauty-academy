# HANDOFF — remaining work

Current state: **front-end-complete prototype.** All four pages are built,
styled, responsive, and wired to `lib/data.ts`, with real images. The two
interactive flows (Pro ticket reserve, Youth RSVP) are **UI-only mockups — no
backend, no payment, no email, no persistence.** Items below are ordered by
priority. File references point you to exactly where to work.

---

## P0 — Core conversion backends

### [ ] Pro ticket payment — Stripe ($200) + live seat inventory
- **Now:** `components/TicketReserve.tsx` is a visual demo. Clicking "Reserve"
  just decrements local state and shows a fake confirmation
  (`data.demoNote = "Visual demo — payment handled at checkout."`).
  `proPage.tickets.seatsLeft` is **hardcoded to `8`** (cap `total: 30`) in
  `lib/data.ts`.
- **Build:** Stripe Checkout (single $200 tier) → on success, decrement real
  inventory and record the buyer. Needs server-side seat management so the
  30-seat cap is enforced atomically (no overselling). Surface live remaining
  seats to `TicketReserve` (replace the static `seatsLeft`).
- **Note:** ticket is restricted to licensed pros — eligibility/verification is
  copy today (`proPage.tickets.eligibility`, FAQ "How do I prove I'm licensed").
  Decide whether verification is manual (lobby check-in) or gated at purchase.

### [ ] Youth RSVP submission + guardian-consent email flow
- **Now:** `components/RsvpFlow.tsx` is the 4-step UI (You → Guardian → Consent
  → Done). Student/guardian text inputs are **uncontrolled** (no validation or
  capture); only the consent checkboxes + typed signature are stateful. On
  "Confirm" it just advances to a fake success screen
  (`youthPage.rsvp.demoNote = "Visual demo — no real data is submitted."`).
  `youthPage.rsvp.seatsLeft` is **hardcoded to `12`** (cap 30).
- **Build (per the original brief):**
  - Persist the RSVP (student + guardian fields) and enforce the 30-seat cap.
  - Email the guardian a consent link; capture **e-signature** consent
    (participation + optional photo release + conduct).
  - **48-hour reminder** if consent isn't completed; release the seat to a
    waitlist on expiry.
  - Confirmation email to **both** student and guardian on completion.
  - Add real validation to steps 1–2 before allowing "Continue".

---

## P1 — Launch readiness

### [ ] SEO metadata + Open Graph images
- **Now:** each page sets only `title` + `description` via the `metadata` export
  (`app/layout.tsx`, `app/*/page.tsx`). No `openGraph`, no `twitter`, no
  canonical, no favicon/app icons, no `sitemap`/`robots`.
- **Build:** per-page OG/Twitter cards + OG images (the design ships brand
  assets in `public/assets/` and root `images/BI_Colavo_*`), favicon/app icons,
  `metadataBase`, and a sitemap. Mind `basePath` when referencing OG image URLs.

### [ ] Vercel deploy + custom domain
- **Now:** deployed to **GitHub Pages** (static export) at the `/beauty-academy`
  subpath, which forces `basePath`/`assetPrefix` + the `asset()` helper.
- **Build:** import the repo into Vercel (native Next.js build). On a root
  domain the base-path machinery becomes unnecessary — you can drop
  `NEXT_PUBLIC_BASE_PATH` (basePath resolves to empty) and, if desired, remove
  `output: 'export'` to use SSR/route handlers (helpful for the P0 backends).
  Connect the custom domain + HTTPS.

---

## P2 — Content & polish (found while reviewing)

- [ ] **Real sponsor logos.** The 4 sponsor slots on `/` (`partners.sponsors`:
  `cbb-sponsor-autte/lunabe/danahan/mubean`) currently use placeholder *photos*,
  not logos — labelled "Sponsors — in talks". Swap for official logos once
  confirmed. Same for the **Pro gift-bag contents** (`proPage.benefits` →
  "Contents — sponsors in talks").
- [ ] **Real Instagram URL.** `site.instagram.url` is the generic
  `https://instagram.com`. Point it at the real `@cbb.beauty` account.
- [ ] **Image `alt` text.** `ImageSlot` renders `alt=""` (decorative default).
  Pass meaningful `alt` for content photos (hero/master/venue/looks) for a11y +
  SEO. Add an `alt` field per image in `data.ts` and thread it through.
- [ ] **Confirm the YouTube embed.** `video.youtubeId = "cKfxl7RXsEU"` — verify
  it's the final video.
- [ ] **Analytics** (none yet) and **a privacy/consent policy** page — relevant
  given minors' data in the Youth flow.

## P3 — Repo cleanup

- [ ] Delete leftover root-level cruft unrelated to the app:
  `ambassador_certificate.html` (legacy certificate) and the root **`images/`**
  folder (`BI_Colavo_*` branding PNGs — not used by the app; the app uses
  `public/`). The active brand logos live in `public/assets/`.
- [ ] Consider gitignoring `.claude/settings.local.json` (local tooling perms)
  and remove the tracked `.DS_Store`.
- [ ] CI: the deploy workflow logs a **Node 20 deprecation** warning. Bump
  `actions/*` versions / Node when convenient (forced to Node 24 after
  2026-06-16).
- [ ] No tests exist. Add at least smoke coverage for the two interactive flows
  (`RsvpFlow` step gating + consent validation, `TicketReserve` reserve) once
  they have real behavior.

---

## Quick orientation for whoever picks this up

1. Read `CLAUDE.md` (working rules) and `README.md` (structure).
2. Content/images: everything is in `lib/data.ts` — start there.
3. The two things that need a backend are `RsvpFlow.tsx` (youth) and
   `TicketReserve.tsx` (pro); both are isolated client components.
4. If you move to Vercel first, the P0 backends get much easier (route handlers
   / server actions instead of an external API), and the base-path complexity
   goes away.
