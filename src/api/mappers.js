// Convert CRM API shapes into the shapes the website components already use.
// Keeping this in one file means a backend field rename only changes here.

export function mapPackage(p) {
  return {
    id: p._id ?? p.id,
    name: p.name,
    tagline: p.tagline ?? "",
    price: Number(p.price) || 0,
    // Prices by wedding location ({ id: price }) and the cheapest / dearest of them.
    regionPrices: p.regionPrices ?? {},
    districtPrices: p.districtPrices ?? {},
    priceMin: Number(p.priceMin ?? p.price) || 0,
    priceMax: Number(p.priceMax ?? p.price) || 0,
    advanceAmount: p.advanceAmount ?? null,
    from: Boolean(p.priceFrom),
    hours: p.durationLabel ?? "",
    description: p.websiteDescription || p.description || "",
    idealFor: p.idealFor ?? "",
    features: Array.isArray(p.features) ? p.features : [],
    highlighted: Boolean(p.highlighted),
    coverImage: p.coverImage ?? null,
  };
}

export function mapAddon(a) {
  return {
    id: a._id ?? a.id,
    name: a.name,
    price: Number(a.price) || 0,
    description: a.websiteDescription || a.description || "",
  };
}

// Server sends { days: { "2026-11-20": { status, morning, evening } } }
export function mapAvailabilityMonth(data) {
  return data?.days ?? {};
}
