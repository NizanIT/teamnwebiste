import { useEffect, useState } from "react";
import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import ArrowLink from "../common/ArrowLink";
import { brideImages } from "../../data/brideImages";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";
import { cmsImage } from "../../utils/cmsImage";

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
  const count = useCountUp(Number(value) || 0);
  return (
    <span className="block font-heading text-4xl font-medium tabular-nums lining-nums text-burgundy">
      {count.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const hero = useSection("hero", contentDefaults.hero);
  const desktop = cmsImage(
    hero.imageDesktop,
    brideImages.hero,
    "Bride in gold jewellery with jasmine in her hair",
  );
  const mobile = hero.imageMobile?.url ? cmsImage(hero.imageMobile, null, desktop.alt) : null;

  return (
    <section id="hero" className="relative bg-ivory lg:h-[min(56.25vw,820px)] lg:min-h-[640px]">
      <div className="lg:absolute lg:inset-0">
        {mobile && (
          <ImageFrame
            image={mobile}
            alt={mobile.alt}
            className="h-[380px] w-full object-top lg:hidden"
          />
        )}
        <ImageFrame
          image={desktop}
          alt={desktop.alt}
          className={`h-[380px] w-full object-[80%_top] lg:h-full ${mobile ? "hidden lg:block" : ""}`}
        />
      </div>

      <Container className="relative lg:flex lg:h-full lg:items-center">
        <div className="py-12 lg:w-1/2 lg:py-16 pt-20 lg:pt-24">
          <h1 className="font-heading text-5xl font-medium leading-[0.95] tracking-tight text-burgundy [text-wrap:balance] lg:text-[clamp(64px,5.4vw,96px)]">
            {hero.title}
          </h1>
          {hero.subtitle && (
            <p className="mt-7 max-w-md text-lg leading-relaxed">{hero.subtitle}</p>
          )}
          {hero.ctaLabel && (
            <ArrowLink to="/book" variant="solid" className="mt-8">
              {hero.ctaLabel}
            </ArrowLink>
          )}

          <div className="mt-9 flex items-center gap-10">
            {(hero.stats ?? []).map(({ value, suffix, label }, index) => (
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
