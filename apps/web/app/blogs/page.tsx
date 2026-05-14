import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

import { createServerClient } from '@supabase/ssr'

import Link from 'next/link'

import { Plus } from 'lucide-react'

import { BlogCard } from './components/blog-card'
import { EmptyState } from './components/empty-state'
import { Button } from '@ui/components/ui/button'
import { getUserBlogs } from '../../../../packages/database/queries/blog'


export default async function BlogsPage() {
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

  const blogs = await getUserBlogs(
    supabase,
    user.id
  )

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>
            Blogs
          </h1>

          <p className='text-muted-foreground'>
            Manage your blogs and drafts.
          </p>
        </div>

        <Button asChild>
          <Link href='/blogs/new'>
            <Plus className='mr-2 h-4 w-4' />
            New Blog
          </Link>
        </Button>
      </div>

      {blogs.length === 0 ? (
        <EmptyState />
      ) : (
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          {blogs.map((blog: any) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      )}
    </div>
  )
}