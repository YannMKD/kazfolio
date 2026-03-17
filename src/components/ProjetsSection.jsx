import { Description } from "@radix-ui/react-toast";
import { GithubIcon } from "./GithubIcon";
import portfolioimg from "../assets/projets-img/portfolio.png";
import trackstarimg from "../assets/projets-img/TRACKSTAR.png";
import python_thalesimg from "../assets/projets-img/python_thales.jpg";
import USPNimg from "../assets/projets-img/USPN.png";
import nuit_info2024img from "../assets/projets-img/nuit_info2024.png";


const projets = [
    {
        id: 1,
        title:"Portfolio",
        description:"Un portfolio personnel pour présenter mes compétences, mes projets et mon parcours professionnel de manière attrayante et interactive.",
        image: portfolioimg,
        tags:["React", "Tailwind CSS", "JavaScript"],
        githubUrl:"https://github.com/YannMKD/kazfolio.git",
    },

        {
        id: 2,
        title:"Trackstar",
        description:"Application mobile de recommandation musicale basée sur un système de swipe, qui apprend les préférences de l’utilisateur et génère automatiquement des playlists personnalisées.",
        image: trackstarimg,
        tags:["Flutter", "Dart", "Python","Sqlite"],
        githubUrl:"https://github.com/YannMKD/sae-but3-eco-mobile.git",
    },

    {
        id: 3,
        title:"Acquisition automatique de données 6G ",
        description:"Application d’analyse de brevets 6G automatisant la collecte, la structuration (CSV/Excel) et la visualisation des données dans un dashboard interactif.",
        image: python_thalesimg,
        tags:["Python", "Streamlit","Klaxoon","Google collab"],
        githubUrl:"https://github.com/YannMKD/SAE_Acquisition_Thales", 
    },

    {
        id: 4,
        title: "Enquête « Devenir des étudiants » (HCERES)",
        description: "Projet d’enquête mené en trinôme : conception et diffusion d’un questionnaire auprès des diplômés du BUT Informatique, puis analyse statistique des réponses avec Python (Pandas, Matplotlib) pour restitution au HCERES.",
        image: USPNimg,
        tags: ["Python", "Pandas", "Matplotlib", "Analyse de données"],
        githubUrl: "#",
    },

    {
        id: 5,
        title: "Youcean (Nuit de l’Info 2024)",
        description: "Application éducative collaborative créée lors de la Nuit de l’Info 2024, illustrant les liens entre le corps humain et l’océan pour sensibiliser à la préservation marine.",
        image: nuit_info2024img,
        tags: ["HTML", "CSS", "JavaScript", "Git"],
        githubUrl: "#",
    },

];

export const ProjetsSection = () => {
    return<section id="projets" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-10xl">
            <h2 className="text-4xl font-bold mb-12 text-center">
                {" "}
                Mes <span className="text-primary text-glow">
                    Projets
                </span>
            </h2>
            <p className="text-2xl font-semibold text-center max-w-2xl mx-auto mb-16">
                Retrouvez ici l’ensemble de mes projets, témoignant de mon <span className="text-primary text-glow">évolution</span> dans le monde de l'IT et de mon <span className="text-primary text-glow">apprentissage</span> de technologies modernes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projets.map((projet,key) => (
                    <div key={key} className="group bg-card rounded-xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={projet.image}
                                alt={projet.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projet.tags.map((tag)=>(
                                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-primary/30 text-primary/90 bg-primary/5 shadow-[0_0_10px_rgba(34,197,94,0.4)] hover:border-primary/60 hover:shadow-[0_0_20px_rgba(34,197,94,0.6)] transition-all duration-500">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-lg font-semibold mb-1 text-center">{projet.title}</h3>
                            <p className="text-muted text-sm mb-4 text-center ">
                                {projet.description}
                            </p>
                            <a 
                                href={projet.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center justify-center h-12 w-12 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_12px_#22c55e] group">
                                <GithubIcon size={24} className="transition-transform group-hover:scale-110" />
                            </a>
                        </div>
                                
                    </div> 
                ))}
            </div>
        </div> 
        
    </section>;
};