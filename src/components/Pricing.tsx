import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { BackgroundPattern } from "@/components/ui/background-pattern";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const servicePacks = [
  {
    name: "Criação de Site + SEO Inicial + Identidade Visual",
    price: "R$ 299/mês",
    description: "Ideal para quem quer começar do jeito certo, sem complicação.",
    contract: "(Contrato mínimo de 12 meses)",
    features: [
      "Website Responsivo Premium",
      "SEO Básico + Indexação no Google",
      "Copywriting Estratégico",
      "3 Páginas Personalizadas",
      "Integração com Redes Sociais",
      "Criação de 3 Posts para Mídias Sociais",
      "Hospedagem e Domínio Grátis",
      "Suporte Contínuo e Pequenas Atualizações Mensais"
    ],
    highlight: false
  },
  {
    name: "Criação de Site + SEO Avançado + Gestão de Tráfego + Identidade Visual",
    price: "R$ 799/mês",
    description: "Ideal para empresas que querem um site profissional e bem posicionado no digital.",
    contract: "(Contrato mínimo de 12 meses)",
    highlight: true,
    features: [
      "Tudo do Plano Anterior +",
      "Design UX/UI Avançado",
      "SEO Completo + Google Analytics",
      "Copywriting com Storytelling",
      "7 Páginas Personalizadas",
      "Gestão de Tráfego + Otimização de Anúncios",
      "Criação de 5 Posts Profissionais para Mídias Sociais",
      "Integração com CRM",
      "Garantia de Conversão",
      "Suporte Contínuo + Ajustes Periódicos no Site"
    ]
  },
  {
    name: "Enterprise - Solução Digital Completa para Empresas",
    price: "Sob Consulta",
    description: "Ideal para empresas que querem dominar o mercado digital com soluções personalizadas e escaláveis.",
    contract: "(Contrato mínimo de 12 meses)",
    features: [
      "Tudo do Plano Anterior +",
      "Design de Sistema Exclusivo",
      "SEO Enterprise + Schema",
      "CMS Personalizado",
      "Gestão de Tráfego Avançada",
      "Criação de 10 Posts Profissionais para Mídias Sociais",
      "Estratégia de Conteúdo + Automação de Marketing",
      "Páginas Ilimitadas",
      "Suporte Premium 24/7",
      "Consultoria Mensal + Relatórios de Performance",
      "Integração com IA e Chatbots",
      "Treinamento para a Equipe do Cliente"
    ],
    highlight: false
  }
];

export const Pricing = () => {
  return (
    <section id="pacotes" className="py-12 md:py-24 bg-background relative overflow-hidden">
      <BackgroundPattern pattern="tech" opacity={0.03} className="transform rotate-12" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-white">
              Pacotes de Serviços
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às suas necessidades
          </p>
        </motion.div>

        {/* Service Packs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16 px-4">
          {servicePacks.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-gradient-to-br ${
                pack.highlight 
                  ? 'from-primary/20 to-accent/20 border-primary/50' 
                  : 'from-background-dark/50 to-background-light/5 border-white/5'
              } backdrop-blur-sm p-4 md:p-6 rounded-xl border flex flex-col h-full`}
            >
              {pack.highlight && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white border-0 whitespace-nowrap"
                >
                  Mais Popular
                </Badge>
              )}
              <div className="text-center mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 min-h-[6rem] flex items-center justify-center px-4">
                  <span className="bg-gradient-to-r from-white via-primary-light to-white bg-clip-text text-transparent">
                    {pack.name}
                  </span>
                </h3>
                <div className={`text-2xl md:text-3xl font-bold text-primary mb-4 ${!pack.highlight ? "mt-8" : ""}`}>{pack.price}</div>
                <div className="text-sm text-gray-400 italic mb-2">{pack.contract}</div>
                <p className="text-sm md:text-base text-gray-400">{pack.description}</p>
              </div>
              <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6 flex-grow">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300 text-sm md:text-base">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button
                  variant="success"
                  size="lg"
                  className="w-full max-w-[240px] py-6 text-base md:text-lg font-semibold"
                  onClick={() => {
                    if (pack.name === "Criação de Site + SEO Inicial + Identidade Visual") {
                      window.open('https://wa.me/5531999930883?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20pacote%20%22Cria%C3%A7%C3%A3o%20de%20Site%20%2B%20SEO%20Inicial%20%2B%20Identidade%20Visual%22', '_blank');
                    } else if (pack.name === "Criação de Site + SEO Avançado + Gestão de Tráfego + Identidade Visual") {
                      window.open('https://wa.me/5531999930883?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20pacote%20%22Cria%C3%A7%C3%A3o%20de%20Site%20%2B%20SEO%20Avan%C3%A7ado%20%2B%20Gest%C3%A3o%20de%20Tr%C3%A1fego%20%2B%20Identidade%20Visual%22', '_blank');
                    } else if (pack.name === "Enterprise - Solução Digital Completa para Empresas") {
                      window.open('https://wa.me/5531999930883?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20pacote%20%22Enterprise%22', '_blank');
                    }
                  }}
                >
                  <span>Solicitar Proposta</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">
            Pronto para transformar sua presença digital?
          </h3>
          <p className="text-sm md:text-base text-gray-400 mb-6 md:mb-8">
            Agende uma consultoria gratuita e descubra como podemos impulsionar seu negócio
          </p>
          <Button
            variant="cta"
            size="lg"
            className="group text-sm md:text-base animate-[bounce_10s_cubic-bezier(0.4,0,0.2,1)_infinite] hover:brightness-110 transition-all duration-700 ease-in-out"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar Consultoria Gratuita
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
