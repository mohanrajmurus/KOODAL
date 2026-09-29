"use client";

import { useSignup } from "@/context/SignupProvider";
import type { ActivityLabel } from "@/lib/types";

interface ActivityPillProps {
  label: ActivityLabel;
  /** The group's selected-state fill color — colors are data-driven, hence inline styles. */
  color: string;
}

export function ActivityPill({ label, color }: ActivityPillProps) {
  const { activities, toggleActivity } = useSignup();
  const isOn = activities.includes(label);
  const textColor = isOn ? (color === "#8a9400" ? "#15191a" : "#fff") : "#15191a";

  return (
    <button
      type="button"
      aria-pressed={isOn}
      onClick={() => toggleActivity(label)}
      style={{
        background: isOn ? color : "#fff",
        borderColor: isOn ? color : "#e8e3d6",
        color: textColor,
      }}
      className="min-h-12 rounded-full border-2 px-5 py-3 text-base font-medium transition-[transform,background-color,border-color,color] duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0"
    >
      {label}
    </button>
  );
}
