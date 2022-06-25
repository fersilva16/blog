import type { Frontmatter } from './Frontmatter';
import type { Heading } from './getHeadings';

export type NullPartial<T> = {
  [P in keyof T]: T[P] | null;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
  content: string;
  headings: Heading[];
};

export type IntlPost = {
  en: Post;
  pt: NullPartial<Post>;
};
