import type { Metadata } from "next";
import { ProductsCatalog } from "@/components/products-catalog";
import { productCategories, products } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse RelayWorks products across SaaS, automation, and portfolio systems.",
  alternates: {
    canonical: "https://getrelayworks.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          RelayWorks products
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Search and filter products by category. Every listing is driven from a shared product
          source so home, product detail, and pricing views stay aligned.
        </p>
      </section>

      <ProductsCatalog products={products} categories={productCategories} />
    </div>
  );
}
