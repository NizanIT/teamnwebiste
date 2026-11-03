import { images } from "./images";

// Photos live in public/brides/. A slot falls back to an older photo until its own file exists.
const slot = (file, fallback = null) => ({ src: `/brides/${file}`, fallback });

export const brideImages = {
  hero: slot("hero-bg.webp"),
  intro: slot("bride-red-saree-closeup.jpg", images.christianGlow),
  recent: [
    slot("bride-red-saree-garden.jpg", images.traditionalArtistry),
    slot("bride-peach-lehenga-portrait.jpg", images.bridalUpdo),
    slot("bride-plum-gown-window.jpg", images.southIndianBride),
    slot("bride-white-gown-garden.jpg", images.christianBride),
  ],
  about: slot("feeniya.jpg", images.aboutStylist),
};
