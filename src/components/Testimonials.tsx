import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    role: "CEO - TechStart",
    image: "/images/testimonials/joao.jpg",
    content: "A Inova.js transformou completamente nossa presença online. O site não só ficou lindo como também aumentou significativamente nossas conversões.",
    company: {
      name: "TechStart"
    }
  },
  {
    name: "Maria Santos",
    role: "Diretora de Marketing - EduTech",
    image: "/images/testimonials/maria.jpg",
    content: "Excelente trabalho! A equipe da Inova.js foi muito profissional e entregou além das nossas expectativas. O suporte pós-lançamento também foi excepcional.",
    company: {
      name: "EduTech"
    }
  },
  {
    name: "Pedro Costa",
    role: "Fundador - InovaMed",
    image: "/images/testimonials/pedro.jpg",
    content: "O que mais me impressionou foi a atenção aos detalhes e a preocupação em entender realmente o nosso negócio. O resultado foi um site que realmente representa nossa marca.",
    company: {
      name: "InovaMed"
    }
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça as histórias de sucesso de quem já transformou sua presença digital conosco
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <Card className="h-full bg-background-light/5 backdrop-blur-sm border-primary/10 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="w-10 h-10 text-primary mb-4" />
                  <p className="text-gray-300 text-xl mb-6 flex-grow">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-lg text-white">{testimonial.name}</h4>
                      <p className="text-base text-gray-400">{testimonial.role}</p>
                    </div>
                    {testimonial.company.logo && (
                      <img 
                        src={testimonial.company.logo} 
                        alt={testimonial.company.name}
                        className="h-8 ml-auto"
                      />
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
