import { Message } from 'esbuild';
import { existsSync } from 'fs';
import fs from 'fs/promises';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

const postsPath = path.resolve(process.cwd(), 'posts');

export type Frontmatter = {
  title: string;
  date: string;
  tags: string[];
  draft: number;
};

export class BundleError extends Error {
  constructor(filename: string, readonly messages: Message[]) {
    super(`Error bundling post "${filename}"`);
  }
}

export const getSlug = (filename: string) => {
  return filename.replace(/\.mdx$/, '');
};

export const getFilename = (slug: string) => {
  return `${slug}.mdx`;
};

export const getSlugs = async () => {
  const enPostsPath = path.join(postsPath, 'en');
  const postFilenames = await fs.readdir(enPostsPath);

  return postFilenames.map((filename) => getSlug(filename));
};

export const getPost = async (filename: string, locale = 'en') => {
  const postPath = path.join(postsPath, locale, filename);

  if (!existsSync(postPath)) {
    return {
      code: null,
      frontmatter: null,
    };
  }

  const source = await fs.readFile(postPath, 'utf-8');

  const { code, errors, frontmatter } = await bundleMDX<Frontmatter>({
    source,
  });

  if (errors.length) throw new BundleError(filename, errors);

  return {
    code,
    frontmatter,
  };
};
