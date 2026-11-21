import type { Metadata } from "next";
import { sanityClient } from "@/sanity/client";
import { BLOG_POSTS_QUERY } from "@/sanity/blog-queries";
import { PageIntro } from "@/components/page-intro";
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
  title: "Blog | Savvy Prime Ltd",
  description:
    "Savvy Prime Ltd blog posts on vehicle sourcing in Kaduna, car import Nigeria, auction cars, fashion resale Nigeria, and the company story in Kaduna and Abuja.",
  path: "/blog",
  keywords: [
    "vehicle sourcing Kaduna",
    "car import Nigeria",
    "auction cars Nigeria",
    "fashion resale Nigeria",
    "Savvy Prime blog",
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
            Notes from Savvy Prime.
          </h1>
          <p className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Updates, buying guidance, and company notes from Savvy Prime Ltd in Kaduna and worldwide.
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
