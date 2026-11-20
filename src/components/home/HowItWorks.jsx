import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";

export default function HowItWorks() {
  const section = useSection("howItWorks", contentDefaults.howItWorks);
  const steps = section.steps ?? [];

  return (
    <section className="bg-blush py-20 lg:py-28">
      <Container>
        {/* Header */}
        <div className="mb-14 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              {section.eyebrow}
            </p>
            <h2 className="mt-1 font-heading text-4xl leading-[1.05] text-burgundy lg:text-[44px]">
              {section.title}
            </h2>
          </div>
          <ArrowLink to="/book" variant="solid">
            Book your date
          </ArrowLink>
        </div>

        {/* Steps */}
        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {/* Connecting line (desktop only) */}
          <li className="pointer-events-none absolute top-5 left-0 right-0 hidden border-t border-dashed border-ink/20 lg:block" aria-hidden="true" />

          {steps.map((step, index) => (
            <li
              key={step.title}
              className={`relative lg:px-8 ${index === 0 ? "lg:pl-0" : ""} ${
                index === steps.length - 1 ? "lg:pr-0" : ""
              }`}
            >
              {/* Step number circle */}
              <div className="relative mb-5 flex h-10 w-10 items-center justify-center border border-burgundy/30 bg-ivory">
                <span className="font-heading text-lg lining-nums text-burgundy">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="font-heading text-xl text-burgundy">{step.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
