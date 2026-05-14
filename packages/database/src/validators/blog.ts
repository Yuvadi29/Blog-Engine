import { z } from 'zod';

export const createBlogSchema = z.object({
    title: z.string().min(5),
    slug: z.string().min(5),
    content_mdx: z.string().min(10),
});