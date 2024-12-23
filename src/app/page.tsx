import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectShowcase } from "@/components/project-showcase"
import { SkillsSection } from "@/components/skills-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectShowcase />
      <SkillsSection />
      <ContactForm />
    </main>
  )
}
