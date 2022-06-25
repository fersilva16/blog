import { isDevelopment } from '../env/isDevelopment';
import { loadPosts } from './loadPosts';
import type { IntlPost } from './Post';

let posts: Map<string, IntlPost> | Promise<Map<string, IntlPost>> | null = null;

export const getPosts = async () => {
  if (isDevelopment()) return loadPosts();

  if (!posts) {
    posts = loadPosts();
  }

  return posts;
};
