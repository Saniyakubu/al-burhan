export const company = {
  name: "Al-Burhan",
  legalName: "AL-BURHAN ISLAMIC HERBAL MEDICINE CENTRE LTD",
  tagline: "Natural care. Guided by faith.",
  founder: "Al-Burhan",
  siteUrl: "https://al-burhan.example",
};

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
];

export function absoluteUrl(path = "") { return `${company.siteUrl}${path}`; }
