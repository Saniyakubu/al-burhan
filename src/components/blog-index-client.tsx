"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { urlForImage } from "@/sanity/image";

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

type BlogIndexClientProps = {
  posts: BlogPost[];
};

const PAGE_SIZE = 6;

export function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <>
      <section className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {visiblePosts.map((post, index) => (
          <motion.article 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={post._id} 
            className="modern-card overflow-hidden group flex flex-col"
          >
            <Link href={`/blog/${post.slug.current}`} className="relative aspect-[4/3] w-full overflow-hidden block">
              {post.coverImage ? (
                <Image
                  src={urlForImage(post.coverImage).width(800).height(600).url()}
                  alt={post.coverAlt ?? post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  unoptimized
                />
              ) : (
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">No image</span>
                </div>
              )}
            </Link>
            <div className="p-8 flex flex-col flex-grow">
              <p className="eyebrow mb-4 self-start">
                {post.category}
              </p>
              <h2 className="text-2xl font-medium tracking-tight text-foreground mb-4 line-clamp-2">
                <Link href={`/blog/${post.slug.current}`} className="transition-colors hover:opacity-70">
                  {post.title}
                </Link>
              </h2>
              <p className="text-base font-medium leading-relaxed text-muted-foreground mb-8 line-clamp-3 flex-grow">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t border-border flex justify-between items-center">
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </p>
                <Link href={`/blog/${post.slug.current}`} className="text-xs font-bold uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity">
                  Read Article
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      {hasMore ? (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="button-secondary"
            onClick={() => setVisibleCount((count) => Math.min(count + PAGE_SIZE, posts.length))}
          >
            Load more articles
          </button>
        </div>
      ) : null}
    </>
  );
}
