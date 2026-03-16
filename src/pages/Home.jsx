import { Navbar } from "../Components/Navbar";
import {HeroSection} from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { Formations } from "../Components/FormationsSection";
import MatrixRainingCode from "../Components/MatrixRainingCode";
import { Experiences } from "../Components/ExeperiencesSection";
import { ProjetsSection } from "../Components/ProjetsSection";
import { SkillsSection } from "../Components/SkillsSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../Components/ContactSection";

export const Home = () => {
    return (
    <div className="min-h-screen bg-transparent text-foreground overflow-x-hidden relative">
        
       {/* Navbar */}
       <Navbar />
       
       {/* Contenu du site */}
        <main>
            <HeroSection />
            <AboutSection />
            <Formations />
            <MatrixRainingCode /> 
            <Experiences />
            <ProjetsSection />
            <SkillsSection />
            <ContactSection />
        </main>

       {/* Footer */}

    </div>
    );
};