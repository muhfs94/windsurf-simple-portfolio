import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/muhfs94"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 hover:scale-110"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/muhfs94/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors duration-200 hover:scale-110"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:muhfs94@gmail.com"
              className="hover:text-primary transition-colors duration-200 hover:scale-110"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} mamedium.xyz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
