import type { Metadata } from "next";
import Link from "next/link";
import { getVisibleProductBySlug } from "@/lib/products";

export const metadata: Metadata = {
  title: "Checkout Canceled",
  description: "RelayWorks checkout cancellation page.",
  alternates: {
    canonical: "https://getrelayworks.com/cancel",
  },
};

type CancelPageProps = {
  searchParams: Promise<{ product?: string }>;
};

export default async function CancelPage({ searchParams }: CancelPageProps) {
  const { product: productSlug } = await searchParams;
  const product = productSlug ? getVisibleProductBySlug(productSlug) : undefined;

  return (
    <article className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Checkout canceled</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          No charge was made
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {product
            ? `You canceled checkout for ${product.name}. You can restart anytime.`
            : "You canceled checkout. You can restart anytime."}
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">What you can do next</h2>
        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          {product ? (
            <Link
              href={product.checkoutRoute}
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
            >
              Try checkout again
            </Link>
          ) : (
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
            >
              Browse products
            </Link>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
          >
            Contact sales
          </Link>
          <Link
            href="/refunds"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
          >
            Refund policy
          </Link>
        </div>
      </section>
    </article>
  );
}
