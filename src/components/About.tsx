import { motion } from "framer-motion";
import { Award, Users, Clock, Rocket, CheckCircle, ArrowRight, Star, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    value: "150+",
    label: "Projetos Entregues",
    description: "Experiência comprovada em diversos setores"
  },
  {
    value: "98%",
    label: "Satisfação",
    description: "Avaliação média dos nossos clientes"
  },
  {
    value: "5+",
    label: "Anos no Mercado",
    description: "Construindo soluções inovadoras"
  },
  {
    value: "24/7",
    label: "Suporte",
    description: "Atendimento rápido e eficiente"
  }
];

const teamMembers = [
  {
    name: "João Mateus",
    role: "CEO & Desenvolvedor Full Stack",
    image: "/images/team/joaomateus.png",
    skills: ["React", "Node.js", "TypeScript"],
    description: "Sou apaixonado por tecnologia e inovação, criando soluções digitais escaláveis e eficientes. Como CEO e Desenvolvedor Full Stack, lidero o desenvolvimento de sistemas modernos, combinando arquitetura de software com as melhores práticas do mercado para entregar experiências digitais impactantes."
  },
  {
    name: "Stefano Gennaro",
    role: "CO-Fundador e Head comercial da Inova.JS",
    image: "/images/team/stefano.png",
    skills: ["Scrum", "3D Models", "Research", "Business"],
    description: "Sou apaixonado por transformar sonhos em realidades. Como cofundador e Head Comercial, lidero a equipe comercial e gerencio projetos, garantindo a entrega de soluções inovadoras."
  },
  {
    name: "Guilherme Ribeiro",
    role: "Graphic Designer",
    image: "/images/team/Gui.jpg",
    skills: ["Photoshop", "Illustrator", "Figma"],
    description: "Tenho o prazer de transformar insights em designs profissionais. Como Designer Gráfico da Inova.js, cuido dos projetos que envolvem a criação de elementos gráficos, desde identidades visuais até artes e posts para as mídias sociais."
  }
];

const values = [
  {
    icon: Award,
    title: "Excelência",
    description: "Comprometidos com a qualidade excepcional em cada projeto que desenvolvemos.",
    benefits: [
      "Código limpo e bem documentado",
      "Testes automatizados",
      "Performance otimizada"
    ]
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalhamos em estreita parceria com nossos clientes para alcançar resultados extraordinários.",
    benefits: [
      "Comunicação transparente",
      "Reuniões semanais de alinhamento",
      "Feedback constante"
    ]
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Entrega consistente dentro do prazo, respeitando cada etapa do projeto.",
    benefits: [
      "Cronograma detalhado",
      "Sprints bem definidas",
      "Entregas incrementais"
    ]
  },
  {
    icon: Rocket,
    title: "Inovação",
    description: "Sempre à frente com as últimas tecnologias e tendências do mercado.",
    benefits: [
      "Tecnologias modernas",
      "Metodologias ágeis",
      "Melhores práticas"
    ]
  }
];

const testimonial = {
  content: "A Inova.js transformou completamente nossa presença digital. A equipe é extremamente profissional e entregou além das nossas expectativas.",
  author: "Maria Oliveira",
  role: "CEO da TechStart",
  company: "TechStart Solutions",
  rating: 5
};

export const About = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="sobre">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary-dark/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-30 blur-xl rounded-xl" />
              <img
                src="/images/equipe.png"
                alt="Equipe Inova.js"
                className="relative rounded-xl w-full object-cover aspect-[16/9] shadow-2xl"
              />
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-background-dark/95 backdrop-blur-sm p-4 rounded-xl border border-primary/20 shadow-xl">
                <div className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-primary" />
                  <span className="text-white font-semibold">Desde 2019</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-secondary via-accent to-primary text-transparent bg-clip-text">
                Transformando Ideias em Realidade Digital
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Somos uma equipe jovem e apaixonada por tecnologia, formada por desenvolvedores, 
              designers e especialistas em experiência do usuário. Nossa missão é transformar 
              ideias em experiências digitais extraordinárias.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Com mais de 5 anos de experiência no mercado, já ajudamos dezenas de empresas 
              a alcançarem seus objetivos através de soluções digitais inovadoras e eficientes.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" className="group" onClick={() => document.getElementById('equipe')?.scrollIntoView({ behavior: 'smooth' })}>
                Conheça Nossa Equipe
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="cta" size="lg" className="group" onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}>
                Fale Conosco
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background-dark/50 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="text-3xl font-bold text-primary mb-1">{achievement.value}</div>
              <div className="text-white font-medium mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-400">{achievement.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-24" id="equipe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge variant="secondary" className="bg-primary/10 text-primary border-none mb-4 text-lg">
              Nossa Equipe
            </Badge>
            <h3 className="text-5xl font-bold text-white mb-4">
              Conheça os Especialistas
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Uma equipe multidisciplinar apaixonada por criar soluções digitais inovadoras
              e impactantes para nossos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark/50 backdrop-blur-sm rounded-xl overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <div className="group-hover:scale-105 transition-transform duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-60" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-1">{member.name}</h4>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-10 blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative bg-background-light/10 backdrop-blur-sm p-6 rounded-xl border border-accent/20 transform group-hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <value.icon className="w-6 h-6 text-secondary flex-shrink-0" />
                  <h3 className="text-2xl font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg mb-4">{value.description}</p>
                <ul className="space-y-2">
                  {value.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mt-32 text-center bg-background-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
        >
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="text-xl text-gray-300 mb-6 italic">"{testimonial.content}"</p>
          <div className="space-y-1">
            <div className="font-semibold text-white">{testimonial.author}</div>
            <div className="text-primary">{testimonial.role}</div>
            <div className="text-sm text-gray-400">{testimonial.company}</div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Pronto para Transformar sua Presença Digital?
          </h3>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            Estamos prontos para transformar sua visão em uma experiência digital única e memorável.
            Entre em contato e descubra como podemos ajudar seu negócio a crescer.
          </p>
          <Button
            variant="cta"
            size="lg"
            className="group animate-[bounce_10s_cubic-bezier(0.4,0,0.2,1)_infinite] hover:brightness-110 transition-all duration-700 ease-in-out"
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comece seu Projeto
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};