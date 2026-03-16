

const formations = [
  {
    title: "Master Informatique",
    date: "Septembre 2024 - En cours",
    location: "Université de Bretagne Occidentale",
    description: "Spécialisation en Technologie de l'Information et Ingénierie Logiciel.",
    notions: ["Algorithme", "Architecture MVC", "Gestion de projet Agile"],
  },
  {
    title: "Licence Informatique",
    date: "Septembre 2020 - Juin 2024",
    location: "UBO - UFR Sciences et Techniques, Brest",
    description: "Formation généraliste en informatique et systèmes.",
    notions: ["Langage de programmation", "Fonctionnement d'un OS", "Réseaux"],
  }
];

export const Formations = () => {
  return (
    <section id="formations" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Mes <span className="text-primary text-glow">Formations</span>
        </h2>

        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30 shadow-[0_0_15px_rgba(34,197,94,0.2)]"></div>

          <div className="space-y-12">
            {formations.map((item, index) => (
              <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                
                {/* Coté vide (pour l'équilibre) */}
                <div className="hidden md:block w-1/2"></div>

                {/* Point sur la ligne */}
                <div className="z-20 flex items-center justify-center w-8 h-8 bg-black border-2 border-primary rounded-full shadow-[0_0_10px_#22c55e] absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Carte de formation */}
                <div className="w-full md:w-1/2 px-8">
                  <div className="p-5 space-y-6 gradient-border card-hover opacity-90 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all"> 
                    <h3 className="text-xl font-bold text-primary text-glow mb-1">{item.title}</h3>
                    <p className="text-sm text-primary/80 mb-2 font-mono">{item.date}</p>
                    <p className="text-gray-400 text-sm mb-4 flex items-center">
                      <span className="mr-2">📍</span> {item.location}
                    </p>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {item.notions.map((notion, nIndex) => (
                        <span key={nIndex} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-primary/30 text-primary/90 bg-primary/5 shadow-[0_0_10px_rgba(34,197,94,0.4)] hover:border-primary/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-500">
                          {notion}
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