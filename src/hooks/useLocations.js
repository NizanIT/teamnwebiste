import { getLocations } from "../api/locationsApi";
import useAsync from "./useAsync";

/**
 * Wedding locations from the CRM: regions → districts (active ones only).
 * → { regions: [{ id, name, districts: [{ id, name }] }], loading, error, find(districtId) }
 */
export default function useLocations() {
  const { data, loading, error } = useAsync(getLocations, "locations");
  const regions = data ?? [];

  /** { regionId, regionName, districtId, districtName } for a district id, or null. */
  const find = (districtId) => {
    if (!districtId) return null;
    for (const r of regions) {
      const d = r.districts.find((x) => x.id === districtId);
      if (d) return { regionId: r.id, regionName: r.name, districtId: d.id, districtName: d.name };
    }
    return null;
  };

  return { regions, loading, error, find };
}
