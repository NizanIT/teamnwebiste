import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";
import useContact from "../../hooks/useContact";
import { isPreviewing } from "../../utils/visit";

// Public address of the website, for canonical links and share previews.
const SITE_URL = (import.meta.env.VITE_SITE_URL || "https://teamnmakeovers.com").replace(/\/$/, "");
const SITE_NAME = "Team N Makeovers";

// Which CRM "SEO — <page>" section belongs to each page.
const PAGE_SEO = {
  "/": "seoHome",
  "/packages": "seoPackages",
  "/portfolio": "seoPortfolio",
  "/book": "seoBook",
  "/contact": "seoContact",
  "/policies": "seoPolicies",
};

// Sets (or removes, when empty) a <meta name|property="…"> tag in <head>.
function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!content) {
    tag?.remove();
    return;
  }
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLink(rel, href) {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function setJsonLd(id, data) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

// Page title, meta description, keywords, share preview (Open Graph / Twitter),
// canonical link and business details for Google — all from the CRM.
// Each page uses its own "SEO — <page>" section; empty fields fall back to the
// site-wide "SEO & sharing" section. Renders nothing.
export default function SeoTags() {
  const { pathname } = useLocation();
  const site = useSection("seo", contentDefaults.seo);
  const key = PAGE_SEO[pathname];
  const page = useSection(key || "seoHome", key ? contentDefaults[key] : {});
  const own = key ? page : {};
  const contact = useContact();

  const title = own.title || site.siteTitle;
  const description = own.description || site.siteDescription;
  const shareImage = own.shareImage?.url || site.shareImage?.url || "";
  const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "keywords", own.keywords);
    // Staff previews of drafts must never be indexed.
    setMeta("name", "robots", isPreviewing() ? "noindex, nofollow" : "index, follow");
    setLink("canonical", url);

    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", own.shareTitle || title);
    setMeta("property", "og:description", own.shareDescription || description);
    setMeta("property", "og:image", shareImage);
    setMeta("name", "twitter:card", shareImage ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", own.shareTitle || title);
    setMeta("name", "twitter:description", own.shareDescription || description);
    setMeta("name", "twitter:image", shareImage);

    const favicon = site.favicon?.url;
    if (favicon) document.head.querySelector('link[rel="icon"]')?.setAttribute("href", favicon);
  }, [title, description, own.keywords, own.shareTitle, own.shareDescription, shareImage, url, site.favicon?.url]);

  // Business details Google can show in search and Maps (from "Contact & Footer").
  useEffect(() => {
    const sameAs = [contact.instagramUrl, contact.facebookUrl, contact.youtubeUrl].filter(Boolean);
    setJsonLd("seo-business", {
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      ...(site.shareImage?.url ? { image: site.shareImage.url } : {}),
      ...(contact.logo?.url ? { logo: contact.logo.url } : {}),
      ...(contact.phone ? { telephone: contact.phone } : {}),
      ...(contact.email ? { email: contact.email } : {}),
      ...(contact.address ? { address: contact.address } : {}),
      ...(contact.mapUrl ? { hasMap: contact.mapUrl } : {}),
      ...(sameAs.length ? { sameAs } : {}),
      founder: { "@type": "Person", name: "Feeniya Nizan" },
    });
  }, [
    site.shareImage?.url,
    contact.logo?.url,
    contact.phone,
    contact.email,
    contact.address,
    contact.mapUrl,
    contact.instagramUrl,
    contact.facebookUrl,
    contact.youtubeUrl,
  ]);

  return null;
}
