import StarterKit from '@tiptap/starter-kit'

import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

import CharacterCount from '@tiptap/extension-character-count'

import TextAlign from '@tiptap/extension-text-align'

import Highlight from '@tiptap/extension-highlight'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

import { createLowlight } from 'lowlight'

import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'

const lowlight = createLowlight()

lowlight.register('javascript', javascript)
lowlight.register('typescript', typescript)
lowlight.register('html', xml)
lowlight.register('css', css)

export const editorExtensions = [
  StarterKit.configure({
    codeBlock: false,
  }),

  Placeholder.configure({
    placeholder: 'Start writing your story...',
  }),

  Typography,

  CharacterCount,

  Highlight,

  TextAlign.configure({
    types: ['heading', 'paragraph'],
  }),

  Link.configure({
    openOnClick: false,
  }),

  Image.configure({
    inline: false,
  }),

  CodeBlockLowlight.configure({
    lowlight,
  }),
]