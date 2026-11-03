import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Container from "../common/Container";
import { faqs } from "../../data/faqs";

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.7fr] lg:gap-10">
        <h2 className="font-heading text-4xl leading-[1.05] text-burgundy lg:text-[44px]">
          Frequently
          <br />
          asked questions
        </h2>

        <ul className="border-t border-ink/15">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <li key={faq.question} className="border-b border-ink/15">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-4 text-left text-[15px] font-medium"
                >
                  {faq.question}
                  {isOpen ? <FiMinus aria-hidden="true" /> : <FiPlus aria-hidden="true" />}
                </button>
                {isOpen && <p className="max-w-xl pb-5 text-[15px] leading-relaxed">{faq.answer}</p>}
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
