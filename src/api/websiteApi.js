import api from "./api";
import { ENDPOINTS } from "./endpoints";

// All published CMS sections in one call: { sections: { hero: {...}, faq: {...}, ... } }
export async function getSiteContent() {
  const { data } = await api.get(ENDPOINTS.content);
  return data?.sections ?? {};
}

// Drafts + live content for staff previewing changes (token from the CRM's Preview button).
export async function getPreviewContent(token) {
  const { data } = await api.get(ENDPOINTS.preview, { params: { token } });
  return data?.sections ?? {};
}

// Active portfolio photos: { categories: [{ key, label }], items: [...] }
export async function getGallery(category) {
  const { data } = await api.get(ENDPOINTS.gallery, {
    params: category ? { category } : undefined,
  });
  return { categories: data?.categories ?? [], items: data?.items ?? [] };
}
