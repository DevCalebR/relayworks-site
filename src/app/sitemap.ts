import type { MetadataRoute } from "next";
import { products } from "@/content/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://getrelayworks.com";

  const staticRoutes = [
    "",
    "/products",
    "/pricing",
    "/about",
    "/contact",
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

  return [...staticEntries, ...productEntries];
}
