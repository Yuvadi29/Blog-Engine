import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { Database } from './types';

export async function createServerSupabaseClient() {
    const cookieStore = await cookies();

    return createServerClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
        {
            cookies: {
                get(name: string) {
                    return cookieStore.get(name)?.value
                },
            },
        }
    )
}