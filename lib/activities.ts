import type { ActivityLabel } from "./types";

export interface ActivityGroup {
  title: string;
  /** Selected-state fill color for this group's pills. */
  color: string;
  items: ActivityLabel[];
}

export const ACTIVITY_GROUPS: ActivityGroup[] = [
  { title: "Hang", color: "#ff6a4d", items: ["Board Games", "Quiz Nights", "Study Groups"] },
  { title: "Explore", color: "#0f7f76", items: ["Beach Games", "Treks", "Photography Walks"] },
  { title: "Go Out", color: "#15191a", items: ["Movies", "Theatre", "Cultural Events"] },
  {
    title: "Play",
    color: "#8a9400",
    items: ["Turf Cricket", "Badminton", "Table Tennis", "Pickleball", "Padel"],
  },
];

export const ALL_ACTIVITIES: ActivityLabel[] = ACTIVITY_GROUPS.flatMap((g) => g.items);

export interface DemoPlan {
  when: string;
  line1: string;
  line2: string;
  spots: string;
}

/** Rotates in the hero's illustrative plan card — see components/ui/PlanPreviewCard.tsx. */
export const DEMO_PLANS: DemoPlan[] = [
  { when: "Thursday · Thoraipakkam", line1: "Quiz night,", line2: "team of four", spots: "2 spots left" },
  { when: "Sunday 7am · Perungudi", line1: "Turf cricket,", line2: "short by three", spots: "3 spots left" },
  { when: "Saturday · Navalur café", line1: "Board games,", line2: "table of six", spots: "2 spots left" },
  {
    when: "Tuesday 8pm · Sholinganallur",
    line1: "Badminton doubles,",
    line2: "one short",
    spots: "1 spot left",
  },
];
