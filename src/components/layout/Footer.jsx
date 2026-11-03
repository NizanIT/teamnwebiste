import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import Container from "../common/Container";
import { images } from "../../data/images";

const socials = [
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
  { label: "Pinterest", icon: FaPinterestP },
];

export default function Footer() {
  return (
    <footer className="bg-burgundy-dark text-white">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:gap-12">
        <Link to="/" aria-label="Team N Makeovers home" className="md:pr-12">
          <img src={images.logoWhite} alt="Team N Makeovers" className="h-24 w-24" />
        </Link>
        <p className="flex-1 border-white/20 leading-relaxed text-white/90 md:border-l md:pl-12">
          Luxury Bridal Makeup &amp; Hairstyling
          <br />
          Kozhikode, Kerala <span className="px-2 text-white/50">|</span> Destination Weddings Worldwide
        </p>
        <div className="flex gap-6 text-xl">
          {socials.map(({ label, icon: Icon }) => (
            <a key={label} href="#" aria-label={label} className="transition-colors hover:text-champagne">
              <Icon />
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
