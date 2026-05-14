'use client'


import { Button } from '@ui/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@ui/components/ui/sheet'
import { Textarea } from '@ui/components/ui/textarea'
import { Settings2 } from 'lucide-react'

interface Props {
  excerpt: string
  setExcerpt: (value: string) => void
}

export function EditorSettings({
  excerpt,
  setExcerpt,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>
          <Settings2 className='mr-2 h-4 w-4' />
          Settings
        </Button>
      </SheetTrigger>

      <SheetContent className='w-[500px] sm:max-w-[500px]'>
        <SheetHeader>
          <SheetTitle>
            Blog Settings
          </SheetTitle>
        </SheetHeader>

        <div className='mt-8 space-y-6'>
          <div className='space-y-2'>
            <label className='text-sm font-medium'>
              Excerpt
            </label>

            <Textarea
              value={excerpt}
              onChange={(e) =>
                setExcerpt(e.target.value)
              }
              placeholder='Short description for SEO and previews...'
              rows={5}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}