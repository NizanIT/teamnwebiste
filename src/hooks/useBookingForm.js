import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { bookingSlots } from "../data/bookingSlots";
import { calcBookingTotals } from "../utils/booking";
import usePackages from "./usePackages";
import useLocations from "./useLocations";
import { submitEnquiry } from "../api/enquiryApi";
import { setTag, trackEvent } from "../utils/clarity";

const EMPTY_FORM = { name: "", phone: "", email: "", venue: "", notes: "" };

/** All state and derived values for the 3-step booking page. */
export default function useBookingForm() {
  const [searchParams] = useSearchParams();
  const { packages, addons, loading: packagesLoading, error: packagesError } = usePackages();

  const locations = useLocations();
  const [step, setStepRaw] = useState(1);
  // Every step starts at the top of the page.
  const setStep = (n) => {
    setStepRaw(n);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  // Wedding location: region (zone) → district. Prices depend on it.
  const [regionId, setRegionIdRaw] = useState("");
  const [districtId, setDistrictId] = useState("");
  const setRegionId = (id) => {
    setRegionIdRaw(id);
    setDistrictId("");
  };
  const location = locations.find(districtId);
  const [date, setDateRaw] = useState(searchParams.get("date") || "");
  const [slotId, setSlotId] = useState("");
  // A new date needs its own open slot, so the choice resets.
  const setDate = (d) => {
    setDateRaw(d);
    setSlotId("");
  };
  const [packageId, setPackageId] = useState(searchParams.get("package") || "");
  const [addonIds, setAddonIds] = useState(() => {
    const fromUrl = searchParams.get("addon");
    return fromUrl ? [fromUrl] : [];
  });
  const [form, setForm] = useState(EMPTY_FORM);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Only the package the bride picked (or one linked from the Packages page).
  const pkg = packages.find((p) => p.id === packageId) || null;
  const slot = bookingSlots.find((s) => s.id === slotId);
  const selectedAddons = addons.filter((a) => addonIds.includes(a.id));
  const totals = calcBookingTotals(pkg, addons, addonIds, location);

  const toggleAddon = (id) =>
    setAddonIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const updateField = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Sends the request to the CRM (creates a Lead). The success screen only
  // shows once the CRM has accepted it.
  const [startedAt] = useState(() => Date.now());
  const [honeypot, setHoneypot] = useState("");
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");

  const finish = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  const submit = async () => {
    if (!location) {
      setSendError("Please choose the wedding location in step 1.");
      return;
    }
    if (!pkg) {
      setSendError("Packages couldn't be loaded. Please refresh the page or reach us on WhatsApp.");
      return;
    }
    setSending(true);
    setSendError("");
    try {
      await submitEnquiry({
        type: "booking",
        name: form.name,
        phone: form.phone,
        email: form.email,
        venue: form.venue,
        message: form.notes,
        eventDate: date,
        districtId: location.districtId,
        slot: slotId,
        packageId: pkg?.id,
        addonIds,
        startedAt,
        company: honeypot,
      });
      setTag("package", pkg?.name);
      setTag("slot", slotId);
      trackEvent("booking_request_sent");
      finish();
    } catch (e) {
      setSendError(e?.message || "We couldn't send your request. Please try again or use WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return {
    step, setStep,
    date, setDate,
    slot, slotId, setSlotId,
    locations, regionId, setRegionId, districtId, setDistrictId, location,
    packages, addons, packagesLoading, packagesError,
    pkg, setPackageId,
    addonIds, selectedAddons, toggleAddon,
    form, updateField,
    totals,
    isSubmitted, submit,
    sending, sendError, honeypot, setHoneypot,
  };
}
