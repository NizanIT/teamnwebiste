import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import Container from "../common/Container";
import { images } from "../../data/images";
import ArrowLink from "../common/ArrowLink";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

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
        // Considered past hero when hero's bottom edge reaches the navbar (~80px from top)
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
    <header
      className={`z-50 transition-all duration-500 ease-in-out ${
        isHome ? "fixed top-0 inset-x-0" : "sticky top-0"
      } ${
        isSolid
          ? "bg-ivory/95 backdrop-blur-md shadow-sm border-b border-ink/10 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" aria-label="Team N Makeovers home" className="transition-transform hover:scale-105">
          <img
            src={images.logo}
            alt="Team N Makeovers"
            className="h-14 w-14 md:h-16 md:w-16 drop-shadow-sm"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-10 text-[15px] lg:flex">
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
            onClick={() => setMenuOpen((open) => !open)}
            className="relative h-9 w-9 text-2xl text-burgundy lg:hidden transition-transform active:scale-95"
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

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        className={`fixed inset-x-0 bottom-0 top-[76px] z-40 flex flex-col gap-6 bg-ivory px-6 pt-10 shadow-2xl transition-all duration-300 ease-out lg:hidden ${
          menuOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={`font-heading text-4xl transition-colors ${
              isActive(link.to) ? "text-burgundy font-semibold" : "text-ink hover:text-burgundy"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <ArrowLink
          to="/book"
          variant="solid"
          className="mt-4 self-start"
          onClick={() => setMenuOpen(false)}
        >
          Check availability
        </ArrowLink>
      </div>
    </header>
  );
}
