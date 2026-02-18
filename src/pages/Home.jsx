import MatrixRainingCode from "../Components/MatrixRainingCode";
import { Navbar } from "../Components/Navbar";
import {HeroSection} from "../Components/HeroSection";

export const Home = () => {
    return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
        
       {/* Effet BG Matrix */}
       <MatrixRainingCode />

       {/* Navbar */}
       <Navbar />
       
       {/* Contenu du site */}
        <main>
            <HeroSection />
        </main>

       {/* Footer */}

    </div>
    );
};