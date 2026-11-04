import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  FiCalendar,
  FiClock,
  FiCheck,
  FiInfo,
  FiShield,
  FiPhone,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import Container from "../components/common/Container";
import Footer from "../components/layout/Footer";
import { packages, addons, formatPrice } from "../data/packages";
import { getDayStatus, toISODate, getNextAvailableDates } from "../data/availability";

const timeSlots = [
  { id: "morning", label: "Morning Muhurtham / Nikah", time: "04:30 AM - 08:30 AM" },
  { id: "day", label: "Church Wedding / Daytime", time: "08:30 AM - 12:30 PM" },
  { id: "evening", label: "Evening Reception", time: "03:30 PM - 07:30 PM" },
  { id: "fullday", label: "Full Day Multi-Event Coverage", time: "Custom Multi-Slot Schedule" },
];

export default function Book() {
  const [searchParams] = useSearchParams();
  const initialPackage = searchParams.get("package") || "platinum";
  const initialDate = searchParams.get("date") || "";
  const initialAddon = searchParams.get("addon");

  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedSlot, setSelectedSlot] = useState("morning");
  const [selectedPackageId, setSelectedPackageId] = useState(initialPackage);
  const [selectedAddons, setSelectedAddons] = useState(initialAddon ? [initialAddon] : []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    venue: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Available upcoming date suggestions
  const upcomingDates = getNextAvailableDates(8);

  const selectedPkg = packages.find((p) => p.id === selectedPackageId) || packages[1];

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = addons.find((a) => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);

  const grandTotal = selectedPkg.price + addonsTotal;
  const advanceAmount = Math.round(grandTotal * 0.25); // 25% booking advance

  const handleToggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dateStatus = selectedDate ? getDayStatus(new Date(selectedDate)) : null;

  const generateWhatsAppMessage = () => {
    const addonNames = selectedAddons
      .map((id) => addons.find((a) => a.id === id)?.name)
      .filter(Boolean)
      .join(", ");

    const text =
      `*Bridal Booking Request - Team N Makeovers*%0A%0A` +
      `*Bride:* ${encodeURIComponent(formData.name || "Pending")}%0A` +
      `*Wedding Date:* ${selectedDate || "Not chosen"}%0A` +
      `*Slot:* ${selectedSlot}%0A` +
      `*Package:* ${selectedPkg.name} (${formatPrice(selectedPkg.price)})%0A` +
      (addonNames ? `*Add-ons:* ${encodeURIComponent(addonNames)}%0A` : "") +
      `*Estimated Total:* ${formatPrice(grandTotal)}%0A` +
      `*Venue/City:* ${encodeURIComponent(formData.venue || "Not specified")}%0A` +
      (formData.notes ? `*Notes:* ${encodeURIComponent(formData.notes)}%0A` : "") +
      `%0APlease confirm slot availability and payment details.`;

    return `https://wa.me/919645424281?text=${text}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    window.scrollTo({ top: 100, behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <section className="border-b border-ink/10 bg-cream py-12 md:py-16">
        <Container className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-dusty-rose">
            Calendar & Slot Reservation
          </p>
          <h1 className="mt-2 font-heading text-4xl text-burgundy md:text-6xl">
            Book Your Bridal Experience
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
            Lock your date with Feeniya Nizan & Team N. We accept limited brides per date to guarantee
            uncompromised perfection.
          </p>

          {/* Stepper Header */}
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-between border-t border-ink/10 pt-6">
            {[
              { num: 1, label: "Date & Time" },
              { num: 2, label: "Package & Looks" },
              { num: 3, label: "Bride Details" },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  step === s.num
                    ? "text-burgundy"
                    : step > s.num
                    ? "text-ink/80"
                    : "text-ink/40"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    step === s.num
                      ? "bg-burgundy text-white"
                      : step > s.num
                      ? "bg-dusty-rose text-white"
                      : "bg-ink/10 text-ink/50"
                  }`}
                >
                  {step > s.num ? "✓" : s.num}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Booking Content */}
      <section className="bg-ivory py-12 lg:py-20">
        <Container>
          {isSubmitted ? (
            <div className="mx-auto max-w-2xl border border-dusty-rose/40 bg-cream p-10 text-center shadow-lg md:p-14">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
                <FiCheckCircle className="h-10 w-10 text-burgundy" />
              </div>
              <h2 className="mt-6 font-heading text-4xl text-burgundy">
                Booking Request Received
              </h2>
              <p className="mt-3 text-[16px] text-ink/80">
                Dear <strong className="text-burgundy">{formData.name}</strong>, thank you for choosing Team N Makeovers for your wedding on{" "}
                <strong>{selectedDate}</strong>.
              </p>

              <div className="my-8 border-y border-ink/10 py-6 text-left text-sm leading-relaxed text-ink/75">
                <p className="flex justify-between py-1">
                  <span>Selected Package:</span>
                  <strong className="text-burgundy">{selectedPkg.name}</strong>
                </p>
                <p className="flex justify-between py-1">
                  <span>Time Slot:</span>
                  <strong>{timeSlots.find((t) => t.id === selectedSlot)?.label}</strong>
                </p>
                <p className="flex justify-between py-1">
                  <span>Estimated Total:</span>
                  <strong className="text-burgundy">{formatPrice(grandTotal)}</strong>
                </p>
                <p className="flex justify-between py-1">
                  <span>Advance to Reserve (25%):</span>
                  <strong>{formatPrice(advanceAmount)}</strong>
                </p>
              </div>

              <p className="text-xs text-ink/70">
                To finalize the lock and verify date exclusivity instantly, connect directly with Feeniya on WhatsApp:
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#20ba59]"
                >
                  <FaWhatsapp className="text-lg" />
                  Confirm via WhatsApp
                </a>
                <Link
                  to="/"
                  className="border border-ink/20 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:bg-cream"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
              {/* Form Steps Column */}
              <div>
                {/* STEP 1: Date & Time */}
                {step === 1 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-heading text-3xl text-burgundy">1. Pick Your Date & Slot</h2>
                      <p className="mt-1 text-sm text-ink/70">
                        Select your auspicious wedding or reception date to check real-time availability.
                      </p>
                    </div>

                    {/* Quick Upcoming Dates */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        Popular Upcoming Dates
                      </label>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {upcomingDates.map((d) => {
                          const iso = toISODate(d);
                          const isSel = selectedDate === iso;
                          return (
                            <button
                              key={iso}
                              type="button"
                              onClick={() => setSelectedDate(iso)}
                              className={`border px-4 py-2 text-xs font-medium transition-all ${
                                isSel
                                  ? "border-burgundy bg-burgundy text-white shadow-sm"
                                  : "border-ink/20 bg-white text-ink hover:border-burgundy"
                              }`}
                            >
                              {d.toLocaleDateString("en-GB", {
                                weekday: "short",
                                day: "numeric",
                                month: "short",
                              })}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Custom Date Input */}
                    <div className="border border-ink/15 bg-cream p-5">
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        Or Pick Specific Wedding Date
                      </label>
                      <div className="mt-2 flex items-center gap-4">
                        <input
                          type="date"
                          min={toISODate(new Date())}
                          value={selectedDate}
                          onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
                        />
                      </div>
                      {selectedDate && (
                        <div className="mt-3 flex items-center gap-2 text-xs">
                          {dateStatus === "available" && (
                            <span className="flex items-center gap-1 font-semibold text-emerald-700">
                              <FiCheck className="text-sm" /> Date is available for booking
                            </span>
                          )}
                          {dateStatus === "few" && (
                            <span className="flex items-center gap-1 font-semibold text-amber-700">
                              <FiInfo className="text-sm" /> Only 1 slot remaining for this date
                            </span>
                          )}
                          {dateStatus === "full" && (
                            <span className="flex items-center gap-1 font-semibold text-red-700">
                              <FiInfo className="text-sm" /> High demand date — slot confirmed upon inquiry
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Time Slot Picker */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        Choose Event Time Slot
                      </label>
                      <div className="mt-3 grid gap-3 sm:grid-cols-2">
                        {timeSlots.map((slot) => {
                          const active = selectedSlot === slot.id;
                          return (
                            <div
                              key={slot.id}
                              onClick={() => setSelectedSlot(slot.id)}
                              className={`cursor-pointer border p-4 transition-all ${
                                active
                                  ? "border-burgundy bg-cream shadow-sm ring-1 ring-burgundy"
                                  : "border-ink/15 bg-white hover:border-ink/30"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-heading text-lg font-medium text-burgundy">
                                  {slot.label}
                                </span>
                                <span
                                  className={`h-4 w-4 rounded-full border ${
                                    active
                                      ? "border-burgundy bg-burgundy"
                                      : "border-ink/30 bg-white"
                                  }`}
                                />
                              </div>
                              <p className="mt-1 flex items-center gap-1 text-xs text-ink/65">
                                <FiClock className="text-dusty-rose" />
                                {slot.time}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        disabled={!selectedDate}
                        className="flex items-center gap-3 bg-burgundy px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-wine disabled:opacity-50"
                      >
                        Continue to Packages <FiArrowRight />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Package & Addons */}
                {step === 2 && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="font-heading text-3xl text-burgundy">2. Select Your Bridal Package</h2>
                      <p className="mt-1 text-sm text-ink/70">
                        Choose your preferred styling experience and any optional add-ons.
                      </p>
                    </div>

                    {/* Package Cards */}
                    <div className="space-y-4">
                      {packages.map((pkg) => {
                        const active = selectedPackageId === pkg.id;
                        return (
                          <div
                            key={pkg.id}
                            onClick={() => setSelectedPackageId(pkg.id)}
                            className={`cursor-pointer border p-6 transition-all ${
                              active
                                ? "border-burgundy bg-cream shadow-md ring-2 ring-burgundy/20"
                                : "border-ink/15 bg-white hover:border-ink/30"
                            }`}
                          >
                            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                              <div>
                                <div className="flex items-center gap-3">
                                  <h3 className="font-heading text-2xl text-burgundy">{pkg.name}</h3>
                                  {pkg.highlighted && (
                                    <span className="rounded bg-burgundy/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-burgundy">
                                      Most Popular
                                    </span>
                                  )}
                                </div>
                                <p className="mt-1 text-xs text-ink/65">{pkg.tagline}</p>
                              </div>
                              <div className="text-left sm:text-right">
                                <span className="font-heading text-2xl font-medium text-burgundy">
                                  {formatPrice(pkg.price)}
                                </span>
                                <span className="block text-[11px] text-ink/50">
                                  {pkg.hours} hrs session
                                </span>
                              </div>
                            </div>
                            <ul className="mt-4 grid gap-1.5 sm:grid-cols-2 text-xs text-ink/75">
                              {pkg.features.slice(0, 4).map((f) => (
                                <li key={f} className="flex items-center gap-1.5">
                                  <FiCheck className="text-dusty-rose" /> {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* Add-ons Checklist */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70">
                        Enhance with Add-ons (Optional)
                      </label>
                      <div className="mt-3 space-y-3">
                        {addons.map((ad) => {
                          const isChecked = selectedAddons.includes(ad.id);
                          return (
                            <label
                              key={ad.id}
                              className={`flex cursor-pointer items-start justify-between border p-4 transition-all ${
                                isChecked
                                  ? "border-dusty-rose bg-blush/40"
                                  : "border-ink/10 bg-white hover:border-ink/20"
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleToggleAddon(ad.id)}
                                  className="mt-1 accent-burgundy"
                                />
                                <div>
                                  <p className="text-sm font-medium text-ink">{ad.name}</p>
                                  <p className="text-xs text-ink/60">{ad.description}</p>
                                </div>
                              </div>
                              <span className="font-heading text-lg text-burgundy whitespace-nowrap ml-4">
                                +{formatPrice(ad.price)}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="border border-ink/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:bg-cream"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="flex items-center gap-3 bg-burgundy px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-wine"
                      >
                        Proceed to Details <FiArrowRight />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Bride's Details */}
                {step === 3 && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="font-heading text-3xl text-burgundy">3. Bride & Event Details</h2>
                      <p className="mt-1 text-sm text-ink/70">
                        Enter your contact information so Feeniya Nizan can confirm your slot and discuss your bridal moodboard.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                          Bride's Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Anjali Nair"
                          className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                          WhatsApp Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="anjali@example.com"
                          className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                          Wedding Venue & City *
                        </label>
                        <input
                          type="text"
                          name="venue"
                          required
                          value={formData.venue}
                          onChange={handleInputChange}
                          placeholder="e.g. Raviz Kadavu, Kozhikode"
                          className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-ink/70 mb-1.5">
                        Special Requests / Ceremony Type (Optional)
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Mention saree type, jewelry style, groom coordination, or multiple event details..."
                        className="w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="border border-ink/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:bg-cream"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex flex-1 items-center justify-center gap-3 bg-burgundy px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-wine"
                      >
                        Confirm Booking Request <FiArrowRight />
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Sidebar: Order Summary Card */}
              <div>
                <div className="sticky top-28 border border-ink/15 bg-cream p-7 shadow-sm">
                  <h3 className="font-heading text-2xl text-burgundy">Booking Summary</h3>

                  <div className="mt-5 space-y-4 border-b border-ink/10 pb-5 text-sm">
                    <div className="flex justify-between">
                      <span className="text-ink/70">Date:</span>
                      <strong className="text-ink">{selectedDate || "Not chosen yet"}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/70">Time Slot:</span>
                      <strong className="text-ink">
                        {timeSlots.find((s) => s.id === selectedSlot)?.label}
                      </strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-ink/70">Package:</span>
                      <strong className="text-burgundy">{selectedPkg.name}</strong>
                    </div>
                    <div className="flex justify-between text-xs text-ink/60">
                      <span>Package Base:</span>
                      <span>{formatPrice(selectedPkg.price)}</span>
                    </div>

                    {selectedAddons.length > 0 && (
                      <div className="space-y-1.5 pt-2 border-t border-ink/5">
                        <span className="text-xs font-bold uppercase tracking-wider text-ink/60">
                          Add-ons:
                        </span>
                        {selectedAddons.map((adId) => {
                          const item = addons.find((a) => a.id === adId);
                          if (!item) return null;
                          return (
                            <div key={adId} className="flex justify-between text-xs text-ink/75">
                              <span className="truncate pr-2">{item.name}</span>
                              <span className="shrink-0">{formatPrice(item.price)}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Pricing Total */}
                  <div className="pt-5">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-ink/70">
                        Estimated Total
                      </span>
                      <span className="font-heading text-3xl font-medium text-burgundy">
                        {formatPrice(grandTotal)}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-ink/60">
                      <span>Advance to lock slot (25%):</span>
                      <span className="font-semibold text-ink">{formatPrice(advanceAmount)}</span>
                    </div>
                  </div>

                  {/* Security Reassurance */}
                  <div className="mt-6 rounded bg-ivory p-4 text-xs leading-relaxed text-ink/70 space-y-2 border border-ink/10">
                    <div className="flex items-center gap-2 text-burgundy font-semibold">
                      <FiShield /> 100% Date Exclusivity Guarantee
                    </div>
                    <p>
                      Your slot is reserved exclusively. The advance amount is adjusted against your final wedding bill.
                    </p>
                  </div>

                  {/* Direct WhatsApp Concierge Help */}
                  <div className="mt-6 text-center border-t border-ink/10 pt-5">
                    <p className="text-xs text-ink/60">Prefer to book directly with Feeniya?</p>
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-bold text-burgundy hover:text-dusty-rose"
                    >
                      <FaWhatsapp className="text-green-600 text-sm" /> Chat on WhatsApp (+91 96454 24281)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      <Footer />
    </>
  );
}

