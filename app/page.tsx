import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Activities } from "@/components/sections/Activities";
import { SignupSection } from "@/components/sections/SignupSection";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";
import { ScrollDepthTracker } from "@/components/ui/ScrollDepthTracker";
import { StickyMobileCta } from "@/components/ui/StickyMobileCta";
import { FAQS } from "@/lib/faq";
import { INSTAGRAM_URL, SITE_URL } from "@/lib/site";

// Structured data for search engines / AI answer engines. Google no longer
// shows FAQ rich results for most sites, but FAQPage still helps machines read
// the Q&A. `<` is escaped per the Next.js JSON-LD guide (XSS hardening).
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "KOODAL",
      url: SITE_URL,
      logo: `${SITE_URL}/apple-icon`,
      sameAs: [INSTAGRAM_URL],
      areaServed: { "@type": "City", name: "Chennai" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "KOODAL",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c") }}
      />
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
