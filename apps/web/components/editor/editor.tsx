'use client'

import { useEffect, useState } from 'react'

import {
  EditorContent,
  useEditor,
} from '@tiptap/react'

import { useDebouncedCallback } from 'use-debounce'

import { editorExtensions } from './extensions'

import { EditorToolbar } from './editor-toolbar'
import { EditorHeader } from './editor-header'
import { createBrowserClient } from '@supabase/ssr'

interface Props {
  blog: any
}

export function Editor({
  blog,
}: Props) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  )

  const [title, setTitle] = useState(
    blog.title
  )

  const [saving, setSaving] =
    useState(false)

  const editor = useEditor({
    extensions: editorExtensions,

    content: blog.content_mdx
      ? JSON.parse(blog.content_mdx)
      : '',

    editorProps: {
      attributes: {
        class:
          'prose prose-neutral dark:prose-invert max-w-none min-h-[500px] focus:outline-none',
      },
    },
  })

  const saveContent =
    useDebouncedCallback(async () => {
      if (!editor) return

      setSaving(true)

      await supabase
        .from('blogs')
        .update({
          title,
          content_mdx: JSON.stringify(
            editor.getJSON()
          ),
        })
        .eq('id', blog.id)

      setSaving(false)
    }, 1000)

  useEffect(() => {
    if (!editor) return

    editor.on('update', saveContent)

    return () => {
      editor.off('update', saveContent)
    }
  }, [editor, saveContent])

  useEffect(() => {
    saveContent()
  }, [title])

  if (!editor) return null

  return (
    <div className='min-h-screen bg-background'>
      <EditorHeader
        title={title}
        setTitle={setTitle}
        saving={saving}
      />

      <EditorToolbar editor={editor} />

      <div className='mx-auto max-w-4xl px-8 py-12'>
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}