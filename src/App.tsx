// ===============================
// APP.TSX — Main Application Shell
// Orchestrates all sections and state
// ===============================

import { useState } from 'react';
import { useTheme } from './hooks/useTheme';

// Components
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';

// Sections
import HeroSection from './sections/HeroSection';
import ExpertiseSection from './sections/ExpertiseSection';
import AboutSection from './sections/AboutSection';
import ProblemsSection from './sections/ProblemsSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import ProcessSection from './sections/ProcessSection';
import { TrustSection, CTASection, ContactSection } from './sections/TrustCTAContact';

// Data
import { projects, Project } from './data/projects';
import { services } from './data/services';
import { processSteps } from './data/process';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Animated particle background */}
      <ParticlesBackground />

      {/* Sticky navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* =========================================
          PAGE SECTIONS — Conversion Story Order:
          Hook → Authority → About → Proof →
          Capabilities → Process → Trust → Action
      ========================================= */}

      {/* 1. Hook — Cinematic split-layout Hero */}
      <HeroSection />

      {/* 2. About — Personal story, timeline, fun facts */}
      <AboutSection />

      {/* 3. Authority — Expertise / Credibility cards */}
      <ExpertiseSection />

      {/* 4. Proof (emotional) — Problem → Solution */}
      <ProblemsSection />

      {/* 5. Proof (tangible) — Projects Showcase */}
      <ProjectsSection
        projects={projects}
        onOpenProject={setSelectedProject}
      />

      {/* 6. Capabilities — Services with delivery times */}
      <ServicesSection services={services} />

      {/* 7. Process — Professional 6-step workflow */}
      <ProcessSection steps={processSteps} />

      {/* 8. Trust — Philosophy statement */}
      <TrustSection />

      {/* 9. Action — Final CTA */}
      <CTASection />

      {/* 10. Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
