import api from "./api";
import { ENDPOINTS } from "./endpoints";
import { mapAvailabilityMonth } from "./mappers";

// Status per day for a month. month = "YYYY-MM"
export async function getMonthAvailability(month) {
  const { data } = await api.get(ENDPOINTS.availabilityMonth, { params: { month } });
  return mapAvailabilityMonth(data);
}

// { status, morning: { status }, evening: { status } } for one date. isoDate = "YYYY-MM-DD"
export async function getDateAvailability(isoDate) {
  const { data } = await api.get(ENDPOINTS.availabilityDate(isoDate));
  return data;
}
