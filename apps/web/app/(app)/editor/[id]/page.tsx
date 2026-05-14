import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerClient } from '@supabase/ssr'
import { Editor } from 'components/editor/editor'


interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function EditorPage({
  params,
}: Props) {
  const { id } = await params

  const cookieStore = await cookies()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: blog } = await supabase
    .from('blogs')
    .select('*')
    .eq('id', id)
    .single()

  if (!blog) {
    redirect('/blogs')
  }

  return <Editor blog={blog} />
}