import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('Desarrollo Web'),
    author: z.string().default('Autor'),
    readTime: z.string().default('5 min de lectura'),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog };
