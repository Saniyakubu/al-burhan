import { defineQuery } from "next-sanity";

export const SITE_PROFILE_QUERY = defineQuery(`
  *[_type == "companyProfile"][0]{
    _id,
    name,
    motto,
    founder,
    phone,
    email,
    office,
    cities,
    whatsappUrl,
    tiktok,
    instagram,
    currentLines,
    sourcingChannels,
    growthRoadmap,
    brandColors
  }
`);
