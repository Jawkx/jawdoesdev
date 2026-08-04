import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date()
  })
});

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative().optional(),
    context: z.string(),
    status: z.string(),
    statusReason: z.string().optional(),
    link: z.string().url()
  })
});

export const collections = { post, project };
