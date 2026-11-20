import { getPackages } from "../api/packagesApi";
import useAsync from "./useAsync";

/**
 * Packages + add-ons from the CRM. No local fallback: prices must be real.
 * → { packages, addons, loading, error }  (empty lists while loading or on error)
 */
export default function usePackages() {
  const { data, error, loading } = useAsync(getPackages, "packages");
  return {
    packages: data?.packages ?? [],
    addons: data?.addons ?? [],
    loading,
    error,
  };
}
