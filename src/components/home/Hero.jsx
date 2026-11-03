import { useEffect, useState } from "react";
import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = reduceMotion ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return count;
}

function Stat({ value, suffix = "", label, className }) {
  const count = useCountUp(value);

  return (
    <div className={`absolute bg-burgundy px-5 py-3 text-white ${className}`}>
      <span className="block font-heading text-3xl font-medium leading-none tabular-nums lining-nums">
        {count.toLocaleString("en-US")}
        {suffix}
      </span>
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
        </div>

        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[500px] 2xl:max-w-[580px]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] bg-blush">
            <ImageFrame
              image={brideImages.hero}
              alt="Bride in a magenta silk saree"
              className="absolute bottom-0 left-1/2 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain"
            />
          </div>
          <Stat value={1000} suffix="+" label="brides styled" className="right-0 top-[58%] sm:-right-6 sm:top-20" />
          <Stat value={10} suffix="+" label="years of expertise" className="bottom-16 left-0 sm:-left-6" />
        </div>
      </Container>
    </section>
  );
}
