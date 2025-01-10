import { Card, CardContent } from "@/components/ui/card";
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
    image: "/lovable-uploads/1bc708b0-67dd-488c-988c-b20b4b3b8093.png",
    link: "https://cervejariabebrum.netlify.app",
  },
  {
    id: 2,
    title: "Elegance",
    description: "E-commerce completo para loja de roupas com catálogo e checkout",
    image: "/lovable-uploads/32c1b9cc-bcc0-4a38-b8e9-af6bf6daf66f.png",
    link: "https://elegancemoda.netlify.app",
  },
  {
    id: 3,
    title: "Pistache Granel",
    description: "Landing Page de informações especializado em pistaches e produtos a granel de alta qualidade",
    image: "/images/pistache.png",
    link: "https://pistachepage.netlify.app",
  },
  {
    id: 4,
    title: "DisasterReport",
    description: "Plataforma para relatório e monitoramento de desastres naturais",
    image: "/lovable-uploads/a3c1f3b1-c896-44eb-8f91-e0fdf9bf4cce.png",
    link: "https://disasterreport.netlify.app",
  },
  {
    id: 5,
    title: "Dra. Adna Boaventura",
    description: "Landing Page profissional para advocacia, apresentando serviços jurídicos especializados",
    image: "/images/adna.png",
    link: "https://draadna.netlify.app",
  },
  {
    id: 6,
    title: "Bruna Boaventura",
    description: "Portfólio profissional de analista de sistemas, destacando projetos e habilidades",
    image: "/images/brunaboaventura.png",
    link: "https://brunaluiza.vercel.app",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-4">Nosso Portfólio</h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Conheça alguns dos nossos projetos mais recentes
        </p>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.id} className="basis-full">
                <div className="p-1">
                  <Card className="border-0 overflow-hidden">
                    <CardContent className="p-0">
                      <div className="relative group">
                        <div className="aspect-[16/9] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-semibold text-white mb-2">
                              {project.title}
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="ml-2 text-sm text-primary hover:text-primary-hover"
                                >
                                  Visitar site →
                                </a>
                              )}
                            </h3>
                            <p className="text-gray-200">{project.description}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};
