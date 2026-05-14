export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    cover_image: string | null;
    content_mdx: string;
    status: 'draft' | 'published' | 'archived' | null;
    visibility: 'public' | 'private' | 'unlisted' | null;
    created_at: string;
    updated_at: string;
    published_at: string | null;
}