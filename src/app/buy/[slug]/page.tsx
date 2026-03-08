import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVisibleProductBySlug } from "@/lib/products";

type BuyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: BuyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getVisibleProductBySlug(slug);

  if (!product) {
    return {
      title: "Buy",
      description: "Complete your RelayWorks purchase with Stripe.",
    };
  }

  return {
    title: `Buy ${product.name}`,
    description: `Purchase ${product.name} via Stripe checkout.`,
    alternates: {
      canonical: `https://getrelayworks.com/buy/${product.slug}`,
    },
  };
}

export default async function BuyPage({ params }: BuyPageProps) {
  const { slug } = await params;
  const product = getVisibleProductBySlug(slug);

  if (!product || product.status !== "for_sale") {
    notFound();
  }

  return (
    <article className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">Secure checkout</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Buy {product.name}
        </h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{product.shortDescription}</p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Order summary</h2>
          <dl className="mt-4 space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between gap-3">
              <dt>Product</dt>
              <dd className="font-semibold text-slate-900">{product.name}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt>Price</dt>
              <dd className="font-semibold text-slate-900">{product.priceDisplay}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt>Billing</dt>
              <dd className="font-semibold text-slate-900">
                {product.billingType === "subscription" ? "Subscription" : "One-time"}
              </dd>
            </div>
          </dl>

          {product.checkoutType === "stripe_payment_link" && product.checkoutUrl ? (
            <Link
              href={product.checkoutUrl}
              className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Buy now with Stripe
            </Link>
          ) : (
            <form action="/api/checkout" method="POST" className="mt-6">
              <input type="hidden" name="slug" value={product.slug} />
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Buy now with Stripe
              </button>
            </form>
          )}

          <p className="mt-3 text-xs text-slate-500">
            Checkout is processed securely by Stripe.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Before you purchase</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
              <span>You will be redirected to Stripe checkout.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
              <span>After payment, you will land on a success page with next steps.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
              <span>If you cancel checkout, we route you back to the cancel page.</span>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
            <Link href={`/products/${product.slug}`} className="text-sky-700 hover:text-sky-900">
              View product details
            </Link>
            <Link href="/refunds" className="text-sky-700 hover:text-sky-900">
              Review refund policy
            </Link>
          </div>
        </article>
      </section>
    </article>
  );
}
