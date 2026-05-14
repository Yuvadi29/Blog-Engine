import { Editor } from '@tiptap/react'

interface Props {
  editor: Editor | null
}

export function WordCount({
  editor,
}: Props) {
  if (!editor) return null

  const words =
    editor.storage.characterCount.words()

  const characters =
    editor.storage.characterCount.characters()

  const readingTime = Math.ceil(words / 200)

  return (
    <div className='flex items-center gap-4 text-sm text-muted-foreground'>
      <span>{words} words</span>

      <span>{characters} characters</span>

      <span>{readingTime} min read</span>
    </div>
  )
}