import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/company";
import { sanityClient } from "@/sanity/client";
import { BLOG_POST_SLUGS_QUERY } from "@/sanity/blog-queries";

type BlogSlug = { slug: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/services",
    "/blog",
    "/contact",
  ];
  const now = new Date();
  const blogPosts = await sanityClient.fetch<BlogSlug[]>(BLOG_POST_SLUGS_QUERY, {});

  const routes = [
    ...staticRoutes,
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route.startsWith("/blog") ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/blog"
          ? 0.8
          : route.startsWith("/blog/")
            ? 0.7
            : 0.6,
  }));
}
