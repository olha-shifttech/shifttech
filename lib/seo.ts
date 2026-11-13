import type { Metadata } from "next";
import { repairPages, site } from "@/lib/site";

// Індексація працює за білим списком.
// Усе, чого немає в indexablePaths, отримує noindex (типове значення в app/layout.tsx)
// і не потрапляє в sitemap. Сторінку додаємо сюди лише тоді, коли її контент завершений
// і підтверджений власницею.
export const indexablePaths: string[] = [
  "/",
  "/services",
  "/akpp",
  "/cvt",
  "/diagnostics",
  "/contacts",
  ...repairPages.map((item) => `/repair/${item.slug}`),
];

export function indexableMetadata({ path, title, description, absoluteTitle = false }: { path: string; title: string; description: string; absoluteTitle?: boolean }): Metadata {
  if (!indexablePaths.includes(path)) throw new Error(`Сторінки ${path} немає в indexablePaths (lib/seo.ts)`);
  const ogTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  // Дочірній openGraph повністю заміняє батьківський, тому картинку вказуємо явно.
  const images = [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: "ShiftTech — ремонт АКПП, варіаторів і PowerShift. Білогородка, Київська область." }];
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: { index: true, follow: true },
    openGraph: { title: ogTitle, description, url: path, type: "website", locale: "uk_UA", siteName: site.name, images },
    twitter: { card: "summary_large_image", title: ogTitle, description, images: ["/opengraph-image.png"] },
  };
}

// Структуровані дані автосервісу. Тільки підтверджені дані з лендингів ShiftTech:
// назва, телефон, адреса, маршрут, зона обслуговування. Графіка, відгуків, цін і координат тут немає.
export const autoRepairJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "@id": `${site.url}/#autorepair`,
  name: site.name,
  description: "Сервіс ремонту трансмісій: АКПП Aisin 09G / TF-60SN, варіатори Jatco, PowerShift DCT450 і DCT250, Ford 6F35.",
  url: site.url,
  telephone: "+380675911005",
  image: `${site.url}/opengraph-image.png`,
  logo: `${site.url}/apple-icon.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "вул. Полунична, 2А",
    addressLocality: "Білогородка",
    addressRegion: "Київська область",
    addressCountry: "UA",
  },
  hasMap: site.mapUrl,
  areaServed: ["Київ", "Київська область"],
};

export const jsonLdScript = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
