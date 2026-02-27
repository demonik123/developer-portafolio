import AboutSection from "../components/homepage/about";
import Blog from "../components/homepage/blog";
import ContactSection from "../components/homepage/contact";
import Education from "../components/homepage/education";
import Experience from "../components/homepage/experience";
import HeroSection from "../components/homepage/hero-section";
import Projects from "../components/homepage/projects";
import Skills from "../components/homepage/skills";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  const metadata = {
    es: {
      title: "Boris Leonel - Desarrollador Full Stack | Portfolio",
      description: "Soy Boris Leonel, Desarrollador Full Stack con experiencia en React, Next.js, NestJS, Flutter y TypeScript. Portafolio de proyectos de desarrollo web y móvil.",
    },
    en: {
      title: "Boris Leonel - Full Stack Developer | Portfolio",
      description: "I am Boris Leonel, Full Stack Developer with experience in React, Next.js, NestJS, Flutter and TypeScript. Web and mobile development portfolio.",
    },
    pt: {
      title: "Boris Leonel - Desenvolvedor Full Stack | Portfolio",
      description: "Sou Boris Leonel, Desenvolvedor Full Stack com experiência em React, Next.js, NestJS, Flutter e TypeScript. Portfólio de projetos de desenvolvimento web e móvel.",
    },
  };

  return metadata[locale] || metadata.es;
}

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
  );
}
