// Package prices by wedding location, using the CRM's rule
// (backend bookingController.computeBasePackagePrice):
// district price → region price → base price.

/** Exact package price for a location { districtId, regionId }. Base price when none is chosen. */
export function packagePriceFor(pkg, location) {
  if (!pkg) return 0;
  const d = location?.districtId && pkg.districtPrices?.[location.districtId];
  if (d != null && d !== false) return Number(d) || 0;
  const r = location?.regionId && pkg.regionPrices?.[location.regionId];
  if (r != null && r !== false) return Number(r) || 0;
  return Number(pkg.price) || 0;
}

/** Lowest price this package has anywhere — shown as "Starting from". */
export const packageStartingPrice = (pkg) => Number(pkg?.priceMin ?? pkg?.price) || 0;

/** True when the package costs the same everywhere. */
export const hasOnePrice = (pkg) => Number(pkg?.priceMin) === Number(pkg?.priceMax);
