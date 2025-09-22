'use client'
import { useTheme } from 'next-themes'
import React from 'react'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'

const ToggleMode = () => {
    const { theme, setTheme } = useTheme()
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className='bg-transparent border border-current hover:bg-accent hover:text-accent'>
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className='bg-popover text-popover-foreground px-10 py-2 rounded-md shadow-md border border-border mt-5'>
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ToggleMode