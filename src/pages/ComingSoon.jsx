import Container from "../components/common/Container";
import ArrowLink from "../components/common/ArrowLink";
import Footer from "../components/layout/Footer";

// Placeholder for pages that are designed but not built yet.
export default function ComingSoon({ title }) {
  return (
    <>
      <Container className="py-24 lg:py-32">
        <h1 className="font-heading text-6xl text-burgundy lg:text-[84px]">{title}</h1>
        <p className="mt-6 max-w-md text-lg">This page is being built.</p>
        <ArrowLink to="/" variant="solid" className="mt-8">
          Back to home
        </ArrowLink>
      </Container>
      <Footer />
    </>
  );
}
