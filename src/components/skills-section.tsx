import React from 'react';

export function SkillsSection() {
  const skills = [
    { category: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'TailwindCSS', 'HTML/CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'Spring Boot'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Linux'] },
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <li key={skill} className="text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
