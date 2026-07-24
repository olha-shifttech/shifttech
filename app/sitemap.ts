import type { MetadataRoute } from "next";
import { entityUrl, knowledgeEntities } from "@/lib/knowledge/catalog";

const baseUrl = "https://shifttech.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/akpp", "/dsg", "/cvt", "/cars", "/transmissions", "/symptoms", "/diagnostics", "/contacts", "/knowledge-base", "/ai-search", "/vehicle-brands", "/vehicle-models", "/transmission-families", "/causes", "/diagnostic-procedures", "/repair-procedures", "/maintenance", "/faq", "/repair-cases", "/articles"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...knowledgeEntities.map((item) => ({ url: `${baseUrl}${entityUrl(item)}`, lastModified: new Date() })),
  ];
}
