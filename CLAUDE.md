# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the dev server (Turbopack) at localhost:3000
- `npm run build` — production build
- `npm run typecheck` — `tsc --noEmit`
- `npm run lint` — ESLint (flat config, includes the React Compiler / `react-hooks` rule set — notably `react-hooks/set-state-in-effect`, which disallows synchronous `setState` calls inside `useEffect` bodies; prefer deriving state or `useSyncExternalStore` for browser-API subscriptions instead)
- No test suite exists yet.

Copy `.env.example` to `.env.local` and fill in `GOOGLE_APPS_SCRIPT_URL` and `NEXT_PUBLIC_GA_MEASUREMENT_ID` for the signup webhook and analytics to work locally (both no-op gracefully when unset).

## Architecture

Next.js 16 App Router, TypeScript, Tailwind CSS v4 (CSS-first config — no `tailwind.config.ts`; all design tokens live in `app/globals.css` under `@theme inline`). Single route (`/`) composed of section components in `components/sections/` (`Header` → `Hero` → `HowItWorks` → `Activities` → `ClosingCta` → `Footer`), assembled in `app/page.tsx`. No other routes/pages exist — do not add multi-page navigation, per the PRD.

The visual design (palette, fonts, copy, layout, animation timing) was imported from a Claude Design project ("Landing page design specifications", `KOODAL Landing.dc.html` + `Signup Form.dc.html` + `Koodal Lockup.dc.html`) via the `DesignSync` tool's read methods — not built from scratch. Palette: cream background `#faf7ef`, ink `#15191a`, lime primary `#d4e031`, coral accent `#ff6a4d`, teal `#0f7f76`. Fonts: Bricolage Grotesque (headings) + DM Sans (body). If the design changes, re-fetch it the same way rather than hand-guessing new values — the current tokens/copy should stay traceable to that source.

Key pieces:
- **`components/ui/KoodalLockup.tsx`** — the wordmark: the "Converge" mark (four wedges arriving from four directions) + "KOODAL" with the double-O drawn as two overlapping rings. Ported from the design's "Koodal Lockup" component (mark variant "a", the recommended one — variants "b"/"c" were explored but never used and aren't implemented). `app/icon.tsx` and `app/opengraph-image.tsx` reuse the same mark paths standalone (Satori/`next/og` can't render this component directly, so the SVG is duplicated inline there — keep both in sync if the mark changes).
- **`context/SignupProvider.tsx`** — the single source of truth for the whole signup flow: activity tag, the contact input's value, submitted/submitting/error state, and the displayed signup count. Both CTA forms (hero + closing) are thin views over this one shared state — typing or submitting in either place reflects in both, matching the source design. `HERO_FORM_INPUT_ID`/`CLOSING_FORM_INPUT_ID` live here too, used for scroll-to-focus targeting.
- **`components/ui/CtaForm.tsx`** — the single shared form component (one field: contact), themed light (hero) or dark (closing) via its `placement` prop.
- **`app/api/signup/route.ts`** — validates and proxies form submissions server-side to a Google Apps Script Web App webhook (`GOOGLE_APPS_SCRIPT_URL`, server-only env var) which appends a row to a Google Sheet. The Apps Script side is a manual setup step, not code in this repo — see the payload contract in that file's comments before wiring up a new sheet.
- **`hooks/useInView.ts` / `hooks/useReducedMotion.ts`** — scroll-reveal animation is hand-rolled via `IntersectionObserver`, no animation library, to protect the PRD's <2s/4G load budget. Reduced-motion support short-circuits `useInView` to always-visible rather than branching per-component.
- **`lib/analytics.ts`** — thin wrapper around `@next/third-parties/google`'s `sendGAEvent`; centralizes the custom GA4 events (`scroll_depth`, `cta_click`, `signup_success`).

## What KOODAL is

KOODAL (Tamil for "gather"/"bring together") is a validation landing page for a product idea, not the product itself. The idea: help Chennai's pickleball/padel, badminton, board-game and quiz-night crowd fill missing headcounts in group plans. The page's only job is to convert a targeted visitor into a signup (a WhatsApp number or Instagram handle) as a proxy for real demand, before any matching app is built.

The full spec lives in `Koodal Landing Page — PRD.pdf`. Read it before implementing — the notes below are the requirements that most constrain implementation decisions, not a replacement for the PRD.

## Product constraints that drive implementation

- **Single page, single scroll, single CTA.** No navigation menu, no multi-page routing, no login/accounts. Every section exists to move the visitor toward one form.
- **The CTA form has exactly one input field**: WhatsApp number or Instagram handle, plus an activity tag carried over from whichever entry point/category the visitor clicked. No name/email/extra fields — each additional field is explicitly called out as reducing conversion.
- **Mobile-first, and mobile-only in practice.** Design for a 375–430px viewport first; almost all traffic is Instagram/Meta ad clicks and community-page links opened on a phone. No feature should depend on desktop-only interaction.
- **Performance budget: under 2 seconds to load on typical 4G.** Keep JS/CSS-driven animation; avoid heavy video or large Lottie files that would blow this budget.
- **Accessibility floor**: sufficient color contrast, 16px minimum body text, and the page must be fully functional with `prefers-reduced-motion` set (fall back to instant state changes, no motion).
- **Animation must never block interaction** — the CTA has to be clickable immediately even mid-animation. Section reveals fade/slide on scroll; "How it works" steps animate in sequence, not simultaneously; activity cards get a hover/tap scale/lift; the CTA button gets a scale + color-shift micro-interaction; form fields get focus-state animation; successful submit replaces the form with a short confirmation.
- **Visual direction**: warm/energetic palette (teal + coral/orange + soft yellow) matching existing offline poster material, flat-illustration style, bold sans-serif type, rounded shapes, generous whitespace — aimed at a young urban Indian (Gen-Z/20s-30s) audience.
- **Page sections, in order** (per the imported design): Header (wordmark + "Chennai" badge) → Hero (tagline + subhead + primary CTA form + signup-count/avatar strip + illustrative plan-card) → How it works (3-step visual: Post your plan → Nearby people join → Plan happens) → Activities (grouped pill picker — Sports & Games, Social Games, Outdoor & Casual, Entertainment, 11 activities total, see `lib/activities.ts` — tap tags category interest, no separate Credibility section) → Closing CTA (dark banner combining the "Now starting in Chennai" credibility line with the repeated single-field form) → Community links (Instagram + WhatsApp community cards) → Footer (contact/social links only, no boilerplate).
- **Backend needs are minimal by design**: submissions (contact info + activity tag + timestamp) must persist somewhere the founder can review — no full app backend at this stage. Analytics must at minimum capture page views, scroll depth, CTA clicks, and conversion rate, since the whole point of the page is to measure conversion against a 10–20% target (below 3–5% means the pitch/targeting needs rework).
- **Hosting**: needs a single public shareable link that behaves identically whether opened from WhatsApp, an Instagram bio link, or a paid ad — no environment-specific behavior.

## Explicitly out of scope

Do not build: real plan-posting/matching functionality, account creation or login, payment or venue-booking integration, a multi-page site, or an admin dashboard beyond a raw signup export. These belong to a later manual-concierge MVP or the real app, not this landing page.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
