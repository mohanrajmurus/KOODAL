"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { CountMeInButton } from "@/components/ui/CountMeInButton";
import { ACTIVITIES } from "@/lib/activities";
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3.5">
          {ACTIVITIES.map((activity) => (
            <ActivityCard key={activity.label} {...activity} />
          ))}
        </div>

        <div className="mt-7.5 flex flex-wrap items-center gap-x-4.5 gap-y-3.5">
          <CountMeInButton location="activities" />
          <span className="text-sm font-medium text-muted">Currently onboarding the first group</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
