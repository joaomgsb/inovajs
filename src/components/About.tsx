import { motion } from "framer-motion";
import { Award, Users, Clock, Rocket } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excelência",
      description: "Comprometidos com a qualidade excepcional em cada projeto que desenvolvemos."
    },
    {
      icon: Users,
      title: "Colaboração",
      description: "Trabalhamos em estreita parceria com nossos clientes para alcançar resultados extraordinários."
    },
    {
      icon: Clock,
      title: "Pontualidade",
      description: "Entrega consistente dentro do prazo, respeitando cada etapa do projeto."
    },
    {
      icon: Rocket,
      title: "Inovação",
      description: "Sempre à frente com as últimas tecnologias e tendências do mercado."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8
        }}
      />

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
            Somos uma equipe apaixonada por criar experiências digitais extraordinárias, 
            combinando criatividade com tecnologia de ponta para entregar soluções que 
            impulsionam o sucesso dos nossos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-10 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-background-light/10 backdrop-blur-sm p-6 rounded-xl border border-accent/20 transform group-hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <value.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Estamos prontos para transformar sua visão em uma experiência digital única e memorável.
          </p>
        </motion.div>
      </div>
    </section>
  );
};