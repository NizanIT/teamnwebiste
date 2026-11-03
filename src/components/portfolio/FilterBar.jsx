import { portfolioFilters } from "../../data/portfolioItems";

export default function FilterBar({ active, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
      {portfolioFilters.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border hover:border-burgundy transition-all duration-300 rounded-none ${
            active === key ? "bg-burgundy text-white border-burgundy" : "border-gray-200"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
