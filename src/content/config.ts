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
    context: z.string(),
    status: z.string(),
    link: z.string().url()
  })
});

export const collections = { post, project };
