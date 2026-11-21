import { sanityClient } from "@/sanity/client";
import { SITE_PROFILE_QUERY } from "@/sanity/queries";
import { company as fallbackCompany } from "./company";

export type SiteProfile = {
  name?: string;
  motto?: string;
  founder?: string;
  phone?: string;
  email?: string;
  office?: string;
  cities?: string;
  whatsappUrl?: string;
  tiktok?: string;
  instagram?: string;
  currentLines?: string[];
  sourcingChannels?: string[];
  growthRoadmap?: string[];
  brandColors?: string[];
};

export async function getSiteProfile(): Promise<SiteProfile> {
  try {
    const profile = await sanityClient.fetch<SiteProfile | null>(SITE_PROFILE_QUERY, {});
    if (profile) {
      return profile;
    }
  } catch {
    // Fall back to local content if Sanity is not ready yet.
  }

  return {
    name: fallbackCompany.name,
    motto: fallbackCompany.tagline,
    founder: fallbackCompany.founder,
    phone: fallbackCompany.phoneDisplay,
    email: fallbackCompany.email,
    office: fallbackCompany.office,
    cities: fallbackCompany.cities,
    whatsappUrl: fallbackCompany.whatsappUrl,
    tiktok: fallbackCompany.tiktok,
    instagram: fallbackCompany.instagram,
    currentLines: ["Vehicles", "Fashion"],
    sourcingChannels: ["Local purchase", "Import", "Auction"],
    growthRoadmap: ["Real estate", "Agriculture", "Manufacturing", "Consulting"],
    brandColors: ["Deep navy blue", "Metallic gold", "White", "Cream"],
  };
}
