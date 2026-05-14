import { SupabaseClient } from '@supabase/supabase-js'

export async function deleteBlog(
  supabase: SupabaseClient,
  blogId: string
) {
  const { error } = await supabase
    .from('blogs')
    .delete()
    .eq('id', blogId)

  if (error) {
    throw error
  }
}