import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { AboutSkills } from "@/components/sections/AboutSkills";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <Hero />
      <Projects />
      <AboutSkills />
      <ContactFooter />
    </main>
  );
}
