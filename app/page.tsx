import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Page() {
  return (
    /* 
      REMOVED: Old text color overrides and absolute grids.
      ADDED: selection:bg-blue-500/30 to match your new blue premium ambient theme.
    */
    <div className="w-full selection:bg-blue-500/30">
      
      {/* Profile Container */}
      <div className="space-y-24 pb-24">
        <section id="about" className="scroll-mt-24 block">
          <Hero />
        </section>
        
        <section id="experience" className="scroll-mt-24 block">
          <Experience />
        </section>
        
        <section id="projects" className="scroll-mt-24 block">
          <Projects />
        </section>
        
        <section id="skills" className="scroll-mt-24 block">
          <Skills />
        </section>
      </div>
    </div>
  );
}