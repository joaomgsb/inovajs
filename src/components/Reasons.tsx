import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { BackgroundPattern } from "@/components/ui/background-pattern";

const reasons = [
  {
    title: "Credibilidade e Presença Online",
    description: "Transmite profissionalismo e aumenta sua visibilidade, conquistando confiança de clientes ou seguidores.",
    metrics: ["98% mais credibilidade", "Aumento de 150% em leads"]
  },
  {
    title: "Controle Total",
    description: "Permite personalizar conteúdo e design, sem restrições de redes sociais.",
    metrics: ["100% personalizável", "Liberdade criativa total"]
  },
  {
    title: "Crescimento e Escalabilidade",
    description: "Seu site pode ser expandido conforme suas necessidades, com funcionalidades adicionais.",
    metrics: ["Expansão ilimitada", "+200% em funcionalidades"]
  },
  {
    title: "Marketing e Vendas",
    description: "Facilita estratégias de marketing digital e vendas online, com possibilidade de monitorar e otimizar resultados.",
    metrics: ["ROI 3x maior", "Conversão 5x melhor"]
  },
  {
    title: "Disponibilidade 24/7",
    description: "Seu negócio fica disponível 24 horas por dia, 365 dias por ano.",
    metrics: ["100% disponível", "365 dias por ano"]
  }
];

export const Reasons = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <BackgroundPattern pattern="tech" opacity={0.03} className="transform rotate-12" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary-dark/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none mb-4 text-lg">
            Por que ter um site?
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              5 Motivos Para Desenvolver Um Site
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como um site profissional pode transformar seu negócio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-background-dark/70 transition-all group"
            >
              <h3 className="text-2xl font-semibold text-primary mb-3 group-hover:text-white transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {reason.description}
              </p>
              <div className="space-y-2">
                {reason.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-gray-300 text-sm">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <Button
            variant="success"
            size="lg"
            className="group animate-[bounce_10s_cubic-bezier(0.4,0,0.2,1)_infinite] hover:brightness-110 transition-all duration-700 ease-in-out px-8 py-6"
            onClick={() => window.open('https://wa.me/553199930883?text=Ol%C3%A1!%20Poderiam%20me%20enviar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20site%3F', '_blank')}
          >
            Solicite um Orçamento Gratuito
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};