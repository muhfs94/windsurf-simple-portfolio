"use client"

import { Button } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'
import { ArrowDown, FileText } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Software Engineer
        </h1>
        <TypeAnimation
          sequence={[
            'Building Innovative Solutions',
            1000,
            'Creating Scalable Web Applications',
            1000,
            'Passionate About Technology',
            1000
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-3xl text-foreground/80 font-medium"
          repeat={Infinity}
        />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link href="#projects" className="w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full sm:w-auto group">
              View Projects
              <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </Link>
          <Link 
            href="https://docs.google.com/document/d/17R5rcwemgYUXF8c-S2laHo1z1HdioR-bwR7V0T4rDKk/edit?usp=sharing" 
            target="_blank" 
            className="w-full sm:w-auto"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto group">
              View Resume
              <FileText className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
