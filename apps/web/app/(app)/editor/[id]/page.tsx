interface EditorPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditorPage({
  params,
}: EditorPageProps) {
  const { id } = await params

  return (
    <div className='space-y-4'>
      <h1 className='text-3xl font-bold'>
        Editor
      </h1>

      <p className='text-muted-foreground'>
        Blog ID: {id}
      </p>
    </div>
  )
}