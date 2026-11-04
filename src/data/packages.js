// Packages data and pricing configuration for Team N Makeovers
export const packages = [
  {
    id: "airbrush",
    name: "Airbrush",
    tagline: "Waterproof, featherlight & camera-ready",
    price: 35000,
    hours: 3,
    description: "A lightweight, flawless finish that lasts beautifully in any weather.",
    idealFor: "Humid weather, daytime ceremonies, and brides who want a luminous, weightless feel.",
    features: [
      "Ultra-fine HD airbrush foundation application",
      "16-hour humidity and tear-resistant longevity",
      "Signature bridal hair design & hair accessory setting",
      "Faux mink lashes & custom eye sculpting",
      "Saree draping or veil pinning",
      "Complimentary mini touch-up emergency kit",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    tagline: "The definitive bridal look by lead artist Feeniya Nizan",
    price: 50000,
    hours: 4,
    description: "A complete bridal experience with luxury skincare, bespoke hair artistry, and couture styling.",
    idealFor: "Traditional Kerala, Christian, and Muslim weddings needing regal grandeur and camera perfection.",
    highlighted: true,
    features: [
      "Personally crafted & styled by lead artist Feeniya Nizan",
      "Luxury skin prep using Charlotte Tilbury, Dior & NARS",
      "Sculpted HD / Airbrush hybrid bridal base",
      "Advanced hair design with extensions & fresh floral setting",
      "Intricate jewelry mounting, veil placement & saree pleating",
      "Pre-wedding virtual consultation & skin analysis",
      "Full deluxe touch-up kit for reception transition",
    ],
  },
  {
    id: "custom",
    name: "Custom & Destination",
    tagline: "Tailored multi-event & destination wedding artistry",
    price: 60000,
    from: true,
    hours: "Flexible",
    description: "Bespoke multi-event coverage and on-location travel across Kerala, India, and worldwide.",
    idealFor: "Multi-day celebrations, destination weddings, and brides desiring personalized entourage coverage.",
    features: [
      "Multiple signature looks (Muhurtham, Reception, Haldi, Sangeet)",
      "On-location travel anywhere in Kerala, India, or worldwide",
      "Dedicated standby assistance for instant look changeovers",
      "Entourage and family styling options for bridesmaids and mothers",
      "Comprehensive bridal hair & makeup trial included",
      "Priority timeline coordination with your photographer and wedding planner",
    ],
  },
];

export const addons = [
  {
    id: "saree",
    name: "Saree Box Pleating & Pre-Styling",
    price: 2500,
    description: "Precision steam ironing, measuring, and pre-pleating for Kanjeevaram and silk sarees.",
  },
  {
    id: "trial",
    name: "Bridal Trial & Look Designing",
    price: 8000,
    description: "Comprehensive in-studio hair and makeup preview session with Feeniya Nizan.",
  },
  {
    id: "bridesmaid",
    name: "Party / Bridesmaid Makeup & Hair",
    price: 7500,
    description: "Per person hair styling and party makeup by senior Team N makeover artists.",
  },
  {
    id: "touchup",
    name: "Extended Reception Standby & Quick Change",
    price: 12000,
    description: "On-site artist standby for gown/saree swap, hair restyling, and evening makeup refresh.",
  },
];

export const formatPrice = (amount) => `₹ ${amount.toLocaleString("en-IN")}`;
