"use client";

import { RevealOnScroll } from "./RevealOnScroll";

interface Step {
  n: string;
  title: string;
  body: string;
}

const STAGGER_MS = 180;

export function AnimatedSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-3">
      {steps.map((step, i) => (
        <RevealOnScroll key={step.title} delayMs={i * STAGGER_MS}>
          <div className="rounded-lg border border-(--color-border) bg-(--color-surface) p-6 pb-7">
            <div className="font-heading mb-4.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-(--color-primary) text-lg font-extrabold text-(--color-ink)">
              {step.n}
            </div>
            <h3 className="font-heading mb-2 text-xl font-extrabold tracking-tight text-(--color-ink)">
              {step.title}
            </h3>
            <p className="text-base leading-relaxed text-(--color-muted)">{step.body}</p>
          </div>
        </RevealOnScroll>
      ))}
    </div>
  );
}
