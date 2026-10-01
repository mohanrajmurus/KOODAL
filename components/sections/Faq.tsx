"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What is KOODAL?",
    a: "KOODAL fills the missing people in your plans — not the venue. Post what you're doing and how many you're short, and find people nearby who want in.",
  },
  {
    q: "What can I use KOODAL for?",
    a: "Six activities to start: box cricket, badminton, pickleball, board games, in-person gaming, and cycling. KOODAL doesn't do bookings — book your turf or court wherever you already do, KOODAL just fills the people.",
  },
  {
    q: "How does KOODAL work?",
    a: "Post your plan → people join & confirm → your group forms → the plan happens. The idea is simple: turn an incomplete plan into a real group.",
  },
  {
    q: "Do I need to know the people before joining?",
    a: "No. KOODAL helps you find people who are interested in the same activity — your group forms around that specific plan.",
  },
  {
    q: "Can I choose to play with people of the same gender?",
    a: "Yes. When posting or joining a plan, you can set a gender preference — Anyone or Same gender only — if that's what would make you comfortable joining. It's optional, off by default, and only shown on plans where it's turned on.",
  },
  {
    q: "Where is KOODAL available?",
    a: "We're starting in Chennai — currently onboarding the first group before expanding further.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      className="grid scroll-mt-17.5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-x-12.5 gap-y-7.5 pt-22"
    >
      <div>
        <div className="mb-2.5 text-[13px] font-bold tracking-[0.12em] text-teal uppercase">FAQs</div>
        <h2 className="font-heading text-[clamp(34px,7vw,56px)] leading-none font-extrabold tracking-[-0.035em]">
          Doubts? <span className="text-accent">Kelunga.</span>
        </h2>
      </div>
      <div className="flex flex-col border-t border-[#dcd8cb]">
        {FAQS.map((faq, i) => {
          const isOpen = open === i;
          const panelId = `faq-panel-${i}`;
          return (
            <div key={faq.q} className="border-b border-[#dcd8cb]">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="font-heading flex min-h-14 w-full items-center justify-between gap-4 py-5 text-left text-xl font-extrabold tracking-[-0.015em] text-ink"
              >
                <span>{faq.q}</span>
                <span
                  aria-hidden="true"
                  className={`grid h-8 w-8 flex-none place-items-center rounded-full font-sans text-[22px] font-medium transition-[transform,background-color] duration-250 ${
                    isOpen ? "rotate-45 bg-primary" : "bg-[#efeadc]"
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden" inert={!isOpen}>
                  <p className="pr-10 pb-5.5 text-base leading-[1.55] text-pretty text-[#43494a]">{faq.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
