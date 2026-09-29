"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ActivityPill } from "@/components/ui/ActivityPill";
import { CountMeInButton } from "@/components/ui/CountMeInButton";
import { ACTIVITY_GROUPS } from "@/lib/activities";
import { useSignup } from "@/context/SignupProvider";

export function Activities() {
  const { activities } = useSignup();
  const pickedNote = activities.length
    ? `${activities.length} selected — carried to the form below.`
    : "Pick as many as you like.";

  return (
    <section id="activities" className="scroll-mt-17.5 pt-18">
      <RevealOnScroll>
        <div className="mb-2.5 text-[13px] font-bold tracking-[0.12em] text-teal uppercase">Activities</div>
        <h2 className="font-heading mb-3 text-[clamp(34px,7vw,56px)] leading-none font-extrabold tracking-[-0.035em] text-ink">
          What are you <span className="text-accent">up for?</span>
        </h2>
        <p className="mb-7.5 text-[17px] text-muted">Tap everything you&apos;d show up for. {pickedNote}</p>

        <div className="flex flex-col gap-6.5">
          {ACTIVITY_GROUPS.map((group) => {
            const count = group.items.filter((item) => activities.includes(item)).length;
            return (
              <div key={group.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-[3px]"
                    style={{ background: group.color }}
                    aria-hidden="true"
                  />
                  <span className="text-xs font-bold tracking-[0.12em] whitespace-nowrap text-muted uppercase">
                    {group.title}
                  </span>
                  <span className="h-px flex-1 bg-border" aria-hidden="true" />
                  <span
                    className="text-xs font-bold tracking-[0.06em] whitespace-nowrap uppercase transition-opacity duration-200"
                    style={{ color: group.color, opacity: count ? 1 : 0 }}
                    aria-hidden={!count}
                  >
                    {count ? `${count} picked` : ""}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((label) => (
                    <ActivityPill key={label} label={label} color={group.color} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-7.5 flex flex-wrap items-center gap-x-4.5 gap-y-3.5">
          <CountMeInButton location="activities" />
          <span className="text-sm font-medium text-muted">Currently onboarding the first group</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
