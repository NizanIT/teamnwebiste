import { images } from "./images";

export const portfolioFilters = [
  { key: "all", label: "All Artistry" },
  { key: "makeup", label: "Bridal Makeup" },
  { key: "hair", label: "Hairstyling" },
  { key: "styling", label: "Styling" },
  { key: "events", label: "Reception & Events" },
];

const categoryLabels = {
  makeup: "Bridal Makeup",
  hair: "Hairstyling",
  styling: "Styling",
  events: "Reception & Events",
};

const items = [
  {
    category: "makeup",
    title: "Traditional Royal Bride",
    desc: "Intricate gold eye detailing and classic bold red lips matching traditional wedding attire.",
    image: images.royalBride,
  },
  {
    category: "makeup",
    title: "Traditional Artistry",
    desc: "Flawless HD airbrush makeup with a natural matte finish, showcasing classic South Asian elegance.",
    image: images.traditionalArtistry,
  },
  {
    category: "makeup",
    title: "Modern Fusion Bride",
    desc: "Soft smoky eyes paired with a nude lip, blending contemporary style with tradition.",
    image: images.modernFusion,
  },
  {
    category: "makeup",
    title: "Enchanting Christian Bride",
    desc: "Naturally fresh makeup look with soft waves, showcasing a serene outdoor bridal look.",
    image: images.christianBride,
  },
  {
    category: "hair",
    title: "Classic Bridal Updo",
    desc: "A sophisticated low bun adorned with fresh jasmine and custom gold hair accessories.",
    image: images.bridalUpdo,
  },
  {
    category: "hair",
    title: "Textured Bridal Braid",
    desc: "A voluminous, modern textured braid detailed with gold-plated hair pins.",
    image: images.bridalBraid,
  },
  {
    category: "styling",
    title: "Elegant Bridal Styling",
    desc: "Bespoke luxury hair styling and custom dupatta draping.",
    image: images.bridalStyling,
  },
  {
    category: "events",
    title: "Reception Elegance",
    desc: "A sophisticated Hollywood wave hair structure paired with a deep berry lip.",
    image: images.receptionElegance,
  },
  {
    category: "events",
    title: "Pre-Wedding Glow",
    desc: "Lightweight, fresh, water-resistant makeup with vibrant yellow floral accents.",
    image: images.bridalDetails,
  },
  {
    category: "makeup",
    title: "Traditional South Indian Bride",
    desc: "Classic bridal look with a radiant base, bold eyes, temple jewelry, and fresh gajra.",
    image: images.southIndianBride,
  },
  {
    category: "makeup",
    title: "Christian Bridal Glow",
    desc: "Radiant dew finish makeup with a soft, elegant veil drape for a modern Christian bride.",
    image: images.christianGlow,
  },
  {
    category: "makeup",
    title: "Christian Bridal Portrait",
    desc: "Full bridal look featuring a halter neck white gown, pristine makeup, and a long flowy veil.",
    image: images.christianPortrait,
  },
  {
    category: "makeup",
    title: "Graceful Christian Bride",
    desc: "Naturally glowing, dewy makeup highlighting the bride's elegant features, paired with a classy lace gown.",
    image: images.christianGraceful,
  },
  {
    category: "events",
    title: "Royal Reception Look",
    desc: "Shimmering champagne lehenga look with a classic half-up hairstyle and soft warm makeup.",
    image: images.royalReception,
  },
  {
    category: "events",
    title: "Contemporary Saree Styling",
    desc: "Stunning sequin saree draping paired with side-swept hair, adorned with fresh peach roses.",
    image: images.sareeStyling,
  },
];

export const portfolioItems = items.map((item) => ({
  ...item,
  categoryLabel: categoryLabels[item.category],
}));

