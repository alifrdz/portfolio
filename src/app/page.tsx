import HeroSection from '@/components/slides/HeroSection';
import AboutSection from '@/components/slides/AboutSection';
import ExperienceSection from '@/components/slides/ExperienceSection';
import SkillsSection from '@/components/slides/SkillsSection';
import ProjectSection from '@/components/slides/ProjectSection';
import FooterSection from '@/components/slides/FooterSection';
import ProjectShowcaseTwo from '@/components/slides/ProjectShowcaseTwo';

// WAJIB ADA: export default function
export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* SECTION HOME */}
      <section id="home" className="min-h-screen w-full relative overflow-hidden snap-start">
        <HeroSection />
      </section>

      {/* SECTION ABOUT */}
      <section id="about" className="min-h-screen w-full relative overflow-hidden snap-start">
        <AboutSection />
      </section>

      {/* SECTION EXPERIENCE & SKILLS */}
      <section id="experience" className="min-h-screen w-full relative overflow-hidden snap-start">
        <ExperienceSection />
      </section>

      <section id="skills" className="min-h-screen w-full relative overflow-hidden snap-start">
        <SkillsSection />
      </section>

      {/* SECTION PROJECTS */}
      <section id="projects" className="min-h-screen w-full relative overflow-hidden snap-start">
        <ProjectSection />
      </section>

      {/* PROJECT SHOWCASE TWO */}
      <section id="showcase-two" className="min-h-screen w-full relative overflow-hidden snap-start">
        <ProjectShowcaseTwo />
      </section>

      {/* SECTION CONTACT */}
      <section id="contact" className="min-h-screen w-full relative overflow-hidden snap-start">
        <FooterSection />
      </section>
    </main>
  );
}