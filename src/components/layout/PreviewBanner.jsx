// Shown only when staff open the site from the CRM's Preview button.
export default function PreviewBanner({ expired, onExit }) {
  return (
    <div
      role="status"
      className="fixed inset-x-0 top-0 z-[200] flex flex-wrap items-center justify-center gap-3 bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-ink shadow"
    >
      {expired
        ? "This preview link has expired — open a new one from Team N Website in the CRM."
        : "PREVIEW — you are seeing unpublished drafts. Visitors still see the live website."}
      <button type="button" onClick={onExit} className="rounded bg-ink px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
        Exit preview
      </button>
    </div>
  );
}
