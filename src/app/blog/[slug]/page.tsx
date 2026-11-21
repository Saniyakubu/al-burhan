import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { sanityClient } from "@/sanity/client";
import { BLOG_POST_QUERY, BLOG_POST_SLUGS_QUERY } from "@/sanity/blog-queries";
import { urlForImage } from "@/sanity/image";
import { company } from "@/lib/company";
import { buildSeoMetadata } from "@/lib/seo";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

type BlogPost = {
  title: string;
  slug: { current: string };
  excerpt: string;
  category: string;
  publishedAt: string;
  body: unknown;
  coverAlt?: string;
  coverImage?: unknown;
};

export async function generateStaticParams() {
  const posts = await sanityClient.fetch<{ slug: string }[]>(BLOG_POST_SLUGS_QUERY, {});
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityClient.fetch<BlogPost | null>(BLOG_POST_QUERY, { slug });

  if (!post) {
    return {
      title: "Blog post not found",
    };
  }

  const imageUrl = post.coverImage
    ? urlForImage(post.coverImage).width(1600).height(900).url()
    : undefined;

  return {
    ...buildSeoMetadata({
      title: `${post.title} | Savvy Prime Ltd Blog`,
      description: post.excerpt,
      path: `/blog/${slug}`,
      keywords: [
        post.category,
        "Savvy Prime Ltd blog",
        "vehicle sourcing Kaduna",
        "car import Nigeria",
        "fashion resale Nigeria",
      ],
    }),
    openGraph: {
      title: `${post.title} | Savvy Prime Ltd Blog`,
      description: post.excerpt,
      url: `${company.siteUrl}/blog/${slug}`,
      siteName: company.name,
      locale: "en_NG",
      type: "article",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1600,
              height: 900,
              alt: post.coverAlt ?? post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Savvy Prime Ltd Blog`,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await sanityClient.fetch<BlogPost | null>(BLOG_POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  const publishedAt = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  return (
    <article className="font-sans pb-24 md:pb-32 bg-background">
      {/* Blog Header */}
      <header className="pt-8 pb-12 md:pt-16 md:pb-20 relative overflow-hidden text-center page-shell">
        <div className="max-w-4xl mx-auto">
          <div className="eyebrow justify-center mb-6">
            {post.category}
          </div>
          <h1 className="display-title text-4xl md:text-6xl lg:text-7xl mb-8">
            {post.title}
          </h1>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-widest text-foreground/60">
            <span>{company.name}</span>
            <span>•</span>
            <span>{publishedAt}</span>
          </div>
        </div>
      </header>

      <div className="page-shell">
        {/* Sleek, modern banner image (shorter aspect ratio so it's not overwhelmingly large) */}
        {post.coverImage ? (
          <div className="max-w-6xl mx-auto mb-16 md:mb-24">
            <div className="modern-card overflow-hidden">
              <div className="relative aspect-[16/10] md:aspect-[21/9] bg-muted w-full">
                <Image
                  src={urlForImage(post.coverImage).width(1600).height(900).url()}
                  alt={post.coverAlt ?? post.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 100vw, 100vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* Content & Sidebar Grid */}
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-[1fr_20rem]">
          {/* Main Content Area */}
          <div className="blog-body w-full max-w-3xl mx-auto lg:mx-0">
            <PortableText value={post.body as any} />
          </div>

          {/* Sticky Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-32 lg:self-start">
            <div className="modern-card p-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground mb-4">About</p>
              <p className="text-base font-medium leading-relaxed text-muted-foreground">
                {company.name} keeps the blog short, practical, and tied to the work the company already does.
              </p>
            </div>
            <div className="modern-card p-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground mb-4">Contact</p>
              <p className="text-base font-medium leading-relaxed text-muted-foreground">
                {company.phoneDisplay}
                <br />
                {company.email}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
