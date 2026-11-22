import type { Metadata } from "next";
import { sanityClient } from "@/sanity/client";
import { BLOG_POSTS_QUERY } from "@/sanity/blog-queries";
import { BlogIndexClient } from "@/components/blog-index-client";
import { buildSeoMetadata } from "@/lib/seo";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  coverAlt?: string;
  coverImage?: unknown;
};

export const metadata: Metadata = buildSeoMetadata({
  title: "Al-Burhan Herbal Health Blog",
  description:
    "Practical herbal health guidance, wellness education, and updates from Al-Burhan Islamic Herbal Medicine Centre in Zaria, Kaduna.",
  path: "/blog",
  keywords: [
    "herbal medicine Zaria",
    "herbal remedies Kaduna",
    "Islamic herbal medicine Nigeria",
    "wellness therapies Zaria",
  ],
});

export default async function BlogPage() {
  const posts = await sanityClient.fetch<BlogPost[]>(BLOG_POSTS_QUERY, {});

  return (
    <div className="font-sans pb-24 md:pb-32 bg-background">
      {/* Page Header */}
      <header className="pt-8 pb-12 md:pt-16 md:pb-20 relative overflow-hidden text-center page-shell">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow justify-center mb-6">
            BLOG
          </div>
          <h1 className="display-title text-5xl md:text-7xl lg:text-8xl mb-8">
            Notes from Al-Burhan.
          </h1>
          <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Herbal health education, wellness guidance, and news from our centre in Zaria, Kaduna.
          </p>
        </div>
      </header>

      <div className="page-shell">
        {posts.length ? (
          <BlogIndexClient posts={posts} />
        ) : (
          <p className="mt-12 text-sm text-muted-foreground">
            No blog posts are published yet in Sanity. Create the first one in the Studio.
          </p>
        )}
      </div>
    </div>
  );
}
