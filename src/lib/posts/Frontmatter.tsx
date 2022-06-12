import { z } from 'zod';

export const frontmatterSchema = z.object({
  title: z.string(),
  date: z.date().transform((date) => date.toISOString()),
  tags: z.array(z.string()),
  draft: z.boolean(),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;
