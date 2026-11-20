import Container from "../components/common/Container";
import ArrowLink from "../components/common/ArrowLink";
import Footer from "../components/layout/Footer";
import { FiCalendar, FiClock, FiShield, FiHeart, FiFileText } from "react-icons/fi";
import { contentDefaults } from "../data/content";
import useSection from "../hooks/useSection";

// Icons repeat in this order for however many policy sections the CMS has.
const ICONS = [FiCalendar, FiClock, FiShield, FiFileText, FiHeart];

// A policy body is one point per line.
const pointsOf = (body) =>
  String(body || "")
    .split("\n")
    .map((line) => line.replace(/^[\s•\-*]+/, "").trim())
    .filter(Boolean);

export default function Policies() {
  const page = useSection("policies", contentDefaults.policies);

  return (
    <>
      <section className="border-b border-ink/10 bg-cream py-16 md:py-24">
        <Container className="text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-dusty-rose">
            Transparent & Thoughtful
          </p>
          <h1 className="mt-3 font-heading text-5xl tracking-tight text-burgundy md:text-7xl">{page.title}</h1>
          <div className="mx-auto my-6 h-0.5 w-16 bg-dusty-rose/40" />
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-ink/80">
            Clear guidelines to ensure your wedding morning is calm, seamless, and completely unforgettable.
          </p>
          {page.lastUpdated && (
            <p className="mt-3 text-xs uppercase tracking-widest text-ink/50">Last updated {page.lastUpdated}</p>
          )}
        </Container>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            {(page.sections ?? []).map((p, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div key={p.heading} className="border border-ink/15 bg-white p-8 md:p-10 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/5">
                      <Icon className="h-6 w-6 text-burgundy" />
                    </div>
                    <h2 className="font-heading text-2xl text-burgundy md:text-3xl">{p.heading}</h2>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {pointsOf(p.body).map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dusty-rose shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}

            <div className="border border-dusty-rose/40 bg-cream p-8 text-center md:p-10">
              <h3 className="font-heading text-3xl text-burgundy">Have Any Specific Questions?</h3>
              <p className="mt-2 text-sm text-ink/75 max-w-md mx-auto">
                We are always happy to clarify details for special destination requests or custom wedding itineraries.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <ArrowLink to="/contact" variant="solid">
                  Contact Our Team
                </ArrowLink>
                <ArrowLink to="/book" variant="text">
                  Check Availability
                </ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
