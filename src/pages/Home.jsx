import MatrixRainingCode from "../Components/MatrixRainingCode";
import { Navbar } from "../Components/Navbar";

export const Home = () => {
    return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
        
       {/* Effet BG Matrix */}
       <MatrixRainingCode />

       {/* Navbar */}
       <Navbar />
       
       {/* Contenu du site */}
        <div className="relative z-10 container mx-auto pt-20">
        </div>

       {/* Footer */}

    </div>
    );
};