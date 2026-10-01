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
  /** How many more people this plan needs — drives the hero card's live headcount fill. */
  need: number;
}

/** Rotates in the hero's illustrative "Plans near you" card — see components/ui/PlanPreviewCard.tsx. */
export const DEMO_PLANS: DemoPlan[] = [
  { when: "Sat 6 AM · Sholinganallur turf", line1: "Box cricket,", line2: "need 3", spots: "3 spots left", need: 3 },
  { when: "Fri 7 PM · Adyar café", line1: "Board game night,", line2: "need 2", spots: "2 spots left", need: 2 },
  { when: "Wed 8 PM · Doubles", line1: "Badminton,", line2: "need 1", spots: "1 spot left", need: 1 },
  { when: "Sat 4 PM · Gaming café", line1: "Console / LAN session,", line2: "need 2", spots: "2 spots left", need: 2 },
  { when: "Sun 7 AM", line1: "Pickleball,", line2: "need 2", spots: "2 spots left", need: 2 },
  { when: "Sun 5:30 AM · ECR", line1: "Morning ride,", line2: "open to 4 more", spots: "4 spots open", need: 4 },
];
