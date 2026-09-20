import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Activities } from "@/components/sections/Activities";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { CommunityLinks } from "@/components/sections/CommunityLinks";
import { Footer } from "@/components/sections/Footer";
import { ScrollDepthTracker } from "@/components/ui/ScrollDepthTracker";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";

export default function Home() {
  return (
    <>
      <ScrollDepthTracker />
      <main className="mx-auto flex w-full max-w-275 flex-1 flex-col px-5">
        <Header />
        <Hero />
        <HowItWorks />
        <Activities />
        <ClosingCta />
        <CommunityLinks />
        <Footer />
      </main>
      <StickyMobileCta />
    </>
  );
}
