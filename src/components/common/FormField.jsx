const inputClass =
  "w-full border border-ink/20 bg-white px-4 py-3 text-sm text-ink focus:border-burgundy focus:outline-none";

// Labelled input or textarea. Pass `multiline` for a textarea; other props go to the control.
export default function FormField({ id, label, multiline = false, ...props }) {
  const Control = multiline ? "textarea" : "input";
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-ink/70">
        {label}
      </label>
      <Control id={id} className={inputClass} {...props} />
    </div>
  );
}
