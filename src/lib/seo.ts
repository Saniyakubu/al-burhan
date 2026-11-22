import type { Metadata } from "next";
import { absoluteUrl, company } from "@/lib/company";

type BuildSeoMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  imagePath?: string;
  noindex?: boolean;
};

export function buildSeoMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  imagePath = "/icon-512.png",
  noindex = false,
}: BuildSeoMetadataOptions): Metadata {
  const image = absoluteUrl(imagePath);

  return {
    title,
    description,
    keywords: ["Al-Burhan", "Islamic herbal medicine", "Zaria", "Kaduna", ...keywords],
    alternates: {
      canonical: path,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: company.name,
      locale: "en_NG",
      type: "website",
      images: [
        {
          url: image,
          width: 512,
          height: 512,
          alt: `${company.name} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    icons: {
      icon: [
        { url: "/icon-192.png", type: "image/png" },
        { url: "/icon-512.png", type: "image/png" },
      ],
      apple: "/apple-icon.png",
    },
  };
}
