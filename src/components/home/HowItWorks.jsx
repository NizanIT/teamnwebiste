import Container from "../common/Container";

const steps = [
  { title: "Choose package", text: "Select the look that suits you." },
  { title: "Pick a date", text: "See available dates and book your slot." },
  { title: "Pay advance", text: "Secure your booking with an advance." },
  { title: "Get confirmation", text: "Receive instant booking details." },
];

export default function HowItWorks() {
  return (
    <section className="bg-blush py-14 lg:py-20">
      <Container className="grid items-center gap-6 lg:grid-cols-[1fr_3fr] lg:gap-10">
        <h2 className="font-heading text-4xl leading-[1.05] text-burgundy lg:text-[44px]">
          How booking
          <br />
          works
        </h2>

        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((step, index) => (
            <li key={step.title} className={`lg:px-8 ${index > 0 ? "lg:border-l lg:border-ink/15" : "lg:pl-0"}`}>
              <span className="font-heading text-4xl lining-nums text-burgundy">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-1 font-body text-[15px] font-medium text-ink">{step.title}</h3>
              <p className="mt-1 max-w-[180px] text-[13px] leading-snug">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
