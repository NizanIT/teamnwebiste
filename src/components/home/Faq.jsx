import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import { faqs } from "../../data/faqs";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-cream py-20 lg:py-32">
      <Container>
        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              FAQs
            </p>
            <h2 className="mt-1 font-heading text-4xl leading-[1.05] text-burgundy lg:text-[44px]">
              Frequently asked questions
            </h2>
          </div>
          <ArrowLink to="/contact">Still have questions?</ArrowLink>
        </div>

        {/* Two-column accordion on desktop */}
        <div className="grid gap-px border border-ink/10 bg-ink/10 lg:grid-cols-2">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div key={faq.question} className="bg-cream">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-6 px-7 py-6 text-left"
                >
                  <span className="text-[15px] font-medium leading-snug text-ink">
                    {faq.question}
                  </span>
                  <span className={`mt-0.5 shrink-0 transition-colors ${isOpen ? "text-burgundy" : "text-ink/40"}`}>
                    {isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-7 pb-6 text-[14px] leading-relaxed text-ink/65">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
