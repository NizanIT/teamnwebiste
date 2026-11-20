import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { FiAward, FiClock, FiHeart, FiShield } from "react-icons/fi";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";

const ICONS = [FiAward, FiShield, FiClock, FiHeart];

export default function TrustPillars() {
  const guarantees = useSection("packagesPage", contentDefaults.packagesPage).guarantees ?? [];
  return (
    <section className="border-t border-ink/10 bg-blush/60 py-20">
      <Container>
        <SectionHeading eyebrow="The Team N Promise" title="Why Brides Trust Us" className="mb-14" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map(({ title, text }, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
            <div key={title} className="border border-ink/10 bg-ivory p-7">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/5">
                <Icon className="h-6 w-6 text-burgundy" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl text-burgundy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{text}</p>
            </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
