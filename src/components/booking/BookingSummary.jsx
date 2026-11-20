import { FaWhatsapp } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { formatPrice } from "../../utils/format";
import SummaryRow from "./SummaryRow";

// Sticky sidebar: what has been chosen so far and the running total.
export default function BookingSummary({ date, slot, location, pkg, selectedAddons, totals, whatsappUrl, whatsappLabel }) {
  return (
    <aside className="sticky top-28 border border-ink/15 bg-cream p-7 shadow-sm">
      <h3 className="font-heading text-2xl text-burgundy">Booking Summary</h3>

      <div className="mt-5 space-y-4 border-b border-ink/10 pb-5 text-sm">
        <SummaryRow label="Location:">{location ? location.districtName : "Not chosen yet"}</SummaryRow>
        <SummaryRow label="Date:">{date || "Not chosen yet"}</SummaryRow>
        <SummaryRow label="Slot:">{slot?.label ?? "Not chosen yet"}</SummaryRow>
        <SummaryRow label="Package:">
          <span className="text-burgundy">{pkg?.name ?? "Not chosen yet"}</span>
        </SummaryRow>
        <div className="flex justify-between text-xs text-ink/60">
          <span>Package Base:</span>
          <span>{pkg ? formatPrice(totals.packagePrice) : "—"}</span>
        </div>

        {selectedAddons.length > 0 && (
          <div className="space-y-1.5 border-t border-ink/5 pt-2">
            <span className="text-xs font-bold uppercase tracking-wider text-ink/60">Add-ons:</span>
            {selectedAddons.map((item) => (
              <div key={item.id} className="flex justify-between text-xs text-ink/75">
                <span className="truncate pr-2">{item.name}</span>
                <span className="shrink-0">{formatPrice(item.price)}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-5">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Estimated Total</span>
          <span className="font-heading text-3xl font-medium text-burgundy">
            {pkg ? formatPrice(totals.grandTotal) : "—"}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-ink/60">
          <span>Advance to confirm date:</span>
          <span className="font-semibold text-ink">
            {totals.advanceAmount != null ? formatPrice(totals.advanceAmount) : "Shared on enquiry"}
          </span>
        </div>
      </div>

      <div className="mt-6 space-y-2 rounded border border-ink/10 bg-ivory p-4 text-xs leading-relaxed text-ink/70">
        <div className="flex items-center gap-2 font-semibold text-burgundy">
          <FiShield /> How your date is secured
        </div>
        <p>
          Sending this form is an enquiry — our team will confirm availability with you. Your date is
          reserved once the advance is paid, and the advance is adjusted against your final bill.
        </p>
      </div>

      <div className="mt-6 border-t border-ink/10 pt-5 text-center">
        <p className="text-xs text-ink/60">Prefer to book directly with Feeniya?</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center justify-center gap-2 text-xs font-bold text-burgundy hover:text-dusty-rose"
        >
          <FaWhatsapp className="text-sm text-green-600" /> Chat on WhatsApp{whatsappLabel ? ` (${whatsappLabel})` : ""}
        </a>
      </div>
    </aside>
  );
}
