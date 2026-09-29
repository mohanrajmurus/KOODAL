import { KoodalLockup } from "@/components/ui/KoodalLockup";
import { CountMeInButton } from "@/components/ui/CountMeInButton";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#activities", label: "Activities" },
  { href: "#faq", label: "FAQs" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-275 items-center justify-between gap-4 px-5 py-3">
        <a href="#top" aria-label="KOODAL home" className="flex text-ink hover:text-ink">
          <KoodalLockup size={30} />
        </a>
        <div className="hidden items-center gap-6.5 text-[15px] font-medium min-[760px]:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-ink hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
        <CountMeInButton location="nav" variant="nav" />
      </nav>
    </header>
  );
}
