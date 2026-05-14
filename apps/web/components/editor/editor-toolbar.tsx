'use client'

import { Editor } from '@tiptap/react'
import { Button } from '@ui/components/ui/button'

import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Code2,
  Quote,
  Minus,
  CheckSquare,
  Table2,
} from 'lucide-react'

interface Props {
  editor: Editor | null
}

export function EditorToolbar({
  editor,
}: Props) {
  if (!editor) return null

  return (
    <div className='sticky top-[81px] z-20 flex flex-wrap gap-2 border-b bg-background/80 p-4 backdrop-blur'>
      <Button
        size='icon'
        variant={
          editor.isActive('bold')
            ? 'default'
            : 'outline'
        }
        onClick={() =>
          editor.chain().focus().toggleBold().run()
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
          editor.chain().focus().toggleItalic().run()
        }
      >
        <Italic className='h-4 w-4' />
      </Button>

      <Button
        size='icon'
        variant={
          editor.isActive('heading', {
            level: 1,
          })
            ? 'default'
            : 'outline'
        }
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 1,
            })
            .run()
        }
      >
        <Heading1 className='h-4 w-4' />
      </Button>

      <Button
        size='icon'
        variant={
          editor.isActive('heading', {
            level: 2,
          })
            ? 'default'
            : 'outline'
        }
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
        size='icon'
        variant={
          editor.isActive('heading', {
            level: 3,
          })
            ? 'default'
            : 'outline'
        }
        onClick={() =>
          editor
            .chain()
            .focus()
            .toggleHeading({
              level: 3,
            })
            .run()
        }
      >
        <Heading3 className='h-4 w-4' />
      </Button>

      <Button
        size='icon'
        variant={
          editor.isActive('bulletList')
            ? 'default'
            : 'outline'
        }
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
        size='icon'
        variant={
          editor.isActive('orderedList')
            ? 'default'
            : 'outline'
        }
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
        size='icon'
        variant={
          editor.isActive('taskList')
            ? 'default'
            : 'outline'
        }
        onClick={() =>
          editor.chain().focus().toggleTaskList().run()
        }
      >
        <CheckSquare className='h-4 w-4' />
      </Button>

      <Button
        size='icon'
        variant={
          editor.isActive('blockquote')
            ? 'default'
            : 'outline'
        }
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
        size='icon'
        variant='outline'
        onClick={() =>
          editor
            .chain()
            .focus()
            .setHorizontalRule()
            .run()
        }
      >
        <Minus className='h-4 w-4' />
      </Button>

      <Button
        size='icon'
        variant={
          editor.isActive('codeBlock')
            ? 'default'
            : 'outline'
        }
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

      <Button
        size='icon'
        variant='outline'
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({
              rows: 3,
              cols: 3,
              withHeaderRow: true,
            })
            .run()
        }
      >
        <Table2 className='h-4 w-4' />
      </Button>
    </div>
  )
}