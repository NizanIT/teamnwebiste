import { getDateAvailability, getMonthAvailability } from "../api/availabilityApi";
import { addDays, startOfToday, toISODate, upcomingMonthKeys } from "../utils/date";
import useAsync from "./useAsync";

const MONTHS_AHEAD = 3;
const BOOKABLE = new Set(["available", "few"]);

const loadUpcomingMonths = async () => {
  const months = await Promise.all(upcomingMonthKeys(MONTHS_AHEAD).map(getMonthAvailability));
  return Object.assign({}, ...months);
};

/**
 * Day-level availability for the next few months, straight from the CRM.
 * getStatus(iso)       → "available" | "few" | "full" | "blocked" | "past" | "unknown"
 * getNextOpenDates(n)  → the next n bookable dates from today ([] while loading or on error)
 */
export function useAvailability() {
  const { data, loading, error } = useAsync(loadUpcomingMonths, "upcoming");

  const getStatus = (iso) => data?.[iso]?.status ?? "unknown";

  const getNextOpenDates = (count, maxDays = 120) => {
    if (!data) return [];
    const dates = [];
    let day = startOfToday();
    for (let i = 0; i < maxDays && dates.length < count; i += 1) {
      if (BOOKABLE.has(getStatus(toISODate(day)))) dates.push(day);
      day = addDays(day, 1);
    }
    return dates;
  };

  return { getStatus, getNextOpenDates, loading, error };
}

/** Morning / evening availability for one chosen date ("YYYY-MM-DD"), from the CRM. */
export function useDateAvailability(iso) {
  const { data, loading, error } = useAsync(() => getDateAvailability(iso), iso, {
    enabled: Boolean(iso),
  });
  if (!iso) return { availability: null, loading: false, error: null };
  return { availability: data ?? null, loading, error };
}
