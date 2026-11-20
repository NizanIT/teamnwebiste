import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { formatPrice } from "../../utils/format";

// Shown after the bride submits step 3.
export default function BookingSuccess({ name, date, slot, pkg, totals, whatsappUrl }) {
  return (
    <div className="mx-auto max-w-2xl border border-dusty-rose/40 bg-cream p-10 text-center shadow-lg md:p-14">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
        <FiCheckCircle className="h-10 w-10 text-burgundy" />
      </div>
      <h2 className="mt-6 font-heading text-4xl text-burgundy">Booking Request Received</h2>
      <p className="mt-3 text-[16px] text-ink/80">
        Dear <strong className="text-burgundy">{name}</strong>, thank you for choosing Team N Makeovers
        for your wedding on <strong>{date}</strong>.
      </p>

      <dl className="my-8 border-y border-ink/10 py-6 text-left text-sm leading-relaxed text-ink/75">
        {[
          ["Selected Package:", <span className="text-burgundy">{pkg?.name}</span>],
          ["Slot:", slot?.label],
          ["Estimated Total:", <span className="text-burgundy">{formatPrice(totals.grandTotal)}</span>],
          ["Advance (paid to our team):", totals.advanceAmount != null ? formatPrice(totals.advanceAmount) : "Shared on enquiry"],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between py-1">
            <dt>{label}</dt>
            <dd className="font-bold">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="space-y-1 text-left text-xs leading-relaxed text-ink/70">
        <p className="font-semibold text-burgundy">What happens next</p>
        <p>1. Our team will call or WhatsApp you shortly to confirm availability for your date.</p>
        <p>2. Your date is locked once the advance is paid directly to our team — no payment is taken on this website.</p>
        <p>3. You'll receive your booking confirmation after the advance is received.</p>
      </div>
      <p className="mt-5 text-xs text-ink/70">Want to talk sooner? Message us on WhatsApp:</p>

      <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-md hover:bg-[#20ba59]"
        >
          <FaWhatsapp className="text-lg" />
          Chat on WhatsApp
        </a>
        <Link
          to="/"
          className="border border-ink/20 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:bg-cream"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
