'use client'

import Link from 'next/link'

import { UserDropdown } from './user-dropdown'
import { Separator } from '@ui/components/ui/separator'
import { navigation } from 'lib/navigation'
import { NavItem } from './nav-item'

export function AppSidebar() {
  return (
    <aside className='hidden w-72 border-r bg-background lg:flex lg:flex-col'>
      <div className='flex h-16 items-center px-6'>
        <Link
          href='/dashboard'
          className='text-xl font-bold tracking-tight'
        >
          Blog Engine
        </Link>
      </div>

      <Separator />

      <div className='flex-1 space-y-2 p-4'>
        {navigation.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            title={item.title}
          />
        ))}
      </div>

      <div className='border-t p-4'>
        <UserDropdown />
      </div>
    </aside>
  )
}