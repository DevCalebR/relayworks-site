import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { getProductBySlug, products } from "@/content/products";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found",
      description: "The requested RelayWorks product does not exist.",
    };
  }

  return {
    title: product.byline,
    description: product.shortDescription,
    alternates: {
      canonical: `https://getrelayworks.com/products/${product.slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <article className="space-y-8">
      <section className="section-panel rounded-3xl p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            {product.category}
          </span>
          <StatusBadge status={product.status} />
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {product.byline}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600">{product.longDescription}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {product.repoUrl ? (
            <Link
              href={product.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              View repo
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex cursor-not-allowed items-center rounded-full bg-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-500"
            >
              View repo
            </button>
          )}
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
          >
            Contact
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Problem</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.problem}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Solution</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.solution}</p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Features</h2>
          <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Tech stack</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section>
        <Link href="/products" className="text-sm font-semibold text-sky-700 hover:text-sky-900">
          Back to all products
        </Link>
      </section>
    </article>
  );
}
