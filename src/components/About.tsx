import { motion } from "framer-motion";
import { Code2, Palette, Search } from "lucide-react";

export const About = () => {
  const services = [
    {
      icon: Code2,
      title: "Sites Responsivos",
      description: "Desenvolvimento de sites modernos que se adaptam perfeitamente a qualquer dispositivo."
    },
    {
      icon: Palette,
      title: "Design Personalizado",
      description: "Criação de interfaces únicas e intuitivas que refletem a identidade da sua marca."
    },
    {
      icon: Search,
      title: "SEO Otimizado",
      description: "Estratégias avançadas para melhorar seu posicionamento nos motores de busca."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background to-background-light opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary via-accent to-primary text-transparent bg-clip-text">
              Sobre Nós
            </span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Somos uma equipe apaixonada por criar experiências digitais extraordinárias. 
            Na inova.js, combinamos criatividade com tecnologia de ponta para entregar 
            soluções que impulsionam o sucesso dos nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-10 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-background-light/10 backdrop-blur-sm p-8 rounded-xl border border-accent/20 transform group-hover:-translate-y-1 transition-all duration-300">
                <service.icon className="w-12 h-12 text-secondary mb-6" />
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};