import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

const highlights = [
  { number: "1000+", label: "Brides styled" },
  { number: "10+", label: "Years of expertise" },
  { number: "Kerala", label: "& worldwide" },
];

export default function AboutFeeniya() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* Image with decorative border offset */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-champagne" aria-hidden="true" />
            <ImageFrame
              image={brideImages.about}
              alt="Feeniya Nizan"
              className="relative h-[380px] w-full object-top lg:h-[440px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              About Feeniya
            </p>
            <h2 className="mt-3 font-heading text-4xl text-burgundy lg:text-[44px]">
              The artist behind Team N
            </h2>

            <blockquote className="mt-6 border-l-2 border-dusty-rose pl-5">
              <p className="font-heading text-xl italic leading-snug text-ink">
                "My approach has always been simple — to bring out the most confident, beautiful version of every bride."
              </p>
              <footer className="mt-3 text-sm font-medium text-dusty-rose">— Feeniya Nizan</footer>
            </blockquote>

            <p className="mt-7 max-w-[460px] text-[15px] leading-relaxed text-ink/75">
              Founder and lead artist at Team N Makeovers, Feeniya Nizan brings over a decade of experience in bridal
              makeup and hairstyling, creating timeless looks for brides in Kerala and around the world.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {highlights.map(({ number, label }) => (
                <div key={label}>
                  <p className="font-heading text-3xl text-burgundy">{number}</p>
                  <p className="text-xs font-medium uppercase tracking-widest text-ink/50">{label}</p>
                </div>
              ))}
            </div>

            <ArrowLink to="/contact" variant="solid" className="mt-10">
              Know more about us
            </ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
