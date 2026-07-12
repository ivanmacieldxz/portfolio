export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  images: string[];
  repoLink: string;
  demoLink: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  projects: Project[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "John Doe",
    title: "Senior Frontend Developer & UI/UX Designer",
    bio: "Apasionado por crear experiencias digitales excepcionales. Me especializo en construir aplicaciones web rápidas, accesibles y con un diseño visualmente impactante. Siempre buscando el balance perfecto entre estética y funcionalidad.",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "hello@example.com",
  },
  projects: [
    {
      id: "project-1",
      title: "Fintech Dashboard Pro",
      shortDescription: "Una plataforma analítica financiera con visualización de datos en tiempo real.",
      detailedDescription: "Desarrollé el frontend completo para una aplicación SaaS financiera. Incluye gráficos interactivos, modo oscuro nativo, y una arquitectura escalable para manejar actualizaciones en tiempo real a través de WebSockets.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
      images: [
        "/projects/app1/screen1.png",
        "/projects/app1/screen2.png",
        "/projects/app1/screen3.png",
      ],
      repoLink: "https://github.com/",
      demoLink: "https://example.com/demo1",
    },
    {
      id: "project-2",
      title: "E-Commerce Storefront",
      shortDescription: "Tienda online moderna y ultrarrápida con experiencia de carrito fluida.",
      detailedDescription: "Un storefront headless enfocado en la conversión y la velocidad de carga. Integra carrito de compras optimizado, animaciones de micro-interacción y SEO avanzado.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe", "Zustand"],
      images: [
        "/projects/app2/screen1.png",
        "/projects/app2/screen2.png",
        "/projects/app2/screen3.png",
      ],
      repoLink: "https://github.com/",
      demoLink: "https://example.com/demo2",
    },
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      category: "Styling & UI",
      skills: ["Tailwind CSS", "Framer Motion", "Sass", "Styled Components", "Radix UI"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "Webpack", "Vite", "Jest", "Figma", "Responsive Design"]
    }
  ]
};
