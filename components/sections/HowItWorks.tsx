import { AnimatedSteps } from "@/components/ui/AnimatedSteps";

const STEPS = [
  {
    n: "1",
    title: "Post your plan",
    body: "Padel at 7, quiz on Thursday, two seats open at the board-game table.",
  },
  {
    n: "2",
    title: "Nearby people join",
    body: "People within a few kilometres who are up for the same thing ask in.",
  },
  {
    n: "3",
    title: "Plan happens",
    body: "Headcount filled, court booked, nobody cancels the group at 6pm.",
  },
];

export function HowItWorks() {
  return (
    <section className="pt-14 pb-2.5">
      <h2 className="font-heading mb-2 text-[clamp(30px,6vw,42px)] font-extrabold tracking-tight text-(--color-ink)">
        How it works
      </h2>
      <p className="mb-8.5 text-lg text-(--color-muted)">Three steps. No app to download yet.</p>
      <AnimatedSteps steps={STEPS} />
    </section>
  );
}
