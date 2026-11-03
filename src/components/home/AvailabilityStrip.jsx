import { Link } from "react-router-dom";
import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import { getNextAvailableDates, toISODate } from "../../data/availability";

const weekday = (d) => d.toLocaleDateString("en-GB", { weekday: "short" });
const dayMonth = (d) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });

export default function AvailabilityStrip() {
  const dates = getNextAvailableDates(4);

  return (
    <section className="bg-blush">
      <Container className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-heading text-3xl text-ink">Next available dates</h2>
          <p className="text-sm">Book your bridal look on an upcoming date.</p>
        </div>

        <ul className="flex flex-wrap gap-3">
          {dates.map((date) => (
            <li key={toISODate(date)}>
              <Link
                to={`/book?date=${toISODate(date)}`}
                className="block min-w-[84px] bg-white px-5 py-3 text-center text-sm font-medium leading-snug transition-colors hover:bg-champagne"
              >
                {weekday(date)}
                <br />
                {dayMonth(date)}
              </Link>
            </li>
          ))}
        </ul>

        <ArrowLink to="/book" variant="solid">
          View calendar
        </ArrowLink>
      </Container>
    </section>
  );
}
