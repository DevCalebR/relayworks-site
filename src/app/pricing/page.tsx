import type { Metadata } from "next";
import Link from "next/link";
import { StatusBadge } from "@/components/status-badge";
import { getProductBySlug, products } from "@/content/products";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Pricing for RelayWorks products, including Starter and Pro tiers for CallBackCloser by RelayWorks.",
  alternates: {
    canonical: "https://getrelayworks.com/pricing",
  },
};

export default function PricingPage() {
  const callBackCloser = getProductBySlug("callbackcloser");
  const otherProducts = products.filter((product) => product.slug !== "callbackcloser");

  return (
    <div className="space-y-10">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Pricing</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          CallBackCloser by RelayWorks offers two plans for operational teams. Other products are in
          beta, portfolio, or waitlist phase and are available by request.
        </p>
      </section>

      {callBackCloser?.pricingTiers ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">CallBackCloser by RelayWorks</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {callBackCloser.pricingTiers.map((tier) => (
              <article
                key={tier.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
                <p className="mt-4 text-3xl font-bold text-slate-900">
                  {tier.price}
                  <span className="text-base font-medium text-slate-500">{tier.cadence}</span>
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
                >
                  {tier.ctaLabel}
                </button>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Other products</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {otherProducts.map((product) => {
            const actionLabel = product.status === "Waitlist" ? "Join waitlist" : "Contact";

            return (
              <article
                key={product.slug}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-500">{product.category}</p>
                  <StatusBadge status={product.status} />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{product.byline}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
                >
                  {actionLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
