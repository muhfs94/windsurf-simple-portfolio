"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  {
    title: "Full Stack E-Commerce Platform",
    description: "Developed a comprehensive e-commerce solution with microservices architecture",
    technologies: ["Next.js", "TypeScript", "Docker", "Kubernetes"],
    link: "#",
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    title: "AI-Powered Task Management App",
    description: "Created an intelligent task management system with machine learning integration",
    technologies: ["React", "Python", "TensorFlow", "MongoDB"],
    link: "#",
    github: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "Built a scalable real-time collaboration tool with WebSocket technology",
    technologies: ["Node.js", "Socket.io", "React", "GraphQL"],
    link: "#",
    github: "https://github.com/yourusername/whiteboard"
  }
]

export function ProjectShowcase() {
  return (
    <section id="projects" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.link} className="text-primary hover:underline">
                    Live Demo
                  </Link>
                  <Link href={project.github} className="text-muted-foreground hover:text-primary hover:underline">
                    GitHub
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
