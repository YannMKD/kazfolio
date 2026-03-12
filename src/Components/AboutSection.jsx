import Photo from "../assets/Photo-Pro.JPG";
import Cv from "../assets/CV_YANN_DIARRASSOUBA.pdf";

export const AboutSection = () => {
    return(
    <section id="about" className="py-24 px-24 relative">
        {""}
        <div  className="container mx-auto max-w-10xl">
            <h2 className="text-4xl font-bold mb-12 text-center">
            <span className ="text-glow text-primary">À propos de</span> moi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 items-center">
                {/* gauche : photo */}
                <div className="flex flex-col justify-center md:justify-start gap-8" >
                    <img
                        src={Photo}
                        alt="Photo de profil"
                        className="w-[350px] h-auto aspect-square object-cover rounded-full shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:border-primary/60 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-500"
                    />
                            <a 
                                href={Cv} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="md:ml-20"
                            >       
                        <button className="cosmic-button">
                            Télécharger mon CV
                        </button>
                    </a>
                </div>
                {/* droite : texte */}
                <div className="space-y-6 gradient-border card-hover opacity-90 shadow-[0_0_15px_rgba(34,197,94,0.4)] ">
                    <p className="text-xl font-semibold p-5 text-justify">
                        Passionné depuis mon plus jeune âge par l'informatique, j'ai toujours été fasciné par la manière dont les algorithmes et les systèmes informatiques peuvent résoudre des problèmes complexes. Actuellement étudiant en 3e année de BUT Informatique, je me spécialise dans le développement logiciel, l'algorithmie et les méthodes d'automatisation. Je suis constamment à la recherche de nouvelles opportunités pour appliquer mes compétences et approfondir mes connaissances, notamment à travers un stage de 14 à 16 semaines qui me permettra de contribuer à des projets innovants tout en continuant à apprendre et à évoluer dans le domaine de l'informatique.    
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};