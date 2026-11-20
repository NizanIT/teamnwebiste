import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { contentDefaults } from "../../data/content";
import useSection from "../../hooks/useSection";
import { formatPriceShort } from "../../utils/format";
import { packageStartingPrice } from "../../utils/pricing";

// Columns come from the packages themselves, so names and prices always match the CRM.
export default function CompareTable({ packages }) {
  const comparisonCriteria = useSection("packagesPage", contentDefaults.packagesPage).comparison ?? [];
  const hasAnyRow = packages.some((p) => comparisonCriteria.some((c) => c.values?.[p.id]));
  if (!hasAnyRow) return null;

  const headerLabel = (pkg) =>
    `${pkg.name} (From ${formatPriceShort(packageStartingPrice(pkg))})`;

  return (
    <section className="border-t border-ink/10 bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading
          eyebrow="Detailed Breakdown"
          title="Compare Our Packages"
          subtitle="Clear, transparent comparison to help you choose the ideal experience for your celebration."
          className="mb-14"
        />

        <div className="overflow-x-auto border border-ink/15 bg-white shadow-sm">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/15 bg-blush/40 font-heading text-lg text-burgundy">
                <th scope="col" className="p-5 font-medium">Service Feature</th>
                {packages.map((pkg) => (
                  <th
                    key={pkg.id}
                    scope="col"
                    className={`p-5 font-medium ${pkg.highlighted ? "bg-burgundy/5 text-burgundy" : ""}`}
                  >
                    {headerLabel(pkg)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10 text-ink/80">
              {comparisonCriteria.map((row, idx) => (
                <tr key={row.feature} className={idx % 2 === 0 ? "bg-white" : "bg-ivory/50"}>
                  <th scope="row" className="p-5 font-medium text-ink">{row.feature}</th>
                  {packages.map((pkg) => (
                    <td
                      key={pkg.id}
                      className={`p-5 text-sm ${pkg.highlighted ? "bg-burgundy/5 font-medium text-burgundy" : ""}`}
                    >
                      {row.values?.[pkg.id] ?? "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
