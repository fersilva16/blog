import { getFilename } from './getFilename';
import { getPost } from './getPost';
import { getSlugs } from './getSlugs';

export const getPosts = async () => {
  const slugs = await getSlugs();
  const posts = await Promise.all(
    slugs.map((slug) => getPost(getFilename(slug)))
  );

  return posts;
};
