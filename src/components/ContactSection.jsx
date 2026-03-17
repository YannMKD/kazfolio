import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser'; // 1. On importe EmailJS

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 2. Préparation des paramètres pour ton template EmailJS
    const templateParams = {
      from_name: e.target.name.value,   // Récupère la valeur de l'input name="name"
      from_email: e.target.email.value, // Récupère la valeur de l'input name="email"
      message: e.target.message.value,   // Récupère la valeur du textarea name="message"
    };

    // 3. Envoi réel via tes variables d'environnement
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      toast({
        title: "TRANSMISSION RÉUSSIE",
        description: "Votre message a été crypté et envoyé vers la Matrice.",
      });
      e.target.reset(); // Vide le formulaire après l'envoi
    })
    .catch((error) => {
      console.error("Erreur de transmission:", error);
      toast({
        title: "ÉCHEC DU SIGNAL",
        description: "Une interférence a bloqué l'envoi. Réessayez.",
        variant: "destructive",
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-transparent">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Initialiser le <span className="text-primary text-glow">Contact</span>
        </h2>

        <p className="text-center text-foreground/60 mb-16 max-w-2xl mx-auto font-mono text-sm">
          {">"} En attente de connexion... Prêt pour de nouvelles collaborations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* INFOS DE CONTACT */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-primary font-mono">Informations</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono uppercase text-xs">Email</h4>
                  <a href="mailto:yanndiarrassouba@gmail.com" className="hover:text-primary transition-colors">
                    yanndiarrassouba@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-all">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white font-mono uppercase text-xs">Localisation</h4>
                  <p >Île-de-France, France</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-primary/10">
              <h4 className="font-medium mb-6 text-white text-center md:text-left font-mono">Réseaux Sécurisés</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/yann-diarrassouba-440434349" target="_blank" className="flex items-center justify-center h-12 w-12 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_#22c55e]">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/YannMKD" target="_blank" className="flex items-center justify-center h-12 w-12 rounded-full border border-primary/30 bg-primary/5 text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,197,94,0.2)] hover:shadow-[0_0_20px_#22c55e]">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="p-8 border border-primary/20 opacity-95 backdrop-blur-sm rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.1)]">
            <h3 className="text-2xl font-semibold mb-6 text-white text-center font-mono uppercase tracking-tighter">Envoyer un Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs uppercase tracking-widest text-primary mb-2 ml-1 font-mono">Nom</label>
                <input
                  name="name" // AJOUTÉ : Pour EmailJS
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-black/40 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                  placeholder="Thomas Anderson"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-primary mb-2 ml-1 font-mono">Email</label>
                <input
                  name="email" // AJOUTÉ : Pour EmailJS
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-black/40 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all font-mono"
                  placeholder="neo@example.com"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-primary mb-2 ml-1 font-mono">Message</label>
                <textarea
                  name="message" // AJOUTÉ : Pour EmailJS
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-primary/20 bg-black/40 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none font-mono"
                  placeholder="Initialisation de la requête..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg bg-primary text-black font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.3)] hover:shadow-[0_0_25px_#22c55e] disabled:opacity-50"
              >
                {isSubmitting ? "Transmission en cours..." : "Lancer l'envoi"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};