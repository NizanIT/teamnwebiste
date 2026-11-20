import { formatPrice } from "./format";
import { packagePriceFor } from "./pricing";
import { buildWhatsAppUrl } from "./whatsapp";

const OPEN = new Set(["available", "few"]);

// location = { districtId, regionId } — the package price depends on it.
export function calcBookingTotals(pkg, addons, selectedAddonIds, location = null) {
  const addonsTotal = selectedAddonIds.reduce((sum, id) => {
    const item = addons.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);
  const packagePrice = pkg ? packagePriceFor(pkg, location) : 0;
  const grandTotal = packagePrice + addonsTotal;
  // Only the advance set on the package in the CRM; null = confirmed on enquiry.
  const advanceAmount = pkg?.advanceAmount ?? null;
  return { packagePrice, addonsTotal, grandTotal, advanceAmount };
}

// Status of a slot on a date: the tightest of the capacity halves it uses.
export function slotStatus(slot, availability) {
  if (!availability) return "unknown";
  const statuses = slot.halves.map((half) => availability[half]?.status ?? availability.status ?? "unknown");
  if (statuses.every((s) => s === "available")) return "available";
  if (statuses.every((s) => OPEN.has(s))) return "few";
  return statuses.find((s) => !OPEN.has(s)) || "unknown";
}

// A slot is open only when the CRM says every half it needs still has room.
export function isSlotOpen(slot, availability) {
  return OPEN.has(slotStatus(slot, availability));
}

export function buildBookingWhatsAppUrl({ baseUrl, form, date, slot, location, pkg, packagePrice, selectedAddons, grandTotal }) {
  return buildWhatsAppUrl(baseUrl, [
    "*Bridal Booking Request - Team N Makeovers*",
    "",
    `*Bride:* ${form.name || "Pending"}`,
    `*Wedding Date:* ${date || "Not chosen"}`,
    `*Slot:* ${slot ? slot.label : "Not chosen"}`,
    location ? `*Location:* ${location.districtName}, ${location.regionName}` : null,
    pkg ? `*Package:* ${pkg.name} (${formatPrice(packagePrice ?? pkg.price)})` : null,
    selectedAddons.length ? `*Add-ons:* ${selectedAddons.map((a) => a.name).join(", ")}` : null,
    `*Estimated Total:* ${formatPrice(grandTotal)}`,
    `*Venue/City:* ${form.venue || "Not specified"}`,
    form.notes ? `*Notes:* ${form.notes}` : null,
    "",
    "Please confirm slot availability and payment details.",
  ]);
}
