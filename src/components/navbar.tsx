"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 hover:to-primary/80 transition-colors"
        >
          mamedium.xyz
        </Link>
        
        <div className="flex items-center gap-6">
          <Link 
            href="#about" 
            className="hover:text-primary transition-colors hidden sm:block"
          >
            About
          </Link>
          <Link 
            href="#projects" 
            className="hover:text-primary transition-colors hidden sm:block"
          >
            Projects
          </Link>
          <Link 
            href="#skills" 
            className="hover:text-primary transition-colors hidden sm:block"
          >
            Skills
          </Link>
          <Link 
            href="#contact" 
            className="hover:text-primary transition-colors hidden sm:block"
          >
            Contact
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-primary/10"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
