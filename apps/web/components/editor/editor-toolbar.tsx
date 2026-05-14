'use client'

import { Editor } from '@tiptap/react'
import { Button } from '@ui/components/ui/button'


import {
  Bold,
  Italic,
  Heading2,
  List,
  ListOrdered,
  Code2,
  Quote,
} from 'lucide-react'

interface Props {
  editor: Editor | null
}

export function EditorToolbar({
  editor,
}: Props) {
  if (!editor) return null

  return (
    <div className='sticky top-16 z-20 flex flex-wrap gap-2 border-b bg-background/80 p-4 backdrop-blur'>
      <Button
        variant={
          editor.isActive('bold')
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor.chain().focus().toggleBold().run()
        }
      >
        <Bold className='h-4 w-4' />
      </Button>

      <Button
        variant={
          editor.isActive('italic')
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor.chain().focus().toggleItalic().run()
        }
      >
        <Italic className='h-4 w-4' />
      </Button>

      <Button
        variant={
          editor.isActive('heading', {
            level: 2,
          })
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 2,
            })
            .run()
        }
      >
        <Heading2 className='h-4 w-4' />
      </Button>

      <Button
        variant={
          editor.isActive('bulletList')
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBulletList()
            .run()
        }
      >
        <List className='h-4 w-4' />
      </Button>

      <Button
        variant={
          editor.isActive('orderedList')
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleOrderedList()
            .run()
        }
      >
        <ListOrdered className='h-4 w-4' />
      </Button>

      <Button
        variant={
          editor.isActive('blockquote')
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleBlockquote()
            .run()
        }
      >
        <Quote className='h-4 w-4' />
      </Button>

      <Button
        variant={
          editor.isActive('codeBlock')
            ? 'default'
            : 'outline'
        }
        size='icon'
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleCodeBlock()
            .run()
        }
      >
        <Code2 className='h-4 w-4' />
      </Button>
    </div>
  )
}