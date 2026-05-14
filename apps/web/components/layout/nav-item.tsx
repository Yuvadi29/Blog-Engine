'use client'

import { cn } from 'lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


export function NavItem({
  href,
  icon: Icon,
  title,
}: {
  href: string
  icon: any
  title: string
}) {
  const pathname = usePathname()

  const active = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all',
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground'
      )}
    >
      <Icon className='h-4 w-4' />
      {title}
    </Link>
  )
}