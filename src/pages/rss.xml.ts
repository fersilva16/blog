import type { APIRoute } from 'astro';

import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { config } from '../config';

export const get: APIRoute = async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: config.TITLE,
    description: config.DESCRIPTION,
    site: config.SITE_URL,
    items: posts.map(({ data, slug, body }) => ({
      link: slug,
      title: data.title,
      description: data.description,
      pubDate: data.pubDate,
    })),
  });
};
