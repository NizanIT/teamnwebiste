import { FiCheck, FiInfo } from "react-icons/fi";

// Status text for the chosen date — always from the CRM's live availability.
const NOTES = {
  available: { tone: "text-emerald-700", Icon: FiCheck, text: "Date is available for booking" },
  few: { tone: "text-amber-700", Icon: FiInfo, text: "Only a few slots remaining for this date" },
  full: { tone: "text-red-700", Icon: FiInfo, text: "This date is fully booked" },
  blocked: { tone: "text-red-700", Icon: FiInfo, text: "We are not taking bookings on this date" },
  past: { tone: "text-red-700", Icon: FiInfo, text: "This date has already passed" },
};

export default function DateStatusNote({ status, loading, error }) {
  if (loading) {
    return <p className="mt-3 text-xs text-ink/60">Checking availability…</p>;
  }
  if (error) {
    return (
      <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-amber-700" role="status">
        <FiInfo className="text-sm" /> Couldn't check availability right now — our team will confirm this date with you.
      </p>
    );
  }
  const note = NOTES[status];
  if (!note) return null;
  const { tone, Icon, text } = note;
  return (
    <p className={`mt-3 flex items-center gap-1 text-xs font-semibold ${tone}`} role="status">
      <Icon className="text-sm" /> {text}
    </p>
  );
}
