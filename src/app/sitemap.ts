import type { MetadataRoute } from "next";
import { getVisibleProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const products = getVisibleProducts();
  const baseUrl = "https://getrelayworks.com";

  const staticRoutes = [
    "",
    "/products",
    "/pricing",
    "/success",
    "/cancel",
    "/about",
    "/contact",
    "/sms-consent",
    "/privacy",
    "/terms",
    "/refunds",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const buyEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}${product.checkoutRoute}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries, ...buyEntries];
}
