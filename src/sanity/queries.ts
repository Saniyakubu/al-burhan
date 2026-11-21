import { defineQuery } from "next-sanity";
import { sanityClient } from "./client";
import { urlForImage } from "./image";
import { company as fallbackCompany } from "@/lib/company";
import { productsData as fallbackProducts, type Product } from "@/lib/products-data";

// 1. Company Profile Query (Mission, Vision, Contacts, Location)
export const COMPANY_PROFILE_QUERY = defineQuery(`
  *[_type == "companyProfile"][0]{
    _id,
    name,
    legalName,
    motto,
    founder,
    phone,
    phoneDisplay,
    phoneInternational,
    whatsappUrl,
    email,
    office,
    cities,
    mission,
    vision,
    aboutStory,
    howWeWorkTitle,
    howWeWorkText,
    noteOnCare,
    yearEstablished,
    tiktok,
    instagram,
    facebook
  }
`);

export type SanityCompanyProfile = {
  _id?: string;
  name?: string;
  legalName?: string;
  motto?: string;
  founder?: string;
  phone?: string;
  phoneDisplay?: string;
  phoneInternational?: string;
  whatsappUrl?: string;
  email?: string;
  office?: string;
  cities?: string;
  mission?: string;
  vision?: string;
  aboutStory?: string;
  howWeWorkTitle?: string;
  howWeWorkText?: string;
  noteOnCare?: string;
  yearEstablished?: string;
  tiktok?: string;
  instagram?: string;
  facebook?: string;
};

export async function getCompanyProfile(): Promise<SanityCompanyProfile> {
  try {
    const data = await sanityClient.fetch<SanityCompanyProfile | null>(
      COMPANY_PROFILE_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (data && data.name) {
      return data;
    }
  } catch (err) {
    console.warn("Falling back to local company profile:", err);
  }

  return {
    name: fallbackCompany.name,
    legalName: fallbackCompany.legalName,
    motto: fallbackCompany.tagline,
    founder: fallbackCompany.founder,
    phone: fallbackCompany.phoneDisplay,
    phoneDisplay: fallbackCompany.phoneDisplay,
    phoneInternational: fallbackCompany.phoneInternational,
    whatsappUrl: fallbackCompany.whatsappUrl,
    email: fallbackCompany.email,
    office: fallbackCompany.office,
    cities: fallbackCompany.cities,
    yearEstablished: "2015",
    mission:
      "To provide safe, effective herbal medicines made from natural herbs and plants, guided by the Qur’an and Sunnah of the Prophet Muhammad (S.A.W.), for the health and wellbeing of the community.",
    vision:
      "To become a trusted herbal healthcare company known for quality, integrity and improving community health across Nigeria and beyond.",
    aboutStory:
      "Al-Burhan Islamic Herbal Medicine Centre Ltd was established to provide quality natural herbal solutions and contribute to the wellbeing of the community.",
    howWeWorkTitle: "Listen first. Screen carefully. Care naturally.",
    howWeWorkText:
      "Our team begins with a conversation and health screening using modern diagnostic equipment. We then discuss an appropriate care pathway and herbal remedies made from natural herbs and plants.",
    noteOnCare:
      "Please share what you would like help with when you contact us. Our team can explain the screening or therapy options available and advise on the next step. This website is for information and appointment enquiries; it is not a substitute for emergency medical care.",
  };
}

// 2. Product Categories Query (Filter Button Values)
export const PRODUCT_CATEGORIES_QUERY = defineQuery(`
  *[_type == "productCategory"] | order(order asc){
    _id,
    title,
    description,
    order
  }
`);

export async function getProductCategories(): Promise<string[]> {
  try {
    const data = await sanityClient.fetch<{ _id: string; title: string }[]>(
      PRODUCT_CATEGORIES_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (data && data.length > 0) {
      const titles = data.map((d) => d.title.trim()).filter(Boolean);
      return ["All", ...titles];
    }
  } catch (err) {
    console.warn("Falling back to local categories:", err);
  }

  return [
    "All",
    "Herbal Remedies",
    "Therapeutic Teas",
    "Wellness Therapies",
    "Special Formulations",
  ];
}

// 3. Products Query
export const PRODUCTS_QUERY = defineQuery(`
  *[_type == "product"] | order(order asc, _createdAt desc){
    _id,
    name,
    tagline,
    category,
    image,
    imageUrl,
    shortDesc,
    fullDesc,
    benefits,
    ingredients,
    dosage,
    badge,
    order
  }
`);

type RawSanityProduct = {
  _id: string;
  name: string;
  tagline?: string;
  category: string;
  image?: unknown;
  imageUrl?: string;
  shortDesc: string;
  fullDesc: string;
  benefits?: string[];
  ingredients?: string[];
  dosage?: string;
  badge?: string;
  order?: number;
};

export async function getProducts(): Promise<Product[]> {
  try {
    const raw = await sanityClient.fetch<RawSanityProduct[]>(
      PRODUCTS_QUERY,
      {},
      { next: { revalidate: 60 } }
    );
    if (raw && raw.length > 0) {
      return raw.map((item) => {
        let imageSrc = item.imageUrl || "/al-burhan/product-precious.png";
        if (item.image) {
          try {
            imageSrc = urlForImage(item.image).width(800).height(800).url();
          } catch {
            imageSrc = item.imageUrl || "/al-burhan/product-precious.png";
          }
        }

        return {
          id: item._id,
          name: item.name,
          tagline: item.tagline || "",
          category: item.category as Product["category"],
          image: imageSrc,
          shortDesc: item.shortDesc,
          fullDesc: item.fullDesc,
          benefits: item.benefits || [],
          ingredients: item.ingredients || [],
          dosage: item.dosage || "Consult specialist for dosage guidelines.",
          badge: item.badge,
        };
      });
    }
  } catch (err) {
    console.warn("Falling back to local products:", err);
  }

  return fallbackProducts;
}

// 4. Services Query
export const SERVICES_QUERY = defineQuery(`
  *[_type == "service"] | order(order asc){
    _id,
    title,
    tag,
    desc,
    icon,
    image,
    imageUrl,
    order
  }
`);

export type SanityService = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  icon: string;
  image: string;
  order?: number;
};

export async function getServices(): Promise<SanityService[]> {
  const fallbackServices: SanityService[] = [
    {
      id: "service-quantum",
      title: "Quantum Resonance Magnetic",
      tag: "Screening",
      desc: "Modern equipment-assisted screening to help us understand the health concerns you bring to us and recommend the next step with care.",
      icon: "CircleGauge",
      image: "/al-burhan/product-herbal.jpg",
      order: 1,
    },
    {
      id: "service-gun-massage",
      title: "Gun massager therapy",
      tag: "Wellness therapy",
      desc: "Supportive massage focused on relaxation, muscle comfort and mobility as part of a considered wellness routine.",
      icon: "Dumbbell",
      image: "/al-burhan/product-precious-detail.png",
      order: 2,
    },
    {
      id: "service-cupping",
      title: "Cupping therapy",
      tag: "Traditional therapy",
      desc: "A traditional wellness therapy delivered in a calm, clean environment by a team that takes your comfort seriously.",
      icon: "Leaf",
      image: "/al-burhan/product-safety.jpg",
      order: 3,
    },
    {
      id: "service-consultation",
      title: "Herbal consultations",
      tag: "Natural remedies",
      desc: "A guided conversation about your goals, symptoms and suitable herbal products from the Al-Burhan range.",
      icon: "Sparkles",
      image: "/al-burhan/product-success.jpg",
      order: 4,
    },
  ];

  try {
    const raw = await sanityClient.fetch<
      {
        _id: string;
        title: string;
        tag: string;
        desc: string;
        icon: string;
        image?: unknown;
        imageUrl?: string;
        order?: number;
      }[]
    >(SERVICES_QUERY, {}, { next: { revalidate: 60 } });

    if (raw && raw.length > 0) {
      return raw.map((item) => {
        let imageSrc = item.imageUrl || "/al-burhan/product-herbal.jpg";
        if (item.image) {
          try {
            imageSrc = urlForImage(item.image).width(800).height(600).url();
          } catch {
            imageSrc = item.imageUrl || "/al-burhan/product-herbal.jpg";
          }
        }
        return {
          id: item._id,
          title: item.title,
          tag: item.tag,
          desc: item.desc,
          icon: item.icon,
          image: imageSrc,
          order: item.order,
        };
      });
    }
  } catch (err) {
    console.warn("Falling back to local services:", err);
  }

  return fallbackServices;
}
