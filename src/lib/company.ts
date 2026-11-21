export const company = {
  name: "Al-Burhan",
  legalName: "AL-BURHAN ISLAMIC HERBAL MEDICINE CENTRE LTD",
  tagline: "Natural care. Guided by faith.",
  phoneDisplay: "+234 806 709 3195 / +234 812 617 4472",
  phoneInternational: "+2348067093195",
  phone: "+2348067093195",
  whatsappUrl: "https://wa.me/2347055435599?text=Hello%20Al-Burhan%2C%20I%27d%20like%20to%20book%20a%20consultation.",
  email: "madrasatuburhan20@gmail.com",
  office: "Sabon Gari, Zaria, Kaduna State, Nigeria",
  cities: "Zaria, Kaduna State, Nigeria",
  facebook: "https://www.facebook.com/",
  tiktok: "https://www.tiktok.com/",
  instagram: "https://www.instagram.com/",
  instagramHandle: "alburhanherbal",
  siteUrl: "https://al-burhan.example",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our story" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "") { return `${company.siteUrl}${path}`; }

export function buildSiteStructuredData() {
  return { "@context": "https://schema.org", "@type": "LocalBusiness", name: company.legalName, alternateName: company.name, url: company.siteUrl, description: "Islamic herbal medicine and wellness services in Sabon Gari, Zaria, Kaduna State.", telephone: company.phoneInternational, email: company.email, address: { "@type": "PostalAddress", streetAddress: company.office, addressLocality: "Zaria", addressRegion: "Kaduna", addressCountry: "NG" }, areaServed: ["Zaria", "Kaduna", "Nigeria"] };
}
