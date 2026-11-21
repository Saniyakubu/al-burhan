import { createClient } from "next-sanity";

// Placeholder only: add your Sanity project ID in .env.local before enabling content fetching.
export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "REPLACE_WITH_SANITY_PROJECT_ID";
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-01-01";

export const sanityClient = createClient({ projectId: sanityProjectId, dataset: sanityDataset, apiVersion: sanityApiVersion, useCdn: true });

