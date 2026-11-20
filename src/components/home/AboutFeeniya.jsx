import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";
import { cmsImage } from "../../utils/cmsImage";

export default function AboutFeeniya() {
  const about = useSection("about", contentDefaults.about);
  const portrait = cmsImage(about.portrait, brideImages.about, "Feeniya Nizan");

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          {/* Image with decorative border offset */}
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full border border-champagne" aria-hidden="true" />
            <ImageFrame
              image={portrait}
              alt={portrait.alt}
              className="relative h-[380px] w-full object-top lg:h-[440px]"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              {about.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-4xl text-burgundy lg:text-[44px]">{about.title}</h2>

            {about.quote && (
              <blockquote className="mt-6 border-l-2 border-dusty-rose pl-5">
                <p className="font-heading text-xl italic leading-snug text-ink">"{about.quote}"</p>
                <footer className="mt-3 text-sm font-medium text-dusty-rose">— Feeniya Nizan</footer>
              </blockquote>
            )}

            {about.body && (
              <p className="mt-7 max-w-[460px] text-[15px] leading-relaxed text-ink/75">{about.body}</p>
            )}

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8">
              {(about.stats ?? []).map(({ number, label }) => (
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
