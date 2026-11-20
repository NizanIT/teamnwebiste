import { formatPrice } from "../../utils/format";

export default function AddonPicker({ addons, selectedIds, onToggle }) {
  if (!addons.length) return null;
  return (
    <fieldset>
      <legend className="block text-xs font-bold uppercase tracking-wider text-ink/70">
        Enhance with Add-ons (Optional)
      </legend>
      <div className="mt-3 space-y-3">
        {addons.map((ad) => {
          const checked = selectedIds.includes(ad.id);
          return (
            <label
              key={ad.id}
              className={`flex cursor-pointer items-start justify-between border p-4 transition-all ${
                checked ? "border-dusty-rose bg-blush/40" : "border-ink/10 bg-white hover:border-ink/20"
              }`}
            >
              <span className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => onToggle(ad.id)}
                  className="mt-1 accent-burgundy"
                />
                <span>
                  <span className="block text-sm font-medium text-ink">{ad.name}</span>
                  <span className="block text-xs text-ink/60">{ad.description}</span>
                </span>
              </span>
              <span className="ml-4 whitespace-nowrap font-heading text-lg text-burgundy">
                +{formatPrice(ad.price)}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
