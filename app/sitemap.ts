import type { MetadataRoute } from "next";
import { transmissions, vehicles } from "@/lib/data";

const baseUrl = "https://shifttech.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/akpp", "/dsg", "/cvt", "/cars", "/transmissions", "/diagnostics", "/contacts", "/knowledge-base", "/ai-search"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...transmissions.map((item) => ({ url: `${baseUrl}/transmissions/${item.id}`, lastModified: new Date() })),
    ...vehicles.map((item) => ({ url: `${baseUrl}/cars/${item.slug}`, lastModified: new Date() })),
  ];
}
