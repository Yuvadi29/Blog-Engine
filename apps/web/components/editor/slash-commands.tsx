'use client'

import { Editor } from '@tiptap/react'

import {
  Heading1,
  Heading2,
  List,
  Code2,
  Quote,
} from 'lucide-react'

interface Props {
  editor: Editor
}

export function SlashCommands({
  editor,
}: Props) {
  const commands = [
    {
      title: 'Heading 1',
      icon: Heading1,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleHeading({
            level: 1,
          })
          .run(),
    },

    {
      title: 'Heading 2',
      icon: Heading2,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleHeading({
            level: 2,
          })
          .run(),
    },

    {
      title: 'Bullet List',
      icon: List,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleBulletList()
          .run(),
    },

    {
      title: 'Code Block',
      icon: Code2,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleCodeBlock()
          .run(),
    },

    {
      title: 'Quote',
      icon: Quote,
      command: () =>
        editor
          .chain()
          .focus()
          .toggleBlockquote()
          .run(),
    },
  ]

  return (
    <div className='w-72 rounded-xl border bg-background p-2 shadow-2xl'>
      {commands.map((item) => (
        <button
          key={item.title}
          onClick={item.command}
          className='flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-muted'
        >
          <item.icon className='h-4 w-4' />

          <span className='text-sm'>
            {item.title}
          </span>
        </button>
      ))}
    </div>
  )
}