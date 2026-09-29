import { CountMeInButton } from "@/components/ui/CountMeInButton";
import { PlanPreviewCard } from "@/components/ui/PlanPreviewCard";

export function Hero() {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-10 pt-11 pb-14">
      <div>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary px-3.5 py-1.75 text-[13px] font-bold tracking-wide">
          <span className="inline-block h-1.75 w-1.75 rounded-full bg-ink" />
          Now starting in Chennai
        </div>

        <h1 className="font-heading mb-5 text-[clamp(44px,11vw,80px)] leading-[0.94] font-extrabold tracking-[-0.04em] text-balance">
          Plan irukku.
          <br />
          <span
            className="text-accent"
            style={{
              background:
                "linear-gradient(transparent 72%, var(--primary) 72%, var(--primary) 90%, transparent 90%)",
            }}
          >
            Aal illa?
          </span>
        </h1>

        <p className="font-heading mb-3.5 max-w-[24em] text-[clamp(20px,3.4vw,25px)] leading-tight font-semibold tracking-[-0.02em] text-ink">
          Find people nearby to complete your plan.
        </p>
        <p className="mb-6.5 max-w-[32em] text-[17px] leading-normal text-pretty text-[#43494a]">
          Post the plan you already have. KOODAL helps you find the people nearby to complete it.
        </p>

        <div className="flex flex-col items-start gap-2.5">
          <CountMeInButton location="hero" variant="heroSolid" />
          <span className="pl-1 text-sm text-muted">Name, WhatsApp number, area — that&apos;s it.</span>
        </div>

        <div className="mt-5.5 flex items-center gap-3">
          <div className="flex">
            <span className="h-7.5 w-7.5 rounded-full border-2 border-background bg-teal" />
            <span className="-ml-2.5 h-7.5 w-7.5 rounded-full border-2 border-background bg-accent" />
            <span className="-ml-2.5 h-7.5 w-7.5 rounded-full border-2 border-background bg-primary" />
          </div>
          <span className="text-sm font-medium text-muted">Currently onboarding the first group</span>
        </div>
      </div>

      <PlanPreviewCard />
    </section>
  );
}
