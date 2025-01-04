import { motion } from "framer-motion";
import { Code, Smartphone, Zap } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Desenvolvimento Personalizado",
    description: "Sites únicos que refletem a identidade da sua marca",
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Experiência perfeita em qualquer dispositivo",
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Carregamento rápido e otimização SEO",
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tecnologia de ponta para criar sua presença digital impactante
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative glass-card p-8 rounded-xl hover:border-primary/50 transition-colors h-full flex flex-col items-start">
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4 text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-left">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};