'use client'


import { Input } from '@ui/components/ui/input'
import { SaveStatus } from './save-status'

interface Props {
  title: string
  setTitle: (title: string) => void
  saving: boolean
}

export function EditorHeader({
  title,
  setTitle,
  saving,
}: Props) {
  return (
    <div className='sticky top-0 z-30 flex items-center justify-between border-b bg-background/80 px-8 py-4 backdrop-blur'>
      <Input
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        placeholder='Untitled Blog'
        className='max-w-2xl border-none bg-transparent text-3xl font-bold shadow-none focus-visible:ring-0'
      />

      <SaveStatus saving={saving} />
    </div>
  )
}