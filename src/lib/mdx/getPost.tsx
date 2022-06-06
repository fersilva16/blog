import { existsSync } from 'fs';
import fs from 'fs/promises';
import { bundleMDX } from 'mdx-bundler';
import path from 'path';

import { BundleError } from './BundleError';
import { Frontmatter } from './Frontmatter';
import { postsPath } from './postsPath';

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
