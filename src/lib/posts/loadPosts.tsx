import { existsSync } from 'fs';
import fs from 'fs/promises';
import matter from 'gray-matter';
import path from 'path';
import remarkParse from 'remark-parse';
import { unified } from 'unified';

import { frontmatterSchema } from './Frontmatter';
import { getHeadings } from './getHeadings';
import type { IntlPost, NullPartial, Post } from './Post';

export const postsPath = path.resolve(process.cwd(), 'posts');
export const enPostsPath = path.resolve(postsPath, 'en');

const getSlug = (filename: string) => filename.replace(/\.md$/, '');

export const loadPost = async (
  filename: string,
  locale: string
): Promise<NullPartial<Post>> => {
  const postPath = path.join(postsPath, locale, filename);

  if (!existsSync(postPath)) {
    return {
      slug: null,
      content: null,
      frontmatter: null,
      headings: null,
    };
  }

  const post = await fs.readFile(postPath, 'utf-8');

  const { data, content } = matter(post);

  const frontmatter = frontmatterSchema.parse(data);
  const ast = unified().use(remarkParse).parse(content);
  const headings = getHeadings(ast);

  return {
    slug: getSlug(filename),
    content,
    frontmatter,
    headings,
  };
};

export const loadIntlPost = async (filename: string): Promise<IntlPost> => {
  const enPost = await loadPost(filename, 'en');
  const ptPost = await loadPost(filename, 'pt');

  return {
    en: enPost as Post,
    pt: ptPost,
  };
};

export const loadPosts = async () => {
  const filenames = await fs.readdir(enPostsPath, 'utf-8');

  const posts = await Promise.all(filenames.map(loadIntlPost));

  return posts.reduce((map, post) => map.set(post.en.slug, post), new Map());
};
