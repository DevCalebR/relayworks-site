import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getVisibleProducts } from "@/lib/products";

const workflowHighlights = [
  {
    title: "Validation",
    description:
      "Every product flow starts with explicit input checks to prevent broken automations and silent data drift.",
  },
  {
    title: "Caching",
    description:
      "Data-heavy features rely on smart cache windows to reduce API load while keeping users on fresh operational context.",
  },
  {
    title: "Audit trails",
    description:
      "State transitions and message histories are structured so teams can inspect what happened and why.",
  },
  {
    title: "Idempotent workflows",
    description:
      "Retries are designed to be safe, so repeated jobs do not duplicate outcomes or corrupt downstream systems.",
  },
];

export default function HomePage() {
  const products = getVisibleProducts();

  return (
    <div className="space-y-12 sm:space-y-16">
      <section className="section-panel overflow-hidden rounded-3xl p-6 shadow-sm sm:p-10">
        <div className="max-w-3xl space-y-6">
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700">
            Automation + SaaS products
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            RelayWorks ships focused software for operators who need reliable execution.
          </h1>
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Explore products built for sales recovery, macro-event monitoring, backtest workflows,
            quote operations, and renewal tracking. Every product follows a practical engineering
            standard: reliable inputs, observable outputs, and low-friction UX.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/products"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Product catalog
          </h2>
          <Link href="/products" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
            Browse all
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          How RelayWorks works
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {workflowHighlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Need a productized workflow for your team?
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
          RelayWorks can help you scope, ship, and iterate automation-driven products quickly.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
