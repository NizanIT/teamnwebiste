import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiClock } from "react-icons/fi";
import { formatPrice } from "../../utils/format";
import { packageStartingPrice } from "../../utils/pricing";

export default function PackageCard({ pkg }) {
  const duration = typeof pkg.hours === "number" ? `${pkg.hours} hours session` : pkg.hours;

  return (
    <article
      className={`relative flex flex-col border p-8 transition-all duration-300 md:p-10 ${
        pkg.highlighted
          ? "border-burgundy bg-cream shadow-xl ring-2 ring-burgundy/20"
          : "border-ink/15 bg-white hover:border-burgundy/40"
      }`}
    >
      {pkg.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-burgundy px-4 py-1 text-[11px] font-semibold uppercase tracking-widest text-white shadow-sm">
          Most Popular Choice
        </div>
      )}

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-dusty-rose">
          Signature Package
        </p>
        <h2 className="mt-2 font-heading text-4xl text-burgundy">{pkg.name}</h2>
        {pkg.tagline && <p className="mt-2 text-sm italic text-ink/70">{pkg.tagline}</p>}
      </div>

      <div className="my-6 border-y border-ink/10 py-5">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-ink/60">Starting from</span>
          <span className="font-heading text-4xl font-medium text-burgundy">{formatPrice(packageStartingPrice(pkg))}</span>
        </div>
        {duration && (
          <div className="mt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink/50">
            <FiClock className="text-dusty-rose" />
            <span>Duration: {duration}</span>
          </div>
        )}
      </div>

      <p className="text-[14px] leading-relaxed text-ink/80">{pkg.description}</p>

      <div className="mt-6 flex-1">
        {pkg.features.length > 0 && (
          <>
            <p className="text-xs font-bold uppercase tracking-wider text-ink/70">What's Included:</p>
            <ul className="mt-3 space-y-3">
              {pkg.features.map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-[14px] leading-snug text-ink/80">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
                    <FiCheck className="h-3 w-3" />
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {pkg.idealFor && (
        <div className="mt-8 rounded bg-blush/60 p-4 text-xs leading-relaxed text-ink/75">
          <span className="font-semibold text-burgundy">Ideal for: </span>
          {pkg.idealFor}
        </div>
      )}

      <div className="mt-8">
        <Link
          to={`/book?package=${encodeURIComponent(pkg.id)}`}
          className={`flex w-full items-center justify-center gap-3 py-3.5 text-center text-xs font-bold uppercase tracking-widest transition-colors ${
            pkg.highlighted
              ? "bg-burgundy text-white hover:bg-wine"
              : "border border-burgundy bg-transparent text-burgundy hover:bg-burgundy hover:text-white"
          }`}
        >
          Select {pkg.name}
          <FiArrowRight />
        </Link>
      </div>
    </article>
  );
}
