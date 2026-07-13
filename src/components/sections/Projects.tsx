"use client";

import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "../ui/ProjectCard";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Projects() {
  const { projects } = portfolioData;
  
  // Duplicamos los proyectos para asegurar que el carrusel tenga suficientes elementos 
  // para renderizar el loop continuo desde el inicio (sin espacios en blanco)
  const carouselProjects = [...projects, ...projects];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(true);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="flex-grow"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-4">
              <span className="text-primary font-mono text-xl md:text-3xl">01.</span>
              Proyectos Destacados
              <div className="h-px bg-surface-border flex-grow ml-4 max-w-xs hidden md:block" />
            </h2>
            <p className="text-white/60 max-w-2xl">
              Una selección de mis trabajos más recientes y relevantes. Cada proyecto es
              un reflejo de mi enfoque en la calidad, rendimiento y experiencia de usuario.
            </p>
          </motion.div>
          
          {projects.length > 1 && (
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="p-3 rounded-full bg-surface border border-surface-border disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50 text-white/70 hover:text-primary transition-all"
                aria-label="Proyectos anteriores"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="p-3 rounded-full bg-surface border border-surface-border disabled:opacity-50 disabled:cursor-not-allowed hover:border-primary/50 text-white/70 hover:text-primary transition-all"
                aria-label="Siguientes proyectos"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex gap-4 md:gap-8 pb-8 items-stretch cursor-grab active:cursor-grabbing">
          {carouselProjects.map((project, index) => (
            <div 
              key={`${project.id}-${index}`} 
              className="flex-[0_0_85%] min-w-0 md:flex-[0_0_60%] lg:flex-[0_0_50%] xl:flex-[0_0_40%] h-auto cursor-pointer"
              onClick={() => emblaApi?.scrollTo(index)}
            >
              <div className={`h-full transition-all duration-500 ease-out ${
                index === selectedIndex ? "opacity-100 scale-100" : "opacity-40 scale-95"
              }`}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
