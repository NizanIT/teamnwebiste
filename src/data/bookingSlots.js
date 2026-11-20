// Event slots offered on the booking page: the same two capacity halves the CRM
// counts per day (CRM → Slot Capacity: Morning / Evening). Only the ones that are
// open on the chosen date are shown.
export const bookingSlots = [
  {
    id: "morning",
    label: "Morning",
    hint: "Muhurtham, Nikah, church and daytime ceremonies",
    halves: ["morning"],
  },
  {
    id: "evening",
    label: "Evening",
    hint: "Receptions and evening events",
    halves: ["evening"],
  },
];

export const bookingSteps = [
  { num: 1, label: "Location & Date" },
  { num: 2, label: "Package & Add-ons" },
  { num: 3, label: "Review & Send" },
];
