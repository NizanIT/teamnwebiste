import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navLinks";
import Container from "../common/Container";
import { images } from "../../data/images";
import ArrowLink from "../common/ArrowLink";
import { LuMenu } from "react-icons/lu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  const isActive = (to) => pathname === to;

  return (
    <header className="sticky top-0 z-50 bg-ivory">
      <Container className="flex items-center justify-between py-4">
        <Link to="/" aria-label="Team N Makeovers home">
          <img src={images.logo} alt="Team N Makeovers" className="h-16 w-16" />
        </Link>
        <nav className="hidden items-center gap-10 text-[15px] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`border-b-2 py-1 transition-colors hover:text-burgundy ${
                isActive(link.to) ? "border-burgundy text-burgundy" : "border-transparent text-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ArrowLink to="/book" variant="solid" className="hidden sm:inline-flex">
            Check availability
          </ArrowLink>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="text-burgundy lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <LuMenu />
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col gap-6 bg-ivory px-5 pt-10 transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-y-0" : "-translate-y-[120%]"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            onClick={() => setMenuOpen(false)}
            className={`font-heading text-4xl ${isActive(link.to) ? "text-burgundy" : "text-ink"}`}
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
