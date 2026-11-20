import Container from "../common/Container";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";

export default function PackagesHeader() {
  const page = useSection("packagesPage", contentDefaults.packagesPage);
  return (
    <section className="border-b border-ink/10 bg-cream py-16 md:py-24">
      <Container className="text-center">
        <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-dusty-rose">
          Curated Bridal Services
        </p>
        <h1 className="mt-3 font-heading text-5xl tracking-tight text-burgundy md:text-7xl">
          {page.title}
        </h1>
        <div className="mx-auto my-6 h-0.5 w-16 bg-dusty-rose/40" />
        <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-ink/80">
          {page.intro}
        </p>
      </Container>
    </section>
  );
}
