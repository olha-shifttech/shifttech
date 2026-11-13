import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/ui";

// Типово сторінки закриті від індексації. Відкриті лише ті, що перелічені в lib/seo.ts (indexablePaths).
export const metadata: Metadata = {
  metadataBase: new URL("https://shifttech.com.ua"),
  title: { default: "ShiftTech — ремонт трансмісій | Білогородка, Київ", template: "%s | ShiftTech" },
  description: "ShiftTech — сервіс ремонту трансмісій у Білогородці, Київська область.",
  robots: { index: false, follow: true },
  openGraph: { title: "ShiftTech", description: "Професійний сервіс ремонту трансмісій.", type: "website", locale: "uk_UA", siteName: "ShiftTech" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111515" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="uk"><body><Header /><main>{children}</main><Footer /></body></html>;
}
