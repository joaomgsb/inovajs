import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
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

const Index = () => {
  const timestamp = new Date().getTime();
  const ogImage = `https://inovajs.com.br/images/inovajs.png?v=${timestamp}`;

  useEffect(() => {
    // Adiciona o Google Tag Manager dinamicamente (head)
    const gtmScript = document.createElement("script");
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MLTTJ68N');
    `;
    document.head.appendChild(gtmScript);

    // Adiciona o Google Analytics (GA4) dinamicamente
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-BXR1114VLL";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    const gaInlineScript = document.createElement("script");
    gaInlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BXR1114VLL');
    `;
    document.head.appendChild(gaInlineScript);

    // Adiciona o Google Tag Manager (noscript) dinamicamente no body
    const noscriptGTM = document.createElement("noscript");
    noscriptGTM.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLTTJ68N"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.insertBefore(noscriptGTM, document.body.firstChild);
  }, []);

  return (
    <>
      <Helmet>
        <title>Inova Creator Hub - Plataforma de Inovação e Criação</title>
        <meta name="description" content="Sua plataforma completa para inovação e desenvolvimento de projetos criativos" />
        <meta name="author" content="Inova.js" />
        <meta name="keywords" content="inovação, criatividade, hub de criadores, desenvolvimento de projetos, tecnologia, colaboração" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://inovajs.com.br" />
        <meta property="og:title" content="Inova Creator Hub - Plataforma de Inovação e Criação" />
        <meta property="og:description" content="Sua plataforma completa para inovação e desenvolvimento de projetos criativos" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Inova.js" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Inova Creator Hub - Plataforma de Inovação e Criação" />
        <meta name="twitter:description" content="Sua plataforma completa para inovação e desenvolvimento de projetos criativos" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Prévia do site Inova.js" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://inovajs.com.br" />

        {/* Robots */}
        <meta name="robots" content="index, follow" />
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
