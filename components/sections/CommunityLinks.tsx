import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SocialLinkCard } from "@/components/ui/SocialLinkCard";
import { InstagramGlyph, ChatGlyph } from "@/components/ui/SocialIcons";

export function CommunityLinks() {
  return (
    <section className="pt-9 pb-2">
      <RevealOnScroll>
        <p className="mb-3.5 text-sm text-muted">Or come see what&apos;s already happening.</p>
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <SocialLinkCard
            href="https://instagram.com/koodal.in"
            icon={<InstagramGlyph className="h-6 w-6" />}
            iconClassName="bg-accent"
            title="@koodal.in"
            subtitle="Plans, courts and match nights on Instagram"
          />
          <SocialLinkCard
            href="https://wa.me/910000000000"
            icon={<ChatGlyph className="h-6 w-6" />}
            iconClassName="bg-teal"
            title="KOODAL Chennai community"
            subtitle="WhatsApp channel where plans get filled"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
}
