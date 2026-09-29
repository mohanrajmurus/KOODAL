"use client";

import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CountMeInButton } from "@/components/ui/CountMeInButton";

interface Step {
  n: string;
  title: string;
  body: string;
  status: string;
  /** Dot color once this step is active. */
  tone: string;
}

const STEPS: Step[] = [
  {
    n: "01",
    title: "Post your plan",
    body: "What you're doing, when and where, and how many people you need.",
    status: "Sun 7am · needs 3",
    tone: "#ff6a4d",
  },
  {
    n: "02",
    title: "People nearby join & confirm",
    body: "People looking for the same thing request to join, then confirm they're going.",
    status: "3 requested · 3 confirmed",
    tone: "#d4e031",
  },
  {
    n: "03",
    title: "Your group forms",
    body: "Once the headcount is confirmed, everyone lands in one group to coordinate.",
    status: "Group created · 11 members",
    tone: "#5fd3c6",
  },
  {
    n: "04",
    title: "The plan happens",
    body: "Everyone shows up. Done.",
    status: "Played ✓",
    tone: "#d4e031",
  },
];

/**
 * The connecting line fills and each dot/title lights up as the visitor
 * scrolls past it, tracked as a 0–1 progress value against the timeline's
 * own bounding box. setProgress only ever runs inside the scroll/resize
 * handlers below (via rAF), never synchronously in the effect body.
 */
function useScrollProgress(ref: React.RefObject<HTMLDivElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const measure = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = window.innerHeight * 0.55;
      const p = Math.max(0, Math.min(1, (mid - rect.top - 30) / Math.max(1, rect.height - 60)));
      setProgress(p);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(measure);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    measure();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ref]);

  return progress;
}

export function HowItWorks() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(trackRef);
  const activeStep = Math.min(STEPS.length - 1, Math.floor(progress * (STEPS.length - 0.001)));

  return (
    <section id="how-it-works" className="scroll-mt-17.5 pt-16">
      <RevealOnScroll
        className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-15 gap-y-10 rounded-xl bg-dark p-[clamp(28px,6vw,60px)] text-cream"
      >
        <div className="flex flex-col items-start gap-4 self-start sm:sticky sm:top-25">
          <div className="text-[13px] font-bold tracking-[0.12em] text-primary uppercase">How it works</div>
          <h2 className="font-heading text-[clamp(34px,6vw,54px)] leading-none font-extrabold tracking-[-0.035em] text-balance">
            From incomplete plan <span className="text-primary">to real group.</span>
          </h2>
          <p className="max-w-[26em] text-[17px] leading-normal text-dark-muted">
            You bring the plan. KOODAL finds the people nearby who want in.
          </p>
          <div className="mt-1.5 flex items-baseline gap-2.5">
            <span className="font-heading text-[64px] leading-none font-extrabold tracking-[-0.04em] text-primary">
              {String(activeStep + 1).padStart(2, "0")}
            </span>
            <span className="text-[15px] font-medium text-dark-muted">/ 04</span>
          </div>
          <CountMeInButton location="how_it_works" variant="lime" className="mt-1.5" />
        </div>

        <div ref={trackRef} className="relative flex flex-col gap-11 py-1.5">
          <span aria-hidden="true" className="absolute top-7.5 bottom-7.5 left-6 w-0.5 bg-cream/14" />
          <span
            aria-hidden="true"
            className="absolute top-7.5 left-6 w-0.5 bg-primary transition-[height] duration-150 ease-linear"
            style={{ height: `calc((100% - 60px) * ${progress})` }}
          />
          {STEPS.map((step, i) => {
            const on = i <= activeStep;
            return (
              <div key={step.title} className="relative grid grid-cols-[48px_minmax(0,1fr)] items-start gap-5">
                <span
                  className={`font-heading relative z-10 grid h-12 w-12 place-items-center rounded-full text-base font-extrabold transition-[background-color,color,box-shadow] duration-300 ${
                    on ? "bg-primary text-ink" : "bg-ink text-dark-muted"
                  }`}
                  style={{
                    boxShadow: `0 0 0 2px ${on ? "var(--primary)" : "rgba(250,247,239,0.22)"}${
                      i === activeStep ? ", 0 0 0 8px rgba(212,224,49,0.16)" : ""
                    }`,
                  }}
                >
                  {step.n}
                </span>
                <div className="flex flex-col gap-2.5 pt-2">
                  <h3
                    className={`font-heading text-[clamp(22px,3.2vw,28px)] leading-[1.1] font-extrabold tracking-[-0.02em] transition-colors duration-300 ${
                      on ? "text-cream" : "text-cream/55"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="max-w-[30em] text-base leading-normal text-pretty text-dark-muted">{step.body}</p>
                  <div
                    className={`inline-flex flex-wrap items-center gap-2 self-start rounded-full border px-3.5 py-2 text-sm transition-colors duration-300 ${
                      on
                        ? "border-primary/35 bg-primary/12 text-[#e9f08a]"
                        : "border-cream/12 bg-cream/6 text-dark-muted"
                    }`}
                  >
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{ background: on ? step.tone : "rgba(250,247,239,0.3)" }}
                    />
                    <span className="font-bold">Turf cricket</span>
                    <span className="opacity-55">·</span>
                    <span>{step.status}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </RevealOnScroll>
    </section>
  );
}
