import { FiClock } from "react-icons/fi";

// The slots the CRM still has room for on the chosen date. Full ones are not shown.
export default function SlotPicker({ date, slots, statusOf, selectedId, onSelect, loading, error }) {
  let message = null;
  if (!date) message = "Pick a date to see the slots that are open.";
  else if (loading) message = "Checking open slots…";
  else if (error)
    message = "We couldn't load the open slots right now. Please try again in a moment, or message us on WhatsApp.";
  else if (!slots.length) message = "No slots are open on this date. Please choose another date.";

  return (
    <fieldset>
      <legend className="block text-xs font-bold uppercase tracking-wider text-ink/70">
        Choose an Open Slot
      </legend>
      {message ? (
        <p role="status" className="mt-3 border border-ink/10 bg-white px-4 py-5 text-sm text-ink/65">
          {message}
        </p>
      ) : (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {slots.map((slot) => {
            const active = selectedId === slot.id;
            const few = statusOf(slot) === "few";
            return (
              <button
                key={slot.id}
                type="button"
                onClick={() => onSelect(slot.id)}
                aria-pressed={active}
                className={`border p-4 text-left transition-all ${
                  active
                    ? "border-burgundy bg-cream shadow-sm ring-1 ring-burgundy"
                    : "border-ink/15 bg-white hover:border-ink/30"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="font-heading text-lg font-medium text-burgundy">{slot.label}</span>
                  <span className="flex items-center gap-2">
                    {few && (
                      <span className="bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                        Few left
                      </span>
                    )}
                    <span
                      className={`h-4 w-4 rounded-full border ${
                        active ? "border-burgundy bg-burgundy" : "border-ink/30 bg-white"
                      }`}
                    />
                  </span>
                </span>
                <span className="mt-1 flex items-center gap-1 text-xs text-ink/65">
                  <FiClock className="text-dusty-rose" />
                  {slot.hint}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </fieldset>
  );
}
