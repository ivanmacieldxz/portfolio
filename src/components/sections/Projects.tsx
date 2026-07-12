"use client";

import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "../ui/ProjectCard";
import { motion } from "framer-motion";

export function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <span className="text-primary font-mono text-xl md:text-3xl">01.</span>
            Proyectos Destacados
            <div className="h-px bg-surface-border flex-grow ml-4 max-w-xs" />
          </h2>
          <p className="text-white/60 max-w-2xl">
            Una selección de mis trabajos más recientes y relevantes. Cada proyecto es
            un reflejo de mi enfoque en la calidad, rendimiento y experiencia de usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
