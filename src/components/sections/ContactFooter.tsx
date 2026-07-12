"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export function ContactFooter() {
  const { email, github, linkedin, name } = portfolioData.personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl text-center mb-24"
      >
        <h2 className="text-sm font-mono text-primary mb-4 tracking-wider">
          04. ¿Qué sigue?
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold mb-6">Ponte en contacto</h3>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Actualmente estoy abierto a nuevas oportunidades. Si tienes una pregunta, 
          una propuesta interesante o simplemente quieres saludar, mi bandeja de entrada 
          está siempre abierta. ¡Haré lo posible por responderte pronto!
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-colors"
        >
          Saludar
        </a>
      </motion.div>

      <footer className="w-full max-w-7xl border-t border-surface-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
        <p>
          Diseñado y construido por <span className="text-primary">{name}</span>
        </p>
        <div className="flex items-center gap-6">
          <a href={github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github size={20} />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
        <p>&copy; {currentYear}. Todos los derechos reservados.</p>
      </footer>
    </section>
  );
}
