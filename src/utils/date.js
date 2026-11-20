const pad = (n) => String(n).padStart(2, "0");

// Local date → "YYYY-MM-DD" (no UTC shift).
export const toISODate = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

// "YYYY-MM-DD" → local Date at midnight (new Date("YYYY-MM-DD") would be UTC).
export const parseISODate = (iso) => {
  const [y, m, d] = String(iso).split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
};

// Date → "YYYY-MM"
export const toMonthKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}`;

export const startOfToday = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate());
};

export const addDays = (date, days) => {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
};

// The current month and the next (count - 1) months as "YYYY-MM" keys.
export const upcomingMonthKeys = (count, from = new Date()) =>
  Array.from({ length: count }, (_, i) =>
    toMonthKey(new Date(from.getFullYear(), from.getMonth() + i, 1)),
  );

export const formatLongDate = (iso) =>
  iso
    ? parseISODate(iso).toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";
