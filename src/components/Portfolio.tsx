import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Star, ChevronRight, Trophy, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    id: 1,
    title: "Bebrum",
    description: "Site completo para cervejaria artesanal com catálogo de produtos e blog",
    longDescription: "Desenvolvimento de uma plataforma moderna para a cervejaria Bebrum, incluindo catálogo digital, blog de conteúdo e sistema de newsletter. O projeto resultou em um aumento de 150% nas vendas online.",
    image: "/lovable-uploads/1bc708b0-67dd-488c-988c-b20b4b3b8093.png",
    link: "https://cervejariabebrum.netlify.app",
    technologies: ["React", "Next.js", "Tailwind CSS", "Strapi CMS"],
    results: ["150% aumento em vendas", "60% mais leads", "Redução de 40% no bounce rate"],
    category: "E-commerce",
    testimonial: {
      content: "A plataforma superou nossas expectativas. As vendas aumentaram significativamente!",
      author: "Carlos Silva",
      role: "Diretor Comercial"
    },
    duration: "8 semanas",
    rating: 5
  },
  {
    id: 2,
    title: "Elegance",
    description: "E-commerce completo para loja de roupas com catálogo e checkout",
    longDescription: "Criação de um e-commerce completo para a Elegance Moda, com sistema de pagamento integrado, gestão de estoque e área do cliente. A plataforma proporcionou uma expansão significativa das vendas online.",
    image: "/lovable-uploads/32c1b9cc-bcc0-4a38-b8e9-af6bf6daf66f.png",
    link: "https://elegancemoda.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    results: ["200% aumento em vendas", "Redução de 30% em custos operacionais", "95% satisfação dos clientes"],
    category: "E-commerce",
    testimonial: {
      content: "Nossa loja online se transformou completamente. Resultados impressionantes!",
      author: "Ana Paula",
      role: "CEO"
    },
    duration: "12 semanas",
    rating: 5
  },
  {
    id: 3,
    title: "Pistache Granel",
    description: "Landing Page de informações especializado em pistaches e produtos a granel de alta qualidade",
    longDescription: "Desenvolvimento de landing page otimizada para conversão, focada em produtos premium a granel. O projeto incluiu copywriting estratégico e otimização SEO completa.",
    image: "/images/pistache.png",
    link: "https://pistachepage.netlify.app",
    technologies: ["React", "Gatsby", "GraphQL", "Google Analytics"],
    results: ["300% mais leads qualificados", "Primeira página do Google", "Taxa de conversão de 12%"],
    category: "Landing Page",
    testimonial: {
      content: "O ROI foi excepcional. A página converteu muito além do esperado.",
      author: "Roberto Mendes",
      role: "Proprietário"
    },
    duration: "4 semanas",
    rating: 5
  },
  {
    id: 4,
    title: "DisasterReport",
    description: "Plataforma para relatório e monitoramento de desastres naturais",
    longDescription: "Sistema complexo de monitoramento em tempo real de desastres naturais, com integração de dados meteorológicos e sistema de alertas. O projeto ajuda comunidades a se prepararem para eventos climáticos.",
    image: "/lovable-uploads/a3c1f3b1-c896-44eb-8f91-e0fdf9bf4cce.png",
    link: "https://disasterreport.netlify.app",
    technologies: ["React", "Python", "TensorFlow", "AWS"],
    results: ["Monitoramento de 500+ áreas", "Tempo de resposta reduzido em 60%", "98% precisão nas previsões"],
    category: "Aplicação Web",
    testimonial: {
      content: "A plataforma revolucionou nossa capacidade de resposta a emergências.",
      author: "Dra. Maria Santos",
      role: "Coordenadora de Defesa Civil"
    },
    duration: "16 semanas",
    rating: 5
  },
  {
    id: 5,
    title: "Dra. Adna Boaventura",
    description: "Landing Page profissional para advocacia, apresentando serviços jurídicos especializados",
    longDescription: "Site profissional desenvolvido para escritório de advocacia, com foco em captação de leads qualificados e apresentação de casos de sucesso. Inclui sistema de agendamento de consultas.",
    image: "/images/adna.png",
    link: "https://draadna.netlify.app",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Calendly"],
    results: ["250% mais agendamentos", "Aumento de 180% em leads", "45% de conversão em clientes"],
    category: "Site Institucional",
    testimonial: {
      content: "O retorno sobre o investimento foi extraordinário. Superou todas as expectativas.",
      author: "Dra. Adna Boaventura",
      role: "Advogada"
    },
    duration: "6 semanas",
    rating: 5
  },
  {
    id: 6,
    title: "Bruna Boaventura",
    description: "Portfólio profissional de analista de sistemas, destacando projetos e habilidades",
    longDescription: "Portfólio digital moderno e interativo, apresentando projetos, habilidades e experiência profissional. O site inclui animações personalizadas e integração com redes profissionais.",
    image: "/images/brunaboaventura.png",
    link: "https://brunaluiza.vercel.app",
    technologies: ["Next.js", "Framer Motion", "Three.js", "Vercel"],
    results: ["90% mais contatos profissionais", "5 ofertas de emprego", "Portfolio referência"],
    category: "Portfólio",
    testimonial: {
      content: "Minha presença online mudou completamente. Resultados surpreendentes!",
      author: "Bruna Boaventura",
      role: "Analista de Sistemas"
    },
    duration: "4 semanas",
    rating: 5
  },
];

const categories = [
  "Todos",
  "E-commerce",
  "Landing Page",
  "Site Institucional",
  "Aplicação Web",
  "Portfólio"
];

const highlights = [
  {
    icon: Trophy,
    value: "50+",
    label: "Projetos Entregues",
    description: "Com sucesso e satisfação garantida"
  },
  {
    icon: Target,
    value: "98%",
    label: "Taxa de Satisfação",
    description: "Clientes extremamente satisfeitos"
  },
  {
    icon: TrendingUp,
    value: "180%",
    label: "Média de ROI",
    description: "Retorno sobre investimento"
  }
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="bg-primary/10 text-primary border-none mb-4 text-lg">
            Portfólio
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text">
              Casos de Sucesso
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Conheça alguns dos nossos casos de sucesso e como ajudamos empresas 
            a alcançarem seus objetivos através de soluções digitais inovadoras
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-light/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{highlight.value}</div>
                <div className="text-primary font-medium mb-1">{highlight.label}</div>
                <div className="text-sm text-gray-400">{highlight.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="basis-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-1"
                >
                  <Card className="border-0 overflow-hidden bg-gradient-to-br from-background-dark/80 to-background-light/5 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Project Image */}
                        <div className="relative group h-[400px] overflow-hidden rounded-xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                          <div className="absolute bottom-4 left-4">
                            <Badge 
                              variant="secondary"
                              className="bg-primary text-white border-none shadow-lg"
                            >
                              {project.category}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Project Info */}
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                              <div className="flex">
                                {[...Array(project.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                              </div>
                            </div>
                            <p className="text-lg text-gray-400">{project.longDescription}</p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">Tecnologias Utilizadas</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <Badge key={index} variant="outline">{tech}</Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold text-white mb-2">Resultados Alcançados</h4>
                            <ul className="space-y-2">
                              {project.results.map((result, index) => (
                                <li key={index} className="flex items-center text-lg text-gray-300">
                                  <ChevronRight className="w-4 h-4 text-primary mr-2" />
                                  {result}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Testimonial */}
                          <div className="bg-white/5 p-4 rounded-lg">
                            <p className="text-lg text-gray-300 italic mb-2">"{project.testimonial.content}"</p>
                            <div className="text-base">
                              <span className="text-primary font-medium">{project.testimonial.author}</span>
                              <span className="text-gray-400"> • {project.testimonial.role}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-base text-gray-400">
                              Duração: <span className="text-primary">{project.duration}</span>
                            </div>
                            {project.link && (
                              <Button
                                variant="default"
                                size="sm"
                                className="group"
                                onClick={() => window.open(project.link, '_blank')}
                              >
                                Visitar Projeto
                                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">
            Pronto para Ser Nosso Próximo Caso de Sucesso?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Transforme sua presença digital com soluções personalizadas que geram resultados reais.
            Solicite um orçamento gratuito e comece sua jornada de sucesso hoje mesmo.
          </p>
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
