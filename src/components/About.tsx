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
    <section className="py-24 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sobre Nós
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-gray-900/60 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-primary/50 transition-colors">
                <service.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};