import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },  
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return (
        <nav className={cn(
            "fixed w-full z-50 transition-all duration-300", 
            isScrolled ? "py-3 bg-background/80 backdrop-blur-sm shadow-xs" : "py-5 bg-transparent"
        )}
        >
            <div className="container mx-auto flex justify-between items-center ">
                <a className="text-xl font-bold flex items-center">
                    <span className="relative z-10">
                    <span className="text-2xl font-bold text-glow text-primary">Yann Diarrassouba </span>
                    <span className="text-white text-glow">Portfolio</span>
                    </span> 
                </a>
                </div>
        </nav>
    );
};
