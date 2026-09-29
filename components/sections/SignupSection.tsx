import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { CtaForm } from "@/components/ui/CtaForm";
import { StoreButtons } from "@/components/ui/StoreButtons";

export function SignupSection() {
  return (
    <section className="pt-22">
      <RevealOnScroll className="rounded-xl bg-dark p-[clamp(28px,6vw,52px)] text-cream">
        <div className="mb-3.5 inline-flex items-center gap-2 text-[13px] font-bold tracking-[0.06em] text-primary uppercase">
          <span className="inline-block h-1.75 w-1.75 rounded-full bg-primary" />
          Now starting in Chennai
        </div>
        <h2 className="font-heading mb-3 max-w-[18em] text-[clamp(30px,6vw,46px)] leading-[1.02] font-extrabold tracking-[-0.03em]">
          Drop your details. <span className="text-primary">We&apos;ll bring the rest.</span>
        </h2>
        <p className="mb-4 max-w-[32em] text-base leading-[1.55] text-dark-muted">
          When a plan near you is short, you hear from us on WhatsApp — not from an app you forgot you
          installed.
        </p>
        <p className="mb-6.5 text-[15px] font-medium text-primary">You meet through the plan, not a random DM.</p>
        <CtaForm />
        <StoreButtons />
      </RevealOnScroll>
    </section>
  );
}
