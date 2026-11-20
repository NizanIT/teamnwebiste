import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { API_BASE_URL } from "../api/api";
import { ENDPOINTS } from "../api/endpoints";
import { getUtm, isPreviewing } from "../utils/visit";

// The website's own anonymous visitor counter (CRM → Team N Website → Overview).
// Sends one small ping per page: a random browser id, a random visit id, the page
// path, where the visit came from and whether it's the browser's first visit.
// No names, phone numbers, emails or full URLs are sent.
//
// On by default in production builds. In dev it is OFF unless VITE_TRACK_VISITS=true,
// because `npm run dev` talks to the live CRM and would count our own testing.
const ENABLED =
  import.meta.env.VITE_TRACK_VISITS === "true" ||
  (import.meta.env.PROD && import.meta.env.VITE_TRACK_VISITS !== "false");

const VID_KEY = "tn_vid"; // localStorage: this browser
const SID_KEY = "tn_sid"; // sessionStorage: this visit
const REF_KEY = "tn_ref"; // sessionStorage: where the visit came from
const NEW_KEY = "tn_new"; // sessionStorage: first visit from this browser

const store = (kind) => {
  try {
    return window[kind];
  } catch {
    return null;
  }
};
const get = (kind, key) => {
  try {
    return store(kind)?.getItem(key) ?? null;
  } catch {
    return null;
  }
};
const set = (kind, key, value) => {
  try {
    store(kind)?.setItem(key, value);
  } catch {
    /* blocked storage: counts as a new visitor each time — acceptable */
  }
};

const randomId = () => {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
  }
};

function visitIds() {
  let vid = get("localStorage", VID_KEY);
  let sid = get("sessionStorage", SID_KEY);
  if (!sid) {
    sid = randomId();
    set("sessionStorage", SID_KEY, sid);
    set("sessionStorage", NEW_KEY, vid ? "0" : "1");
    // Only the referring site's host, captured once at the start of the visit.
    let refHost = "";
    try {
      const ref = document.referrer ? new URL(document.referrer) : null;
      if (ref && ref.host !== window.location.host) refHost = ref.host;
    } catch {
      /* no referrer */
    }
    set("sessionStorage", REF_KEY, refHost);
  }
  if (!vid) {
    vid = randomId();
    set("localStorage", VID_KEY, vid);
  }
  return {
    vid,
    sid,
    refHost: get("sessionStorage", REF_KEY) || "",
    newVisitor: get("sessionStorage", NEW_KEY) === "1",
  };
}

// The same page twice within a second is one view (React dev mode runs effects twice).
let lastSent = { path: "", at: 0 };

function sendPageView(path) {
  const now = Date.now();
  if (lastSent.path === path && now - lastSent.at < 1000) return;
  lastSent = { path, at: now };
  const body = JSON.stringify({
    ...visitIds(),
    path,
    siteHost: window.location.host,
    utm: getUtm(),
  });
  // keepalive lets the ping finish even if the visitor leaves straight away.
  fetch(`${API_BASE_URL}${ENDPOINTS.visit}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    /* a counter must never affect the site */
  });
}

export default function usePageViews() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (!ENABLED || isPreviewing() || navigator.webdriver) return;
    sendPageView(pathname);
  }, [pathname]);
}
