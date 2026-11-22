import { defineQuery } from "next-sanity";
import { sanityClient } from "./client";
import { urlForImage } from "./image";

export const COMPANY_PROFILE_QUERY = defineQuery(`
  *[_type == "companyProfile"][0]{
    _id, name, legalName, motto, founder, phone, phoneDisplay, phoneInternational,
    whatsappUrl, email, office, cities, mission, vision, aboutStory,
    howWeWorkTitle, howWeWorkText, noteOnCare, yearEstablished, tiktok, instagram, facebook
  }
`);

export type SanityCompanyProfile = {
  _id?: string; name?: string; legalName?: string; motto?: string; founder?: string;
  phone?: string; phoneDisplay?: string; phoneInternational?: string; whatsappUrl?: string;
  email?: string; office?: string; cities?: string; mission?: string; vision?: string;
  aboutStory?: string; howWeWorkTitle?: string; howWeWorkText?: string; noteOnCare?: string;
  yearEstablished?: string; tiktok?: string; instagram?: string; facebook?: string;
};

export async function getCompanyProfile(): Promise<SanityCompanyProfile> {
  const data = await sanityClient.fetch<SanityCompanyProfile | null>(
    COMPANY_PROFILE_QUERY, {}, { next: { revalidate: 60 } }
  );
  if (!data) throw new Error("Sanity companyProfile document is missing.");
  return data;
}

export const PRODUCT_CATEGORIES_QUERY = defineQuery(`
  *[_type == "productCategory"] | order(order asc){ _id, title, description, order }
`);

export async function getProductCategories(): Promise<string[]> {
  const data = await sanityClient.fetch<{ _id: string; title: string }[]>(
    PRODUCT_CATEGORIES_QUERY, {}, { next: { revalidate: 60 } }
  );
  return ["All", ...data.map(({ title }) => title.trim()).filter(Boolean)];
}

export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(order asc, _createdAt desc){
    _id, name, tagline, category, image, imageUrl, shortDesc, fullDesc,
    benefits, ingredients, dosage, badge, order
  }
`);

export type Product = {
  id: string; name: string; tagline: string;
  category: string; image: string; shortDesc: string; fullDesc: string;
  benefits: string[]; ingredients: string[]; dosage: string; badge?: string;
};

type RawSanityProduct = Omit<Product, "id" | "image"> & {
  _id: string; image?: unknown; imageUrl?: string; order?: number;
};

export async function getProducts(): Promise<Product[]> {
  const raw = await sanityClient.fetch<RawSanityProduct[]>(
    PRODUCTS_QUERY, {}, { next: { revalidate: 60 } }
  );
  return raw.map((item) => ({
    id: item._id,
    name: item.name,
    tagline: item.tagline || "",
    category: item.category,
    image: item.image ? urlForImage(item.image).width(800).height(800).url() : item.imageUrl || "",
    shortDesc: item.shortDesc,
    fullDesc: item.fullDesc,
    benefits: item.benefits || [],
    ingredients: item.ingredients || [],
    dosage: item.dosage || "",
    badge: item.badge,
  }));
}

export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc){ _id, title, tag, desc, icon, image, imageUrl, order }
`);

export type SanityService = {
  id: string; title: string; tag: string; desc: string; icon: string; image: string; order?: number;
};

export async function getServices(): Promise<SanityService[]> {
  const raw = await sanityClient.fetch<Array<{
    _id: string; title: string; tag: string; desc: string; icon: string;
    image?: unknown; imageUrl?: string; order?: number;
  }>>(SERVICES_QUERY, {}, { next: { revalidate: 60 } });
  return raw.map((item) => ({
    id: item._id,
    title: item.title,
    tag: item.tag,
    desc: item.desc,
    icon: item.icon,
    image: item.image ? urlForImage(item.image).width(800).height(600).url() : item.imageUrl || "",
    order: item.order,
  }));
}
