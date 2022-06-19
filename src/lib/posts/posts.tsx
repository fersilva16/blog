import { loadPosts } from './loadPosts';
import type { IntlPost } from './Post';

let posts: Map<string, IntlPost> | Promise<Map<string, IntlPost>> | null = null;

export const getPosts = async () => {
  if (!posts) {
    posts = loadPosts();
  }

  return posts;
};
