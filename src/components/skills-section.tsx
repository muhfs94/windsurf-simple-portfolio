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
      items: ['React', 'Next.js', 'TailwindCSS', 'HTML/CSS'],
      icon: '🎨'
    },
    { 
      category: 'Backend',
      items: ['Node.js', 'Express', 'Django', 'Spring Boot'],
      icon: '⚙️'
    },
    { 
      category: 'Tools & DevOps',
      items: ['Git', 'Docker', 'AWS', 'Linux', 'CI/CD'],
      icon: '🛠️'
    },
  ];

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <Card key={skillGroup.category} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span>{skillGroup.icon}</span>
                  {skillGroup.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      • {skill}
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
