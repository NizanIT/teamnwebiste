import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import { packages, formatPrice } from "../../data/packages";

export default function PackagesPreview() {
  return (
    <section className="bg-ivory pb-20 lg:pb-32">
      <Container>
        <div className="mb-8 flex items-end justify-between lg:mb-12">
          <h2 className="font-heading text-4xl text-burgundy lg:text-[42px]">Our packages</h2>
          <ArrowLink to="/packages">View all packages</ArrowLink>
        </div>

        <div className="grid gap-px md:grid-cols-3">
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              className={`px-6 py-8 lg:px-10 ${pkg.highlighted ? "bg-blush" : index > 0 ? "md:border-l md:border-ink/10" : ""}`}
            >
              <h3 className="font-heading text-3xl text-burgundy">{pkg.name}</h3>
              <p className="mt-1 flex items-center gap-3 text-sm">
                <span className="text-lg font-medium text-burgundy">
                  {pkg.from && "From "}
                  {formatPrice(pkg.price)}
                </span>
                {pkg.hours && (
                  <>
                    <span aria-hidden="true">•</span>
                    <span>{pkg.hours} hours</span>
                  </>
                )}
              </p>
              <p className="mt-3 max-w-[260px] text-[15px] leading-snug">{pkg.description}</p>
              <ArrowLink to={`/book?package=${pkg.id}`} className="mt-4">
                Book this package
              </ArrowLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
