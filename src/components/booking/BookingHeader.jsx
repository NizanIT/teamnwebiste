import Container from "../common/Container";
import { bookingSteps } from "../../data/bookingSlots";

// Page title + 3-step progress. Steps after 1 stay locked until a date and open slot are picked.
export default function BookingHeader({ step, onStepChange, canAdvance }) {
  return (
    <section className="border-b border-ink/10 bg-cream py-12 md:py-16">
      <Container className="text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-dusty-rose">
          Calendar & Slot Reservation
        </p>
        <h1 className="mt-2 font-heading text-4xl text-burgundy md:text-6xl">
          Book Your Bridal Experience
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
          Lock your date with Feeniya Nizan & Team N. We accept limited brides per date to guarantee
          uncompromised perfection.
        </p>

        <ol className="mx-auto mt-8 flex max-w-xl items-center justify-between border-t border-ink/10 pt-6">
          {bookingSteps.map((s) => {
            const locked = s.num > 1 && !canAdvance;
            return (
              <li key={s.num}>
                <button
                  type="button"
                  onClick={() => onStepChange(s.num)}
                  disabled={locked}
                  aria-current={step === s.num ? "step" : undefined}
                  className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors disabled:cursor-not-allowed ${
                    step === s.num ? "text-burgundy" : step > s.num ? "text-ink/80" : "text-ink/40"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                      step === s.num
                        ? "bg-burgundy text-white"
                        : step > s.num
                          ? "bg-dusty-rose text-white"
                          : "bg-ink/10 text-ink/50"
                    }`}
                  >
                    {step > s.num ? "✓" : s.num}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
