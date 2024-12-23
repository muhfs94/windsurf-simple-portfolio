"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "mamedium.xyz",
    description: "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a modern design with dark mode support and smooth animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/ui"],
    link: "https://mamedium.xyz",
    github: "https://github.com/muhfs94/portfolio"
  },
  {
    title: "Go Clean Architecture",
    description: "A clean architecture implementation in Go, demonstrating best practices for building scalable and maintainable applications.",
    technologies: ["Go", "PostgreSQL", "Docker", "Clean Architecture"],
    link: "#",
    github: "https://github.com/muhfs94/go-clean-arch"
  },
  {
    title: "Microservices Example",
    description: "Example implementation of microservices architecture using Spring Boot, showcasing service communication and deployment patterns.",
    technologies: ["Java", "Spring Boot", "Docker", "Kubernetes"],
    link: "#",
    github: "https://github.com/muhfs94/microservices-example"
  }
]

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills in web development,
          from frontend design to full-stack implementation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.title}</span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.link !== "#" && (
                      <Link 
                        href={project.link} 
                        target="_blank" 
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                    <Link 
                      href={project.github} 
                      target="_blank" 
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
