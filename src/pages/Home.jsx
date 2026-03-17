import { Navbar } from "../components/Navbar";
import {HeroSection} from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { Formations } from "../components/FormationsSection";
import MatrixRainingCode from "../components/MatrixRainingCode";
import { Experiences } from "../components/ExeperiencesSection";
import { ProjetsSection } from "../components/ProjetsSection";
import { SkillsSection } from "../components/SkillsSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../components/ContactSection";

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