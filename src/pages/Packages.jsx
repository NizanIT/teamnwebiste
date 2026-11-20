import Container from "../components/common/Container";
import Footer from "../components/layout/Footer";
import AddonGrid from "../components/packages/AddonGrid";
import CompareTable from "../components/packages/CompareTable";
import PackageCard from "../components/packages/PackageCard";
import PackagesCta from "../components/packages/PackagesCta";
import PackagesHeader from "../components/packages/PackagesHeader";
import TrustPillars from "../components/packages/TrustPillars";
import usePackages from "../hooks/usePackages";
import DataState from "../components/common/DataState";

export default function Packages() {
  const { packages, addons, loading, error } = usePackages();

  return (
    <>
      <PackagesHeader />

      <section className="bg-ivory py-20 lg:py-28">
        <Container>
          <DataState loading={loading} error={error} empty={!packages.length} emptyText="Packages will be listed here soon." />
          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </Container>
      </section>

      <CompareTable packages={packages} />
      <AddonGrid addons={addons} />
      <TrustPillars />
      <PackagesCta />
      <Footer />
    </>
  );
}
