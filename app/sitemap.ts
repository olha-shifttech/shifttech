import type { MetadataRoute } from "next";
import { symptoms, transmissions, vehicles } from "@/lib/data";
import { articles } from "@/lib/knowledge";

const baseUrl = "https://shifttech.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/akpp", "/dsg", "/cvt", "/cars", "/transmissions", "/symptoms", "/diagnostics", "/contacts", "/knowledge-base", "/ai-search"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...transmissions.map((item) => ({ url: `${baseUrl}/transmissions/${item.id}`, lastModified: new Date() })),
    ...vehicles.map((item) => ({ url: `${baseUrl}/cars/${item.slug}`, lastModified: new Date() })),
    ...symptoms.map((item) => ({ url: `${baseUrl}/symptoms/${item.slug}`, lastModified: new Date() })),
    ...articles.map((item) => ({ url: `${baseUrl}/articles/${item.slug}`, lastModified: new Date() })),
  ];
}
