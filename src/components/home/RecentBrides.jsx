import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

const [large, topMiddle, bottomMiddle, tall] = brideImages.recent;

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
  return (
    <section className="bg-ivory pb-20 lg:pb-32">
      <Container>
        {/* Section header */}
        <div className="mb-10 flex items-end justify-between lg:mb-14">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              Portfolio
            </p>
            <h2 className="mt-1 font-heading text-4xl text-burgundy lg:text-[44px]">
              Recent brides
            </h2>
          </div>
          <ArrowLink to="/portfolio">View full portfolio</ArrowLink>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 gap-2 lg:h-[500px] lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-2">
          <Cell
            image={large}
            alt="Bride in a red lehenga"
            label="Traditional"
            className="col-span-2 h-[320px] lg:col-span-1 lg:h-auto"
          />
          <div className="grid gap-2 lg:grid-rows-2">
            <Cell
              image={topMiddle}
              alt="Bride with a jasmine hair bun"
              label="Bridal updo"
              className="h-[200px] lg:h-auto"
            />
            <Cell
              image={bottomMiddle}
              alt="Bride in traditional jewellery"
              label="Traditional jewellery"
              className="h-[200px] lg:h-auto"
            />
          </div>
          <Cell
            image={tall}
            alt="Bride in a champagne saree"
            label="Christian bridal"
            className="h-full min-h-[300px] lg:min-h-0"
          />
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
