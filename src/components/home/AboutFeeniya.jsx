import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

export default function AboutFeeniya() {
  return (
    <section className="bg-ivory pb-20 lg:pb-32">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.55fr_1.1fr] lg:gap-10">
        <ImageFrame image={brideImages.about} alt="Feeniya Nizan" className="h-[320px] w-full object-top lg:h-[300px]" />

        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-dusty-rose">About Feeniya</p>
          <h2 className="mt-2 font-heading text-4xl text-burgundy">The artist behind Team N</h2>
          <blockquote className="mt-5 flex gap-3">
            <span aria-hidden="true" className="font-heading text-6xl leading-none text-dusty-rose">
              &ldquo;
            </span>
            <div>
              <p className="font-heading text-lg italic leading-snug">
                My approach has always been simple — to bring out the most confident, beautiful version of every bride.
              </p>
              <footer className="mt-3 text-sm font-medium">— Feeniya Nizan</footer>
            </div>
          </blockquote>
        </div>

        <div className="lg:border-l lg:border-ink/15 lg:pl-10">
          <p className="text-[15px] leading-relaxed">
            Founder and lead artist at Team N Makeovers, Feeniya Nizan brings over a decade of experience in bridal
            makeup and hairstyling, creating timeless looks for brides in Kerala and around the world.
          </p>
          <ArrowLink to="/contact" variant="solid" className="mt-5">
            Know more about us
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
