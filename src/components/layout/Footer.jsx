import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaPinterestP,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FiArrowUp,
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiCheck,
} from "react-icons/fi";
import Container from "../common/Container";
import { images } from "../../data/images";
import { navLinks } from "../../data/navLinks";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/teamnmakeovers", icon: FaInstagram },
  { label: "WhatsApp", href: "https://wa.me/919645424281", icon: FaWhatsapp },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "Pinterest", href: "https://pinterest.com", icon: FaPinterestP },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
];

const bridalServices = [
  { label: "Airbrush Bridal Makeover", to: "/packages" },
  { label: "Platinum Signature (Feeniya Nizan)", to: "/packages" },
  { label: "Destination Wedding Styling", to: "/packages" },
  { label: "Bridal Trial & Moodboard Design", to: "/packages" },
  { label: "Saree Box Pleating & Pre-Styling", to: "/packages" },
  { label: "Entourage & Bridesmaid Makeup", to: "/packages" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-burgundy-dark text-white">
      {/* Top Newsletter & Bridal Concierge Strip */}
      <div className="border-b border-white/10 bg-black/20 py-12 md:py-16">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-champagne">
                The Team N Bridal Circle
              </p>
              <h3 className="mt-2 font-heading text-3xl md:text-4xl text-white">
                Preparing for Your Special Day?
              </h3>
              <p className="mt-2 text-sm text-white/70 max-w-xl leading-relaxed">
                Receive our complimentary Bridal Skincare Timeline, jewelry pairing tips, and priority
                notification when new seasonal calendar dates open.
              </p>
            </div>

            <div>
              {subscribed ? (
                <div className="flex items-center gap-2 rounded bg-emerald-950/60 border border-emerald-500/30 px-5 py-4 text-sm text-emerald-200">
                  <FiCheck className="text-lg text-emerald-400" />
                  <span>Thank you! Your bridal guide has been sent to your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-white/10 border border-white/20 px-4 py-3.5 text-sm text-white placeholder-white/50 focus:border-champagne focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="shrink-0 bg-champagne text-burgundy hover:bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Subscribe</span>
                    <FiArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Main Multi-Column Footer Content */}
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-14">
          {/* Column 1: Brand & Bio */}
          <div>
            <Link to="/" aria-label="Team N Makeovers home" className="inline-block transition-transform hover:scale-105">
              <img src={images.logoWhite} alt="Team N Makeovers" className="h-20 w-20 md:h-24 md:w-24" />
            </Link>
            <p className="mt-5 text-sm font-medium tracking-wide text-champagne uppercase">
              Luxury Bridal Makeup & Hair Couture
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Founded and led by celebrity bridal artist <strong className="text-white">Feeniya Nizan</strong>,
              Team N Makeovers brings over a decade of excellence in bridal aesthetics, creating timeless,
              glow-from-within looks for South Asian brides across Kerala and global luxury destinations.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-champagne hover:bg-champagne hover:text-burgundy"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Bridal Services */}
          <div>
            <h4 className="font-heading text-xl font-medium text-champagne md:text-2xl">
              Bridal Services
            </h4>
            <div className="mt-2 h-0.5 w-10 bg-champagne/40" />
            <ul className="mt-6 space-y-3">
              {bridalServices.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-sm text-white/70 transition-colors hover:text-champagne hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation & Explore */}
          <div>
            <h4 className="font-heading text-xl font-medium text-champagne md:text-2xl">
              Navigation
            </h4>
            <div className="mt-2 h-0.5 w-10 bg-champagne/40" />
            <ul className="mt-6 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 transition-colors hover:text-champagne hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/book"
                  className="text-sm font-semibold text-champagne hover:underline inline-block mt-2"
                >
                  Book Date Online →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Contact & Working Hours */}
          <div>
            <h4 className="font-heading text-xl font-medium text-champagne md:text-2xl">
              Studio & Atelier
            </h4>
            <div className="mt-2 h-0.5 w-10 bg-champagne/40" />

            <div className="mt-6 space-y-4 text-sm text-white/75">
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 shrink-0 text-base text-champagne" />
                <span>
                  Kozhikode (Calicut), Kerala, India
                  <br />
                  <span className="text-xs text-white/50">On-location & Destination Weddings Worldwide</span>
                </span>
              </div>

              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 shrink-0 text-base text-champagne" />
                <div>
                  <a href="tel:+919645424281" className="hover:text-champagne transition-colors">
                    +91 96454 24281
                  </a>
                  <p className="text-xs text-white/50">Call & WhatsApp for inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 shrink-0 text-base text-champagne" />
                <div>
                  <a href="mailto:inquiry@teamnmakeovers.com" className="hover:text-champagne transition-colors">
                    inquiry@teamnmakeovers.com
                  </a>
                  <p className="text-xs text-white/50">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-white/10">
                <FiClock className="mt-1 shrink-0 text-base text-champagne" />
                <div>
                  <p className="font-medium text-white">Consultations by Appointment</p>
                  <p className="text-xs text-white/50">Mon – Sun: 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Copyright & Back to Top Strip */}
      <div className="border-t border-white/10 bg-black/40 py-6 text-xs text-white/60">
        <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>
            © {new Date().getFullYear()} Team N Makeovers by Feeniya Nizan. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/policies" className="hover:text-white transition-colors">
              Terms & Policies
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Direct Contact
            </Link>
            <span className="text-white/20">•</span>
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 hover:text-champagne transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-champagne group-hover:text-burgundy transition-colors">
                <FiArrowUp className="text-xs" />
              </span>
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
