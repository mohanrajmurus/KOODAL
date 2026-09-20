"use client";

import { useSignup } from "@/context/SignupProvider";
import type { Activity } from "@/lib/activities";

export function ActivityPill({ activity }: { activity: Activity }) {
  const { activity: selected, toggleActivity } = useSignup();
  const isSelected = selected === activity.id;

  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={() => toggleActivity(activity.id)}
      className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-[transform,background-color,border-color] duration-150 ease-out hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.97] ${
        isSelected
          ? "border-ink bg-primary text-ink shadow-[0_6px_0_-3px_rgba(21,25,26,0.12)]"
          : "border-border bg-surface text-ink hover:border-ink"
      }`}
    >
      {activity.label}
    </button>
  );
}
