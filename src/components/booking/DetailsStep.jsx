import FormField from "../common/FormField";
import Honeypot from "../common/Honeypot";
import OrderReview from "./OrderReview";
import StepButtons from "./StepButtons";
import StepTitle from "./StepTitle";

// Step 3: review the choices and total, add contact details, send the request.
export default function DetailsStep({
  form,
  onChange,
  onBack,
  onSubmit,
  sending = false,
  error = "",
  honeypot = "",
  onHoneypotChange,
  review,
  onEdit,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sending) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      <Honeypot value={honeypot} onChange={(e) => onHoneypotChange?.(e.target.value)} />
      <StepTitle
        title="3. Review & Send"
        subtitle="Check your choices and total, then share your details. Our team will call you to confirm."
      />

      {review && <OrderReview {...review} onEdit={onEdit} />}

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="bride-name" name="name" label="Bride's Full Name *" type="text" required
          autoComplete="name" maxLength={80}
          value={form.name} onChange={onChange} placeholder="e.g. Anjali Nair"
        />
        <FormField
          id="bride-phone" name="phone" label="WhatsApp Phone Number *" type="tel" required
          autoComplete="tel" inputMode="tel" pattern="[0-9+\s\-]{10,16}" maxLength={16}
          title="10-digit mobile number, optionally with +91"
          value={form.phone} onChange={onChange} placeholder="e.g. +91 98765 43210"
        />
        <FormField
          id="bride-email" name="email" label="Email Address *" type="email" required
          autoComplete="email" maxLength={120}
          value={form.email} onChange={onChange} placeholder="anjali@example.com"
        />
        <FormField
          id="bride-venue" name="venue" label="Wedding Venue & City *" type="text" required
          maxLength={120}
          value={form.venue} onChange={onChange} placeholder="e.g. Raviz Kadavu, Kozhikode"
        />
      </div>

      <FormField
        id="bride-notes" name="notes" label="Special Requests / Ceremony Type (Optional)"
        multiline rows={3} maxLength={600}
        value={form.notes} onChange={onChange}
        placeholder="Mention saree type, jewelry style, groom coordination, or multiple event details..."
      />

      {error && (
        <p role="alert" className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <StepButtons
        onBack={onBack}
        nextLabel={sending ? "Sending…" : "Send Booking Request"}
        nextDisabled={sending || !review?.pkg}
        submit
      />
    </form>
  );
}
