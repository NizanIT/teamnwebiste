export default function SummaryRow({ label, children, className = "" }) {
  return (
    <div className={`flex justify-between gap-3 ${className}`}>
      <span className="text-ink/70">{label}</span>
      <strong className="text-right">{children}</strong>
    </div>
  );
}
