import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Full Stack E-Commerce Platform",
    description: "Developed a comprehensive e-commerce solution with microservices architecture",
    technologies: ["Next.js", "TypeScript", "Docker", "Kubernetes"],
    link: "#"
  },
  {
    title: "AI-Powered Task Management App",
    description: "Created an intelligent task management system with machine learning integration",
    technologies: ["React", "Python", "TensorFlow", "MongoDB"],
    link: "#"
  },
  {
    title: "Real-time Collaborative Whiteboard",
    description: "Built a scalable real-time collaboration tool with WebSocket technology",
    technologies: ["Node.js", "Socket.io", "React", "GraphQL"],
    link: "#"
  }
]

export function ProjectShowcase() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
              <a href={project.link} className="text-primary hover:underline">
                View Project
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
