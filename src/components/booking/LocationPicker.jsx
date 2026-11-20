// Where the wedding is: region (zone) → district, from the CRM.
// Package prices depend on it, so the exact rate shows once a district is chosen.
const selectCls =
  "mt-2 w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none disabled:bg-ink/5 disabled:text-ink/40";

export default function LocationPicker({ regions, loading, error, regionId, districtId, onRegionChange, onDistrictChange }) {
  const region = regions.find((r) => r.id === regionId);

  return (
    <div className="border border-ink/15 bg-cream p-5">
      <p className="block text-xs font-bold uppercase tracking-wider text-ink/70">Where is the wedding?</p>
      <p className="mt-1 text-xs text-ink/60">Our rates depend on the location, so we can show your exact price.</p>

      {loading && <p className="mt-3 text-sm text-ink/60">Loading locations…</p>}
      {!loading && error && (
        <p role="status" className="mt-3 text-sm text-red-700">
          We couldn't load locations right now. Please try again in a moment, or message us on WhatsApp.
        </p>
      )}

      {!loading && !error && (
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          <label className="block text-xs font-semibold text-ink/70">
            Zone / Region
            <select
              value={regionId}
              onChange={(e) => onRegionChange(e.target.value)}
              className={selectCls}
            >
              <option value="">Select region</option>
              {regions.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.name}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-xs font-semibold text-ink/70">
            District
            <select
              value={districtId}
              onChange={(e) => onDistrictChange(e.target.value)}
              disabled={!region}
              className={selectCls}
            >
              <option value="">{region ? "Select district" : "Choose a region first"}</option>
              {region?.districts.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}
      {!loading && !error && (
        <p className="mt-3 text-xs text-ink/55">Wedding outside these places? Message us on WhatsApp for a quote.</p>
      )}
    </div>
  );
}
