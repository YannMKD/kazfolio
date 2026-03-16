import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Si tu as gardé le composant GithubIcon personnalisé de tout à l'heure, utilise-le ici.
// Sinon, on utilise le Github standard de Lucide.

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Transmission réussie",
        description: "Votre message a été envoyé via le réseau sécurisé.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-5xl">
        {/* Titre style Matrix */}
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Initialiser le <span className="text-primary text-glow">Contact</span>
        </h2>

        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto font-mono text-sm">
          {">"} En attente de connexion... Prêt pour de nouvelles collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* INFOS DE CONTACT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Informations</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <a href="mailto:yann.diarr@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
                    yann.diarr@gmail.com
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white">Localisation</h4>
                  <p className="text-foreground/60">Île-de-France, France</p>
                </div>
              </div>
            </div>

            {/* RESEAUX SOCIAUX (Tes boutons ronds) */}
            <div className="pt-8 border-t border-primary/10">
              <h4 className="font-medium mb-6 text-white text-center md:text-left">Réseaux Sécurisés</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/ton-profil" 
                  target="_blank"
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_#22c55e]"
                >
                  <Linkedin size={20} />
                </a>
                {/* GitHub */}
                <a 
                  href="https://github.com/ton-github" 
                  target="_blank"
                  className="flex items-center justify-center h-12 w-12 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_#22c55e]"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* FORMULAIRE  */}
          <div className="p-8 gradient-border opacity-90 rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center">Envoyer un Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-primary mb-2 ml-1">Nom</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-black/20 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-primary mb-2 ml-1">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-black/20 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-primary mb-2 ml-1">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-black/20 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Initialisation de la requête..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-primary text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_#22c55e] disabled:opacity-50"
              >
                {isSubmitting ? "Transmission..." : "Envoyer"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};