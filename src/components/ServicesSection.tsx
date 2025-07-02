import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Code2, 
  Smartphone, 
  ShoppingBag, 
  Briefcase, 
  Scale, 
  Zap, 
  Shield,
  Database,
  TrendingUp,
  Users,
  Target,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    category: "Desenvolvimento",
    icon: Code2,
    description: "Sites únicos que refletem a identidade da sua marca e atendem às necessidades específicas do seu negócio.",
    features: [
      "Sites institucionais modernos",
      "E-commerces completos",
      "Landing pages de alta conversão",
      "Sistemas personalizados"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js"],
    price: "A partir de R$ 2.500",
    duration: "2-8 semanas"
  },
  {
    id: 2,
    title: "E-commerce Completo",
    category: "Desenvolvimento",
    icon: ShoppingBag,
    description: "Lojas virtuais completas com sistema de pagamento, gestão de estoque e área do cliente.",
    features: [
      "Sistema de pagamento integrado",
      "Gestão de produtos e estoque",
      "Área do cliente completa",
      "Painel administrativo"
    ],
    technologies: ["Shopify", "WooCommerce", "Stripe", "PayPal"],
    price: "A partir de R$ 5.000",
    duration: "4-12 semanas"
  },
  {
    id: 3,
    title: "Sites Responsivos",
    category: "Desenvolvimento",
    icon: Smartphone,
    description: "Experiência perfeita em qualquer dispositivo, garantindo acessibilidade para todos os usuários.",
    features: [
      "Design mobile-first",
      "Compatibilidade total",
      "Performance otimizada",
      "SEO integrado"
    ],
    technologies: ["Responsive Design", "PWA", "AMP", "CSS Grid"],
    price: "Incluído em todos os projetos",
    duration: "Padrão"
  },
  {
    id: 4,
    title: "Sites Corporativos",
    category: "Desenvolvimento",
    icon: Briefcase,
    description: "Sites profissionais para empresas que buscam fortalecer sua presença digital.",
    features: [
      "Design profissional",
      "Área de notícias/blog",
      "Formulários de contato",
      "Integração com CRM"
    ],
    technologies: ["WordPress", "Headless CMS", "SEO", "Analytics"],
    price: "A partir de R$ 3.500",
    duration: "3-6 semanas"
  },
  {
    id: 5,
    title: "Sites Jurídicos",
    category: "Desenvolvimento",
    icon: Scale,
    description: "Soluções específicas para escritórios de advocacia, com foco em credibilidade e conversão.",
    features: [
      "Design profissional e confiável",
      "Área de especialidades",
      "Formulário de consulta",
      "Blog jurídico integrado"
    ],
    technologies: ["WordPress", "LGPD Compliance", "SEO Jurídico"],
    price: "A partir de R$ 4.000",
    duration: "4-8 semanas"
  },
  {
    id: 6,
    title: "Performance e SEO",
    category: "Desenvolvimento",
    icon: Zap,
    description: "Sites rápidos e otimizados para mecanismos de busca, garantindo melhor posicionamento.",
    features: [
      "Otimização de velocidade",
      "SEO técnico completo",
      "Core Web Vitals",
      "Monitoramento contínuo"
    ],
    technologies: ["Google Analytics", "Search Console", "PageSpeed"],
    price: "A partir de R$ 1.500",
    duration: "2-4 semanas"
  },
  {
    id: 7,
    title: "Segurança Web",
    category: "Desenvolvimento",
    icon: Shield,
    description: "Implementação das melhores práticas de segurança para proteger seu site e usuários.",
    features: [
      "Certificado SSL",
      "Backup automático",
      "Firewall de aplicação",
      "Monitoramento de segurança"
    ],
    technologies: ["HTTPS", "Cloudflare", "Security Headers"],
    price: "A partir de R$ 800",
    duration: "1-2 semanas"
  },
  {
    id: 8,
    title: "Análise de Dados",
    category: "Consultoria",
    icon: Database,
    description: "Serviços completos de análise de dados com foco em insights estratégicos para seu negócio.",
    features: [
      "Criação de dashboards interativos (Power BI, Tableau)",
      "Modelagem de dados e ETL (SQL, Python, dbt)",
      "Análise estatística e preditiva",
      "Automação de relatórios e processos de dados"
    ],
    technologies: ["Power BI", "Python", "SQL", "Tableau"],
    price: "A partir de R$ 3.000",
    duration: "2-6 semanas",
    specialist: "Bruna Boaventura"
  },
  {
    id: 9,
    title: "Business Intelligence",
    category: "Consultoria",
    icon: BarChart3,
    description: "Transformação de dados em insights estratégicos para tomada de decisão empresarial.",
    features: [
      "Dashboards executivos",
      "KPIs e métricas personalizadas",
      "Relatórios automatizados",
      "Análise de tendências"
    ],
    technologies: ["Power BI", "Tableau", "Excel Avançado"],
    price: "A partir de R$ 4.000",
    duration: "3-8 semanas",
    specialist: "Bruna Boaventura"
  },
  {
    id: 10,
    title: "Metodologias Ágeis",
    category: "Consultoria",
    icon: Users,
    description: "Implementação de metodologias ágeis para otimizar processos e aumentar a produtividade.",
    features: [
      "Diagnóstico de maturidade ágil",
      "Treinamentos e workshops práticos",
      "Estruturação de times ágeis (Scrum Masters, Product Owners)",
      "Implantação de rituais ágeis (dailys, reviews, retrospectivas)",
      "Acompanhamento e coaching contínuo",
      "Cultura de melhoria contínua com foco em entrega de valor"
    ],
    technologies: ["Scrum", "Kanban", "Lean", "Design Thinking"],
    price: "A partir de R$ 5.000",
    duration: "4-12 semanas"
  },
  {
    id: 11,
    title: "Consultoria Tecnológica",
    category: "Consultoria",
    icon: Target,
    description: "Consultoria especializada para implementar novas tecnologias e otimizar processos empresariais.",
    features: [
      "Diagnóstico tecnológico",
      "Planejamento de implementação",
      "Treinamento de equipes",
      "Acompanhamento pós-implementação"
    ],
    technologies: ["Cloud Computing", "Automação", "Integração de Sistemas"],
    price: "A partir de R$ 3.500",
    duration: "2-8 semanas"
  },
  {
    id: 12,
    title: "Otimização de Processos",
    category: "Consultoria",
    icon: TrendingUp,
    description: "Análise e otimização de processos internos para aumentar eficiência e produtividade.",
    features: [
      "Mapeamento de processos atuais",
      "Identificação de gargalos",
      "Propostas de melhoria",
      "Implementação de soluções"
    ],
    technologies: ["BPM", "Automação", "Lean Six Sigma"],
    price: "A partir de R$ 4.500",
    duration: "3-10 semanas"
  }
];

const categories = [
  { id: "all", name: "Todos os Serviços", count: services.length },
  { id: "Desenvolvimento", name: "Desenvolvimento Web", count: services.filter(s => s.category === "Desenvolvimento").length },
  { id: "Consultoria", name: "Consultoria", count: services.filter(s => s.category === "Consultoria").length }
];

export const ServicesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = selectedCategory === "all" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <section className="py-24 relative overflow-hidden" id="servicos">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary-dark/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none mb-4 text-lg">
            Nossos Serviços
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Soluções Completas para seu Negócio
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços, desde desenvolvimento web até consultoria especializada 
            em análise de dados e metodologias ágeis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar de Filtros */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-background-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-8">
              <h3 className="text-xl font-semibold text-white mb-6">Categorias</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-primary text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {category.count}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid de Serviços */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-background-dark/50 backdrop-blur-sm border-white/10 hover:border-primary/20 transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <Badge variant="outline" className="text-xs mb-1">
                            {service.category}
                          </Badge>
                          <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      {service.specialist && (
                        <div className="mb-3">
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-none">
                            Especialista: {service.specialist}
                          </Badge>
                        </div>
                      )}

                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Principais recursos:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-gray-400">
                              +{service.features.length - 3} recursos adicionais
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4 text-sm">
                        <div>
                          <span className="text-gray-400">Preço: </span>
                          <span className="text-primary font-semibold">{service.price}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Prazo: </span>
                          <span className="text-white">{service.duration}</span>
                        </div>
                      </div>

                      <Button
                        variant="default"
                        className="w-full group/btn"
                        onClick={() => window.open('https://wa.me/553199930883?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20' + encodeURIComponent(service.title), '_blank')}
                      >
                        Solicitar Orçamento
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Oferecemos soluções personalizadas para atender às necessidades específicas do seu negócio.
            Entre em contato e vamos conversar sobre seu projeto.
          </p>
          <Button
            variant="success"
            size="lg"
            className="group animate-[bounce_10s_cubic-bezier(0.4,0,0.2,1)_infinite] hover:brightness-110 transition-all duration-700 ease-in-out px-8 py-6"
            onClick={() => window.open('https://wa.me/553199930883?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20personalizada%20para%20meu%20neg%C3%B3cio', '_blank')}
          >
            Falar sobre Projeto Personalizado
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};