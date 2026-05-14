export default function Loading() {
  return (
    <div className='space-y-4'>
      <div className='h-10 w-48 animate-pulse rounded bg-muted' />

      <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className='h-48 animate-pulse rounded-2xl bg-muted'
          />
        ))}
      </div>
    </div>
  )
}