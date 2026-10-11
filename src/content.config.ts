import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const cases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cases' }),
  schema: z.object({
    title: z.string().max(40),
    client: z.string(),
    industry: z.enum(['beauty', 'fashion', 'fnb', 'saas', 'edu', 'etc']),
    channels: z.array(z.string()).min(1),
    period: z.string(),
    role: z.string(),
    problem: z.string().max(60),
    action: z.string().max(60),
    result: z.string().max(40),
    keyMetrics: z
      .array(z.object({ label: z.string(), before: z.coerce.string(), after: z.coerce.string() }))
      .max(3),
    trend: z
      .object({
        label: z.string(),
        unit: z.string().default(''),
        points: z.array(z.object({ x: z.string(), y: z.number() })).min(2),
        startAt: z.number().int().nonnegative().optional(),
      })
      .optional(),
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

export const collections = { cases };
