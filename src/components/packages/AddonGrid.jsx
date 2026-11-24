import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import Container from "../common/Container";
import { formatPrice } from "../../utils/format";

export default function AddonGrid({ addons }) {
  if (!addons.length) return null;
  return (
    <section className="bg-ivory py-20 lg:py-28">
      <Container>
        <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              Customise Your Experience
            </p>
            <h2 className="mt-1 font-heading text-4xl text-burgundy md:text-5xl">Add-Ons</h2>
          </div>
          <p className="max-w-md text-sm text-ink/70">
            Enhance any bridal package with tailored styling services for yourself and your
            entourage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className="flex flex-col justify-between border border-ink/15 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div>
                <span className="font-heading text-2xl font-medium text-burgundy">
                  {formatPrice(addon.price)}
                </span>
                <h3 className="mt-3 font-heading text-xl text-ink">{addon.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-ink/70">{addon.description}</p>
              </div>
              <div className="mt-6 border-t border-ink/10 pt-4">
                <Link
                  to={`/book?addon=${encodeURIComponent(addon.id)}`}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-burgundy hover:text-dusty-rose"
                >
                  Add to booking <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
