'use client'

import { createBrowserClient } from '@supabase/ssr'
import { Avatar, AvatarFallback } from '@ui/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@ui/components/ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function UserDropdown() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      auth: {
        persistSession: true,
        detectSessionInUrl: true,
      },
    },
  )
  const router = useRouter()

  async function handleLogout() {
    await supabase.auth.signOut()

    router.push('/login')
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button>
          <Avatar className='h-9 w-9'>
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuItem>
          <User className='mr-2 h-4 w-4' />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className='mr-2 h-4 w-4' />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}