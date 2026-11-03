import { useState } from "react";
import PortfolioHeader from "../components/portfolio/PortfolioHeader";
import FilterBar from "../components/portfolio/FilterBar";
import GalleryGrid from "../components/portfolio/GalleryGrid";
import Lightbox from "../components/portfolio/Lightbox";
import BookCta from "../components/portfolio/BookCta";
import Footer from "../components/layout/Footer";
import { portfolioItems } from "../data/portfolioItems";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const visibleItems =
    filter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === filter);

  return (
    <>
      <PortfolioHeader />
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <FilterBar active={filter} onChange={setFilter} />
          <GalleryGrid items={visibleItems} onSelect={setActiveIndex} />
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={visibleItems}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}

      <BookCta />
      <Footer />
    </>
  );
}
