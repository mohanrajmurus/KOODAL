import type { ActivityLabel } from "./types";

export interface Activity {
  label: ActivityLabel;
  /** Flat-illustration glyph — see CLAUDE.md on why this isn't a hand-drawn icon set. */
  icon: string;
  /** The PRD's one-line "card hook" copy for this activity. */
  hook: string;
  /** Selected-state fill color for this card — colors are data-driven, hence inline styles. */
  color: string;
}

/**
 * The six MVP activities only, in the PRD's alternating sports/non-sports
 * order so the page doesn't read as a sports app.
 */
export const ACTIVITIES: Activity[] = [
  { label: "Box Cricket", icon: "🏏", hook: "Turf booked, team short? Fill your side.", color: "#ff6a4d" },
  { label: "Board Games", icon: "🎲", hook: "Game night short of players? Fill the table.", color: "#0f7f76" },
  { label: "Badminton", icon: "🏸", hook: "Missing your fourth? Find a partner nearby.", color: "#8a9400" },
  { label: "Gaming", icon: "🎮", hook: "Squad short? Find people to game with in person.", color: "#15191a" },
  { label: "Pickleball", icon: "🥎", hook: "New or regular, find people for your court.", color: "#ff6a4d" },
  { label: "Cycling", icon: "🚴", hook: "Don't ride alone. Find a group for your route.", color: "#0f7f76" },
];

export const ALL_ACTIVITIES: ActivityLabel[] = ACTIVITIES.map((a) => a.label);

export interface DemoPlan {
  when: string;
  line1: string;
  line2: string;
  spots: string;
}

/** Rotates in the hero's illustrative plan card — see components/ui/PlanPreviewCard.tsx. */
export const DEMO_PLANS: DemoPlan[] = [
  { when: "Saturday 6am · Sholinganallur turf", line1: "Box cricket,", line2: "short by three", spots: "3 spots left" },
  { when: "Friday 7pm · Adyar café", line1: "Board games,", line2: "table of six", spots: "2 spots left" },
  { when: "Wednesday 8pm · Doubles", line1: "Badminton,", line2: "missing a fourth", spots: "1 spot left" },
  { when: "Saturday 4pm · Gaming café", line1: "LAN session,", line2: "squad short by two", spots: "2 spots left" },
  { when: "Sunday 7am · Pickleball", line1: "Pickleball,", line2: "need two more", spots: "2 spots left" },
  { when: "Sunday 5:30am · ECR ride", line1: "Morning ride,", line2: "open to four more", spots: "4 spots left" },
];
