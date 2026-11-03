import { useEffect, useState } from "react";
import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import { brideImages } from "../../data/brideImages";

const stats = [
  { value: 1000, suffix: "+", label: "brides styled" },
  { value: 10, suffix: "+", label: "years of expertise" },
];

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

function StatNumber({ value, suffix = "" }) {
  const count = useCountUp(value);
  return (
    <span className="block font-heading text-4xl font-medium tabular-nums lining-nums text-burgundy">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

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
            Luxury bridal makeup and hairstyling by Feeniya Nizan, for brides in Kerala and across
            the world.
          </p>

          <div className="mt-9 flex items-center gap-10">
            {stats.map(({ value, suffix, label }, index) => (
              <div key={label} className={index > 0 ? "border-l border-ink/20 pl-10" : ""}>
                <StatNumber value={value} suffix={suffix} />
                <span className="text-[15px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
