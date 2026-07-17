import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "@/components/ui";
export const metadata: Metadata = { title: "ShiftTech — ремонт АКПП, DSG та CVT", description: "Перша технічна версія AI-friendly платформи ShiftTech для трансмісій." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="uk"><body><Header/><main>{children}</main><Footer/></body></html>}
