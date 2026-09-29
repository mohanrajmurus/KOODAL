import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Activities } from "@/components/sections/Activities";
import { SignupSection } from "@/components/sections/SignupSection";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { ScrollDepthTracker } from "@/components/ui/ScrollDepthTracker";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";

export default function Home() {
  return (
    <>
      <ScrollDepthTracker />
      <Header />
      <main id="top" className="mx-auto flex w-full max-w-275 flex-1 flex-col px-5">
        <Hero />
        <HowItWorks />
        <Activities />
        <SignupSection />
        <Faq />
        <Footer />
      </main>
      <StickyMobileCta />
    </>
  );
}
