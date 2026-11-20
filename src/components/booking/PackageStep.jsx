import DataState from "../common/DataState";
import { formatPrice } from "../../utils/format";
import AddonPicker from "./AddonPicker";
import PackageOption from "./PackageOption";
import StepButtons from "./StepButtons";
import StepTitle from "./StepTitle";

// Step 2: choose a package and optional add-ons.
export default function PackageStep({
  packages,
  loading,
  error,
  selectedPackageId,
  onSelectPackage,
  location,
  addons,
  selectedAddonIds,
  onToggleAddon,
  total,
  onBack,
  onNext,
}) {
  return (
    <div className="space-y-8">
      <StepTitle
        title="2. Select Your Bridal Package"
        subtitle={location ? `Prices shown are our rates for ${location.districtName}.` : "Choose your package and any add-ons."}
      />

      <DataState loading={loading} error={error} empty={!packages.length} emptyText="Packages will be listed here soon. Please reach us on WhatsApp." />

      <div className="space-y-4">
        {packages.map((pkg) => (
          <PackageOption
            key={pkg.id}
            pkg={pkg}
            active={selectedPackageId === pkg.id}
            location={location}
            onSelect={onSelectPackage}
          />
        ))}
      </div>

      <AddonPicker addons={addons} selectedIds={selectedAddonIds} onToggle={onToggleAddon} />

      {selectedPackageId && (
        <div className="flex items-baseline justify-between border-t border-ink/15 pt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-ink/70">Total so far</span>
          <span className="font-heading text-2xl font-medium text-burgundy">{formatPrice(total)}</span>
        </div>
      )}

      <StepButtons onBack={onBack} onNext={onNext} nextLabel="Review & Send" nextDisabled={!selectedPackageId} />
    </div>
  );
}
