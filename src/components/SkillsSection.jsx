import React from 'react';
import { Brain, Database, Cloud, BarChart3, Code2 } from 'lucide-react';

const skillCategories = [
    {
    title: "Développement et Programmation", // Titre mis à jour
    icon: <Code2 className="text-primary" size={24} />,
    // Section "Langages et frameworks" du screen
    skills: ["JavaScript", "React", "Node.js","Express", "SQL","Tailwind","HTML", "CSS", "Dart", "Flutter", "Java"]
    },
    {
    title: "Base de données",
    icon: <Database className="text-primary" size={24} />,
    // Fusion des sections "Bases de données" et "Systèmes" du screen
    skills: ["MongoDB", "Redis", "SQL","Supabase", "PostgreSQL","Prisma", "MCD/MLD", "UML"]
  },
  {
    title: "Outils & Visualisation",
    icon: <BarChart3 className="text-primary" size={24} />,
    // Section Outils du screen
    skills: ["Python","Matplotlib","Streamlit","R","Power BI", "Klaxoon", "Word", "Excel", "Photoshop"]
  },
  {
    title: "DevOps / CI-CD",
    icon: <Cloud className="text-primary" size={24} />,
    // Section DevOps du screen
    skills: ["Jenkins", "Docker","GitHub", "Linux", "Windows"]
  } 
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-transparent relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Compétences <span className="text-primary text-glow">Techniques</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group p-6 gradient-border opacity-90 card-hover transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:shadow-[0_0_25px_rgba(34,197,94,0.5)]"
            >
              {/* Header de la carte */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Liste des Skills (Pills) */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex} 
                    className="text-[11px] uppercase font-medium px-3 py-1 rounded-md border border-primary/10 bg-primary/5 text-foreground/80 hover:border-primary/50 hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};