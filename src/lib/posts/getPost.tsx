import { existsSync } from 'fs';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';

import { Frontmatter, frontmatterSchema } from './Frontmatter';
import { postsPath } from './postsPath';

export type GetPostResponse = {
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
      content: null,
      frontmatter: null,
    };
  }

  const post = await fs.readFile(postPath, 'utf-8');

  const { data, content } = matter(post);

  const frontmatter = frontmatterSchema.parse(data);

  return {
    content,
    frontmatter,
  };
};
