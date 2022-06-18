import { existsSync } from 'fs';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import type { Frontmatter } from './Frontmatter';
import { frontmatterSchema } from './Frontmatter';
import { getSlug } from './getSlug';
import { postsPath } from './postsPath';

export type GetPostResponse = {
  slug: string | null;
  content: string | null;
  frontmatter: Frontmatter | null;
};

export const getPost = async (
  filename: string,
  locale = 'en'
): Promise<GetPostResponse> => {
  const postPath = path.join(postsPath, locale, filename);

  if (!existsSync(postPath)) {
    return {
      slug: null,
      content: null,
      frontmatter: null,
    };
  }

  const post = await fs.readFile(postPath, 'utf-8');

  const { data, content } = matter(post);

  const frontmatter = frontmatterSchema.parse(data);

  return {
    slug: getSlug(filename),
    content,
    frontmatter,
  };
};
