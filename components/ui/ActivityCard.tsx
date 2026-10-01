"use client";

import { useSignup } from "@/context/SignupProvider";
import type { Activity } from "@/lib/activities";

export function ActivityCard({ label, icon, hook, color }: Activity) {
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
      className="flex min-h-32 flex-col items-start gap-2 rounded-2xl border-2 p-4.5 text-left transition-[transform,background-color,border-color,color] duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0"
    >
      <span className="text-2xl" aria-hidden="true">
        {icon}
      </span>
      <span className="font-heading text-lg leading-tight font-extrabold tracking-[-0.01em]">{label}</span>
      <span className={`text-sm leading-snug ${isOn ? "opacity-90" : "text-muted"}`}>{hook}</span>
    </button>
  );
}
