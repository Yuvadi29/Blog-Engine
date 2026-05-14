import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerClient } from '@supabase/ssr';
import { AppSidebar } from 'components/layout/app-sidebar';
import { AppNavbar } from 'components/layout/app-navbar';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className='flex min-h-screen bg-background'>
      <AppSidebar />

      <div className='flex flex-1 flex-col'>
        <AppNavbar />

        <main className='flex-1 p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}