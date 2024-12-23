import { Button } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation'

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
        <Button variant="default">View Projects</Button>
        <Button variant="outline">Download CV</Button>
      </div>
    </section>
  )
}
