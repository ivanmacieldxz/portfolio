export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  technologies: string[];
  images: string[];
  repoLink: string;
  demoLink: string;
  aiDriven?: boolean;
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

export interface SectionTexts {
  about: {
    title: string;
    paragraphs: string[];
  };
  contact: {
    subtitle: string;
    title: string;
    description: string;
    ctaText: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  sections: SectionTexts;
  projects: Project[];
  skills: SkillCategory[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Iván Emanuel Maciel",
    title: "Estudiante avanzado de Lic. en Cs. de la Computación",
    bio: "Soy una persona entusiasta sobre tecnologías nuevas. Me gusta trabajar en equipo y aprender de los demás. Busco mejorar mis habilidades constantemente. En el aspecto técnico, mis tópicos de interes son: desarrollo web, desarrollo mobile Android nativo, y procesamiento de lenguaje natural e inteligencia artificial.",
    github: "https://github.com/ivanmacieldxz",
    linkedin: "https://www.linkedin.com/in/iv%C3%A1n-maciel-344a543b2/",
    email: "ivanemanuelmaciel@gmail.com",
  },
  sections: {
    about: {
      title: "Sobre Mí",
      paragraphs: [
        "Soy un desarrollador apasionado por el diseño y la interacción. Mi objetivo principal es construir interfaces que no solo funcionen perfectamente, sino que también dejen una impresión duradera en los usuarios.",
        "A lo largo de mi carrera académica, he trabajado en diversos proyectos, principalmente proyectos académicos, pero últimamente en proyectos personales que resultan de mi interés. Me encanta explorar nuevas tecnologías que se alineen con mis tópicos de interés y poner en práctica lo aprendido.",
        "Creo que me destaco por mi interés en las personas, disfrutando tener experiencias amenas en el trabajo en equipo y resolución de problemas en conjunto con otras personas."
      ]
    },
    contact: {
      subtitle: "¿Qué sigue?",
      title: "Ponte en contacto",
      description: "Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta, una propuesta interesante o simplemente quieres saludar, mi bandeja de entrada está siempre abierta. ¡Haré lo posible por responderte pronto!",
      ctaText: "Enviar mensaje"
    }
  },
  projects: [
    {
      id: "my-news-feed",
      title: "My News Feed",
      shortDescription: "Aplicación web moderna para explorar noticias por categorías y descubrir contenido personalizado.",
      detailedDescription: "Explora noticias por categorías generales o recibe un feed 'Para Ti' basado en tus tópicos de interés. Cuenta con búsqueda, traducción de titulares en tiempo real, estimación de tiempo de lectura, sistema de favoritos e historial, y autenticación segura con Clerk.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "Neon DB", "Clerk", "API integration"],
      images: [
        "/projects/app1/screen1.png",
        "/projects/app1/screen2.png",
        "/projects/app1/screen3.png",
      ],
      repoLink: "https://github.com/ivanmacieldxz/my-news-feed",
      demoLink: "https://my-news-feed-ivanmacieldxzs-projects.vercel.app/",
      aiDriven: true,
    },
    {
      id: "nutricraft",
      title: "NutriCraft",
      shortDescription: "Aplicación PWA para explorar recetas, gestionar despensa y planificar comidas.",
      detailedDescription: "Permite filtrar recetas basadas en los ingredientes que posees, organizar un planificador semanal con lista de compras automática y hacer seguimiento de tu perfil nutricional (calorías y macronutrientes). Instalable en dispositivos móviles como PWA.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts", "Prisma", "Neon DB", "Clerk", "PWA", "API integration"],
      images: [
        "/projects/app2/screen1.png",
        "/projects/app2/screen2.png",
        "/projects/app2/screen3.png",
      ],
      repoLink: "https://github.com/ivanmacieldxz/nutricraft",
      demoLink: "https://nutricraft-gilt.vercel.app/",
      aiDriven: true,
    },
    {
      id: "portfolio",
      title: "Dev Portfolio",
      shortDescription: "Mi sitio web personal y portfolio profesional construido con tecnologías modernas.",
      detailedDescription: "Un portfolio web moderno y completamente responsivo diseñado para mostrar mis proyectos y habilidades. Utiliza una estética oscura y pulida, con componentes interactivos y animaciones fluidas.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Embla Carousel"],
      images: [
        "/projects/portfolio/screen1.png"
      ],
      repoLink: "https://github.com/ivanmacieldxz/portfolio",
      demoLink: "https://portfolio.vercel.app/",
      aiDriven: true,
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
      category: "Backend",
      skills: ["Node.js", "Next.js", "Java", "Spring", "Kotlin"]
    },
    {
      category: "DataBases",
      skills: ["PostgreSQL", "Neon DB", "Supabase", "Prisma"]
    },
    {
      category: "Mobile",
      skills: ["Android", "Kotlin", "Jetpack Compose", "XML", "Gradle"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitFlow", "Responsive Design", "API design and integration", "AI driven development"]
    }
  ]
};
