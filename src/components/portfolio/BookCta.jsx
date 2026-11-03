import { Link } from "react-router-dom";

export default function BookCta() {
  return (
    <section className="py-16 md:py-24 bg-burgundy text-white text-center">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-4xl md:text-5xl mb-6 font-heading">Ready to Define Your Signature Look?</h2>
        <p className="text-dusty-rose/80 text-sm md:text-base max-w-xl mx-auto mb-10 font-light leading-relaxed">
          Connect with Feeniya Nizan today to secure your wedding or celebration date. Let us bring your dream bridal
          vision to life.
        </p>
        <Link
          to="/book"
          className="bg-champagne text-burgundy hover:bg-white hover:text-burgundy px-12 py-4 text-xs font-bold uppercase tracking-widest transition shadow-xl inline-block"
        >
          Check availability
        </Link>
      </div>
    </section>
  );
}
