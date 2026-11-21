import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { getCompanyProfile } from "@/sanity/queries";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f6f0e5",
};

export const metadata: Metadata = {
  title: {
    default: "Al-Burhan | Islamic Herbal Medicine Centre",
    template: "%s | Al-Burhan",
  },
  description:
    "Al-Burhan Islamic Herbal Medicine Centre Ltd provides natural herbal remedies, wellness therapies and health screening in Zaria, Kaduna State.",
  applicationName: "Al-Burhan",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Al-Burhan",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getCompanyProfile();

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
        <Header profile={profile} />
        <main className="flex-1 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
          {children}
        </main>
        <Footer profile={profile} />
        <MobileBottomNav />
        <FloatingWhatsApp whatsappUrl={profile.whatsappUrl ?? ""} />
      </body>
    </html>
  );
}
