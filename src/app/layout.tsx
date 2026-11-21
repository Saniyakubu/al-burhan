import type { Metadata } from "next";
import { Footer } from "@/components/footer"; import { Header } from "@/components/header"; import { FloatingWhatsApp } from "@/components/floating-whatsapp"; import { company } from "@/lib/company"; import "./globals.css";
export const metadata: Metadata = { title: { default: "Al-Burhan | Islamic Herbal Medicine Centre", template: "%s | Al-Burhan" }, description: "Al-Burhan Islamic Herbal Medicine Centre Ltd provides natural herbal remedies, wellness therapies and health screening in Zaria, Kaduna State." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="h-full antialiased"><body className="min-h-full flex flex-col"><Header /><main className="flex-1 pt-20">{children}</main><Footer /><FloatingWhatsApp whatsappUrl={company.whatsappUrl} /></body></html>; }

