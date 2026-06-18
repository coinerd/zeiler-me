/**
 * Content Validation Schemas
 *
 * Zod schemas for validating MDX frontmatter at build time.
 */
import { z } from 'zod';

/**
 * Article frontmatter schema.
 * All MDX files in the content/ directory must conform to this structure.
 */
export const articleFrontmatterSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  author: z.string().default('Julian Zeiler'),
  tags: z.array(z.string()).default([]),
  order: z.number().optional(),
  date: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2})?Z?)?$/,
      'Date must be ISO format (YYYY-MM-DD or YYYY-MM-DDTHH:MM:SSZ)'
    )
    .optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
});

export type ArticleFrontmatter = z.infer<typeof articleFrontmatterSchema>;

/**
 * Full article type with metadata.
 */
export interface Article {
  slug: string;
  collection: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}
