import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap, Target, Shield } from "lucide-react";

const differentials = [
  {
    icon: Code2,
    title: "Especialistas em React e TypeScript",
    description: "Desenvolvemos aplicações modernas e escaláveis usando as melhores tecnologias do mercado."
  },
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Não entregamos apenas sites bonitos, mas soluções que geram conversões e resultados reais para seu negócio."
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Cada projeto é único. Entendemos profundamente seu negócio para entregar soluções sob medida."
  },
  {
    icon: Shield,
    title: "Segurança e Confiabilidade",
    description: "Implementamos as melhores práticas de segurança e performance em todos os projetos."
  },
  {
    icon: Zap,
    title: "Otimização para Performance",
    description: "Sites rápidos e otimizados para mecanismos de busca, garantindo melhor visibilidade online."
  },
  {
    icon: Rocket,
    title: "Suporte Contínuo",
    description: "Oferecemos suporte técnico especializado e manutenção contínua após o lançamento."
  }
];

export const Differentials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background-dark to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Inova.js
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinamos expertise técnica com foco em resultados para entregar soluções que impulsionam seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <Card className="h-full bg-background-light/5 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-3xl font-semibold mb-2">{differential.title}</h3>
                    <p className="text-lg text-gray-400">
                      {differential.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
