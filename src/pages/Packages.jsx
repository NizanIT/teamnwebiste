import { useState } from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight, FiClock, FiStar, FiShield, FiHeart, FiAward } from "react-icons/fi";
import Container from "../components/common/Container";
import ArrowLink from "../components/common/ArrowLink";
import Footer from "../components/layout/Footer";
import { packages, addons, formatPrice } from "../data/packages";

const comparisonCriteria = [
  {
    name: "Lead Artist",
    airbrush: "Team N Senior Artist",
    platinum: "Feeniya Nizan (Lead Artist)",
    custom: "Feeniya Nizan + Elite Crew",
  },
  {
    name: "Skin Prep & Makeup Base",
    airbrush: "HD Airbrush Luminous Base",
    platinum: "Couture Skincare + Hybrid HD/Airbrush",
    custom: "Multi-layer Customized Skin Prep",
  },
  {
    name: "Hair Styling & Design",
    airbrush: "Classic Updo or Braid",
    platinum: "Architectural Couture + Fresh Florals",
    custom: "Multiple Hairstyle Transformations",
  },
  {
    name: "Lashes & Eye Artistry",
    airbrush: "Luxury Faux Mink Lashes",
    platinum: "Custom Lash Mapping & Sculpted Eyes",
    custom: "Bespoke Multi-Look Lash & Eye Artistry",
  },
  {
    name: "Saree & Veil Placement",
    airbrush: "Traditional Draping / Pinning",
    platinum: "Precision Pleating & Couture Pinning",
    custom: "Multiple Outfit & Jewelry Changes",
  },
  {
    name: "Trial Session",
    airbrush: "Available as Add-on",
    platinum: "Virtual Consultation Included",
    custom: "Full Studio Trial Session Included",
  },
  {
    name: "Touch-up Kit",
    airbrush: "Essential Mini Kit",
    platinum: "Deluxe Bridal Emergency Box",
    custom: "Full Concierge Kit + Artist Standby",
  },
  {
    name: "Travel Coverage",
    airbrush: "Kozhikode & Nearby Kerala",
    platinum: "All Kerala On-Location",
    custom: "Pan-India & Destination Worldwide",
  },
];

const guarantees = [
  {
    icon: <FiAward className="h-6 w-6 text-burgundy" />,
    title: "100% Luxury Products",
    description: "Exclusively using Charlotte Tilbury, Dior, NARS, MAC, and Huda Beauty for seamless, non-cakey perfection.",
  },
  {
    icon: <FiShield className="h-6 w-6 text-burgundy" />,
    title: "Hospital-Grade Hygiene",
    description: "Strict brush sanitization, disposable applicators, and UV sterilization for immaculate safety.",
  },
  {
    icon: <FiClock className="h-6 w-6 text-burgundy" />,
    title: "Calm & Punctual Pacing",
    description: "We buffer every bridal morning with generous margins so you are calm, unhurried, and on time.",
  },
  {
    icon: <FiHeart className="h-6 w-6 text-burgundy" />,
    title: "Camera & Flash Calibrated",
    description: "Crafted specifically to look effortlessly natural in person while translating flawlessly under studio flashes and 4K cameras.",
  },
];

export default function Packages() {
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Header Banner */}
      <section className="border-b border-ink/10 bg-cream py-16 md:py-24">
        <Container className="text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-dusty-rose">
            Curated Bridal Services
          </p>
          <h1 className="mt-3 font-heading text-5xl tracking-tight text-burgundy md:text-7xl">
            Bridal Packages & Styling
          </h1>
          <div className="mx-auto my-6 h-0.5 w-16 bg-dusty-rose/40" />
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-ink/80">
            Tailored makeup, hair design, and couture styling crafted by Feeniya Nizan and Team N.
            Every package is thoughtfully paced to make you feel radiant, serene, and confident.
          </p>
        </Container>
      </section>

      {/* Main Packages Grid */}
      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.id}
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
                  <p className="mt-2 text-sm italic text-ink/70">{pkg.tagline}</p>
                </div>

                <div className="my-6 border-y border-ink/10 py-5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-ink/60">{pkg.from ? "Starts at" : "Price"}</span>
                    <span className="font-heading text-4xl font-medium text-burgundy">
                      {formatPrice(pkg.price)}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink/50">
                    <FiClock className="text-dusty-rose" />
                    <span>Duration: {pkg.hours} {typeof pkg.hours === "number" ? "hours session" : ""}</span>
                  </div>
                </div>

                <p className="text-[14px] leading-relaxed text-ink/80">{pkg.description}</p>

                {/* Inclusions checklist */}
                <div className="mt-6 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/70">
                    What's Included:
                  </p>
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
                </div>

                {/* Best For Note */}
                <div className="mt-8 rounded bg-blush/60 p-4 text-xs leading-relaxed text-ink/75">
                  <span className="font-semibold text-burgundy">Ideal for: </span>
                  {pkg.idealFor}
                </div>

                {/* Action button */}
                <div className="mt-8">
                  <Link
                    to={`/book?package=${pkg.id}`}
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
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-ink/10 bg-cream py-20 lg:py-28">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              Detailed Breakdown
            </p>
            <h2 className="mt-2 font-heading text-4xl text-burgundy md:text-5xl">
              Compare Our Packages
            </h2>
            <p className="mt-3 text-sm text-ink/70">
              Clear, transparent comparison to help you choose the ideal experience for your celebration.
            </p>
          </div>

          <div className="overflow-x-auto border border-ink/15 bg-white shadow-sm">
            <table className="w-full min-w-[700px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/15 bg-blush/40 font-heading text-lg text-burgundy">
                  <th className="p-5 font-medium">Service Feature</th>
                  <th className="p-5 font-medium">Airbrush (₹35k)</th>
                  <th className="p-5 font-medium bg-burgundy/5 text-burgundy">Platinum (₹50k)</th>
                  <th className="p-5 font-medium">Custom (From ₹60k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/10 text-ink/80">
                {comparisonCriteria.map((item, idx) => (
                  <tr key={item.name} className={idx % 2 === 0 ? "bg-white" : "bg-ivory/50"}>
                    <td className="p-5 font-medium text-ink">{item.name}</td>
                    <td className="p-5 text-sm">{item.airbrush}</td>
                    <td className="p-5 text-sm font-medium bg-burgundy/5 text-burgundy">
                      {item.platinum}
                    </td>
                    <td className="p-5 text-sm">{item.custom}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Add-ons & À La Carte Section */}
      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
                Customise Your Experience
              </p>
              <h2 className="mt-1 font-heading text-4xl text-burgundy md:text-5xl">
                À La Carte Add-Ons
              </h2>
            </div>
            <p className="max-w-md text-sm text-ink/70">
              Enhance any bridal package with tailored styling services for yourself and your entourage.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {addons.map((addon) => (
              <div
                key={addon.id}
                className="flex flex-col justify-between border border-ink/15 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="font-heading text-2xl font-medium text-burgundy">
                      {formatPrice(addon.price)}
                    </span>
                  </div>
                  <h3 className="mt-3 font-heading text-xl text-ink">{addon.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink/70">{addon.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-ink/10">
                  <Link
                    to={`/book?addon=${addon.id}`}
                    className="text-xs font-semibold uppercase tracking-wider text-burgundy hover:text-dusty-rose flex items-center gap-2"
                  >
                    Add to booking <FiArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Brand Standards / Pillars */}
      <section className="border-t border-ink/10 bg-blush/60 py-20">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              The Team N Promise
            </p>
            <h2 className="mt-2 font-heading text-4xl text-burgundy md:text-5xl">
              Why Brides Trust Us
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {guarantees.map((g) => (
              <div key={g.title} className="border border-ink/10 bg-ivory p-7">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/5">
                  {g.icon}
                </div>
                <h3 className="font-heading text-xl text-burgundy">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{g.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom Booking CTA Banner */}
      <section className="bg-burgundy py-16 text-white text-center">
        <Container>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-champagne">
            Ready to secure your date?
          </p>
          <h2 className="mt-3 font-heading text-4xl md:text-6xl text-white">
            Dates Fill Fast for Prime Wedding Seasons
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80">
            We accept limited brides per auspicious date to guarantee 100% undivided attention and care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/book"
              className="bg-champagne px-8 py-4 text-xs font-bold uppercase tracking-widest text-burgundy transition-all hover:bg-white"
            >
              Check Date Availability
            </Link>
            <Link
              to="/contact"
              className="border border-white/40 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white hover:text-burgundy"
            >
              Ask a Question
            </Link>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
