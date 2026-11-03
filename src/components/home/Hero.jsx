import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import QuickBooking from "./QuickBooking";
import { brideImages } from "../../data/brideImages";

const stats = [
  { value: "10+", label: "years of expertise" },
  { value: "1,000+", label: "brides" },
];

export default function Hero() {
  return (
    <section className="relative bg-ivory lg:h-[min(56.25vw,820px)] lg:min-h-[640px]">
      <div className="lg:absolute lg:inset-0">
        <ImageFrame
          image={brideImages.hero}
          alt="Smiling bride in a magenta silk saree"
          className="h-[380px] w-full object-[80%_top] lg:h-full"
        />
      </div>

      <Container className="relative lg:flex lg:h-full lg:items-center">
        <div className="py-12 lg:w-1/2 lg:py-16">
          <h1 className="font-heading text-6xl font-medium leading-[0.95] tracking-tight text-burgundy lg:text-[clamp(64px,5.4vw,96px)]">
            Bridal beauty,
            <br />
            defined.
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed">
            Luxury bridal makeup and hairstyling by Feeniya Nizan, for brides in Kerala and across the world.
          </p>

          <div className="mt-9 max-w-xl">
            <QuickBooking />
            <p className="mt-3 text-sm text-ink/70">No login needed. Pick your date and book online.</p>
          </div>

          <div className="mt-9 flex items-center gap-10">
            {stats.map(({ value, label }, index) => (
              <div key={label} className={index > 0 ? "border-l border-ink/20 pl-10" : ""}>
                <span className="block font-heading text-4xl font-medium lining-nums text-burgundy">{value}</span>
                <span className="text-[15px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
