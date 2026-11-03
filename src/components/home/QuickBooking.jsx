import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { packages } from "../../data/packages";
import { toISODate } from "../../data/availability";

const fieldClass =
  "w-full bg-white px-4 py-3 text-[15px] text-ink focus:outline-2 focus:outline-burgundy";

export default function QuickBooking() {
  const navigate = useNavigate();
  const [packageId, setPackageId] = useState(packages[0].id);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({ package: packageId });
    if (date) params.set("date", date);
    navigate(`/book?${params}`);
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3 bg-blush p-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end sm:p-5">
      <label className="block text-[13px] font-medium">
        Package
        <select value={packageId} onChange={(e) => setPackageId(e.target.value)} className={`${fieldClass} mt-1.5`}>
          {packages.map((pkg) => (
            <option key={pkg.id} value={pkg.id}>
              {pkg.name}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-[13px] font-medium">
        Wedding date
        <input
          type="date"
          value={date}
          min={toISODate(new Date())}
          onChange={(e) => setDate(e.target.value)}
          className={`${fieldClass} mt-1.5`}
        />
      </label>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-3 bg-burgundy px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-wine"
      >
        Check availability
        <FiArrowRight aria-hidden="true" />
      </button>
    </form>
  );
}
