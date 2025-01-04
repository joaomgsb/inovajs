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

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Features />
      <Portfolio />
      <Reasons />
      <Stats />
      <Contact />
      <FAQ />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;