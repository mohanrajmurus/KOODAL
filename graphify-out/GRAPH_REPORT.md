# Graph Report - KOODAL  (2026-10-16)

## Corpus Check
- Corpus is ~13,543 words - fits in a single context window. You may not need a graph.

## Summary
- 231 nodes · 392 edges · 13 communities (12 shown, 1 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 7 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Page Sections
- Project Config & Deps
- Product Spec & Signup Concept
- API Routes
- How It Works & Signup Section
- TypeScript Config
- Icon & OG Image
- Admin Page
- Footer & Lockup
- Root Layout & Fonts
- Signup Form
- Design Import Concepts
- PostCSS Config

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `KOODAL Landing Page PRD` - 14 edges
3. `CountMeInButton()` - 13 edges
4. `react` - 12 edges
5. `useSignup()` - 11 edges
6. `Home()` - 10 edges
7. `track()` - 9 edges
8. `RevealOnScroll()` - 8 edges
9. `useReducedMotion()` - 8 edges
10. `next` - 8 edges

## Surprising Connections (you probably didn't know these)
- `AdminPage()` --calls--> `AdminSubmissions()`  [EXTRACTED]
  app/admin/page.tsx → components/admin/AdminSubmissions.tsx
- `RootLayout()` --calls--> `SignupProvider()`  [EXTRACTED]
  app/layout.tsx → context/SignupProvider.tsx
- `Home()` --calls--> `Footer()`  [EXTRACTED]
  app/page.tsx → components/sections/Footer.tsx
- `Home()` --calls--> `HowItWorks()`  [EXTRACTED]
  app/page.tsx → components/sections/HowItWorks.tsx
- `Home()` --calls--> `SignupSection()`  [EXTRACTED]
  app/page.tsx → components/sections/SignupSection.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Signup data flow** — claude_cta_form, claude_signup_api, claude_supabase_signups, claude_admin_page [EXTRACTED 0.95]
- **PRD-driven landing page requirements** — koodal_landing_page_prd_page_structure, koodal_landing_page_prd_visual_design, koodal_landing_page_prd_animation, koodal_landing_page_prd_technical [INFERRED 0.85]

## Communities (13 total, 1 thin omitted)

### Community 0 - "Page Sections"
Cohesion: 0.13
Nodes (24): Home(), Activities(), Faq(), FAQS, Header(), NAV_LINKS, Hero(), ActivityCard() (+16 more)

### Community 1 - "Project Config & Deps"
Cohesion: 0.06
Nodes (35): eslintConfig, dependencies, next, @next/third-parties, react, react-dom, @supabase/supabase-js, @vercel/analytics (+27 more)

### Community 2 - "Product Spec & Signup Concept"
Cohesion: 0.08
Nodes (30): Six MVP activities (lib/activities.ts, ActivityCard), /admin signup export page, Analytics (GA4 events), DPDP consent checkbox, CtaForm, KOODAL (validation landing page), useInView / useReducedMotion hooks, Out of scope list (+22 more)

### Community 3 - "API Routes"
Cohesion: 0.13
Nodes (18): passwordMatches(), POST(), POST(), VALID_INTENTS, SignupContextValue, ACTIVITIES, Activity, ALL_ACTIVITIES (+10 more)

### Community 4 - "How It Works & Signup Section"
Cohesion: 0.16
Nodes (16): HowItWorks(), Step, STEPS, useScrollProgress(), SignupSection(), NAMES, PlanPreviewCard(), RevealOnScroll() (+8 more)

### Community 5 - "TypeScript Config"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 6 - "Icon & OG Image"
Cohesion: 0.13
Nodes (6): contentType, size, contentType, size, nextConfig, next

### Community 7 - "Admin Page"
Cohesion: 0.29
Nodes (8): AdminPage(), metadata, AdminSubmissions(), cellText(), COLUMNS, downloadCsv(), SignupRow, toCsv()

### Community 8 - "Footer & Lockup"
Cohesion: 0.25
Nodes (8): Footer(), LINKS, SOCIALS, KoodalLockup(), KoodalLockupProps, IconProps, InstagramGlyph(), WhatsAppGlyph()

### Community 9 - "Root Layout & Fonts"
Cohesion: 0.25
Nodes (7): bricolage, dmSans, metadata, RootLayout(), SignupProvider(), @next/third-parties, @vercel/analytics

### Community 10 - "Signup Form"
Cohesion: 0.36
Nodes (5): CtaForm(), Field(), FieldProps, INTENT_OPTIONS, SuccessConfirmation()

### Community 11 - "Design Import Concepts"
Cohesion: 0.50
Nodes (4): Claude Design import (v2/v3 design), HowItWorks section, KoodalLockup wordmark, PlanPreviewCard (hero)

## Knowledge Gaps
- **19 isolated node(s):** `react-dom`, `@tailwindcss/postcss`, `@types/node`, `@types/react`, `@types/react-dom` (+14 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 102 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `How It Works & Signup Section` to `Page Sections`, `Project Config & Deps`, `Admin Page`, `Footer & Lockup`, `Signup Form`?**
  _High betweenness centrality (0.257) - this node is a cross-community bridge._
- **What connects `react-dom`, `@tailwindcss/postcss`, `@types/node` to the rest of the system?**
  _19 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.13086770981507823 - nodes in this community are weakly interconnected._
- **Why does `next` connect `Icon & OG Image` to `Root Layout & Fonts`, `Project Config & Deps`, `Admin Page`?**
  _High betweenness centrality (0.102) - this node is a cross-community bridge._
- **Should `Project Config & Deps` be split into smaller, more focused modules?**
  _Cohesion score 0.05555555555555555 - nodes in this community are weakly interconnected._
- **Should `Product Spec & Signup Concept` be split into smaller, more focused modules?**
  _Cohesion score 0.08045977011494253 - nodes in this community are weakly interconnected._
- **Should `API Routes` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._