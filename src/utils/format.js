// "₹ 35,000" in Indian digit grouping. Returns "" for missing values.
export const formatPrice = (amount) => {
  const value = Number(amount);
  if (!Number.isFinite(value)) return "";
  return `₹ ${value.toLocaleString("en-IN")}`;
};

// "₹35k" style for tight spaces such as table headers.
export const formatPriceShort = (amount) => {
  const value = Number(amount);
  if (!Number.isFinite(value)) return "";
  return value >= 1000 ? `₹${Math.round(value / 1000)}k` : `₹${value}`;
};
