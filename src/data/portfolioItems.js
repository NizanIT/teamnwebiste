// FALLBACK ONLY: the Portfolio page shows these until photos are added in
// CRM → Team N Website → Portfolio gallery. Photos are in public/photos/
// (resized from the client's shoot folders, chosen 2026-11-17).

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

const photo = (file) => `/photos/${file}`;

const items = [
  {
    category: "makeup",
    title: "Kanjeevaram Bride",
    desc: "Soft glam with defined eyes and a warm glow, finished with temple jewellery and fresh flowers.",
    image: photo("gallery-makeup-red-saree.jpg"),
  },
  {
    category: "makeup",
    title: "Window-Light Portrait",
    desc: "Sculpted, camera-ready skin that holds its glow in natural light.",
    image: photo("gallery-makeup-window-light.jpg"),
  },
  {
    category: "makeup",
    title: "Pink Silk Bride",
    desc: "Luminous base, soft brown smoky eyes and a classic jasmine bun.",
    image: photo("gallery-makeup-pink-kanjeevaram.jpg"),
  },
  {
    category: "makeup",
    title: "Traditional Gold",
    desc: "A fresh, radiant finish paired with layered gold necklaces and a waist belt.",
    image: photo("gallery-makeup-gold-belt.jpg"),
  },
  {
    category: "makeup",
    title: "Magenta Saree Look",
    desc: "Polished skin and a rosy lip that balances bold magenta silk.",
    image: photo("gallery-makeup-magenta-saree.jpg"),
  },
  {
    category: "makeup",
    title: "Lehenga Bride",
    desc: "Bright, joyful bridal makeup with a polki necklace and a red dupatta.",
    image: photo("gallery-makeup-red-lehenga.jpg"),
  },
  {
    category: "hair",
    title: "Pearl Updo",
    desc: "A soft textured bun studded with pearl pins for a modern bride.",
    image: photo("gallery-hair-pearl-updo.jpg"),
  },
  {
    category: "hair",
    title: "Jasmine Braid",
    desc: "A long traditional braid wrapped in fresh jasmine.",
    image: photo("gallery-hair-jasmine-braid.jpg"),
  },
  {
    category: "hair",
    title: "Jasmine Bun and Braid",
    desc: "A full jasmine bun flowing into a loose braid, finished with gold pins.",
    image: photo("gallery-hair-jasmine-bun.jpg"),
  },
  {
    category: "styling",
    title: "Sparkle Lehenga",
    desc: "Full bridal styling for a shimmering ivory lehenga with a maang tikka.",
    image: photo("gallery-styling-sparkle-lehenga.jpg"),
  },
  {
    category: "styling",
    title: "Champagne Saree",
    desc: "Precise pleating and draping for a champagne silk saree with temple jewellery.",
    image: photo("gallery-styling-champagne-saree.jpg"),
  },
  {
    category: "styling",
    title: "Ruffle Gown",
    desc: "A soft low bun and dewy makeup for a sculptural white reception gown.",
    image: photo("gallery-styling-ruffle-gown.jpg"),
  },
  {
    category: "events",
    title: "Garland Exchange",
    desc: "Wedding-day makeup that stays fresh through every ceremony.",
    image: photo("gallery-events-garland-exchange.jpg"),
  },
  {
    category: "events",
    title: "Kasavu Wedding",
    desc: "A golden kasavu saree look with jasmine, kept soft for close photographs.",
    image: photo("gallery-events-couple-kasavu.jpg"),
  },
  {
    category: "events",
    title: "Wedding Morning",
    desc: "Long-wearing bridal makeup built to last from the muhurtham to the last photo.",
    image: photo("gallery-events-couple-smile.jpg"),
  },
];

export const portfolioItems = items.map((item) => ({
  ...item,
  categoryLabel: categoryLabels[item.category],
}));
