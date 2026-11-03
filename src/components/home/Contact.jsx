import { useState } from "react";
import { MdLocationOn, MdCall, MdMail } from "react-icons/md";
import { GOOGLE_SCRIPT_URL } from "../../config/config";

const fieldClass =
  "w-full bg-transparent border-none px-0 py-2 focus:outline-none placeholder-gray-400 text-sm";

const initialForm = { name: "", email: "", wedding_date: "", phone_number: "", message: "" };

const statusStyles = {
  sending: "text-dusty-rose",
  success: "text-green-600",
  error: "text-red-600",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [dateFocused, setDateFocused] = useState(false);
  const [status, setStatus] = useState(null); // { type, text }

  const update = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const updatePhone = (e) => setForm((prev) => ({ ...prev, phone_number: e.target.value.replace(/[^0-9]/g, "") }));

  const sending = status?.type === "sending";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "sending", text: "Sending your inquiry..." });

    try {
      // GET avoids the CORS pre-flight redirect issue with Google Apps Script
      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${new URLSearchParams(form)}`, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();

      if (data.result === "success") {
        setStatus({ type: "success", text: "Thank you! Your inquiry has been sent successfully." });
        setForm(initialForm);
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus({ type: "error", text: "Error: " + (data.message || "Failed to send message.") });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus({ type: "error", text: "An error occurred. Please try again later or contact us directly." });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 bg-cream">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-6xl mb-10 text-ink font-heading">
              Let's Talk About <br />
              Your Big Day
            </h2>
            <div className="space-y-8 font-body">
              <div className="flex items-start space-x-4">
                <MdLocationOn className="text-2xl text-dusty-rose" />
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1">Location</p>
                  <p className="text-gray-600">Kozhikode, Kerala, India | Destination Weddings Worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MdCall className="text-2xl text-dusty-rose" />
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1">Phone</p>
                  <p className="text-gray-600">
                    <a href="tel:+919645424281" className="hover:text-dusty-rose transition-colors">
                      +91 96454 24281
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MdMail className="text-2xl text-dusty-rose" />
                <div>
                  <p className="font-bold uppercase tracking-widest text-xs mb-1">Email</p>
                  <p className="text-gray-600">inquiry@teamnmakeovers.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              <div className="border-b border-dusty-rose">
                <input name="name" required className={fieldClass} placeholder="Name" type="text" value={form.name} onChange={update} />
              </div>
              <div className="border-b border-dusty-rose">
                <input name="email" required className={fieldClass} placeholder="Email Address" type="email" value={form.email} onChange={update} />
              </div>
              <div className="border-b border-dusty-rose">
                <input
                  name="wedding_date"
                  className={fieldClass}
                  placeholder="Wedding Date"
                  type={dateFocused || form.wedding_date ? "date" : "text"}
                  value={form.wedding_date}
                  onChange={update}
                  onFocus={() => setDateFocused(true)}
                  onBlur={() => setDateFocused(false)}
                />
              </div>
              <div className="border-b border-dusty-rose">
                <input name="phone_number" className={fieldClass} placeholder="Phone Number" type="tel" value={form.phone_number} onChange={updatePhone} />
              </div>
              <div className="border-b border-dusty-rose md:col-span-2">
                <textarea name="message" required className={fieldClass} placeholder="Message" rows={3} value={form.message} onChange={update} />
              </div>

              {status && (
                <div className={`md:col-span-2 text-center text-sm font-semibold py-2 transition-all ${statusStyles[status.type]}`}>
                  {status.text}
                </div>
              )}

              <div className="md:col-span-2">
                <button
                  className="bg-[#4d0f1f] text-white px-12 py-4 text-[0.75rem] uppercase tracking-[0.2em] font-bold hover:bg-[#4d0f1f]/90 transition-all disabled:opacity-60"
                  type="submit"
                  disabled={sending}
                >
                  {sending ? "SENDING..." : "SEND INQUIRY"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
