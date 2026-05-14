'use client'


import { toast } from 'sonner'

import { Button } from '@ui/components/ui/button'
import { createBrowserClient } from '@supabase/ssr'

interface Props {
  blogId: string
}

export function PublishButton({
  blogId,
}: Props) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )

  async function handlePublish() {
    await supabase
      .from('blogs')
      .update({
        status: 'published',
        published_at: new Date().toISOString(),
      })
      .eq('id', blogId)

    toast.success('Blog published')
  }

  return (
    <Button onClick={handlePublish}>
      Publish
    </Button>
  )
}