// All public website endpoints in one place (relative to API_BASE_URL).
// These map to the /api/website/public/* routes in the CRM backend.
const PUBLIC = "/website/public";

export const ENDPOINTS = {
  content: `${PUBLIC}/content`,
  preview: `${PUBLIC}/preview`, // ?token=… (drafts, opened from the CRM)
  gallery: `${PUBLIC}/gallery`,
  packages: `${PUBLIC}/packages`,
  locations: `${PUBLIC}/locations`, // regions → districts (location pricing)
  availabilityMonth: `${PUBLIC}/availability`, // ?month=YYYY-MM
  availabilityDate: (isoDate) => `${PUBLIC}/availability/${isoDate}`,
  enquiry: `${PUBLIC}/enquiry`,
  visit: `${PUBLIC}/visit`, // anonymous page-view counter
};
