// Mock availability until the booking backend exists.
// A date is "full" or "few" (few slots left) by a fixed rule so results are stable.
export function getDayStatus(date) {
  const key = date.getDate() * 7 + date.getMonth();
  if (key % 5 === 0) return "full";
  if (key % 4 === 0) return "few";
  return "available";
}

export const toISODate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

export function getNextAvailableDates(count, from = new Date()) {
  const dates = [];
  const day = new Date(from.getFullYear(), from.getMonth(), from.getDate());
  while (dates.length < count) {
    if (getDayStatus(day) !== "full") dates.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }
  return dates;
}
