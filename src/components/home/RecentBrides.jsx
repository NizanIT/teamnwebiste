import Container from "../common/Container";
import ArrowLink from "../common/ArrowLink";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

const [large, topMiddle, bottomMiddle, tall] = brideImages.recent;

// Each image fills an overflow-hidden cell so photo proportions never stretch the grid.
function Cell({ image, alt, className = "" }) {
  return (
    <div className={`relative min-h-0 overflow-hidden ${className}`}>
      <ImageFrame image={image} alt={alt} className="absolute inset-0 h-full w-full object-top" />
    </div>
  );
}

export default function RecentBrides() {
  return (
    <section className="bg-ivory pb-20 lg:pb-32">
      <Container>
        <div className="mb-8 flex items-end justify-between lg:mb-12">
          <h2 className="font-heading text-4xl text-burgundy lg:text-[42px]">Recent brides</h2>
          <ArrowLink to="/portfolio">View portfolio</ArrowLink>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:h-[460px] lg:grid-cols-[1.35fr_1fr_1fr]">
          <Cell image={large} alt="Bride in a red lehenga" className="col-span-2 h-[320px] lg:col-span-1 lg:h-auto" />
          <div className="grid gap-3 lg:grid-rows-2">
            <Cell image={topMiddle} alt="Bride with a jasmine hair bun" className="h-[200px] lg:h-auto" />
            <Cell image={bottomMiddle} alt="Bride in traditional jewellery" className="h-[200px] lg:h-auto" />
          </div>
          <Cell image={tall} alt="Bride in a champagne saree" className="h-full min-h-[300px] lg:min-h-0" />
        </div>
      </Container>
    </section>
  );
}
