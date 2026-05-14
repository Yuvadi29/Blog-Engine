'use client'

import Link from 'next/link'

import {
  MoreHorizontal,
  Trash2,
  PenSquare,
} from 'lucide-react'

import { deleteBlog } from '../../../../../packages/database/mutations/delete-blog'

import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@ui/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@ui/components/ui/dropdown-menu'
import { Button } from '@ui/components/ui/button'

interface BlogCardProps {
  blog: any
}

export function BlogCard({
  blog,
}: BlogCardProps) {
  const router = useRouter()

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY as string
  )

  async function handleDelete() {
    try {
      await deleteBlog(supabase, blog.id)

      toast.success('Blog deleted')

      router.refresh()
    } catch {
      toast.error('Failed to delete blog')
    }
  }

  return (
    <Card className='transition-all hover:border-primary/40'>
      <CardHeader className='flex flex-row items-start justify-between space-y-0'>
        <div>
          <CardTitle className='line-clamp-1 text-lg'>
            {blog.title}
          </CardTitle>

          <p className='mt-1 text-sm text-muted-foreground'>
            {blog.status}
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              size='icon'
            >
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align='end'>
            <DropdownMenuItem asChild>
              <Link href={`/editor/${blog.id}`}>
                <PenSquare className='mr-2 h-4 w-4' />
                Edit
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              className='text-red-500'
              onClick={handleDelete}
            >
              <Trash2 className='mr-2 h-4 w-4' />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent>
        <p className='line-clamp-3 text-sm text-muted-foreground'>
          {blog.excerpt || 'No description available.'}
        </p>
      </CardContent>

      <CardFooter className='justify-between'>
        <div className='text-xs text-muted-foreground'>
          {new Date(
            blog.updated_at
          ).toLocaleDateString()}
        </div>

        <Button
          asChild
          size='sm'
        >
          <Link href={`/editor/${blog.id}`}>
            Open
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}