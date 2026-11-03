import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import QuickBooking from "./QuickBooking";
import { brideImages } from "../../data/brideImages";

function Stat({ value, label, className }) {
  return (
    <div className={`absolute bg-burgundy px-5 py-3 text-white ${className}`}>
      <span className="block font-heading text-3xl font-medium leading-none lining-nums">{value}</span>
      <span className="mt-1 block text-[13px] text-white/85">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-ivory">
      <Container className="grid items-center gap-14 py-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:py-24">
        <div>
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
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[500px] 2xl:max-w-[580px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-blush">
            <ImageFrame
              image={brideImages.hero}
              alt="Bride in a magenta silk saree"
              className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain"
            />
          </div>
          <Stat value="1,000+" label="brides styled" className="right-0 top-[58%] sm:-right-6 sm:top-20" />
          <Stat value="10+" label="years of expertise" className="bottom-16 left-0 sm:-left-6" />
        </div>
      </Container>
    </section>
  );
}
