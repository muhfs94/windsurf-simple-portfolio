import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  const skills = [
    { 
      category: 'Languages',
      items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'],
      icon: '💻'
    },
    { 
      category: 'Frontend',
      items: ['React', 'Next.js', 'TailwindCSS', 'HTML/CSS', 'Redux'],
      icon: '🎨'
    },
    { 
      category: 'Backend',
      items: ['Node.js', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
      icon: '⚙️'
    },
    { 
      category: 'Tools & DevOps',
      items: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD'],
      icon: '🛠️'
    },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          Skills & Technologies
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of technologies and tools I work with to build modern, scalable applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup) => (
            <Card 
              key={skillGroup.category} 
              className="group hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">{skillGroup.icon}</span>
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li 
                      key={skill} 
                      className="text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-2"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/60"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
