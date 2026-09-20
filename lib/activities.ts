import type { ActivityTag } from "./types";

export interface Activity {
  id: Exclude<ActivityTag, "any">;
  label: string;
}

export interface ActivityGroup {
  emoji: string;
  title: string;
  activities: Activity[];
}

export const ACTIVITY_GROUPS: ActivityGroup[] = [
  {
    emoji: "🏸",
    title: "Sports & Games",
    activities: [
      { id: "turf_cricket", label: "Turf Cricket" },
      { id: "badminton", label: "Badminton" },
      { id: "table_tennis", label: "Table Tennis" },
      { id: "pickleball", label: "Pickleball" },
      { id: "padel", label: "Padel" },
    ],
  },
  {
    emoji: "🎲",
    title: "Social Games",
    activities: [
      { id: "board_games", label: "Board Games" },
      { id: "quiz_nights", label: "Quiz Nights" },
    ],
  },
  {
    emoji: "🌊",
    title: "Outdoor & Casual",
    activities: [
      { id: "beach_games", label: "Beach Games" },
      { id: "photography_walks", label: "Photography Walks" },
    ],
  },
  {
    emoji: "🎬",
    title: "Entertainment",
    activities: [
      { id: "movie_groups", label: "Movie Groups" },
      { id: "theatre_cultural", label: "Theatre / Cultural Events" },
    ],
  },
];

export const ACTIVITIES: Activity[] = ACTIVITY_GROUPS.flatMap((group) => group.activities);

export function activityLabel(tag: ActivityTag): string {
  if (tag === "any") return "";
  return ACTIVITIES.find((a) => a.id === tag)?.label ?? "";
}
