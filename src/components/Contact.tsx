import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { z } from "zod";
import { Phone, Mail, Clock, CheckCircle, ArrowRight } from "lucide-react";
import * as emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(1, "Mensagem é obrigatória"),
  budget: z.string().optional(),
});

const budgetOptions = [
  "Até R$ 5.000",
  "R$ 5.000 - R$ 10.000",
  "R$ 10.000 - R$ 20.000",
  "Acima de R$ 20.000",
  "A definir"
];

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    "Análise gratuita do seu projeto",
    "Orçamento detalhado em até 24h",
    "Suporte prioritário",
    "Consultoria inicial sem compromisso"
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(31) 99993-0883",
      link: "tel:+5531999930883"
    },
    {
      icon: Mail,
      title: "Email",
      content: "inova.js001@gmail.com",
      link: "mailto:inova.js001@gmail.com"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      content: "Seg - Sex, 9h às 18h",
    }
  ];

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      company: formData.company,
      budget: formData.budget,
      message: formData.message,
      to_name: "João Mateus",
    };

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email enviado com sucesso:", result);
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve com sua análise gratuita.",
      });
      setFormData({ name: "", email: "", phone: "", company: "", message: "", budget: "" });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary-DEFAULT to-background opacity-50" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info & Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Vamos criar algo <br />incrível juntos?
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Entre em contato e descubra como podemos transformar sua presença digital. 
                Oferecemos uma análise gratuita do seu projeto!
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Ao entrar em contato, você recebe:</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Informações de Contato</h3>
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.title}</div>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-white hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-white">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-8 rounded-xl border border-white/10">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Solicite seu orçamento
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">
                      Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                        errors.name ? "border-red-500" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Seu email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-300">
                      Telefone (opcional)
                    </label>
                    <Input
                      id="phone"
                      placeholder="Seu telefone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">
                      Empresa (opcional)
                    </label>
                    <Input
                      id="company"
                      placeholder="Nome da empresa"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-sm font-medium text-gray-300">
                    Orçamento Previsto (opcional)
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-white/5 border-white/10 text-white placeholder:text-gray-400 rounded-md px-3 py-2"
                  >
                    <option value="">Selecione uma faixa de valor</option>
                    {budgetOptions.map((option) => (
                      <option key={option} value={option} className="text-gray-900">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Descreva seu projeto ou necessidade"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-400 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    rows={5}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Solicitar Orçamento Gratuito
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-400 text-center">
                  Ao enviar, você concorda em receber comunicações sobre seu projeto.
                  Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};