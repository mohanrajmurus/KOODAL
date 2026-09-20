"use client";

import { CtaForm } from "@/components/ui/CtaForm";
import { PlanPreviewCard } from "@/components/ui/PlanPreviewCard";
import { useSignup } from "@/context/SignupProvider";

export const HERO_SECTION_ID = "hero-section";

export function Hero() {
  const { signupCount } = useSignup();

  return (
    <section
      id={HERO_SECTION_ID}
      className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-10 py-8.5 pb-11.5"
    >
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.5 text-[13px] font-bold tracking-wide">
          <span className="inline-block h-1.75 w-1.75 rounded-full bg-ink" />
          Now starting in Chennai
        </div>

        <h1 className="font-heading mb-5 text-[clamp(42px,11vw,76px)] leading-[0.94] font-extrabold tracking-[-0.04em] text-balance">
          Plan irukku.
          <br />
          <span className="text-accent">Aal illa?</span>
        </h1>

        <p className="mb-7 max-w-[30em] text-lg leading-relaxed text-pretty text-ink/80">
          Post the plan you already have — a padel game, a quiz night, a board-game evening —
          and KOODAL finds the people nearby to fill it out.
        </p>

        <div data-cta-anchor="">
          <CtaForm placement="hero" />
        </div>

        <div className="mt-5.5 flex items-center gap-3">
          <div className="flex">
            <span className="h-7.5 w-7.5 rounded-full border-2 border-background bg-teal" />
            <span className="-ml-2.5 h-7.5 w-7.5 rounded-full border-2 border-background bg-accent" />
            <span className="-ml-2.5 h-7.5 w-7.5 rounded-full border-2 border-background bg-primary" />
          </div>
          <span className="text-sm font-medium text-muted">
            <strong className="font-bold text-ink">{signupCount}</strong> people already in for
            the first plans
          </span>
        </div>
      </div>

      <PlanPreviewCard />
    </section>
  );
}
