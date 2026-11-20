// Small per-visit memory kept in sessionStorage (cleared when the tab closes).
// Storage can be blocked (private mode, strict settings), so every access is guarded.
const read = (key) => {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
};
const write = (key, value) => {
  try {
    if (value == null) window.sessionStorage.removeItem(key);
    else window.sessionStorage.setItem(key, value);
  } catch {
    /* storage unavailable — fine, the feature just won't persist across pages */
  }
};

const UTM_KEY = "tn_utm";
const PREVIEW_KEY = "tn_preview";

/** Ad tracking (?utm_source=…) from the landing URL, kept for the visit. */
export function rememberUtm(search = window.location.search) {
  const p = new URLSearchParams(search);
  const utm = {};
  for (const k of ["source", "medium", "campaign"]) {
    const v = p.get(`utm_${k}`);
    if (v) utm[k] = v.slice(0, 80);
  }
  if (Object.keys(utm).length) write(UTM_KEY, JSON.stringify(utm));
}

export function getUtm() {
  try {
    return JSON.parse(read(UTM_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Draft-preview token from ?preview=… (opened from the CRM), kept while browsing. */
export function getPreviewToken(search = window.location.search) {
  const fromUrl = new URLSearchParams(search).get("preview");
  if (fromUrl) write(PREVIEW_KEY, fromUrl);
  return fromUrl || read(PREVIEW_KEY);
}

/** True while staff are viewing drafts from the CRM (not a real visitor). Read-only. */
export function isPreviewing() {
  return Boolean(new URLSearchParams(window.location.search).get("preview") || read(PREVIEW_KEY));
}

export function clearPreviewToken() {
  write(PREVIEW_KEY, null);
}
