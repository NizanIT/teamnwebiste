// FALLBACK text for the home page sections. Field names match the CRM registry
// (nizan_crm_backend/config/websiteSections.js). The site shows these until a
// section is published in Team N Website; empty CMS fields also fall back here.
// Text only — no image imports — so `npm run export:cms-seed` can read it in Node.

export const hero = {
  title: "Bridal beauty, defined.",
  subtitle:
    "Luxury bridal makeup and hairstyling by Feeniya Nizan, for brides in Kerala and across the world.",
  ctaLabel: "", // optional button; hidden while empty
  stats: [
    { value: 1000, suffix: "+", label: "brides styled" },
    { value: 10, suffix: "+", label: "years of expertise" },
  ],
};

export const availabilityStrip = {
  eyebrow: "Open dates",
  title: "Book your slot",
  ctaLabel: "View full calendar",
};

export const intro = {
  eyebrow: "The experience",
  title: "For brides who want more.",
  body: "Signature bridal looks, personalised styling, and a calm, thoughtful experience from trial to the big day.",
  highlights: [
    { label: "Personalised", text: "Every look is built around you — your face, your style, your story." },
    { label: "Calm & unhurried", text: "We pace every session so you feel relaxed and radiant." },
    { label: "Trial to big day", text: "Full support from your trial session through the wedding morning." },
  ],
};

export const recentBrides = {
  eyebrow: "Portfolio",
  title: "Recent brides",
};

export const packagesPreview = {
  eyebrow: "Services",
  title: "Our packages",
};

export const about = {
  eyebrow: "About Feeniya",
  title: "The artist behind Team N",
  quote:
    "My approach has always been simple — to bring out the most confident, beautiful version of every bride.",
  body:
    "Founder and lead artist at Team N Makeovers, Feeniya Nizan brings over a decade of experience in bridal makeup and hairstyling, creating timeless looks for brides in Kerala and around the world.",
  stats: [
    { number: "1000+", label: "Brides styled" },
    { number: "10+", label: "Years of expertise" },
    { number: "Kerala", label: "& worldwide" },
  ],
};

export const howItWorks = {
  eyebrow: "The process",
  title: "How booking works",
  steps: [
    {
      title: "Pick date & package",
      text: "Check the live calendar, choose an open slot and the package that fits your vision.",
    },
    {
      title: "Send your request",
      text: "Share your details in a minute — no payment is taken on the website.",
    },
    {
      title: "We call you",
      text: "Our team gets in touch to confirm the date, talk through your look and answer questions.",
    },
    {
      title: "Pay advance & confirm",
      text: "Pay the advance directly to our team to lock your date — the rest is settled on the day.",
    },
  ],
};

// Sample answers: to be confirmed by the client.
export const faq = {
  eyebrow: "FAQs",
  title: "Frequently asked questions",
  items: [
    {
      question: "How do I book a slot?",
      answer:
        "Choose a package, pick an available date and slot on the calendar, enter your details and pay a small advance online. You receive a booking reference straight away.",
    },
    {
      question: "Is a trial session included?",
      answer:
        "A trial is included with the Platinum package. For Airbrush and Custom you can add one as an extra while booking.",
    },
    {
      question: "Can I book for a destination wedding?",
      answer:
        "Yes. Choose the Custom package and tell us the venue and dates. Travel and stay for the team are agreed with you before the booking is confirmed.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can reschedule or cancel from the Manage booking page using your booking reference and phone number. The refund depends on how far ahead you cancel; the full terms are on the Policies page.",
    },
  ],
};
