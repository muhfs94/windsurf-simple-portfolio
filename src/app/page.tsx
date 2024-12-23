import { HeroSection } from '@/components/hero-section'
import { ProjectShowcase } from '@/components/project-showcase'
import { SkillsSection } from '@/components/skills-section'
import { ContactForm } from '@/components/contact-form'

export default function Home() {
  return (
    <div className="space-y-16">
      <HeroSection />
      <ProjectShowcase />
      <SkillsSection />
      <ContactForm />
    </div>
  )
}
