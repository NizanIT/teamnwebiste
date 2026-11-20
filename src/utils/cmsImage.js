// A CMS image ({ url, alt, width, height }) shown with a local photo behind it.
// Returns the { src, fallback } shape ImageFrame uses, plus alt text.
//   cmsImage(hero.imageDesktop, brideImages.hero, "Smiling bride…")
export function cmsImage(cms, local, defaultAlt = "") {
  const localSrc = local?.src ?? local ?? null;
  if (cms?.url) {
    return { src: cms.url, fallback: localSrc, alt: cms.alt || defaultAlt };
  }
  return { src: localSrc, fallback: local?.fallback ?? null, alt: defaultAlt };
}
