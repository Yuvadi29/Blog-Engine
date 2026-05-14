import { SupabaseClient } from '@supabase/supabase-js'

export async function createBlog(
  supabase: SupabaseClient,
  userId: string
) {
  const { data, error } = await supabase
    .from('blogs')
    .insert({
      author_id: userId,
      title: 'Untitled Blog',
      slug: crypto.randomUUID(),
      content_mdx: '',
      status: 'draft',
    })
    .select()
    .single()

  if (error) {
    throw error
  }

  return data
}