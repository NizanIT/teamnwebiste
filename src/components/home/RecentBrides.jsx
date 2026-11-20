import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";
import { contentDefaults } from "../../data/content";
import useGallery from "../../hooks/useGallery";
import useSection from "../../hooks/useSection";

// Built-in mosaic, used until 4 gallery photos are marked "Show in Recent brides".
const FALLBACK_CELLS = [
  { image: brideImages.recent[0], alt: "Bride in a red and gold silk saree with temple jewellery", label: "South Indian bride" },
  { image: brideImages.recent[1], alt: "Bride in a burgundy lehenga with a sheer dupatta", label: "Reception lehenga" },
  { image: brideImages.recent[2], alt: "Christian bride in a white lace gown and veil", label: "Christian bridal" },
  { image: brideImages.recent[3], alt: "Bridal braid decorated with fresh jasmine", label: "Jasmine braid" },
];

function Cell({ image, alt, label, className = "" }) {
  return (
    <div className={`group relative min-h-0 overflow-hidden ${className}`}>
      <ImageFrame
        image={image}
        alt={alt}
        className="absolute inset-0 h-full w-full object-top transition-transform duration-700 group-hover:scale-105"
      />
      {label && (
        <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-burgundy/90 px-4 py-3 text-xs font-medium uppercase tracking-widest text-white transition-transform duration-300 group-hover:translate-y-0">
          {label}
        </div>
      )}
    </div>
  );
}

export default function RecentBrides() {
  const section = useSection("recentBrides", contentDefaults.recentBrides);
  const { items, isFallback } = useGallery();

  const featured = isFallback ? [] : items.filter((g) => g.featuredOnHome).slice(0, 4);
  const cells =
    featured.length === 4
      ? featured.map((g) => ({ image: { src: g.image }, alt: g.alt, label: g.title || g.categoryLabel }))
      : FALLBACK_CELLS;
  const [large, topMiddle, bottomMiddle, tall] = cells;

  return (
    <section className="bg-ivory pb-20 lg:pb-32">
      <Container>
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between lg:mb-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              {section.eyebrow}
            </p>
            <h2 className="mt-1 font-heading text-4xl text-burgundy lg:text-[44px]">{section.title}</h2>
          </div>
          <ArrowLink to="/portfolio">View full portfolio</ArrowLink>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 gap-2 lg:h-[500px] lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-2">
          <Cell {...large} className="col-span-2 h-[320px] lg:col-span-1 lg:h-auto" />
          <div className="grid gap-2 lg:grid-rows-2">
            <Cell {...topMiddle} className="h-[200px] lg:h-auto" />
            <Cell {...bottomMiddle} className="h-[200px] lg:h-auto" />
          </div>
          <Cell {...tall} className="h-full min-h-[300px] lg:min-h-0" />
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center lg:hidden">
          <ArrowLink to="/portfolio" variant="solid">
            View full portfolio
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
