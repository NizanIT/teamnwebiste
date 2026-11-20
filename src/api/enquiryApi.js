import api from "./api";
import { ENDPOINTS } from "./endpoints";
import { getUtm } from "../utils/visit";

/**
 * Sends a booking request or contact message to the CRM, which saves it and
 * creates (or updates) a Lead with source "Website".
 * payload: { type: 'booking'|'contact', name, phone, email?, venue?, message?, eventDate?,
 *            slot?, packageId?, addonIds?, startedAt, company }
 * Resolves { ok, message }; rejects { status, message } (422 = fix the form, 429 = too many).
 */
export async function submitEnquiry(payload) {
  const { data } = await api.post(ENDPOINTS.enquiry, {
    ...payload,
    utm: getUtm(),
    page: window.location.pathname,
  });
  return data;
}
