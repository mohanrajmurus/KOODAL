"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DEMO_PLANS } from "@/lib/activities";

const DEMO_ROTATE_MS = 4200;
const JOIN_TICK_MS = 800;
const NAMES = ["Priya", "Arjun", "Divya", "Karthik", "Meera", "Vikram", "Sneha"];

export function PlanPreviewCard() {
  const reducedMotion = useReducedMotion();
  const [demo, setDemo] = useState(0);
  const [joined, setJoined] = useState(0);

  useEffect(() => {
    // Reduced motion: skip the rotation/join simulation entirely and show a
    // settled, fully-confirmed plan instead of animating toward one.
    if (reducedMotion) return;
    const demoId = setInterval(() => {
      setDemo((d) => (d + 1) % DEMO_PLANS.length);
      setJoined(0);
    }, DEMO_ROTATE_MS);
    const joinId = setInterval(() => setJoined((j) => j + 1), JOIN_TICK_MS);
    return () => {
      clearInterval(demoId);
      clearInterval(joinId);
    };
  }, [reducedMotion]);

  const plan = DEMO_PLANS[demo];
  const need = plan.need;
  const have = need === 1 ? 3 : 2;
  const total = have + need;
  const filledCount = reducedMotion ? need : Math.min(joined, need);
  const full = filledCount >= need;

  const queue = [1, 2].map((offset) => {
    const q = DEMO_PLANS[(demo + offset) % DEMO_PLANS.length];
    return {
      title: `${q.line1} ${q.line2}`.replace(",", " ·"),
      when: q.when,
      spots: q.spots,
      dotClass: offset === 1 ? "bg-accent" : "bg-primary",
    };
  });

  const toastName = NAMES[(demo + have + filledCount - 1 + NAMES.length) % NAMES.length];

  return (
    <div className="relative">
      <div className="flex flex-col gap-3.5 rounded-4xl bg-teal px-4.5 pt-5.5 pb-4.5 text-white shadow-[10px_10px_0_#d4e031]">
        <div className="flex items-center justify-between gap-2.5 px-1">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold tracking-[0.1em] text-[#d3ece7] uppercase">Plans near you</span>
            <span className="font-heading text-[22px] font-extrabold tracking-[-0.02em]">Chennai</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.75 text-[13px] font-bold text-ink">
            <span className="h-1.75 w-1.75 rounded-full bg-ink" />
            Live
          </span>
        </div>

        <div className="flex flex-col gap-3.5 rounded-[22px] bg-background p-4.5 text-ink">
          <div className="flex items-start justify-between gap-3">
            <div className="flex min-w-0 flex-col gap-1.5">
              <span className="min-h-[15px] text-xs font-bold tracking-[0.06em] text-muted uppercase">
                {plan.when}
              </span>
              <span className="font-heading min-h-13.5 text-[26px] leading-[1.05] font-extrabold tracking-[-0.02em]">
                {plan.line1} {plan.line2}
              </span>
            </div>
            <span
              className={`shrink-0 rounded-full px-3 py-1.5 text-[13px] font-bold text-ink transition-colors duration-300 ${
                full ? "bg-primary" : "bg-[#efeadc]"
              }`}
            >
              {full ? "Full ✓" : "Open"}
            </span>
          </div>

          <div className="flex gap-1.5">
            {Array.from({ length: total }, (_, i) => {
              const filled = i < have + filledCount;
              const fresh = i >= have && i < have + filledCount;
              return (
                <span
                  key={i}
                  className={`font-heading grid h-10 flex-1 place-items-center rounded-xl border-2 text-base font-extrabold transition-[background-color,border-color,transform] duration-300 ${
                    fresh
                      ? "scale-[1.06] border-primary bg-primary text-ink"
                      : filled
                        ? "border-teal bg-teal text-white"
                        : "border-dashed border-[#c9c4b6] text-muted"
                  }`}
                >
                  {filled ? (fresh ? NAMES[(demo + i) % NAMES.length][0] : "") : "+"}
                </span>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-2.5 text-sm">
            <span className="font-bold">
              {have + filledCount}/{total} confirmed
            </span>
            <span className="text-muted">{full ? "Plan is on" : `${need - filledCount} more needed`}</span>
          </div>
        </div>

        {queue.map((q) => (
          <div
            key={q.title}
            className="flex items-center gap-3 rounded-[18px] border border-white/18 bg-white/10 px-3.5 py-3"
          >
            <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${q.dotClass}`} />
            <span className="flex min-w-0 flex-1 flex-col gap-0.5">
              <span className="truncate text-[15px] font-bold">{q.title}</span>
              <span className="truncate text-[13px] text-[#d3ece7]">{q.when}</span>
            </span>
            <span className="shrink-0 text-[13px] font-bold whitespace-nowrap text-[#e9f08a]">{q.spots}</span>
          </div>
        ))}
      </div>

      <div
        className={`absolute -right-1.5 bottom-0 flex items-center gap-2.5 rounded-full border-2 border-ink bg-background py-1.75 pr-4 pl-2 text-sm font-bold text-ink transition-[opacity,transform] duration-300 ${
          filledCount > 0 ? "translate-y-0 rotate-2 opacity-100" : "translate-y-2 rotate-2 opacity-0"
        }`}
        aria-hidden={filledCount <= 0}
      >
        <span className="h-6.5 w-6.5 shrink-0 rounded-full bg-accent" />
        <span>{filledCount > 0 ? `${toastName} joined your plan` : ""}</span>
      </div>
    </div>
  );
}
