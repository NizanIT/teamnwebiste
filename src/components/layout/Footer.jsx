import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FiArrowUp, FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import Container from "../common/Container";
import { images } from "../../data/images";
import { navLinks } from "../../data/navLinks";
import useContact from "../../hooks/useContact";

// Only links that are actually set (CMS "Contact & Footer") are shown.
const socialLinksFor = (c) =>
  [
    { label: "Instagram", href: c.instagramUrl, icon: FaInstagram },
    { label: "WhatsApp", href: c.whatsappUrl, icon: FaWhatsapp },
    { label: "YouTube", href: c.youtubeUrl, icon: FaYoutube },
    { label: "Facebook", href: c.facebookUrl, icon: FaFacebookF },
  ].filter((l) => l.href);

const bridalServices = [
  { label: "Airbrush Bridal Makeover", to: "/packages" },
  { label: "Platinum Signature", to: "/packages" },
  { label: "Destination Weddings", to: "/packages" },
  { label: "Bridal Trial", to: "/packages" },
  { label: "Entourage Makeup", to: "/packages" },
];

const headingCls = "text-[11px] font-semibold uppercase tracking-[0.2em] text-champagne";
const linkCls = "text-sm text-white/70 transition-colors hover:text-champagne";

export default function Footer() {
  const contact = useContact();
  const socialLinks = socialLinksFor(contact);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/10 bg-burgundy-dark text-white">
      <Container className="py-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-4">
              <Link to="/" aria-label="Team N Makeovers home" className="shrink-0 transition-transform hover:scale-105">
                <img
                  src={contact.logoWhite?.url || images.logoWhite}
                  alt="Team N Makeovers"
                  className="h-14 w-14 md:h-16 md:w-16"
                />
              </Link>
              <p className="text-xs font-medium uppercase tracking-wide text-champagne">
                Luxury Bridal Makeup
                <br />& Hair Couture
              </p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              Led by celebrity bridal artist <strong className="font-medium text-white">Feeniya Nizan</strong> —
              timeless bridal looks across Kerala and destination weddings.
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition-all hover:border-champagne hover:bg-champagne hover:text-burgundy"
                  >
                    <Icon className="text-sm" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services — hidden on phones to keep the footer short */}
          <div className="hidden sm:block">
            <h4 className={headingCls}>Services</h4>
            <ul className="mt-4 space-y-2.5">
              {bridalServices.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className={linkCls}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className={headingCls}>Explore</h4>
            <ul className="mt-4 grid grid-cols-3 gap-x-4 gap-y-2.5 sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className={headingCls}>Studio</h4>
            <ul className="mt-4 grid gap-3 text-sm text-white/75 sm:grid-cols-2 lg:grid-cols-1">
              {contact.address && (
                <li className="flex items-start gap-2.5">
                  <FiMapPin className="mt-0.5 shrink-0 text-champagne" />
                  {contact.mapUrl ? (
                    <a href={contact.mapUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-champagne">
                      {contact.address}
                    </a>
                  ) : (
                    <span>{contact.address}</span>
                  )}
                </li>
              )}
              {contact.phone && (
                <li className="flex items-start gap-2.5">
                  <FiPhone className="mt-0.5 shrink-0 text-champagne" />
                  <a href={contact.telHref} className="transition-colors hover:text-champagne">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.email && (
                <li className="flex items-start gap-2.5">
                  <FiMail className="mt-0.5 shrink-0 text-champagne" />
                  <a href={contact.mailHref} className="break-all transition-colors hover:text-champagne">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.hours && (
                <li className="flex items-start gap-2.5">
                  <FiClock className="mt-0.5 shrink-0 text-champagne" />
                  <span>{contact.hours}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom strip */}
      <div className="border-t border-white/10 bg-black/30 pb-24 pt-4 text-xs sm:py-4 text-white/55">
        <Container className="flex flex-col-reverse items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Team N Makeovers. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link to="/policies" className="transition-colors hover:text-white">
              Policies
            </Link>
            <Link to="/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-1.5 transition-colors hover:text-champagne"
              aria-label="Back to top"
            >
              <span>Top</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-champagne group-hover:text-burgundy">
                <FiArrowUp className="text-xs" />
              </span>
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
