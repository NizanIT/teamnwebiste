import { formatPrice } from "../../utils/format";

// The bride's choices and the final total, shown before she sends the request.
// Prices are the CRM's package and add-on prices.
function Row({ label, value, step, onEdit }) {
  return (
    <div className="flex items-start justify-between gap-4 py-1.5">
      <dt className="text-ink/60">{label}</dt>
      <dd className="flex items-center gap-3 text-right font-medium text-ink">
        <span>{value}</span>
        {onEdit && step && (
          <button
            type="button"
            onClick={() => onEdit(step)}
            className="text-[11px] font-semibold uppercase tracking-wider text-dusty-rose hover:text-burgundy"
          >
            Change
          </button>
        )}
      </dd>
    </div>
  );
}

export default function OrderReview({ date, slot, location, pkg, selectedAddons, totals, onEdit }) {
  return (
    <section aria-label="Your booking request" className="border border-ink/15 bg-cream p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-ink/70">Your request</p>
      <dl className="mt-2 divide-y divide-ink/10 text-sm">
        <Row
          label="Location"
          value={location ? `${location.districtName}, ${location.regionName}` : "—"}
          step={1}
          onEdit={onEdit}
        />
        <Row label="Date" value={date || "—"} step={1} onEdit={onEdit} />
        <Row label="Slot" value={slot?.label || "—"} step={1} onEdit={onEdit} />
        <Row
          label="Package"
          value={pkg ? `${pkg.name} · ${formatPrice(totals.packagePrice)}` : "—"}
          step={2}
          onEdit={onEdit}
        />
        {selectedAddons.map((a) => (
          <Row key={a.id} label="Add-on" value={`${a.name} · ${formatPrice(a.price)}`} />
        ))}
      </dl>
      <div className="mt-3 flex items-baseline justify-between border-t border-ink/20 pt-3">
        <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Total</span>
        <span className="font-heading text-3xl font-medium text-burgundy">
          {pkg ? formatPrice(totals.grandTotal) : "—"}
        </span>
      </div>
      <p className="mt-1 text-right text-xs text-ink/60">
        Advance to confirm your date:{" "}
        <strong className="text-ink">
          {totals.advanceAmount != null ? formatPrice(totals.advanceAmount) : "shared when we call"}
        </strong>
      </p>
      <p className="mt-3 text-xs leading-relaxed text-ink/60">
        No payment is taken here. Our team will call you to confirm, and your date is booked once the
        advance is paid to us.
      </p>
    </section>
  );
}
