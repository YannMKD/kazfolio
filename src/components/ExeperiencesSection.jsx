

const experiences = [
  {
    title: "Employé de Caisse",
    company: "Carrefour",
    type: "JOB", // Badge qui s'affichera en haut à gauche
    date: "Depuis Juillet 2025",
    location: "Paris (75017), France",
    description: "Accueil, encaissement des clients et gestion de la caisse. Optimisation du flux client en période de forte affluence.",
    skills: ["Relation Client", "Gestion de Caisse"],
  },
  {
    title: "Stage en développement Fullstack",
    company: "E-petitpas.pro",
    type: "STAGE",
    date: "Juillet 2025 - Août 2025",
    location: "Argenteuil (95018), France",
    description: "Implémentation de fonctionnalités (front et back) pour une plateforme e-learning. Travail sur l'automatisation des tests et des processus de déploiement.",
    skills: ["React", "Node.js", "CI/CD", "Testing"],
  },
  {
    title: "Manutentionnaire",
    company: "Heppner",
    type: "JOB",
    date: "Été 2024",
    location: "Saint-Ouen-l'Aumône (95310), France",
    description: "Logistique - Emballage et filmage de matériel stratégique destiné aux Jeux Olympiques et Paralympiques de Paris 2024.",
    skills: ["Logistique", "Organisation", "Travail d'équipe"],
  }
];

export const Experiences = () => {
  return (
    <section id="xp" className="py-20 px-6 bg-transparent relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          <span className="text-primary text-glow">Expériences </span>Professionnelles
        </h2>

        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Coté vide */}
                <div className="hidden md:block w-1/2"></div>

                {/* Point sur la ligne */}
                <div className="z-20 flex items-center justify-center w-8 h-8 bg-black border-2 border-primary rounded-full shadow-[0_0_10px_#22c55e] absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Carte d'expérience */}
                <div className="w-full md:w-1/2 px-8">
                  <div className="p-5 gradient-border card-hover opacity-90 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all">
                    
                    {/* BADGE TYPE D'EXPÉRIENCE */}
                    <div className="mb-4">
                      <span className="bg-primary text-green-950 text-[10px] font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.4)] tracking-wider">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary text-glow mb-1">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <span className="text-white font-medium">{exp.company}</span>
                        <span className="text-sm text-primary/80 font-mono">{exp.date}</span>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 flex items-center">
                      <span className="mr-2">📍</span> {exp.location}
                    </p>

                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.skills.map((skill, sIndex) => (
                        <span key={sIndex} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-primary/30 text-primary/90 bg-primary/5 shadow-[0_0_10px_rgba(34,197,94,0.4)] hover:border-primary/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-500">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};