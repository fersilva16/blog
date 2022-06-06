import fs from 'fs/promises';
import path from 'path';

import { getSlug } from './getSlug';
import { postsPath } from './postsPath';

export const getSlugs = async () => {
  const enPostsPath = path.join(postsPath, 'en');
  const postFilenames = await fs.readdir(enPostsPath);

  return postFilenames.map((filename) => getSlug(filename));
};
