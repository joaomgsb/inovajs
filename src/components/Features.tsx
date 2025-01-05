import { motion } from "framer-motion";
import { Code, Smartphone, Zap } from "lucide-react";
import { BackgroundPattern } from "@/components/ui/background-pattern";

const features = [
  {
    icon: Code,
    title: "Desenvolvimento Personalizado",
    description: "Sites únicos que refletem a identidade da sua marca",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000"
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Experiência perfeita em qualquer dispositivo",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000"
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Carregamento rápido e otimização SEO",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000"
  },
];

export const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <BackgroundPattern pattern="tech" opacity={0.03} className="transform -rotate-12" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary-dark/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary-light to-accent-light text-transparent bg-clip-text">
              Nossos Diferenciais
            </span>
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
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-background-dark/50 backdrop-blur-sm rounded-2xl p-6 relative group hover:bg-background-dark/70 transition-all"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                />
              </div>
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};