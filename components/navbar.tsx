'use client'
import React from 'react'
import { Button } from './ui/button'
import ToggleMode from './toggle-mode'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Navbar = () => {
  const { data: session, status } = useSession()
  return (
    <nav className="flex items-center justify-between px-6 py-3 shadow bg-background dark:bg-gray-800">
      <div className="text-xl font-bold">
        <Link href="/">Next-Auth</Link>
      </div>
        
      <div className="flex items-center gap-4">
        <ToggleMode />
        {status === "loading" && <p>Loading...</p>}

        {status === "unauthenticated" && (
          <Link href="/sign-in">
            <Button variant="outline">Login</Button>
          </Link>
        )}

        {status === "authenticated" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage src={session.user?.image || ""} alt={session.user?.name || ""} />
                <AvatarFallback>
                  {session.user?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                {session.user?.name || "User"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem disabled>
                {session.user?.email}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  )
}

export default Navbar