import { toISODate } from "../../utils/date";

// Quick-pick buttons for the next open dates.
export default function UpcomingDates({ dates, selected, onSelect }) {
  if (!dates.length) return null;
  return (
    <div>
      <p className="block text-xs font-bold uppercase tracking-wider text-ink/70">
        Popular Upcoming Dates
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {dates.map((d) => {
          const iso = toISODate(d);
          const isSel = selected === iso;
          return (
            <button
              key={iso}
              type="button"
              onClick={() => onSelect(iso)}
              aria-pressed={isSel}
              className={`border px-4 py-2 text-xs font-medium transition-all ${
                isSel
                  ? "border-burgundy bg-burgundy text-white shadow-sm"
                  : "border-ink/20 bg-white text-ink hover:border-burgundy"
              }`}
            >
              {d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}
            </button>
          );
        })}
      </div>
    </div>
  );
}
