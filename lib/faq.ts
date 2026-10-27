// Lives outside components/sections/Faq.tsx (a client component) so the
// server-rendered FAQPage JSON-LD in app/page.tsx can read the same data.
export const FAQS = [
  {
    q: "What is KOODAL?",
    a: "KOODAL fills the missing people in your plans — not the venue. Post what you're doing and how many you're short, and find people nearby who want in.",
  },
  {
    q: "What can I use KOODAL for?",
    a: "Six activities to start: box cricket, badminton, pickleball, board games, in-person gaming, and cycling. KOODAL doesn't do bookings — book your turf or court wherever you already do, KOODAL just fills the people.",
  },
  {
    q: "How does KOODAL work?",
    a: "Post your plan → people join & confirm → your group forms → the plan happens. The idea is simple: turn an incomplete plan into a real group.",
  },
  {
    q: "Do I need to know the people before joining?",
    a: "No. KOODAL helps you find people who are interested in the same activity — your group forms around that specific plan.",
  },
  {
    q: "Can I choose to play with people of the same gender?",
    a: "Yes. When posting or joining a plan, you can set a gender preference — Anyone or Same gender only — if that's what would make you comfortable joining. It's optional, off by default, and only shown on plans where it's turned on.",
  },
  {
    q: "Where is KOODAL available?",
    a: "We're starting in Chennai — currently onboarding the first group before expanding further.",
  },
];
