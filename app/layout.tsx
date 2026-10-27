import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { SignupProvider } from "@/context/SignupProvider";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// The search title carries the keywords people actually type; the Tanglish
// tagline is kept for social shares (WhatsApp/Instagram), where the voice is
// the hook and the reader already has context.
const SEARCH_TITLE = "KOODAL: Find Players Near You in Chennai | Box Cricket & More";
const SOCIAL_TITLE = "KOODAL — Plan irukku. Aal illa?";
const DESCRIPTION =
  "Short on players? KOODAL finds people near you in Chennai for box cricket, badminton, pickleball, board games, gaming & cycling. Get early access.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SEARCH_TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: "KOODAL",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SignupProvider>{children}</SignupProvider>
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
        <Analytics />
      </body>
    </html>
  );
}
