import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import { packages, formatPrice } from "../../data/packages";

const icons = {
  airbrush: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l1.5 4.5H18l-3.75 2.75 1.5 4.75L12 11l-3.75 3L9.75 9.25 6 6.5h4.5z" strokeLinejoin="round" />
      <path d="M12 14v8M9 22h6" strokeLinecap="round" />
    </svg>
  ),
  platinum: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" strokeLinecap="round" />
    </svg>
  ),
  custom: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
      <path d="M8 12h8M12 8v8" strokeLinecap="round" />
    </svg>
  ),
};

export default function PackagesPreview() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mb-12 flex items-end justify-between lg:mb-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              Services
            </p>
            <h2 className="mt-1 font-heading text-4xl text-burgundy lg:text-[44px]">Our packages</h2>
          </div>
          <ArrowLink to="/packages">View all packages</ArrowLink>
        </div>

        {/* Cards */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-0">
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`flex flex-col border border-ink/10 p-8 lg:p-10 transition-shadow hover:shadow-md ${
                pkg.highlighted
                  ? "bg-burgundy text-white border-burgundy"
                  : "bg-ivory"
              } ${index > 0 && !pkg.highlighted ? "md:-ml-px" : ""}`}
            >
              {/* Icon */}
              <span className={pkg.highlighted ? "text-champagne" : "text-dusty-rose"}>
                {icons[pkg.id]}
              </span>

              {/* Name */}
              <h3 className={`mt-5 font-heading text-3xl ${pkg.highlighted ? "text-white" : "text-burgundy"}`}>
                {pkg.name}
              </h3>

              {/* Price */}
              <p className={`mt-2 text-[13px] ${pkg.highlighted ? "text-white/70" : "text-ink/60"}`}>
                {pkg.from && "Starting from"}
              </p>
              <p className={`font-heading text-2xl font-medium ${pkg.highlighted ? "text-champagne" : "text-burgundy"}`}>
                {formatPrice(pkg.price)}
              </p>

              {/* Hours */}
              {pkg.hours && (
                <p className={`mt-1 text-xs font-medium uppercase tracking-widest ${pkg.highlighted ? "text-white/50" : "text-ink/40"}`}>
                  {pkg.hours} hours
                </p>
              )}

              {/* Description */}
              <p className={`mt-4 flex-1 text-[15px] leading-relaxed ${pkg.highlighted ? "text-white/80" : "text-ink/70"}`}>
                {pkg.description}
              </p>

              {/* CTA */}
              <div className="mt-8">
                <ArrowLink
                  to={`/book?package=${pkg.id}`}
                  variant={pkg.highlighted ? "light" : "solid"}
                  className={pkg.highlighted ? "" : ""}
                >
                  Book this package
                </ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
