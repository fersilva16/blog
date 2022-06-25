import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

export type Heading = {
  depth: number;
  value: string;
};

export const getHeadings = (ast: Root): Heading[] => {
  const headings: Heading[] = [];

  visit(ast, (node) => {
    if (node.type !== 'heading' || node.depth === 1) return;

    const [text] = node.children;

    if (text.type !== 'text') return;

    headings.push({
      depth: node.depth - 1,
      value: text.value,
    });
  });

  return headings;
};
