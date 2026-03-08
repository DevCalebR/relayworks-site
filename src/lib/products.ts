import {
  getProductBySlug,
  products,
  type Product,
  type ProductCategory,
} from "@/content/products";

const DEFAULT_PUBLIC_PRODUCT_ALLOWLIST = ["callbackcloser"] as const;

function parseAllowlist(value: string): string[] {
  const normalized = value.trim();

  if (normalized === "*") {
    return products.map((product) => product.slug);
  }

  return normalized
    .split(",")
    .map((slug) => slug.trim().toLowerCase())
    .filter(Boolean);
}

export function getPublicProductAllowlist(): string[] {
  const raw = process.env.PUBLIC_PRODUCT_ALLOWLIST;

  if (!raw) {
    return [...DEFAULT_PUBLIC_PRODUCT_ALLOWLIST];
  }

  const parsed = parseAllowlist(raw);

  if (parsed.length === 0) {
    return [...DEFAULT_PUBLIC_PRODUCT_ALLOWLIST];
  }

  return parsed;
}

export function isProductVisible(slug: string): boolean {
  const allowlist = getPublicProductAllowlist();

  return allowlist.includes(slug.toLowerCase());
}

export function getVisibleProducts(): Product[] {
  const allowlist = new Set(getPublicProductAllowlist());

  return products.filter((product) => allowlist.has(product.slug.toLowerCase()));
}

export function getVisibleProductBySlug(slug: string): Product | undefined {
  if (!isProductVisible(slug)) {
    return undefined;
  }

  return getProductBySlug(slug);
}

export function getVisibleProductCategories(): ProductCategory[] {
  const seen = new Set<ProductCategory>();
  const categories: ProductCategory[] = [];

  for (const product of getVisibleProducts()) {
    if (seen.has(product.category)) {
      continue;
    }

    seen.add(product.category);
    categories.push(product.category);
  }

  return categories;
}
