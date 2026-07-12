"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Code2, MonitorPlay, Settings } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "Frontend": <MonitorPlay className="w-5 h-5 text-primary" />,
  "Styling & UI": <Code2 className="w-5 h-5 text-secondary" />,
  "Tools & Others": <Settings className="w-5 h-5 text-primary/70" />,
};

export function AboutSkills() {
  const { skills } = portfolioData;

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4">
              <span className="text-primary font-mono text-xl md:text-3xl">02.</span>
              Sobre Mí
            </h2>
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              <p>
                Soy un desarrollador apasionado por el diseño y la interacción. Mi objetivo principal es 
                construir interfaces que no solo funcionen perfectamente, sino que también dejen una 
                impresión duradera en los usuarios.
              </p>
              <p>
                A lo largo de mi carrera, he trabajado en diversos proyectos, desde aplicaciones internas 
                hasta productos SaaS de alto tráfico. Me encanta explorar nuevas tecnologías, 
                optimizar el rendimiento (Core Web Vitals) y crear sistemas de diseño escalables.
              </p>
              <p>
                Cuando no estoy programando, probablemente me encuentres leyendo sobre UX, 
                experimentando con animaciones CSS/Framer Motion, o simplemente tomando un buen café.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-4 lg:hidden">
              <span className="text-primary font-mono text-xl md:text-3xl">03.</span>
              Habilidades
            </h2>
            
            <div className="space-y-8 lg:mt-[5.5rem]">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    {iconMap[skillGroup.category] || <Code2 className="w-5 h-5 text-primary" />}
                    <h3 className="text-xl font-semibold text-white/90">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm font-medium bg-black/40 border border-surface-border rounded-lg text-white/80 hover:text-primary hover:border-primary/50 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
