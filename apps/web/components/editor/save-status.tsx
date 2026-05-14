interface Props {
  saving: boolean
}

export function SaveStatus({
  saving,
}: Props) {
  return (
    <div className='text-sm text-muted-foreground'>
      {saving ? 'Saving...' : 'Saved'}
    </div>
  )
}