import { KoodalLockup } from "@/components/ui/KoodalLockup";

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-3.5 py-8.5 pb-30 text-sm text-muted sm:pb-8.5">
      <KoodalLockup size={26} />
      <span className="flex gap-4.5">
        <a href="https://instagram.com/koodal.in" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer">
          WhatsApp community
        </a>
      </span>
    </footer>
  );
}
