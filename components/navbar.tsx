import React from 'react'
import { Button } from './ui/button'
import ToggleMode from './toggle-mode'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center dark:text-black justify-between p-4 dark:bg-foreground'>
      <Link href="/" className='text-2xl font-bold'>Next-Auth</Link>
      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <ToggleMode />
        <Link href="/sign-in">
          <Button variant="outline" className='bg-transparent border border-current hover:bg-accent hover:text-accent'>Sign In</Button>
        </Link>
        <Link href="/register">
          <Button className='bg-accent text-accent-foreground hover:bg-accent/80'>Register</Button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar