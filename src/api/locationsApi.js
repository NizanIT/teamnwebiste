import api from "./api";
import { ENDPOINTS } from "./endpoints";

// Regions → districts from the CRM, for the wedding-location picker.
export async function getLocations() {
  const { data } = await api.get(ENDPOINTS.locations);
  return (data?.regions ?? []).map((r) => ({
    id: String(r.id),
    name: r.name,
    districts: (r.districts ?? []).map((d) => ({ id: String(d.id), name: d.name })),
  }));
}
