import type { Metadata } from "next";
import Link from "next/link";
import { getVisibleProductBySlug } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Purchase Success",
  description: "RelayWorks purchase confirmation and onboarding next steps.",
  alternates: {
    canonical: "https://getrelayworks.com/success",
  },
};

type SuccessPageProps = {
  searchParams: Promise<{ product?: string; session_id?: string }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { product: productSlug, session_id: sessionId } = await searchParams;
  const product = productSlug ? getVisibleProductBySlug(productSlug) : undefined;

  return (
    <article className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-emerald-700">Payment complete</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Purchase successful
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          {product
            ? `${product.name} is now queued for onboarding. Follow the next steps below.`
            : "Your RelayWorks order is complete. Follow the next steps below."}
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">Next steps</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Check your Stripe receipt email for payment confirmation.</li>
          <li>
            Email{" "}
            <a
              className="text-sky-700 hover:text-sky-900"
              href={`mailto:${siteConfig.supportEmail}`}
            >
              {siteConfig.supportEmail}
            </a>{" "}
            with your order details if onboarding access is not received within one business day.
          </li>
          <li>Use the links below to access your product page and support docs.</li>
        </ol>

        {sessionId ? (
          <p className="mt-4 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
            Stripe session: {sessionId}
          </p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          {product ? (
            <>
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white transition hover:bg-slate-700"
              >
                View {product.name}
              </Link>
              {product.appUrl ? (
                <Link
                  href={product.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
                >
                  Open app
                </Link>
              ) : null}
            </>
          ) : null}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
          >
            Contact support
          </Link>
        </div>
      </section>
    </article>
  );
}
