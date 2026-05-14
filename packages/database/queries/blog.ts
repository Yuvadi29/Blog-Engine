import { SupabaseClient } from '@supabase/supabase-js'

export async function getUserBlogs(
    supabase: SupabaseClient,
    userId: string
) {
    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('author_id', userId)
        .order('updated_at', {
            ascending: false,
        })

    if (error) {
        throw error
    }

    return data
}