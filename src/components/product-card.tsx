import Link from "next/link";
import type { Product } from "@/content/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {product.category}
        </span>
        <span className="text-sm font-semibold text-slate-700">{product.priceDisplay}</span>
      </div>

      <h3 className="text-xl font-bold text-slate-900">{product.byline}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{product.shortDescription}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.techStack.slice(0, 3).map((tech) => (
          <span
            key={`${product.slug}-${tech}`}
            className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
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
  );
}
