import { ThemeToggle } from './theme-toggle'
import { UserDropdown } from './user-dropdown'

export function AppNavbar() {
  return (
    <header className='sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur'>
      <div>
        <h1 className='text-lg font-semibold'>
          Dashboard
        </h1>
      </div>

      <div className='flex items-center gap-3'>
        <ThemeToggle />
        <UserDropdown />
      </div>
    </header>
  )
}