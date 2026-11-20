// Small uppercase eyebrow + serif heading used by most page sections.
export default function SectionHeading({ eyebrow, title, subtitle, align = "center", className = "" }) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-dusty-rose">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-heading text-4xl text-burgundy md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-ink/70">{subtitle}</p>}
    </div>
  );
}
