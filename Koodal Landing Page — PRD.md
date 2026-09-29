# KOODAL — Landing Page PRD

Sep 20, 2026 · @Mohanraj

## Overview

This landing page is the validation asset for KOODAL, testing whether Chennai's group-activity organizers — sports, board games, quiz nights, study groups, outings, and beyond — will leave contact info for a product that fills missing headcounts in their plans, before any app is built.

It replaces the cold survey link, which failed to generate responses, with a targeted single-action page: state the promise, show the mechanic, ask for one thing (a WhatsApp number or Instagram handle).

**Name:** KOODAL (Tamil, roughly "gather" / "bring together")

Tagline options under consideration:

- "Bring the plan together." — straightforward
- "Got a plan? Find your people." — Gen-Z tone
- "Plan irukku. Aal illa?" — Chennai/Tanglish tone, likely strongest local resonance

**Positioning: activity-agnostic, not sports-led.** Hudle already operates in Chennai across pickleball, padel, and badminton, combining venue booking with player-matching — a close, well-funded competitor in exactly that category. Rather than compete head-on there, KOODAL leads with what KYN, Hudle, and Playo don't serve well: board games, quiz nights, study groups, treks, and other non-sport plans that also fall short on people. Sports stay on the page, but hero copy, activity ordering, and ad targeting should not center them.

## Goals & success metrics

**Primary goal:** measure what share of targeted visitors take the single call-to-action (leave a WhatsApp number or Instagram handle), as a proxy for real intent to use KOODAL.

| Metric | Target | Read |
| --- | --- | --- |
| Visitor → signup conversion rate | 10–20% | Solid signal, worth pursuing further |
| Visitor → signup conversion rate | Below 3–5% | Pitch or audience isn't landing — revisit messaging or targeting |
| Cost per signup (paid traffic) | As low as possible | Secondary read on channel efficiency |
| Activity-category click-through | N/A (directional) | Which category (board games, quiz nights, study groups, outings, sports) draws the most interest — the key signal for where to double down next |

**Secondary signals:** scroll depth (do people read past the hero), time on page, and which traffic source (personal outreach vs. paid ads vs. community pages) converts best.

## Target audience

Urban Chennai residents, roughly 20–35, mobile-first, reached first in one zone (OMR corridor or a college cluster) rather than the whole city.

- Regularly organize or join group activities of any kind — sports, board games, quiz nights, study groups, treks, or outings
- Regularly organize or join group plans and have felt the pain of a plan falling short on people
- Found primarily through geo-targeted Instagram/Meta ads, venue and community Instagram pages, and personal outreach — not organic search

## Page structure & content

Single-page, single-scroll layout. No navigation menu — the only job of the page is to move a visitor to the one CTA.

| Section | Purpose | Content |
| --- | --- | --- |
| Hero | State the promise in 5 seconds | KOODAL wordmark + tagline (pick one of the three above); one-line subhead explaining the mechanic; primary CTA form |
| How it works | Explain the mechanic | 4-step visual: Post your plan → People nearby join & confirm → Your group forms → The plan happens |
| Activities | Show scope, surface category interest | Cards/icons, non-sport categories leading: Board Games, Quiz Nights, Study Groups, Outings/Treks, Sports (Pickleball/Padel/Badminton) — each clickable, tagging which the visitor is most interested in |
| Credibility | Build trust, avoid feeling generic | "Currently testing in OMR, Chennai" line; live or static count of people already signed up |
| Closing CTA | Second chance to convert after scrolling | Repeats the same single-field form |
| Footer | Minimal | Contact/social link only — no company boilerplate needed at MVP stage |

**The CTA form itself:** one field (WhatsApp number or Instagram handle) plus the activity tag carried over from wherever they clicked. No name, email, or additional fields — every extra field lowers conversion.

## UI/UX & visual design requirements

- **Mobile-first.** Most traffic arrives from Instagram/Meta ads and community-page links opened on a phone; design for a 375–430px viewport first, desktop second.
- **Aesthetic:** modern, energetic, flat-illustration style aimed at a young urban Indian audience — bold sans-serif typography, generous whitespace, rounded shapes over sharp corners.
- **Color:** one warm, energetic palette (teal + coral/orange + soft yellow), consistent with the poster direction already used for offline outreach, so online and offline materials feel like one campaign.
- **CTA button:** high-contrast, sticky/fixed on mobile scroll so it's always reachable without hunting for it.
- **Load speed:** under 2 seconds on a typical 4G connection — slow load directly kills conversion on paid traffic.
- **Accessibility:** sufficient color contrast, legible type sizes (16px minimum body text), and functional without animation for users with `prefers-reduced-motion` set.

## Animation & interaction requirements

| Element | Animation | Why |
| --- | --- | --- |
| Section reveals | Subtle fade + slide-up as each section enters the viewport on scroll | Gives the page a modern, alive feel without distracting from the CTA |
| "How it works" steps | The 3 steps animate in sequence (not all at once) as the visitor scrolls into that section | Reinforces the mechanic visually instead of just in text |
| Activity cards | Slight scale/lift on hover or tap | Signals they're interactive and encourages the category-interest click |
| CTA button | Scale + color-shift micro-interaction on hover/tap | Draws the eye to the one action that matters |
| Form field | Focus-state animation (border highlight, label float) | Standard modern-form feel, reduces friction |
| Submit success | Short celebratory confirmation (checkmark animation, brief message) replacing the form | Confirms the action landed, ends the flow on a positive note |

**Constraints:**

- Animations must never block or delay interaction — the CTA must be clickable immediately, even before an animation finishes.
- Respect `prefers-reduced-motion`: fall back to instant state changes, no motion, for users who've set that preference.
- Keep total animation/asset weight light — CSS/JS-driven animation preferred over heavy video or large Lottie files, to protect the under-2-second load target on mobile data.

## Technical requirements

- **Format:** single self-contained responsive page (HTML/CSS/JS), no login, no multi-page navigation.
- **Form capture:** stores each submission (contact info + selected activity tag + timestamp) to a lightweight, persistent store the founder can review — no app backend needed at this stage.
- **Analytics:** page views, scroll depth, CTA clicks, and conversion rate, at minimum — needed to actually score the page against the 10–20% target.
- **Hosting:** a public, shareable link that works the same whether reached from a WhatsApp message, an Instagram bio link, or a paid ad.
- **Performance:** optimized for 4G mobile data conditions typical in Chennai; no dependency on desktop-only interactions.

## Out of scope

- Actual plan-posting or people-matching functionality
- Account creation, login, or user profiles
- Payment or venue-booking integration
- Multi-page site or navigation menu
- Admin dashboard beyond a raw export of signups

These belong to the manual concierge MVP (WhatsApp/Instagram-run matching) and, later, the real app — not this page.

## Timeline & rollout

| Step | Duration | Detail |
| --- | --- | --- |
| Design & build | 2–3 days | Single page, per this spec |
| Soft launch | Ongoing | Share directly through personal outreach and in-person conversations at courts/cafés (highest-trust channel) |
| Paid traffic test | \~1 week | Small geo-targeted Meta/Instagram ad spend (₹500–1500) aimed at OMR/Chennai, interests spanning board games, quiz nights, study groups, and sports (pickleball/padel/badminton) — not sports-only targeting |
| Review checkpoint | After \~150–200 targeted visitors or \~1–2 weeks | Score conversion rate against the 10–20% target; decide go/no-go on running the manual concierge MVP next |

## Future: venue & booking layer (not V1)

**Concept:** once an activity has enough people, KOODAL surfaces "Court not booked yet → Find & book," handing off to (or embedding) a third-party booking provider — extending the loop to Discover people → Create activity → Find venue → Book → Meet.

**The right instinct to keep:** don't become a booking platform — stay the layer that connects people and activities, and let existing venue infrastructure (Hudle, Playspots, individual courts) handle supply.

**Monetization paths, roughly ranked by how likely they are to work pre-scale:**

- Organizer tools (paid features for frequent organizers) — most reliable early option; doesn't depend on a partner's margin or cooperation
- Sponsored/featured venues — plausible once there's enough local volume to be worth paying for visibility, not before
- Referral/affiliate commission from booking providers — the model in this note, but unproven until each provider's margin is known; platforms like Hudle/Playo already take roughly 8–15% from venues themselves, leaving a thin slice to share further down the chain
- A KOODAL-added booking fee (e.g. ₹30 on a ₹600 booking) — only sustainable if users have no cheaper way to book the same venue directly

**Trigger condition, not a fixed date:** build this once activities in a bookable category (badminton, football) are being created and filled with people but stalling for lack of a venue — not before, and not just because it seems like a logical next layer.

**Validate manually first.** Before any technical integration, test with a human step: when a bookable activity fills up, send the organizer 2–3 nearby court links to book directly. This checks real demand for the feature without a partner integration or revenue-share negotiation yet.

**Pick one category to pilot.** The roadmap (badminton, football, bowling, workshops, trekking, gaming) spans six different supply chains, each needing its own partner relationships. Badminton/pickleball is the most natural first pilot, given it's already a tracked KOODAL category — not all six at once.

## Known risks & product principles

Validation research surfaced a pattern worth designing for from V1, not patching in later: the biggest risk to KOODAL's core loop isn't discovery, it's reliability — people who say yes and don't show up.

### 1. Reliability & no-shows — P0

Real reviews of comparable apps show unreliable participants (last-minute cancellations, no-shows, unresponsive players) as the most common complaint, and it directly undermines the "fill the gap" promise. For V1, build a lightweight reliability system — not deposits or penalties:

- Join confirmation — explicit confirmation of participation, not just a tap of interest
- Reminders at 24h and 2h before the activity
- A simple "I'm going" / "Can't make it" status update
- Cancellation timestamp recorded
- Attendance history tracked (did they actually show up)
- Later: a reliability score or badge derived from that behavior, not self-reported

**Principle:** don't let someone look reliable because they wrote a good profile — let their actual behavior build their reputation over time.

### 2. Prioritize activities where a no-show doesn't break the plan

Not every activity fails the same way when one person doesn't show. Useful V1 filter for which categories to lead with:

- **More forgiving (larger or flexible groups):** board games, group walks, cycling, running, casual meetups, movie outings, food/coffee plans
- **More sensitive (exact headcount, small groups):** badminton doubles, tennis doubles, 5-a-side football, anything needing a precise number of people

This isn't about excluding sports — it's about weighing the cost of a no-show when deciding what to prioritize and promote early.

### 3. Keep skill matching simple, and be honest that it's self-reported

For V1, a basic Beginner / Intermediate / Advanced tag (for activities like badminton) is enough — but label it as self-reported, not an objective rating. A more meaningful rating, derived from actual participation and outcomes, is a later step once there's enough activity history to base it on.

### 4. Trust should be behavior-based, not decorative

A profile built on observable behavior is more useful than a star rating:

> Mohan — 12 activities joined · 10 attended · 1 late cancellation · Member since 2026

versus a generic "⭐⭐⭐⭐⭐ Very active." The former is checkable and honest; the latter is easy to game.

### 5. Core product loop: from incomplete plan to real group

KOODAL isn't just matching individuals — it turns an incomplete plan into a temporary group that actually meets. This replaces the simpler "create → join" flow as the primary product loop.

| Step | What happens | Example |
| --- | --- | --- |
| 1. Create a plan | Organizer posts activity, time, and headcount gap | "Badminton — Saturday, 7 PM — need 2 people" |
| 2. Find people | Nearby people discover the plan and request to join | Two requests come in within an hour |
| 3. Confirm | Organizer accepts participants; each participant confirms they're going | Both accept and confirm |
| 4. Group formation | Once the required headcount is confirmed, KOODAL forms the activity group — the coordination space for this plan | 🏸 Saturday Badminton · 4/4 confirmed · Mohan, Arun, Priya, Karthik |
| 5. Plan happens | The activity takes place | — |
| 6. Show up | Attendance is captured for each participant | 4/4 attended |
| 7. Repeat | KOODAL prompts the next plan | "Play again with this group?" or "Create another plan?" |

**Key principle: group formation is a distinct transition, not an instant side effect of a join request.** Each participant moves through clear states:

**Interested → Confirmed → Group formed → Activity completed**

These states are the backbone for everything that comes later — reliability signals, reminders, group chat, venue details, booking, attendance, repeat groups, and reputation history — without V1 needing to build all of them.

**Two V1 decisions to settle:**

- **Manual vs. auto-accept.** Requiring the organizer to accept every request adds a step that can slow down urgent, same-day plans. Consider letting organizers choose auto-accept for casual or larger-group activities, and manual approval for smaller or skill-sensitive ones.
- **Where the group coordinates.** In V1, the formed group can hand off to a WhatsApp group link rather than building in-app chat — people already coordinate there, and it keeps scope small. In-app chat becomes worth building once repeat groups are common.

**V1 in one line:** KOODAL helps turn an incomplete plan into a real group that actually meets.

### 6. The one hypothesis V1 needs to prove

Everything else — venue booking, monetization, organizer tools, trust scoring, senior communities — is a logical extension once this works, not a parallel bet to make now:

> Can KOODAL reliably help someone who already has a plan find the missing people, and actually get the plan to happen?
