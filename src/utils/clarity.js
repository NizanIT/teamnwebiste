// Microsoft Clarity — visitor analytics (sessions, heatmaps, recordings).
// The project ID comes from VITE_CLARITY_ID (Clarity → Settings → Overview → Project ID).
// Nothing loads when the ID is empty, so local dev stays out of the stats unless you set it.
// Clarity follows client-side route changes on its own, so every page view is counted.

const CLARITY_ID = (import.meta.env.VITE_CLARITY_ID || "").trim();
const VALID_ID = /^[a-z0-9]{6,20}$/i;

export function initClarity() {
  if (typeof window === "undefined" || window.clarity) return;
  if (!VALID_ID.test(CLARITY_ID)) return;
  // CRM preview links (?preview=…) are staff looking at drafts, not visitors.
  if (new URLSearchParams(window.location.search).has("preview")) return;

  // Queue calls until the real script arrives (Clarity's standard snippet).
  window.clarity = function (...args) {
    (window.clarity.q = window.clarity.q || []).push(args);
  };
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
  document.head.appendChild(script);
}

/** Records a named event, e.g. trackEvent("booking_request_sent"). Safe when Clarity is off. */
export function trackEvent(name) {
  try {
    window.clarity?.("event", name);
  } catch {
    // analytics must never break the site
  }
}

/** Adds a filterable tag to the current session, e.g. setTag("package", "Platinum"). */
export function setTag(key, value) {
  try {
    if (value) window.clarity?.("set", key, String(value));
  } catch {
    // ignore
  }
}
