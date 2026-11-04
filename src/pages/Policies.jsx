import Container from "../components/common/Container";
import ArrowLink from "../components/common/ArrowLink";
import Footer from "../components/layout/Footer";
import { FiCalendar, FiClock, FiShield, FiHeart, FiFileText } from "react-icons/fi";

const policies = [
  {
    icon: <FiCalendar className="h-6 w-6 text-burgundy" />,
    title: "Booking & Advance Deposit",
    points: [
      "A 25% non-refundable advance is required to lock and guarantee date exclusivity on our calendar.",
      "Slots are allotted strictly on a first-come, first-served basis upon advance receipt.",
      "The remaining balance is payable on the wedding day prior to the artist's departure.",
    ],
  },
  {
    icon: <FiClock className="h-6 w-6 text-burgundy" />,
    title: "Punctuality & Wedding Morning Timeline",
    points: [
      "We prepare a customized time buffer for your bridal look (usually 3.5 to 4.5 hours depending on the package).",
      "The bride is requested to have clean, washed, and completely dried hair without heavy oils before the artist arrives.",
      "Timely start ensures stress-free photography and calm transitions to the ceremony stage.",
    ],
  },
  {
    icon: <FiShield className="h-6 w-6 text-burgundy" />,
    title: "Rescheduling & Date Changes",
    points: [
      "Rescheduling is accommodated subject to artist availability on the new date.",
      "Requests made at least 30 days prior to the original wedding date incur zero rescheduling fees.",
      "In the unforeseen event of government restrictions or force majeure, advances can be rolled forward up to 12 months.",
    ],
  },
  {
    icon: <FiFileText className="h-6 w-6 text-burgundy" />,
    title: "Travel & Destination Weddings",
    points: [
      "Travel within Kozhikode city limits is included in all standard bridal packages.",
      "For outstation bookings across Kerala, Pan-India, or abroad, round-trip transport and safe stay for Feeniya Nizan & assistant are arranged by the client or billed transparently at actuals.",
      "Early morning muhurthams (before 6:00 AM) may require the team to stay in close proximity the night before.",
    ],
  },
  {
    icon: <FiHeart className="h-6 w-6 text-burgundy" />,
    title: "Hygiene & Skin Safety",
    points: [
      "All brushes, beauty blenders, and tool kits undergo thorough hospital-grade sanitization between every client.",
      "Disposable mascara wands and lip applicators are utilized at all times.",
      "Please alert our team during the pre-wedding consultation regarding any skin sensitivities or allergies.",
    ],
  },
];

export default function Policies() {
  return (
    <>
      <section className="border-b border-ink/10 bg-cream py-16 md:py-24">
        <Container className="text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.25em] text-dusty-rose">
            Transparent & Thoughtful
          </p>
          <h1 className="mt-3 font-heading text-5xl tracking-tight text-burgundy md:text-7xl">
            Studio Policies & Guidelines
          </h1>
          <div className="mx-auto my-6 h-0.5 w-16 bg-dusty-rose/40" />
          <p className="mx-auto max-w-2xl text-[17px] leading-relaxed text-ink/80">
            Clear guidelines to ensure your wedding morning is calm, seamless, and completely unforgettable.
          </p>
        </Container>
      </section>

      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-4xl space-y-10">
            {policies.map((p) => (
              <div key={p.title} className="border border-ink/15 bg-white p-8 md:p-10 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-burgundy/5">
                    {p.icon}
                  </div>
                  <h2 className="font-heading text-2xl text-burgundy md:text-3xl">{p.title}</h2>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-dusty-rose shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="border border-dusty-rose/40 bg-cream p-8 text-center md:p-10">
              <h3 className="font-heading text-3xl text-burgundy">Have Any Specific Questions?</h3>
              <p className="mt-2 text-sm text-ink/75 max-w-md mx-auto">
                We are always happy to clarify details for special destination requests or custom wedding itineraries.
              </p>
              <div className="mt-6 flex justify-center gap-4">
                <ArrowLink to="/contact" variant="solid">
                  Contact Our Team
                </ArrowLink>
                <ArrowLink to="/book" variant="text">
                  Check Availability
                </ArrowLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
