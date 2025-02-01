import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background to-background-light opacity-90" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-primary to-secondary text-white rounded-full">
              Desenvolvimento Web Profissional
            </span>
            <Sparkles className="w-6 h-6 text-secondary" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary text-transparent bg-clip-text">
              inova.js
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforme sua presença online com um site moderno e profissional. 
            Nós criamos experiências digitais que impressionam e convertem.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              size="xl"
              variant="cta"
              className="whitespace-normal sm:whitespace-nowrap h-[70px] sm:h-auto animate-[bounce_10s_cubic-bezier(0.4,0,0.2,1)_infinite] hover:brightness-110 transition-all duration-700 ease-in-out"
              onClick={() => window.location.href = 'https://wa.me/553199930883?text=Ol%C3%A1!%20Poderiam%20me%20enviar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20site%3F'}
            >
              Solicite um orçamento e ganhe análise gratuita
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 group transition-all duration-300"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Portfólio
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};