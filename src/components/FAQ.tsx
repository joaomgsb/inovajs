import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos diversas formas de pagamento, incluindo cartão de crédito, débito, PIX e transferência bancária. Trabalhamos com parcelamento em até 12x no cartão de crédito."
    },
    {
      question: "Vocês oferecem serviços de manutenção?",
      answer: "Sim, oferecemos serviços de manutenção mensal para garantir que seu site esteja sempre atualizado, seguro e funcionando perfeitamente."
    },
    {
      question: "Qual a diferença entre um site e uma landing page?",
      answer: "Um site é uma presença digital completa com múltiplas páginas e funcionalidades, enquanto uma landing page é uma página única focada em converter visitantes em leads ou vendas."
    },
    {
      question: "Quanto tempo leva para criar um site ou landing page",
      answer: "O prazo varia de acordo com a complexidade do projeto, mas geralmente uma landing page leva de 1 a 2 semanas, e um site completo de 3 a 6 semanas."
    },
    {
      question: "Posso personalizar o design?",
      answer: "Sim, todos os nossos projetos são personalizados de acordo com a sua marca e necessidades específicas."
    },
    {
      question: "Preciso ter um domínio e hospedagem?",
      answer: "Não se preocupe! Podemos ajudar com o registro do domínio e fornecer hospedagem confiável para seu site."
    },
    {
      question: "O site será responsivo?",
      answer: "Sim, todos os nossos sites são desenvolvidos com design responsivo, adaptando-se perfeitamente a qualquer dispositivo."
    },
    {
      question: "Vocês criam conteúdo para o site?",
      answer: "Sim, oferecemos serviços de criação de conteúdo otimizado para SEO e adequado ao seu público-alvo."
    },
    {
      question: "O site será otimizado para SEO?",
      answer: "Sim, implementamos as melhores práticas de SEO para melhorar o posicionamento do seu site nos mecanismos de busca."
    },
    {
      question: "Como faço para solicitar um orçamento?",
      answer: "Você pode solicitar um orçamento através do formulário de contato em nosso site ou pelo WhatsApp. Retornaremos em até 24 horas úteis."
    },
    {
      question: "Os sites criados por vocês são adaptados para atender à LGPD?",
      answer: "Sim, todos os nossos sites são desenvolvidos seguindo as diretrizes da Lei Geral de Proteção de Dados (LGPD)."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="faq">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary-DEFAULT opacity-50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-500 to-primary bg-clip-text text-transparent">
            FAQ
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Perguntas Frequentes
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card rounded-xl border border-white/10 p-6"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-white/10 rounded-lg px-4 bg-white/5"
                >
                  <AccordionTrigger className="text-left text-white hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="https://wa.me/553199930883?text=Ol%C3%A1!%20Poderiam%20me%20enviar%20um%20or%C3%A7amento%20para%20desenvolvimento%20de%20site%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-success hover:bg-success/90 text-white font-medium px-8 py-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-success/25"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};