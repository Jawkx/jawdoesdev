import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date()
  })
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  })
});

export const collections = { post, about };
