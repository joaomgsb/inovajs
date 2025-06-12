import { motion } from "framer-motion";
import { Code, Smartphone, Zap, ShoppingBag, Briefcase, Scale, BarChart, Shield, ArrowRight, Star } from "lucide-react";
import { BackgroundPattern } from "@/components/ui/background-pattern";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Code,
    title: "Desenvolvimento Personalizado",
    description: "Sites únicos que refletem a identidade da sua marca e atendem às necessidades específicas do seu negócio.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000",
    metrics: ["98% de satisfação", "Mais de 100 projetos entregues"],
    technologies: ["React", "Next.js", "TypeScript"]
  },
  {
    icon: ShoppingBag,
    title: "Especialistas em E-commerce",
    description: "Experiência comprovada em criar lojas virtuais de sucesso com foco em conversão e experiência do usuário.",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000",
    metrics: ["Aumento médio de 150% em vendas", "Taxa de conversão 3x maior"],
    technologies: ["Shopify", "WooCommerce", "VTEX"]
  },
  {
    icon: Briefcase,
    title: "Sites Corporativos",
    description: "Desenvolvimento de sites profissionais para empresas que buscam fortalecer sua presença digital.",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    metrics: ["Redução de 40% no bounce rate", "+200% em leads qualificados"],
    technologies: ["WordPress", "Headless CMS", "SEO"]
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Experiência perfeita em qualquer dispositivo, garantindo que seu site seja acessível para todos os usuários.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000",
    metrics: ["Compatível com +100 dispositivos", "Carregamento 2x mais rápido"],
    technologies: ["Mobile First", "PWA", "AMP"]
  },
  {
    icon: Scale,
    title: "Sites Jurídicos",
    description: "Soluções específicas para escritórios de advocacia, com foco em credibilidade e conversão de leads.",
    category: "Expertise",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000",
    metrics: ["Aumento de 180% em consultas", "ROI positivo em 3 meses"],
    technologies: ["Jusbrasil", "LawTech", "LGPD"]
  },
  {
    icon: BarChart,
    title: "Marketing Digital",
    description: "Integração com ferramentas de marketing e analytics para maximizar seus resultados online.",
    category: "Serviços",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    metrics: ["Aumento de 250% em tráfego", "CAC reduzido em 45%"],
    technologies: ["Google Analytics", "Meta Pixel", "GTM"]
  },
  {
    icon: Zap,
    title: "Alta Performance",
    description: "Sites rápidos e otimizados para mecanismos de busca, garantindo melhor posicionamento no Google.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    metrics: ["Nota 98+ no PageSpeed", "1º página do Google"],
    technologies: ["Core Web Vitals", "CDN", "Cache"]
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description: "Implementação das melhores práticas de segurança para proteger seu site e seus usuários.",
    category: "Tecnologia",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000",
    metrics: ["Certificação SSL", "Backups diários"],
    technologies: ["HTTPS", "Firewall", "Anti-DDoS"]
  }
];

const stats = [
  { value: "50+", label: "Projetos Entregues" },
  { value: "98%", label: "Clientes Satisfeitos" },
  { value: "24h", label: "Suporte Técnico" },
  { value: "5★", label: "Avaliação Média" }
];

export const Features = () => {
  return (
    <section className="py-12 md:py-24 relative overflow-hidden" id="solucoes">
      <BackgroundPattern pattern="tech" opacity={0.03} className="transform -rotate-12" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary-dark/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-primary-light to-accent-light text-transparent bg-clip-text">
              Soluções Completas
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Combinamos expertise em diferentes setores com tecnologia de ponta para criar 
            soluções digitais que impulsionam o crescimento do seu negócio
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-background-dark/50 backdrop-blur-sm rounded-xl p-3 md:p-4"
              >
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-dark/50 backdrop-blur-sm rounded-2xl p-4 md:p-6 relative group hover:bg-background-dark/70 transition-all h-full"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity"
                />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-xs md:text-sm">
                    {feature.category}
                  </Badge>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4">{feature.description}</p>
                
                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  {feature.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs md:text-sm">
                      <Star className="w-4 h-4 text-primary" />
                      <span className="text-gray-300">{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {feature.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-8 md:mt-16"
        >
          <Button
            variant="success"
            size="lg"
            className="group text-sm md:text-base animate-[bounce_10s_cubic-bezier(0.4,0,0.2,1)_infinite] hover:brightness-110 transition-all duration-700 ease-in-out px-8 py-6"
            onClick={() => window.open('https://wa.me/553199930883?text=Ol%C3%A1!%20Poderiam%20me%20enviar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20site%3F', '_blank')}
          >
            Solicite um Orçamento Gratuito
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-xs md:text-sm text-gray-400 mt-4">
            Resposta em até 24h • Análise Gratuita • Suporte Prioritário
          </p>
        </motion.div>
      </div>
    </section>
  );
};