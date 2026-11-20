import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import Container from "../common/Container";
import { images } from "../../data/images";
import useContact from "../../hooks/useContact";
import ArrowLink from "../common/ArrowLink";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const contact = useContact();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  // Lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  // Close the menu on route change (e.g. browser back/forward)
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  // Close on Escape, and when the viewport grows to desktop width
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = (e) => e.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [menuOpen]);

  // Keep the drawer exactly below the header, whatever its current height
  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Track scrolling past the hero section on the homepage
  useEffect(() => {
    if (!isHome) {
      setScrolledPastHero(true);
      return;
    }

    const checkHeroScroll = () => {
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setScrolledPastHero(rect.bottom <= 80);
      } else {
        setScrolledPastHero(window.scrollY > 400);
      }
    };

    checkHeroScroll();
    window.addEventListener("scroll", checkHeroScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkHeroScroll);
  }, [isHome]);

  const isActive = (to) => pathname === to;

  // Solid navbar shows when scrolled past hero, when mobile menu is open, or on non-home pages
  const isSolid = !isHome || scrolledPastHero || menuOpen;

  return (
    <>
      <header
        ref={headerRef}
        className={`z-50 transition-all duration-500 ease-in-out ${
          isHome ? "fixed top-0 inset-x-0" : "sticky top-0"
        } ${
          isSolid
            ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-ink/10 py-2.5 md:py-3"
            : "bg-transparent border-b border-transparent py-2.5 md:py-3 lg:py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          <Link to="/" aria-label="Team N Makeovers home" className="transition-transform hover:scale-105">
            <img
              src={contact.logo?.url || images.logo}
              alt="Team N Makeovers"
              className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center gap-8 text-[15px] lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`border-b-2 py-1 font-medium transition-colors hover:text-burgundy ${
                  isActive(link.to)
                    ? "border-burgundy text-burgundy"
                    : "border-transparent text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <ArrowLink to="/book" variant="solid" className="max-lg:hidden">
              Check availability
            </ArrowLink>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative -mr-2 h-11 w-11 text-2xl text-burgundy lg:hidden transition-transform active:scale-95"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <LuMenu
                aria-hidden="true"
                className={`absolute inset-0 m-auto transition-all duration-300 ${
                  menuOpen ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
              <IoMdClose
                aria-hidden="true"
                className={`absolute inset-0 m-auto transition-all duration-300 ${
                  menuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer — a sibling of the header so `fixed` is relative to the viewport */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        style={{ top: headerHeight }}
        className={`fixed inset-x-0 bottom-0 z-[105] flex flex-col overflow-y-auto overscroll-contain bg-ivory transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-5 pt-4 sm:px-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${60 + i * 35}ms` : "0ms" }}
              className={`flex items-center justify-between border-b border-ink/10 py-3.5 font-heading text-2xl transition-all duration-300 sm:text-3xl ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              } ${isActive(link.to) ? "font-semibold text-burgundy" : "text-ink hover:text-burgundy"}`}
            >
              <span>{link.label}</span>
              {isActive(link.to) && <span className="h-1.5 w-1.5 rounded-full bg-burgundy" aria-hidden="true" />}
            </Link>
          ))}
        </nav>

        <div className="mt-auto space-y-3 px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-8 sm:px-10">
          <ArrowLink
            to="/book"
            variant="solid"
            className="w-full justify-center"
            onClick={() => setMenuOpen(false)}
          >
            Check availability
          </ArrowLink>
          {(contact.telHref || contact.whatsappUrl) && (
            <div className="grid grid-cols-2 gap-3">
              {contact.telHref && (
                <a
                  href={contact.telHref}
                  className="flex items-center justify-center gap-2 border border-burgundy/30 py-3 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy hover:text-white"
                >
                  <FiPhone aria-hidden="true" /> Call
                </a>
              )}
              {contact.whatsappUrl && (
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 border border-burgundy/30 py-3 text-sm font-medium text-burgundy transition-colors hover:bg-burgundy hover:text-white"
                >
                  <FaWhatsapp aria-hidden="true" /> WhatsApp
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
