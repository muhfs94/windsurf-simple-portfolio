"use client"

import { Button } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
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
        className="text-2xl md:text-3xl text-primary mb-8"
        repeat={Infinity}
      />
      <div className="flex space-x-4">
        <Link href="#projects">
          <Button variant="default">View Projects</Button>
        </Link>
        <Button variant="outline" onClick={() => window.open('/resume.pdf', '_blank')}>
          Download CV
        </Button>
      </div>
    </section>
  )
}
