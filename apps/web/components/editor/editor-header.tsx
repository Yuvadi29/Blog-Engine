'use client'


import { SaveStatus } from './save-status'
import { EditorActions } from './editor-actions'
import { Input } from '@ui/components/ui/input'

interface Props {
  title: string
  setTitle: (title: string) => void
  saving: boolean
  editor: any
  blog: any
  excerpt: string
  setExcerpt: (value: string) => void
}

export function EditorHeader({
  title,
  setTitle,
  saving,
  editor,
  blog,
  excerpt,
  setExcerpt,
}: Props) {
  return (
    <div className='sticky top-0 z-30 border-b bg-background/80 backdrop-blur'>
      <div className='flex items-center justify-between px-8 py-4'>
        <Input
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder='Untitled Blog'
          className='max-w-2xl border-none bg-transparent text-3xl font-bold shadow-none focus-visible:ring-0'
        />

        <div className='flex items-center gap-4'>
          <SaveStatus saving={saving} />

          <EditorActions
            editor={editor}
            blog={blog}
            excerpt={excerpt}
            setExcerpt={setExcerpt}
          />
        </div>
      </div>
    </div>
  )
}