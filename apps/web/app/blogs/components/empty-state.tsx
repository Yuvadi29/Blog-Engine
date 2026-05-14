import { FileText } from 'lucide-react'

export function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center rounded-2xl border border-dashed py-20 text-center'>
      <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-muted'>
        <FileText className='h-8 w-8 text-muted-foreground' />
      </div>

      <h2 className='mt-6 text-xl font-semibold'>
        No blogs yet
      </h2>

      <p className='mt-2 max-w-sm text-sm text-muted-foreground'>
        Start writing your first blog and build your
        personal publishing engine.
      </p>
    </div>
  )
}