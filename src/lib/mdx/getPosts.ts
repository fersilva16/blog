import { Message } from 'esbuild';
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
  const postFilenames = await fs.readdir(postsPath);

  return postFilenames.map((filename) => getSlug(filename));
};

export const getPost = async (filename: string) => {
  const source = await fs.readFile(path.join(postsPath, filename), 'utf-8');

  const { code, errors, frontmatter } = await bundleMDX<Frontmatter>({
    source,
  });

  if (errors.length) throw new BundleError(filename, errors);

  return {
    code,
    errors,
    frontmatter,
  };
};
