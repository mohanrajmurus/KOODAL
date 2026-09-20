import { CtaForm } from "@/components/ui/CtaForm";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function ClosingCta() {
  return (
    <section className="pt-14">
      <RevealOnScroll
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] items-center gap-7.5 rounded-xl bg-(--color-dark) p-7 text-(--color-cream) sm:p-13"
      >
        <div>
          <div className="mb-3.5 inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-(--color-primary)">
            <span className="inline-block h-1.75 w-1.75 rounded-full bg-(--color-primary)" />
            Now starting in Chennai
          </div>
          <h2 className="font-heading mb-3 text-[clamp(28px,6vw,40px)] leading-[1.04] font-extrabold tracking-tight">
            Drop your number. We&apos;ll bring the rest.
          </h2>
          <p className="text-base leading-relaxed text-(--color-dark-muted)">
            One field, nothing else. When a plan near you needs people, you hear from us on
            WhatsApp — not from an app you forgot you installed.
          </p>
        </div>
        <CtaForm placement="closing" />
      </RevealOnScroll>
    </section>
  );
}
