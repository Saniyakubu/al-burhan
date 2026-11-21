import { defineQuery } from "next-sanity";

export const BLOG_POSTS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    coverAlt,
    coverImage
  }
`);

export const BLOG_POST_SLUGS_QUERY = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)]{
    "slug": slug.current
  }
`);

export const BLOG_POST_QUERY = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    excerpt,
    category,
    publishedAt,
    coverAlt,
    coverImage,
    body
  }
`);
