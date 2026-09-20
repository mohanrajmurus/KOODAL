import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SignupProvider } from "@/context/SignupProvider";
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

// `??` only falls back on null/undefined, not on "" — guard against a blank
// (but present) env var too, e.g. an unfilled Vercel project env var.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KOODAL — Plan irukku. Aal illa?",
  description:
    "KOODAL fills the missing headcount in your pickleball, padel, badminton, board game, and quiz night plans. Leave your WhatsApp or Instagram to get early access in Chennai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SignupProvider>{children}</SignupProvider>
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      </body>
    </html>
  );
}
