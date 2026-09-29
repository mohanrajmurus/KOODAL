import { KoodalLockup } from "@/components/ui/KoodalLockup";
import { InstagramGlyph, WhatsAppGlyph } from "@/components/ui/SocialIcons";

const SOCIALS = [
  {
    href: "https://instagram.com/koodal.in",
    label: "Instagram",
    className: "bg-accent",
    icon: <InstagramGlyph className="h-5 w-5" />,
  },
  {
    href: "https://chat.whatsapp.com/koodal-chennai",
    label: "WhatsApp community",
    className: "bg-teal",
    icon: <WhatsAppGlyph className="h-5 w-5" />,
  },
];

const LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#activities", label: "Activities" },
  { href: "#faq", label: "FAQs" },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-5.5 pt-14 pb-30 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-4.5">
        <KoodalLockup size={26} />
        <div className="flex gap-2.5">
          {SOCIALS.map((social) => (
            <a
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`grid h-11 w-11 place-items-center rounded-[14px] text-white transition-transform duration-150 hover:-translate-y-0.5 hover:text-white ${social.className}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-x-5.5 gap-y-2.5 border-t border-border pt-4.5">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="text-muted">
            {link.label}
          </a>
        ))}
        <span className="flex-1" />
        <span>© 2026 KOODAL · Chennai</span>
      </div>
    </footer>
  );
}
