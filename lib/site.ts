// `||` rather than `??` so a blank (but present) env var — e.g. an unfilled
// Vercel project env var — still falls back. Falls back to the production
// domain, not localhost, so canonical/OG/sitemap URLs stay correct even if the
// env var is forgotten on a deploy.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://koodal.social";

export const INSTAGRAM_URL = "https://instagram.com/koodal.in";
