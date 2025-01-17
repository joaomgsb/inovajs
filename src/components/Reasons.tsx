import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Reasons = () => {
  const reasons = [
    {
      title: "Credibilidade e Presença Online",
      description: "Transmite profissionalismo e aumenta sua visibilidade, conquistando confiança de clientes ou seguidores."
    },
    {
      title: "Controle Total",
      description: "Permite personalizar conteúdo e design, sem restrições de redes sociais."
    },
    {
      title: "Crescimento e Escalabilidade",
      description: "Seu site pode ser expandido conforme suas necessidades, com funcionalidades adicionais."
    },
    {
      title: "Marketing e Vendas",
      description: "Facilita estratégias de marketing digital e vendas online, com possibilidade de monitorar e otimizar resultados."
    },
    {
      title: "Disponibilidade 24/7",
      description: "Seu negócio fica disponível 24 horas por dia, 365 dias por ano."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            5 Motivos Para Desenvolver Um Site
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra como um site profissional pode transformar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative glass-card p-8 rounded-xl hover:border-primary/50 transition-colors h-full">
                <h3 className="text-2xl font-semibold text-primary mb-4 text-left">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed text-left">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-hover text-white group"
            onClick={() => window.location.href = 'https://wa.me/553199930883?text=Ol%C3%A1!%20Poderiam%20me%20enviar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20site%3F'}
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};