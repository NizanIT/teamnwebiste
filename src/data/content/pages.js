// FALLBACK text for the Packages and Policies pages (field names match the CRM registry).

export const packagesPage = {
  title: "Bridal Packages & Styling",
  intro:
    "Tailored makeup, hair design, and couture styling crafted by Feeniya Nizan and Team N. Every package is thoughtfully paced to make you feel radiant, serene, and confident.",
  // Values are keyed by CRM package id and filled from CRM → Team N Website.
  // The table stays hidden until at least one value matches a live package.
  comparison: [
    {
      feature: "Lead Artist",
      values: { airbrush: "Team N Senior Artist", platinum: "Feeniya Nizan (Lead Artist)", custom: "Feeniya Nizan + Elite Crew" },
    },
    {
      feature: "Skin Prep & Makeup Base",
      values: {
        airbrush: "HD Airbrush Luminous Base",
        platinum: "Couture Skincare + Hybrid HD/Airbrush",
        custom: "Multi-layer Customized Skin Prep",
      },
    },
    {
      feature: "Hair Styling & Design",
      values: {
        airbrush: "Classic Updo or Braid",
        platinum: "Architectural Couture + Fresh Florals",
        custom: "Multiple Hairstyle Transformations",
      },
    },
    {
      feature: "Lashes & Eye Artistry",
      values: {
        airbrush: "Luxury Faux Mink Lashes",
        platinum: "Custom Lash Mapping & Sculpted Eyes",
        custom: "Bespoke Multi-Look Lash & Eye Artistry",
      },
    },
    {
      feature: "Saree & Veil Placement",
      values: {
        airbrush: "Traditional Draping / Pinning",
        platinum: "Precision Pleating & Couture Pinning",
        custom: "Multiple Outfit & Jewelry Changes",
      },
    },
    {
      feature: "Trial Session",
      values: {
        airbrush: "Available as Add-on",
        platinum: "Virtual Consultation Included",
        custom: "Full Studio Trial Session Included",
      },
    },
    {
      feature: "Touch-up Kit",
      values: {
        airbrush: "Essential Mini Kit",
        platinum: "Deluxe Bridal Emergency Box",
        custom: "Full Concierge Kit + Artist Standby",
      },
    },
    {
      feature: "Travel Coverage",
      values: {
        airbrush: "Kozhikode & Nearby Kerala",
        platinum: "All Kerala On-Location",
        custom: "Pan-India & Destination Worldwide",
      },
    },
  ],
  guarantees: [
    {
      title: "100% Luxury Products",
      text: "Exclusively using Charlotte Tilbury, Dior, NARS, MAC, and Huda Beauty for seamless, non-cakey perfection.",
    },
    {
      title: "Hospital-Grade Hygiene",
      text: "Strict brush sanitization, disposable applicators, and UV sterilization for immaculate safety.",
    },
    {
      title: "Calm & Punctual Pacing",
      text: "We buffer every bridal morning with generous margins so you are calm, unhurried, and on time.",
    },
    {
      title: "Camera & Flash Calibrated",
      text: "Crafted specifically to look effortlessly natural in person while translating flawlessly under studio flashes and 4K cameras.",
    },
  ],
};

// Each section body is one point per line.
export const policies = {
  title: "Studio Policies & Guidelines",
  lastUpdated: "",
  sections: [
    {
      heading: "Booking & Advance Deposit",
      body: [
        "A 25% non-refundable advance is required to lock and guarantee date exclusivity on our calendar.",
        "Slots are allotted strictly on a first-come, first-served basis upon advance receipt.",
        "The remaining balance is payable on the wedding day prior to the artist's departure.",
      ].join("\n"),
    },
    {
      heading: "Punctuality & Wedding Morning Timeline",
      body: [
        "We prepare a customized time buffer for your bridal look (usually 3.5 to 4.5 hours depending on the package).",
        "The bride is requested to have clean, washed, and completely dried hair without heavy oils before the artist arrives.",
        "Timely start ensures stress-free photography and calm transitions to the ceremony stage.",
      ].join("\n"),
    },
    {
      heading: "Rescheduling & Date Changes",
      body: [
        "Rescheduling is accommodated subject to artist availability on the new date.",
        "Requests made at least 30 days prior to the original wedding date incur zero rescheduling fees.",
        "In the unforeseen event of government restrictions or force majeure, advances can be rolled forward up to 12 months.",
      ].join("\n"),
    },
    {
      heading: "Travel & Destination Weddings",
      body: [
        "Travel within Kozhikode city limits is included in all standard bridal packages.",
        "For outstation bookings across Kerala, Pan-India, or abroad, round-trip transport and safe stay for Feeniya Nizan & assistant are arranged by the client or billed transparently at actuals.",
        "Early morning muhurthams (before 6:00 AM) may require the team to stay in close proximity the night before.",
      ].join("\n"),
    },
    {
      heading: "Hygiene & Skin Safety",
      body: [
        "All brushes, beauty blenders, and tool kits undergo thorough hospital-grade sanitization between every client.",
        "Disposable mascara wands and lip applicators are utilized at all times.",
        "Please alert our team during the pre-wedding consultation regarding any skin sensitivities or allergies.",
      ].join("\n"),
    },
  ],
};
