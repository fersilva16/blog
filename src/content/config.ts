import { defineCollection, z } from 'astro:content';
import { rssSchema } from '@astrojs/rss';

const blog = defineCollection({
  schema: z
    .object({
      tags: z.optional(z.array(z.string())),
    })
    .merge(rssSchema),
});

export const collection = {
  blog,
};
