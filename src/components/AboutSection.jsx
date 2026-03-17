import Photo from "../assets/Photo-Pro.JPG";
import Cv from "../assets/CV_YANN_DIARRASSOUBA_STAGE.pdf";

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
                        Passionné par l'algorithmie et la résolution de problèmes, j'ai eu la chance de forger ma rigueur en CPGE avant de trouver ma voie dans l'informatique. Actuellement en troisième année, j'attache une importance particulière à la qualité du code, tout en m'intéressant de plus en plus à la sécurisation des architectures Cloud pour bâtir des systèmes robustes de bout en bout. Mon objectif : intégrer un cycle ingénieur pour me spécialiser dans les nouvelles technologies de l'IA et de la Data. Investi et adaptable, je recherche un stage de fin d'études me permettant de contribuer à des projets innovants tout en continuant à progresser sur ces enjeux techniques.    
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
};