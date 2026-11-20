// Builds a wa.me link with a pre-filled message. Lines are joined with newlines and encoded once.
// baseUrl comes from useContact().whatsappUrl (CMS "Contact & Footer" → WhatsApp number).
export const buildWhatsAppUrl = (baseUrl, lines) =>
  `${baseUrl}?text=${encodeURIComponent(lines.filter((line) => line != null).join("\n"))}`;
