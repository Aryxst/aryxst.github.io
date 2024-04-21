import { defineCollection, z } from 'astro:content';

export const collections = {
 projects: defineCollection({
  type: 'content',
  schema: z.object({
   title: z.string(),
   description: z.string(),
   short_description: z.string(),
   creationDate: z.coerce.date(),
   tags: z.array(z.string()).optional(),
   role: z.string().optional().default('Developer'),
   teamType: z.string().optional().default('Solo Project'),
   heroImage: z.string().optional(),
   thumbnailImage: z.string(),
   image_description: z.string().optional(),
  }),
 }),
 blog: defineCollection({
  type: 'content',
  schema: z.object({
   title: z.string(),
   description: z.string(),
   short_description: z.string(),
   creationDate: z.coerce.date(),
  }),
 }),
};
