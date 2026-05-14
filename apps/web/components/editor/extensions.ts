import StarterKit from '@tiptap/starter-kit'

import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'

import CharacterCount from '@tiptap/extension-character-count'

import TextAlign from '@tiptap/extension-text-align'

import Highlight from '@tiptap/extension-highlight'

import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

import HorizontalRule from '@tiptap/extension-horizontal-rule'

import { Table } from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'

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
    placeholder: 'Write something amazing...',
  }),

  Typography,

  CharacterCount,

  Highlight,

  HorizontalRule,

  TaskList,

  TaskItem.configure({
    nested: true,
  }),

  Table.configure({
    resizable: true,
  }),

  TableRow,
  TableHeader,
  TableCell,

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