import HeroSection from '@/components/slides/HeroSection';
import AboutSection from '@/components/slides/AboutSection';
import ExperienceSection from '@/components/slides/ExperienceSection';
import SkillsSection from '@/components/slides/SkillsSection';
import ProjectSection from '@/components/slides/ProjectSection';
import TestimonialSection from '@/components/slides/TestimonialSection';
import FooterSection from '@/components/slides/FooterSection';
import ProjectShowcaseTwo from '@/components/slides/ProjectShowcaseTwo';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <HeroSection />
      </section>
      <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <AboutSection />
      </section>
      <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <ExperienceSection />
      </section>
      <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <SkillsSection />
      </section>
      <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <ProjectSection />
      </section>
       <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <ProjectShowcaseTwo />
      </section>
      <section className="min-h-screen w-full relative overflow-hidden snap-start">
        <FooterSection />
      </section>
    </main>
  );
}