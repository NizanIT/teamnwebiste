// All fallback content, keyed by CRM section key.
import * as home from "./home.js";
import * as pages from "./pages.js";
import * as site from "./site.js";
import * as seoPages from "./seo.js";

export const contentDefaults = {
  hero: home.hero,
  availabilityStrip: home.availabilityStrip,
  intro: home.intro,
  recentBrides: home.recentBrides,
  packagesPreview: home.packagesPreview,
  about: home.about,
  howItWorks: home.howItWorks,
  faq: home.faq,
  packagesPage: pages.packagesPage,
  policies: pages.policies,
  contact: site.contact,
  seo: site.seo,
  seoHome: seoPages.seoHome,
  seoPackages: seoPages.seoPackages,
  seoPortfolio: seoPages.seoPortfolio,
  seoBook: seoPages.seoBook,
  seoContact: seoPages.seoContact,
  seoPolicies: seoPages.seoPolicies,
};
