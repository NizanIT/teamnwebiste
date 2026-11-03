import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const variants = {
  text: "text-sm font-medium text-ink hover:text-burgundy",
  solid: "bg-burgundy px-6 py-3.5 text-sm font-medium text-white hover:bg-wine",
  light: "bg-white px-6 py-3.5 text-sm font-medium text-burgundy hover:bg-champagne",
};

export default function ArrowLink({ to, variant = "text", className = "", children, ...rest }) {
  return (
    <Link to={to} {...rest} className={`inline-flex items-center gap-3 transition-colors ${variants[variant]} ${className}`}>
      {children}
      <FiArrowRight aria-hidden="true" />
    </Link>
  );
}
