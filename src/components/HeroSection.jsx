import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return <section id="hero" 
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        
        <div className=" container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in ">Bonjour, je suis</span>
                    <span className=" text-glow text-primary opacity-0 animate-fade-in-delay-1 "> Yann</span>
                </h1>
                <p className="text-2xl font-bold opacity-0 animate-fade-in-delay-2">
                    Étudiant en <span className=" text-glow text-primary ">3e année de BUT Informatique</span>, passionné par l'algorithmie, le développement informatique et les méthodes d'automatisation, je cherche actuellement à appliquer mes compétences à travers <span className=" text-glow text-primary ">un stage de 14 à 16 semaines.</span>
                </p>
            </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className=" mt-10 icon-glow" size={32} />
            </div>
  
    </section>
    }
