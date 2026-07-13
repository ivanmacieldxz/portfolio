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
        "/projects/my-news-feed/1.png",
        "/projects/my-news-feed/2.png",
        "/projects/my-news-feed/3.png",
        "/projects/my-news-feed/4.png",
        "/projects/my-news-feed/5.png",
        "/projects/my-news-feed/6.png",
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
        "/projects/nutricraft/1.png",
        "/projects/nutricraft/2.png",
        "/projects/nutricraft/3.png",
        "/projects/nutricraft/4.png",
        "/projects/nutricraft/5.png",
        "/projects/nutricraft/6.png",
        "/projects/nutricraft/7.png",
        "/projects/nutricraft/8.png",
        "/projects/nutricraft/9.png",
        "/projects/nutricraft/10.png",
        "/projects/nutricraft/11.png",
        "/projects/nutricraft/12.png"
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
        "/projects/portfolio/1.png",
        "/projects/portfolio/2.png",
        "/projects/portfolio/3.png",
        "/projects/portfolio/4.png",
      ],
      repoLink: "https://github.com/ivanmacieldxz/portfolio",
      demoLink: "https://ivanmacieldxz-portfolio.vercel.app/",
      aiDriven: true,
    },
    {
      id: "minijava-compiler",
      title: "MiniJava Compiler",
      shortDescription: "Compilador descendente LL(1) para el lenguaje MiniJava.",
      detailedDescription: "Un compilador robusto construido desde cero en Kotlin para MiniJava (un subconjunto de Java). Implementa el pipeline completo de compilación incluyendo análisis léxico, sintáctico, semántico y generación de código (bytecode) para CeIVM.",
      technologies: ["Kotlin", "Java", "Compiler Design"],
      images: [],
      repoLink: "https://github.com/ivanmacieldxz/minijava-compiler",
      demoLink: "",
    },
    {
      id: "girlfriend-present-app",
      title: "Gift App - Android",
      shortDescription: "Aplicación Android nativa con fotos y frases personalizadas.",
      detailedDescription: "Aplicación Android desarrollada de forma nativa utilizando Kotlin y Jetpack Compose, siguiendo la arquitectura MVVM. Diseñada como un regalo personalizado, incluye la visualización de frases a medida y galerías de fotos categorizadas a partir de archivos de configuración JSON locales.",
      technologies: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "XML"],
      images: [],
      repoLink: "https://github.com/ivanmacieldxz/girlfriend-present-android-app",
      demoLink: "",
    },
    {
      id: "towit-tower-app",
      title: "TowIt - Tower App",
      shortDescription: "Aplicación web para conductores de grúas de la plataforma TowIt.",
      detailedDescription: "Aplicación (rol conductor) para una plataforma de servicios de remolque. Permite a los conductores de grúa (Towers) gestionar su disponibilidad, registrar vehículos y procesar solicitudes de remolque. El sistema forma parte de una arquitectura de 4 aplicaciones autónomas que se comunican mediante APIs REST.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Neon DB", "Prisma", "Upstash Redis", "Clerk"],
      images: [
        "/projects/towit/1.png",
        "/projects/towit/2.png",
        "/projects/towit/3.png",
        "/projects/towit/4.png",
        "/projects/towit/5.png",
        "/projects/towit/6.png",
        "/projects/towit/7.png",
        "/projects/towit/8.png",
        "/projects/towit/9.png",
        "/projects/towit/10.png",
        "/projects/towit/11.png",
      ],
      repoLink: "https://github.com/IAW-2026/proyecto-a-driver2-towit",
      demoLink: "https://proyecto-a-driver2-towit.vercel.app/",
      aiDriven: true,
    },
    {
      id: "task-management-api",
      title: "Task Management API",
      shortDescription: "API REST tipo Trello para gestión de proyectos y tareas.",
      detailedDescription: "Sistema de gestión de proyectos inspirado en Trello, desarrollado como una robusta API REST usando Java y Spring Boot. Ofrece autenticación segura con JWT, gestión (CRUD) de tareas con diferentes estados y prioridades, y agrupación por espacios de trabajo. Base de datos PostgreSQL en un entorno aislado mediante Docker.",
      technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "Docker", "JWT", "Hibernate"],
      images: [],
      repoLink: "https://github.com/ivanmacieldxz/task-management-app",
      demoLink: "",
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
      skills: ["Node.js", "Java", "Spring Boot", "Spring Security", "Kotlin", "REST APIs", "JWT"]
    },
    {
      category: "DataBases",
      skills: ["PostgreSQL", "Neon DB", "Supabase", "Prisma", "Hibernate"]
    },
    {
      category: "Mobile",
      skills: ["Android", "Kotlin", "Jetpack Compose", "MVVM", "XML", "Gradle"]
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitFlow", "Docker", "Compiler Design", "AI driven development"]
    }
  ]
};
