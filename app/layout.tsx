import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/ui";

export const metadata: Metadata = {
  metadataBase: new URL("https://shifttech.vercel.app"),
  title: { default: "ShiftTech — ремонт АКПП, DSG та CVT", template: "%s | ShiftTech" },
  description: "Професійна діагностика та ремонт АКПП, DSG, CVT і автоматичних коробок передач.",
  openGraph: { title: "ShiftTech", description: "Професійний сервіс ремонту трансмісій.", type: "website", locale: "uk_UA" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111315" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="uk"><body><Header /><main>{children}</main><Footer /></body></html>;
}
