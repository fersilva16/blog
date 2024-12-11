import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: z
    .object({
      tags: z.optional(z.array(z.string())),
    })
    .merge(rssSchema),
});

export const collection = {
  blog,
};
