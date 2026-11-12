import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://shifttech.com.ua"),
  title: { default: "ShiftTech — ремонт АКПП, варіаторів і PowerShift | Білогородка, Київ", template: "%s | ShiftTech" },
  description: "Ремонт АКПП Aisin 09G / TF-60SN, варіаторів Jatco, PowerShift DCT450 і DCT250, Ford 6F35. Сервіс у Білогородці: Київ і Київська область.",
  openGraph: { title: "ShiftTech", description: "Професійний сервіс ремонту трансмісій.", type: "website", locale: "uk_UA" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111515" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="uk"><body><Header /><main>{children}</main><Footer /></body></html>;
}
