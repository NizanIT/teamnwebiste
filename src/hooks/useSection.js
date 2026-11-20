import { useContext } from "react";
import { SiteContentContext } from "../context/siteContentContext";

const isEmpty = (v) => v === undefined || v === null || v === "" || (Array.isArray(v) && v.length === 0);

/**
 * Content for one CMS section, field by field over the local fallback.
 * Empty CMS fields keep the fallback value, so a half-filled section never shows blanks.
 *   const hero = useSection("hero", heroDefaults);
 */
export default function useSection(key, fallback = {}) {
  const { sections } = useContext(SiteContentContext);
  const live = sections?.[key] ?? {};
  const merged = { ...fallback };
  for (const [field, value] of Object.entries(live)) {
    if (!isEmpty(value)) merged[field] = value;
  }
  return merged;
}
