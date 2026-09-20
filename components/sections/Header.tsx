import { KoodalLockup } from "@/components/ui/KoodalLockup";

export function Header() {
  return (
    <header className="flex items-center justify-between pt-5.5 pb-2">
      <KoodalLockup size={34} />
      <span className="rounded-full border border-border px-3 py-1.5 text-[13px] font-medium text-muted">
        Chennai
      </span>
    </header>
  );
}
