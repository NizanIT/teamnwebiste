import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import ArrowLink from "../common/ArrowLink";
import { brideImages } from "../../data/brideImages";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";
import { cmsImage } from "../../utils/cmsImage";

const COLLAGE = [
  { image: brideImages.introCollage[0], alt: "Bride in a pink silk saree with temple jewellery" },
  { image: brideImages.introCollage[1], alt: "Bride in soft window light with a maang tikka" },
];

export default function Intro() {
  const intro = useSection("intro", contentDefaults.intro);
  // The badge repeats the hero's second counter (e.g. "10+ years of expertise").
  const hero = useSection("hero", contentDefaults.hero);
  const badge = hero.stats?.[1];
  const photo = cmsImage(intro.image, brideImages.intro, "Smiling bride in a red and gold silk saree");

  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container>
        {/* Top row: heading + image */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              {intro.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-5xl leading-[1.02] tracking-tight text-burgundy lg:text-[58px]">
              {intro.title}
            </h2>
            {intro.body && (
              <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ink/80">{intro.body}</p>
            )}
            <ArrowLink to="/portfolio" className="mt-8">
              See our work
            </ArrowLink>
          </div>

          {/* Collage: one tall main photo (editable in the CRM) + two smaller built-in ones */}
          <div className="relative grid h-[420px] grid-cols-[1.45fr_1fr] grid-rows-2 gap-2 sm:h-[480px] lg:h-[560px]">
            <ImageFrame image={photo} alt={photo.alt} className="row-span-2 h-full w-full object-[50%_15%]" />
            {COLLAGE.map((c) => (
              <ImageFrame key={c.alt} image={c.image} alt={c.alt} className="h-full w-full object-[50%_6%]" />
            ))}
            {badge && (
              <div className="absolute bottom-4 left-4 bg-ivory/90 px-5 py-4 backdrop-blur-sm">
                <p className="font-heading text-3xl text-burgundy">
                  {Number(badge.value).toLocaleString("en-US")}
                  {badge.suffix}
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-dusty-rose">{badge.label}</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom row: highlights */}
        {intro.highlights?.length > 0 && (
          <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:mt-20">
            {intro.highlights.map(({ label, text }) => (
              <div key={label} className="bg-ivory px-8 py-8">
                <span className="font-heading text-xl text-burgundy">{label}</span>
                <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{text}</p>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
