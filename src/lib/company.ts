export const company = {
  name: "Al-Burhan",
  legalName: "AL-BURHAN ISLAMIC HERBAL MEDICINE CENTRE LTD",
  tagline: "Natural care. Guided by faith.",
  founder: "Al-Burhan",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "") {
  return new URL(path, company.siteUrl).toString();
}
