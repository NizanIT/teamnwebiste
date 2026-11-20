import { Link } from "react-router-dom";
import Container from "../common/Container";

export default function PackagesCta() {
  return (
    <section className="bg-burgundy py-16 text-center text-white">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-champagne">Ready to secure your date?</p>
        <h2 className="mt-3 font-heading text-4xl text-white md:text-6xl">
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
  );
}
