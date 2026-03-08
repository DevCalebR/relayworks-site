import type { Metadata } from "next";
import Link from "next/link";
import { getVisibleProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Pricing and checkout options for RelayWorks products.",
  alternates: {
    canonical: "https://getrelayworks.com/pricing",
  },
};

export default function PricingPage() {
  const products = getVisibleProducts();

  return (
    <div className="space-y-10">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pricing</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Every RelayWorks product is available for direct purchase through Stripe.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <article key={product.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-slate-500">{product.category}</p>
              <p className="text-sm font-semibold text-slate-700">{product.priceDisplay}</p>
            </div>
            <h2 className="mt-3 text-xl font-bold text-slate-900">{product.name}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {product.billingType === "subscription" ? "Subscription" : "One-time"}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={product.checkoutRoute}
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Buy now
              </Link>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
              >
                View details
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
