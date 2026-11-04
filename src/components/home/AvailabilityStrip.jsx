import { Link } from "react-router-dom";
import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import { getNextAvailableDates, toISODate } from "../../data/availability";

const weekday = (d) => d.toLocaleDateString("en-GB", { weekday: "long" });
const dayMonth = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

export default function AvailabilityStrip() {
  const dates = getNextAvailableDates(4);

  return (
    <section className="border-y border-ink/10 bg-cream">
      <Container className="flex flex-col gap-6 py-7 lg:flex-row lg:items-center lg:gap-10">
        {/* Label */}
        <div className="shrink-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
            Open dates
          </p>
          <p className="mt-0.5 font-heading text-2xl text-ink">Book your slot</p>
        </div>

        {/* Divider */}
        <div className="hidden h-10 w-px bg-ink/15 lg:block" aria-hidden="true" />

        {/* Date pills */}
        <ul className="flex flex-wrap gap-2">
          {dates.map((date) => (
            <li key={toISODate(date)}>
              <Link
                to={`/book?date=${toISODate(date)}`}
                className="group flex items-center gap-2 border border-ink/20 bg-ivory px-4 py-2 text-sm font-medium transition-all hover:border-burgundy hover:bg-burgundy hover:text-white"
              >
                <span className="text-xs font-normal opacity-70 group-hover:opacity-100">
                  {weekday(date)}
                </span>
                <span className="border-l border-ink/20 pl-2 group-hover:border-white/30">
                  {dayMonth(date)}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="lg:ml-auto">
          <ArrowLink to="/book" variant="solid">
            View full calendar
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
