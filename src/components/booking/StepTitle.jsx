export default function StepTitle({ title, subtitle }) {
  return (
    <div>
      <h2 className="font-heading text-3xl text-burgundy">{title}</h2>
      {subtitle && <p className="mt-1 text-sm text-ink/70">{subtitle}</p>}
    </div>
  );
}
