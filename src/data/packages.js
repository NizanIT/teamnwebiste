// Sample prices, durations and descriptions: to be confirmed by the client.
export const packages = [
  {
    id: "airbrush",
    name: "Airbrush",
    price: 35000,
    hours: 3,
    description: "A lightweight, flawless finish that lasts beautifully.",
  },
  {
    id: "platinum",
    name: "Platinum",
    price: 50000,
    hours: 4,
    description: "A complete bridal experience with premium products and styling.",
  },
  {
    id: "custom",
    name: "Custom",
    price: 60000,
    from: true,
    description: "Tailored looks and services for your unique celebration.",
    highlighted: true,
  },
];

export const formatPrice = (amount) => `₹ ${amount.toLocaleString("en-IN")}`;
