import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary via-background to-background relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
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
            <span className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Desenvolvimento Web Profissional
            </span>
            <Sparkles className="w-6 h-6 text-primary" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
              inova.js
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforme sua presença online com um site moderno e profissional. 
            Nós criamos experiências digitais que impressionam e convertem.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white group"
              onClick={() => window.location.href = 'https://w.app/inovajs'}
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-700 hover:bg-gray-800"
              onClick={() => {
                const portfolioSection = document.querySelector('#portfolio');
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Ver Portfólio
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { label: "Projetos Entregues", value: "100+" },
              { label: "Anos de Experiência", value: "5+" },
              { label: "Clientes Satisfeitos", value: "95%" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};