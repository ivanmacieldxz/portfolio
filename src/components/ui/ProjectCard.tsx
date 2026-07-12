"use client";

import { Project } from "@/data/portfolio";
import { Carousel } from "./Carousel";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-surface border border-surface-border hover:border-primary/50 transition-colors duration-300 group">
      <div className="p-4 pb-0">
        <Carousel images={project.images} />
      </div>
      
      <div className="flex flex-col flex-grow p-6 md:p-8">
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-white/70 mb-4 text-sm md:text-base">
          {project.detailedDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-surface-border">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
          >
            <ExternalLink size={18} />
            Ver Demo
          </a>
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold hover:text-primary transition-colors"
          >
            <Github size={18} />
            Código
          </a>
        </div>
      </div>
    </div>
  );
}
