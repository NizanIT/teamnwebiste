import { FiArrowRight } from "react-icons/fi";

// Back + primary button row used at the bottom of each booking step.
export default function StepButtons({ onBack, onNext, nextLabel, nextDisabled, submit = false }) {
  return (
    <div className="flex gap-4 pt-4">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="border border-ink/20 px-6 py-3.5 text-xs font-bold uppercase tracking-widest text-ink hover:bg-cream"
        >
          Back
        </button>
      )}
      <button
        type={submit ? "submit" : "button"}
        onClick={submit ? undefined : onNext}
        disabled={nextDisabled}
        className={`flex items-center justify-center gap-3 bg-burgundy px-8 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-wine disabled:opacity-50 ${
          submit ? "flex-1 py-4 shadow-lg" : "py-3.5"
        }`}
      >
        {nextLabel} <FiArrowRight />
      </button>
    </div>
  );
}
