// Shown in place of CRM data while it loads or when the server can't be reached.
// Never substitutes made-up data.
export default function DataState({ loading, error, empty, emptyText, className = "" }) {
  let text = null;
  if (loading) text = "Loading…";
  else if (error) text = "We couldn't load this right now. Please refresh, or reach us on WhatsApp.";
  else if (empty) text = emptyText;
  if (!text) return null;
  return (
    <p role="status" className={`border border-ink/10 bg-white/60 px-5 py-6 text-center text-sm text-ink/60 ${className}`}>
      {text}
    </p>
  );
}
