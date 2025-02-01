import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Reasons } from "@/components/Reasons";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Portfolio } from "@/components/Portfolio";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { Differentials } from "@/components/Differentials";
import { Pricing } from "@/components/Pricing";
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Inova Creator Hub - Plataforma de Inovação e Criação</title>
        <meta name="description" content="Descubra o Inova Creator Hub - sua plataforma completa para inovação e desenvolvimento de projetos criativos. Conecte-se com criadores, desenvolva ideias e transforme sua visão em realidade." />
        <meta name="keywords" content="inovação, criatividade, hub de criadores, desenvolvimento de projetos, tecnologia, colaboração" />
        <meta property="og:title" content="Inova Creator Hub - Plataforma de Inovação e Criação" />
        <meta property="og:description" content="Sua plataforma completa para inovação e desenvolvimento de projetos criativos." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inova Creator Hub - Plataforma de Inovação e Criação" />
        <meta name="twitter:description" content="Sua plataforma completa para inovação e desenvolvimento de projetos criativos." />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <main className="bg-background text-foreground">
        <Hero />
        <About />
        <Features />
        <Portfolio />
        <Differentials />
        <Testimonials />
        <Reasons />
        <Stats />
        <Contact />
        <Pricing />
        <FAQ />
        <WhatsAppButton />
        <Footer />
      </main>
    </>
  );
};

export default Index;