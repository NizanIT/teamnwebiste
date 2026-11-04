import Container from "../common/Container";
import ImageFrame from "../common/ImageFrame";
import ArrowLink from "../common/ArrowLink";
import { brideImages } from "../../data/brideImages";

const pillars = [
  { label: "Personalised", text: "Every look is built around you — your face, your style, your story." },
  { label: "Calm & unhurried", text: "We pace every session so you feel relaxed and radiant." },
  { label: "Trial to big day", text: "Full support from your trial session through the wedding morning." },
];

export default function Intro() {
  return (
    <section className="bg-ivory py-20 lg:py-32">
      <Container>
        {/* Top row: heading + image */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">
              The experience
            </p>
            <h2 className="mt-3 font-heading text-5xl leading-[1.02] tracking-tight text-burgundy lg:text-[58px]">
              For brides who want more.
            </h2>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-ink/80">
              Signature bridal looks, personalised styling, and a calm, thoughtful experience from trial to the big day.
            </p>
            <ArrowLink to="/portfolio" className="mt-8">
              See our work
            </ArrowLink>
          </div>

          <div className="relative">
            <ImageFrame
              image={brideImages.intro}
              alt="Bridal makeup being applied"
              className="h-[300px] w-full object-top lg:h-[420px]"
            />
            {/* floating accent badge */}
            <div className="absolute bottom-4 left-4 bg-ivory/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-heading text-3xl text-burgundy">10+</p>
              <p className="text-xs font-medium uppercase tracking-widest text-dusty-rose">
                Years of expertise
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: three pillars */}
        <div className="mt-14 grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-3 lg:mt-20">
          {pillars.map(({ label, text }) => (
            <div key={label} className="bg-ivory px-8 py-8">
              <span className="font-heading text-xl text-burgundy">{label}</span>
              <p className="mt-2 text-[14px] leading-relaxed text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
