import api from "./api";
import { ENDPOINTS } from "./endpoints";
import { mapAddon, mapPackage } from "./mappers";

// Live packages + add-ons from the CRM (only those marked "show on website").
export async function getPackages() {
  const { data } = await api.get(ENDPOINTS.packages);
  return {
    packages: (data?.packages ?? []).map(mapPackage),
    addons: (data?.addons ?? []).map(mapAddon),
  };
}
