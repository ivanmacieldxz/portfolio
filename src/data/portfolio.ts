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
    name: "Iván Emanuel Maciel",
    title: "Estudiante avanzado de Lic. en Cs. de la Computación",
    bio: "Me considero una persona curiosa y proactiva, con una gran facilidad para adaptarme a nuevas tecnologías y desafíos. Disfruto del trabajo en equipo y me esfuerzo por mantener una comunicación clara y efectiva. Busco constantemente aprender y mejorar mis habilidades para poder contribuir de manera significativa en mis proyectos.",
    github: "https://github.com/ivanmacieldxz",
    linkedin: "https://www.linkedin.com/in/iv%C3%A1n-maciel-344a543b2/",
    email: "ivanemanuelmaciel@gmail.com",
  },
  projects: [
    {
      id: "my-news-feed",
      title: "My News Feed 📰",
      shortDescription: "Aplicación web moderna para explorar noticias por categorías y descubrir contenido personalizado.",
      detailedDescription: "Explora noticias por categorías generales o recibe un feed 'Para Ti' basado en tus tópicos de interés. Cuenta con búsqueda, traducción de titulares en tiempo real, estimación de tiempo de lectura, sistema de favoritos e historial, y autenticación segura con Clerk.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Neon DB", "Clerk", "NewsAPI"],
      images: [
        "/projects/app1/screen1.png",
        "/projects/app1/screen2.png",
        "/projects/app1/screen3.png",
      ],
      repoLink: "https://github.com/ivanmacieldxz/my-news-feed",
      demoLink: "https://my-news-feed-ivanmacieldxzs-projects.vercel.app/",
    },
    {
      id: "nutricraft",
      title: "NutriCraft 🥗",
      shortDescription: "Aplicación PWA para explorar recetas, gestionar despensa y planificar comidas.",
      detailedDescription: "Permite filtrar recetas basadas en los ingredientes que posees, organizar un planificador semanal con lista de compras automática y hacer seguimiento de tu perfil nutricional (calorías y macronutrientes). Instalable en dispositivos móviles como PWA.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Neon DB", "Clerk", "PWA", "Recharts"],
      images: [
        "/projects/app2/screen1.png",
        "/projects/app2/screen2.png",
        "/projects/app2/screen3.png",
      ],
      repoLink: "https://github.com/ivanmacieldxz/nutricraft",
      demoLink: "https://github.com/ivanmacieldxz/nutricraft",
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
