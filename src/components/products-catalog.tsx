"use client";

import { useMemo, useState } from "react";
import type { Product, ProductCategory } from "@/content/products";
import { ProductCard } from "@/components/product-card";

type ProductsCatalogProps = {
  products: Product[];
  categories: ProductCategory[];
};

type CategoryFilter = "All" | ProductCategory;

export function ProductsCatalog({ products, categories }: ProductsCatalogProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ? true : product.category === activeCategory;

      const matchesSearch =
        normalizedQuery.length === 0
          ? true
          : [
              product.name,
              product.byline,
              product.shortDescription,
              product.longDescription,
              product.priceDisplay,
              ...product.techStack,
            ]
              .join(" ")
              .toLowerCase()
              .includes(normalizedQuery);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, products, query]);

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <label htmlFor="products-search" className="mb-2 block text-sm font-semibold text-slate-700">
          Search products
        </label>
        <input
          id="products-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by product name, use case, or stack"
          className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
        />

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === "All"
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeCategory === category
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-600">
          No products matched your search.
        </div>
      )}
    </section>
  );
}
