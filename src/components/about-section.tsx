"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Software Engineer with 5+ years of experience in full-stack development, specializing in building scalable web applications 
                  and microservices architectures. Passionate about creating efficient, maintainable code and implementing best practices 
                  in software development.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Experience Highlights</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Senior Software Engineer at Tokopedia</h4>
                      <p className="text-sm text-muted-foreground mb-2">2021 - Present</p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Led development of microservices-based e-commerce platform features</li>
                        <li>Improved system performance by 40% through optimization and caching strategies</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Software Engineer at Telkom Indonesia</h4>
                      <p className="text-sm text-muted-foreground mb-2">2019 - 2021</p>
                      <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        <li>Developed and maintained enterprise-level web applications</li>
                        <li>Implemented CI/CD pipelines and automated testing procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Education</h3>
                  <div>
                    <h4 className="font-medium">Bachelor of Computer Science</h4>
                    <p className="text-muted-foreground">Telkom University, 2019</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-primary/10">AWS Certified Developer</Badge>
                    <Badge variant="secondary" className="bg-primary/10">Google Cloud Professional</Badge>
                    <Badge variant="secondary" className="bg-primary/10">Kubernetes Administrator</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
