import type { Metadata, Viewport } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { JsonLd } from "@/components/json-ld";
import { company } from "@/lib/company";
import { getCompanyProfile, getContacts } from "@/sanity/queries";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#f6f0e5",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Al-Burhan | Islamic Herbal Medicine Centre",
    template: "%s | Al-Burhan",
  },
  description:
    "Al-Burhan Islamic Herbal Medicine Centre Ltd provides natural herbal remedies, wellness therapies and health screening in Zaria, Kaduna State.",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Al-Burhan Islamic Herbal Medicine Centre",
    title: "Al-Burhan | Islamic Herbal Medicine Centre",
    description:
      "Natural herbal remedies, health screening, and wellness therapies in Zaria, Kaduna.",
    images: [
      {
        url: "/al-burhan/logo.png",
        width: 512,
        height: 512,
        alt: "Al-Burhan Islamic Herbal Medicine Centre logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Al-Burhan | Islamic Herbal Medicine Centre",
    description:
      "Natural herbal remedies, health screening, and wellness therapies in Zaria, Kaduna.",
    images: ["/al-burhan/logo.png"],
  },
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
  const [profile, contacts] = await Promise.all([getCompanyProfile(), getContacts()]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: profile.name || company.name,
    legalName: profile.legalName,
    description: profile.motto,
    url: company.siteUrl,
    logo: `${company.siteUrl}/al-burhan/logo.png`,
    image: `${company.siteUrl}/al-burhan/logo.png`,
    telephone: contacts.phoneInternational || contacts.phoneDisplay,
    email: contacts.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contacts.office,
      addressLocality: "Zaria",
      addressRegion: "Kaduna",
      addressCountry: "NG",
    },
    areaServed: contacts.cities,
    sameAs: [contacts.facebook, contacts.instagram, contacts.tiktok].filter(Boolean),
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background">
        <JsonLd data={structuredData} />
        <Header contacts={contacts} />
        <main className="flex-1 pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
          {children}
        </main>
        <Footer contacts={contacts} />
        <MobileBottomNav />
        <FloatingWhatsApp whatsappUrl={contacts.whatsappUrl ?? ""} />
      </body>
    </html>
  );
}
