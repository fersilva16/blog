import type { Frontmatter } from './Frontmatter';

export type NullPartial<T> = {
  [P in keyof T]: T[P] | null;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
};

export type IntlPost = {
  en: Post;
  pt: NullPartial<Post>;
};
