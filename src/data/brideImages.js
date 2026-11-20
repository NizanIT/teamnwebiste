// Built-in photos in public/photos/ (resized for fast loading).
// Anything uploaded in CRM → Team N Website (stored on Cloudinary) replaces these.
const photo = (file) => ({ src: `/photos/${file}`, fallback: null });

export const brideImages = {
  hero: photo("hero-red-saree.jpg"),
  // Experience section: one   main photo + two smaller ones (collage).
  intro: photo("intro-red-saree-smile.jpg"),
  introCollage: [
    photo("gallery-makeup-pink-kanjeevaram.jpg"),
    photo("gallery-makeup-window-light.jpg"),
  ],
  recent: [
    photo("recent-red-saree-portrait.jpg"),
    photo("recent-burgundy-lehenga.jpg"),
    photo("recent-christian-gown.jpg"),
    photo("recent-jasmine-braid.jpg"),
  ],
  about: photo("about-feeniya.jpg"),
};
