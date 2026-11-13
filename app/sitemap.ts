import type { MetadataRoute } from "next";
import { indexablePaths } from "@/lib/seo";
import { site } from "@/lib/site";

// У sitemap потрапляють лише сторінки з білого списку (lib/seo.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({ url: `${site.url}${path === "/" ? "" : path}`, lastModified: new Date() }));
}
