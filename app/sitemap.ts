import type { MetadataRoute } from "next";
import { entityUrl, knowledgeEntities } from "@/lib/knowledge/catalog";
import { repairPages } from "@/lib/site";

const baseUrl = "https://shifttech.com.ua";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/akpp", "/dsg", "/cvt", "/cars", "/transmissions", "/symptoms", "/diagnostics", "/contacts", "/knowledge-base", "/ai-search", "/vehicle-brands", "/vehicle-models", "/transmission-families", "/causes", "/diagnostic-procedures", "/repair-procedures", "/maintenance", "/faq", "/repair-cases", "/articles"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...repairPages.map((item) => ({ url: `${baseUrl}/repair/${item.slug}`, lastModified: new Date() })),
    // Заглушки бази знань у sitemap не віддаємо; лишаються тільки кейси ремонту.
    ...knowledgeEntities.filter((item) => item.kind === "repair-cases").map((item) => ({ url: `${baseUrl}${entityUrl(item)}`, lastModified: new Date() })),
  ];
}
