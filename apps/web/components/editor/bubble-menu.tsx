'use client'

import { Editor } from '@tiptap/react'
import { BubbleMenu as TiptapBubbleMenu } from '@tiptap/react/menus'
import { Button } from '@ui/components/ui/button'


import {
  Bold,
  Italic,
  Code2,
} from 'lucide-react'

interface Props {
  editor: Editor
}

export function BubbleMenu({
  editor,
}: Props) {
  return (
    <TiptapBubbleMenu
      editor={editor}
      
    >
      <div className='flex items-center gap-2 rounded-xl border bg-background p-2 shadow-lg'>
        <Button
          size='icon'
          variant={
            editor.isActive('bold')
              ? 'default'
              : 'outline'
          }
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
        >
          <Bold className='h-4 w-4' />
        </Button>

        <Button
          size='icon'
          variant={
            editor.isActive('italic')
              ? 'default'
              : 'outline'
          }
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
        >
          <Italic className='h-4 w-4' />
        </Button>

        <Button
          size='icon'
          variant={
            editor.isActive('code')
              ? 'default'
              : 'outline'
          }
          onClick={() =>
            editor
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
        >
          <Code2 className='h-4 w-4' />
        </Button>
      </div>
    </TiptapBubbleMenu>
  )
}