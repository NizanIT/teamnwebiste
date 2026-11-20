import { contentDefaults } from "../data/content";
import useSection from "./useSection";

const digits = (s) => String(s || "").replace(/[^0-9]/g, "");

/**
 * Contact & footer details (CMS "contact" section over the local defaults),
 * plus ready-made links: telHref, whatsappUrl, mailHref.
 */
export default function useContact() {
  const c = useSection("contact", contentDefaults.contact);
  const wa = digits(c.whatsapp) || digits(c.phone);
  return {
    ...c,
    telHref: c.phone ? `tel:+${digits(c.phone)}` : "",
    whatsappUrl: wa ? `https://wa.me/${wa}` : "",
    mailHref: c.email ? `mailto:${c.email}` : "",
  };
}
