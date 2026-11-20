import { FiCheck } from "react-icons/fi";
import { formatPrice } from "../../utils/format";
import { packagePriceFor, packageStartingPrice } from "../../utils/pricing";

export default function PackageOption({ pkg, active, onSelect, location }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(pkg.id)}
      aria-pressed={active}
      className={`block w-full border p-6 text-left transition-all ${
        active
          ? "border-burgundy bg-cream shadow-md ring-2 ring-burgundy/20"
          : "border-ink/15 bg-white hover:border-ink/30"
      }`}
    >
      <span className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <span>
          <span className="flex items-center gap-3">
            <span className="font-heading text-2xl text-burgundy">{pkg.name}</span>
            {pkg.highlighted && (
              <span className="rounded bg-burgundy/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-burgundy">
                Most Popular
              </span>
            )}
          </span>
          <span className="mt-1 block text-xs text-ink/65">{pkg.tagline}</span>
        </span>
        <span className="text-left sm:text-right">
          <span className="font-heading text-2xl font-medium text-burgundy">
            {!location && <span className="text-sm text-ink/60">from </span>}
            {formatPrice(location ? packagePriceFor(pkg, location) : packageStartingPrice(pkg))}
          </span>
          {pkg.hours && (
            <span className="block text-[11px] text-ink/50">
              {typeof pkg.hours === "number" ? `${pkg.hours} hrs session` : pkg.hours}
            </span>
          )}
        </span>
      </span>
      {pkg.features.length > 0 && (
        <span className="mt-4 grid gap-1.5 text-xs text-ink/75 sm:grid-cols-2">
          {pkg.features.slice(0, 4).map((f) => (
            <span key={f} className="flex items-center gap-1.5">
              <FiCheck className="shrink-0 text-dusty-rose" /> {f}
            </span>
          ))}
        </span>
      )}
    </button>
  );
}
