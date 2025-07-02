import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BarChart3, 
  Users, 
  Code, 
  Smartphone, 
  ShoppingBag, 
  Scale,
  Database,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Filter
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const services = [
  {
    id: 1,
    title: "Consultoria em Análise de Dados",
    category: "Consultoria",
    description: "Transformamos seus dados em insights estratégicos para impulsionar o crescimento do seu negócio.",
    icon: BarChart3,
    details: [
      "Criação de dashboards interativos (Power BI, Tableau)",
      "Modelagem de dados e ETL (SQL, Python, dbt)",
      "Análise estatística e preditiva",
      "Automação de relatórios e processos de dados"
    ],
    additionalInfo: "Atuamos desde a extração até a entrega de insights, garantindo dados limpos, estruturados e relevantes para seu negócio.",
    professional: "Bruna Boaventura",
    price: "A partir de R$ 3.000",
    duration: "2-8 semanas"
  },
  {
    id: 2,
    title: "Implementação de Metodologias Ágeis",
    category: "Consultoria",
    description: "Implementamos metodologias ágeis para otimizar processos e aumentar a eficiência da sua equipe.",
    icon: Users,
    details: [
      "Diagnóstico de maturidade ágil",
      "Treinamentos e workshops práticos",
      "Estruturação de times ágeis (Scrum Masters, Product Owners, etc.)",
      "Implantação de rituais ágeis (dailys, reviews, retrospectivas)",
      "Acompanhamento e coaching contínuo",
      "Cultura de melhoria contínua com foco em entrega de valor"
    ],
    additionalInfo: "Metodologias ágeis não são sistemas, são modelos de entrega que transformam a cultura organizacional.",
    professional: "Equipe Inova.js",
    price: "A partir de R$ 5.000",
    duration: "4-12 semanas"
  },
  {
    id: 3,
    title: "Desenvolvimento de Sites Corporativos",
    category: "Desenvolvimento Web",
    description: "Sites profissionais que fortalecem sua presença digital e geram resultados.",
    icon: Code,
    details: [
      "Design responsivo e moderno",
      "Otimização para SEO",
      "Integração com ferramentas de marketing",
      "Sistema de gerenciamento de conteúdo",
      "Análise de performance",
      "Suporte técnico contínuo"
    ],
    additionalInfo: "Desenvolvemos sites que não apenas impressionam, mas convertem visitantes em clientes.",
    professional: "João Mateus",
    price: "A partir de R$ 2.500",
    duration: "3-6 semanas"
  },
  {
    id: 4,
    title: "E-commerce Completo",
    category: "Desenvolvimento Web",
    description: "Lojas virtuais completas com sistema de pagamento e gestão integrada.",
    icon: ShoppingBag,
    details: [
      "Catálogo de produtos otimizado",
      "Sistema de pagamento seguro",
      "Gestão de estoque",
      "Painel administrativo",
      "Integração com marketplaces",
      "Relatórios de vendas"
    ],
    additionalInfo: "Criamos e-commerces que vendem 24/7, com todas as funcionalidades necessárias para o sucesso online.",
    professional: "Equipe Inova.js",
    price: "A partir de R$ 8.000",
    duration: "6-12 semanas"
  },
  {
    id: 5,
    title: "Landing Pages de Alta Conversão",
    category: "Desenvolvimento Web",
    description: "Páginas otimizadas para converter visitantes em leads e clientes.",
    icon: TrendingUp,
    details: [
      "Design focado em conversão",
      "Copywriting estratégico",
      "Formulários otimizados",
      "Integração com CRM",
      "Testes A/B",
      "Analytics avançado"
    ],
    additionalInfo: "Landing pages que transformam tráfego em resultados mensuráveis para seu negócio.",
    professional: "Stefano Gennaro",
    price: "A partir de R$ 1.500",
    duration: "1-3 semanas"
  },
  {
    id: 6,
    title: "Aplicativos Mobile",
    category: "Desenvolvimento Mobile",
    description: "Apps nativos e híbridos para iOS e Android.",
    icon: Smartphone,
    details: [
      "Desenvolvimento nativo e híbrido",
      "Interface intuitiva",
      "Integração com APIs",
      "Push notifications",
      "Analytics integrado",
      "Publicação nas lojas"
    ],
    additionalInfo: "Aplicativos que conectam sua marca aos clientes de forma direta e eficiente.",
    professional: "Gabriel Maciel",
    price: "A partir de R$ 15.000",
    duration: "8-16 semanas"
  },
  {
    id: 7,
    title: "Sites Jurídicos Especializados",
    category: "Desenvolvimento Web",
    description: "Soluções digitais específicas para escritórios de advocacia.",
    icon: Scale,
    details: [
      "Design profissional e confiável",
      "Área do cliente segura",
      "Agendamento online",
      "Blog jurídico integrado",
      "Compliance com LGPD",
      "SEO jurídico especializado"
    ],
    additionalInfo: "Sites que transmitem credibilidade e captam clientes qualificados para seu escritório.",
    professional: "João Mateus",
    price: "A partir de R$ 4.000",
    duration: "4-8 semanas"
  },
  {
    id: 8,
    title: "Consultoria em Novas Tecnologias",
    category: "Consultoria",
    description: "Orientação estratégica para implementação de novas tecnologias.",
    icon: Database,
    details: [
      "Análise de necessidades tecnológicas",
      "Planejamento de implementação",
      "Treinamento de equipes",
      "Acompanhamento de resultados",
      "Otimização de processos",
      "Suporte na transição digital"
    ],
    additionalInfo: "Ajudamos sua empresa a se manter competitiva através da adoção inteligente de novas tecnologias.",
    professional: "Gabriel Maciel",
    price: "A partir de R$ 4.500",
    duration: "4-10 semanas"
  }
];

const categories = [
  "Todos",
  "Consultoria", 
  "Desenvolvimento Web",
  "Desenvolvimento Mobile"
];

export const ServicesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredServices = selectedCategory === "Todos" 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Serviços - Inova.js | Desenvolvimento Web e Consultoria</title>
        <meta name="description" content="Conheça todos os serviços da Inova.js: desenvolvimento web, e-commerce, consultoria em dados, metodologias ágeis e muito mais." />
        <meta name="keywords" content="desenvolvimento web, e-commerce, consultoria dados, metodologias ágeis, landing pages, sites jurídicos" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none mb-4 text-lg">
                Nossos Serviços
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
                  Soluções Completas
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Desde consultoria estratégica até desenvolvimento completo, oferecemos 
                tudo que sua empresa precisa para crescer no mundo digital.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar - Filtros */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1"
              >
                <div className="bg-background-dark/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Filter className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-semibold text-white">Filtrar Serviços</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        className={`w-full justify-start ${
                          selectedCategory === category 
                            ? "bg-primary text-white" 
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-primary/10 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Precisa de ajuda?</h4>
                    <p className="text-sm text-gray-400 mb-3">
                      Fale conosco para uma consultoria gratuita
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open('https://wa.me/553199930883?text=Ol%C3%A1!%20Gostaria%20de%20uma%20consultoria%20gratuita%20sobre%20os%20servi%C3%A7os', '_blank')}
                    >
                      Falar no WhatsApp
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="lg:col-span-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6"
                >
                  <p className="text-gray-400">
                    Mostrando {filteredServices.length} serviço{filteredServices.length !== 1 ? 's' : ''} 
                    {selectedCategory !== "Todos" && ` em ${selectedCategory}`}
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Card className="h-full bg-background-dark/50 backdrop-blur-sm border-white/10 hover:border-primary/20 transition-all group">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                              <service.icon className="w-6 h-6 text-primary" />
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {service.category}
                            </Badge>
                          </div>

                          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>

                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="space-y-2 mb-6">
                            {service.details.slice(0, 3).map((detail, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                <span className="text-gray-300">{detail}</span>
                              </div>
                            ))}
                            {service.details.length > 3 && (
                              <p className="text-sm text-gray-500">
                                +{service.details.length - 3} outros benefícios
                              </p>
                            )}
                          </div>

                          <div className="space-y-2 mb-6 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Responsável:</span>
                              <span className="text-primary">{service.professional}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Investimento:</span>
                              <span className="text-white font-semibold">{service.price}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Prazo:</span>
                              <span className="text-white">{service.duration}</span>
                            </div>
                          </div>

                          <Button 
                            className="w-full group/btn"
                            onClick={() => window.open(`https://wa.me/553199930883?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20servi%C3%A7o:%20${service.title}`, '_blank')}
                          >
                            Solicitar Orçamento
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {filteredServices.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                  >
                    <p className="text-gray-400 text-lg">
                      Nenhum serviço encontrado nesta categoria.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Não encontrou o que procura?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Desenvolvemos soluções personalizadas para atender às necessidades específicas do seu negócio.
              </p>
              <Button 
                variant="cta" 
                size="lg"
                className="group"
                onClick={() => window.open('https://wa.me/553199930883?text=Ol%C3%A1!%20Preciso%20de%20uma%20solu%C3%A7%C3%A3o%20personalizada', '_blank')}
              >
                Falar sobre Projeto Personalizado
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};