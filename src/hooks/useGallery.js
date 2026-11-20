import { getGallery } from "../api/websiteApi";
import { portfolioFilters, portfolioItems } from "../data/portfolioItems";
import useAsync from "./useAsync";

const toPortfolioItem = (g, categories) => ({
  id: g.id,
  category: g.category,
  categoryLabel: categories.find((c) => c.key === g.category)?.label ?? g.category,
  title: g.title || g.alt,
  desc: g.description,
  image: g.image?.url,
  alt: g.alt,
  featuredOnHome: g.featuredOnHome,
});

/**
 * Portfolio photos from Team N Website, falling back to the studio's own photos in
 * src/data/portfolioItems.js while the server is unreachable or the gallery is still empty.
 * → { items, filters, isFallback }
 */
export default function useGallery() {
  const { data, error } = useAsync(getGallery, "gallery");
  const live = !error && data?.items?.length ? data : null;
  if (!live) return { items: portfolioItems, filters: portfolioFilters, isFallback: true };

  const categories = data.categories ?? [];
  return {
    items: live.items.map((g) => toPortfolioItem(g, categories)),
    filters: [{ key: "all", label: "All Artistry" }, ...categories],
    isFallback: false,
  };
}
