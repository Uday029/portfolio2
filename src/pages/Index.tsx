import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import FloatingElements from "@/components/FloatingElements";
import Floating3DShapes from "@/components/Floating3DShapes";
import SectionDivider from "@/components/SectionDivider";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrainingSection from "@/components/TrainingSection";
import EducationSection from "@/components/EducationSection";
import CertificatesSection from "@/components/CertificatesSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <ParticleBackground />
    <FloatingElements />
    <Floating3DShapes />
    <Navbar />
    <main>
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <TrainingSection />
      <SectionDivider />
      <EducationSection />
      <SectionDivider />
      <CertificatesSection />
      <SectionDivider />
      <AchievementsSection />
      <SectionDivider />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
