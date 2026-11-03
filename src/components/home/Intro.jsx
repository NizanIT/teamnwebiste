import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

export default function Intro() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1.45fr] lg:gap-12">
        <div>
          <h2 className="font-heading text-5xl lg:max-w-[400px] leading-[1.02] tracking-tight text-burgundy lg:text-[58px]">
            For brides who want more.
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed">
            Signature bridal looks, personalised styling and a calm, thoughtful experience from trial to the big day.
          </p>
        </div>
        <ImageFrame image={brideImages.intro} alt="Bridal makeup being applied" className="h-[260px] w-full object-top lg:h-[360px]" />
      </Container>
    </section>
  );
}
