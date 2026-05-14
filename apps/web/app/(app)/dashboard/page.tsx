import { Card, CardContent } from "@ui/components/ui/card";

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight'>
          Dashboard
        </h1>

        <p className='text-muted-foreground'>
          Manage your blogs and publishing workflow.
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
        <Card>
          <CardContent className='p-6'>
            <div className='text-sm text-muted-foreground'>
              Total Blogs
            </div>

            <div className='mt-2 text-3xl font-bold'>
              0
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='text-sm text-muted-foreground'>
              Drafts
            </div>

            <div className='mt-2 text-3xl font-bold'>
              0
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='text-sm text-muted-foreground'>
              Published
            </div>

            <div className='mt-2 text-3xl font-bold'>
              0
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className='p-6'>
            <div className='text-sm text-muted-foreground'>
              Views
            </div>

            <div className='mt-2 text-3xl font-bold'>
              0
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}