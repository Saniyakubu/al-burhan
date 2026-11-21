"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  X,
  Sparkles,
  Maximize2,
  MessageCircle,
  ArrowRight,
  Filter,
} from "lucide-react";
import {
  productsData,
  PRODUCT_CATEGORIES,
  type Product,
  type ProductCategory,
} from "@/lib/products-data";
import { ProductModal } from "./product-modal";

const INITIAL_PAGE_SIZE = 8;

export function ProductGalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_PAGE_SIZE);

  // Filter products by category and search query
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(q) ||
        product.tagline.toLowerCase().includes(q) ||
        product.shortDesc.toLowerCase().includes(q) ||
        product.fullDesc.toLowerCase().includes(q) ||
        product.benefits.some((b) => b.toLowerCase().includes(q)) ||
        product.ingredients.some((ing) => ing.toLowerCase().includes(q))
      );
    });
  }, [selectedCategory, searchQuery]);

  // Paginated slice
  const displayedProducts = useMemo(() => {
    return filteredProducts.slice(0, visibleCount);
  }, [filteredProducts, visibleCount]);

  const hasMore = visibleCount < filteredProducts.length;

  // Counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: productsData.length };
    productsData.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div>
      {/* Search and Category Filter Section */}
      <div className="space-y-4 mb-8 sm:mb-12">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(INITIAL_PAGE_SIZE);
            }}
            placeholder="Search remedies, teas, symptoms, or ingredients..."
            className="w-full rounded-full border border-border bg-surface pl-11 pr-10 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-[#b68a3c] transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1 rounded-full"
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:justify-center">
          <div className="flex items-center gap-1.5 shrink-0">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = categoryCounts[cat] || 0;

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setVisibleCount(INITIAL_PAGE_SIZE);
                  }}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all active:scale-95 shrink-0 whitespace-nowrap ${
                    isActive
                      ? "bg-foreground text-background shadow-sm"
                      : "border border-border bg-surface text-foreground/85 hover:bg-muted"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 text-[0.65rem] font-semibold ${
                      isActive
                        ? "bg-background/25 text-background"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Status line */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1 px-1">
          <span>
            Showing <strong className="text-foreground">{displayedProducts.length}</strong> of{" "}
            <strong className="text-foreground">{filteredProducts.length}</strong> products
          </span>
          <span className="flex items-center gap-1 text-[#a67931] font-medium hidden sm:inline-flex">
            <Sparkles size={13} /> Click any picture for full details
          </span>
        </div>
      </div>

      {/* Products Grid */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {displayedProducts.map((product) => {
            const whatsappHref = `https://wa.me/2347055435599?text=${encodeURIComponent(
              `Hello Al-Burhan, I'm interested in ordering/inquiring about: ${product.name}.`
            )}`;

            return (
              <article
                key={product.id}
                className="modern-card group flex flex-col justify-between overflow-hidden bg-surface border border-border/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Product Picture Container - Primary Click Target */}
                <div
                  onClick={() => setSelectedProduct(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedProduct(product);
                    }
                  }}
                  aria-label={`View full details for ${product.name}`}
                  className="relative aspect-square sm:aspect-[4/3] w-full cursor-pointer overflow-hidden bg-[#241a10] border-b border-border/60"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge & Category Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="rounded-full bg-surface/90 backdrop-blur-md px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-foreground shadow-sm">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="rounded-full bg-[#b68a3c] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Interactive 'Click Picture' Callout Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[0.68rem] font-medium text-white/95 border border-white/20">
                      <Maximize2 size={12} className="text-[#f2c96c]" /> Tap photo for full details
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-foreground line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-[#a67931] line-clamp-1">
                      {product.tagline}
                    </p>
                    <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Card Actions */}
                  <div className="mt-5 pt-3.5 border-t border-border/70 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-foreground transition-all hover:text-[#a67931] active:scale-95"
                    >
                      Read full info <ArrowRight size={14} />
                    </button>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Order ${product.name} on WhatsApp`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366] transition-all hover:bg-[#25D366] hover:text-white active:scale-90"
                    >
                      <MessageCircle size={17} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-3xl border border-border bg-surface">
          <Filter size={32} className="mx-auto text-muted-foreground/60 mb-3" />
          <h3 className="text-lg font-semibold text-foreground">No products found</h3>
          <p className="text-sm text-muted-foreground mt-1 max-w-sm mx-auto">
            No remedies matched &quot;{searchQuery}&quot; in the &quot;{selectedCategory}&quot; category.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="button-secondary mt-5 text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Scalable 'Load More' Button for Large Catalogues */}
      {hasMore && (
        <div className="mt-10 sm:mt-14 flex flex-col items-center gap-2">
          <button
            onClick={() => setVisibleCount((prev) => prev + INITIAL_PAGE_SIZE)}
            className="button-secondary shadow-sm"
          >
            Load More Products ({filteredProducts.length - visibleCount} remaining)
          </button>
          <span className="text-xs text-muted-foreground">
            Displaying {displayedProducts.length} of {filteredProducts.length} items
          </span>
        </div>
      )}

      {/* Interactive Modal when clicking a product photo */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
