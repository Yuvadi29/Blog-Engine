import { WordCount } from './word-count'
import { PublishButton } from './publish-button'
import { EditorSettings } from './editor-settings'

interface Props {
  editor: any
  blog: any
  excerpt: string
  setExcerpt: (value: string) => void
}

export function EditorActions({
  editor,
  blog,
  excerpt,
  setExcerpt,
}: Props) {
  return (
    <div className='flex items-center gap-3'>
      <WordCount editor={editor} />

      <EditorSettings
        excerpt={excerpt}
        setExcerpt={setExcerpt}
      />

      <PublishButton blogId={blog.id} />
    </div>
  )
}