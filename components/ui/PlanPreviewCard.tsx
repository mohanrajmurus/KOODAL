"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { DEMO_PLANS } from "@/lib/activities";

const ROTATE_MS = 3200;

export function PlanPreviewCard() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reduced motion: skip the rotation entirely rather than just speeding
    // it up — the first demo stays put, satisfying "functional without
    // animation" without a jarring instant-cycle fallback.
    if (reducedMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % DEMO_PLANS.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [reducedMotion]);

  const demo = DEMO_PLANS[index];

  return (
    <div className="relative min-h-[300px]">
      <div className="rotate-[-2deg] rounded-[30px] bg-teal p-6.5 text-white">
        <div className="mb-3.5 min-h-4 text-[13px] font-bold tracking-wider text-white/70 uppercase">
          {demo.when}
        </div>
        <div className="font-heading mb-4.5 min-h-16.5 text-[30px] leading-[1.08] font-extrabold tracking-tight">
          {demo.line1}
          <br />
          {demo.line2}
        </div>
        <div className="mb-4.5 flex items-center gap-2.5">
          <span className="h-8.5 w-8.5 rounded-full bg-primary" />
          <span className="h-8.5 w-8.5 rounded-full bg-accent" />
          <span className="grid h-8.5 w-8.5 place-items-center rounded-full border-2 border-dashed border-white/60 bg-white/18 text-lg font-bold">
            +
          </span>
          <span className="grid h-8.5 w-8.5 place-items-center rounded-full border-2 border-dashed border-white/60 bg-white/18 text-lg font-bold">
            +
          </span>
        </div>
        <div className="rounded-full bg-primary p-3 text-center text-[15px] font-bold text-primary-ink">
          {demo.spots}
        </div>
        <div className="mt-3.5 flex justify-center gap-1.5" aria-hidden="true">
          {DEMO_PLANS.map((plan, i) => (
            <span
              key={plan.when}
              className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                i === index ? "bg-primary" : "bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute -right-1.5 -bottom-4.5 rotate-3 rounded-2xl border-2 border-ink bg-background px-4 py-3 text-sm font-bold text-ink">
        Aal kedaichaanga ✦
      </div>
    </div>
  );
}
