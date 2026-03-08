// ===============================
// APP.TSX — Main Application Shell
// Orchestrates all sections and state
// ===============================

import { useState, lazy, Suspense } from 'react';
import { useTheme } from './hooks/useTheme';

// Above-the-fold — loaded eagerly (user sees these immediately)
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';

// Below-the-fold — lazy loaded for better initial performance
const AboutSection     = lazy(() => import('./sections/AboutSection'));
const ExpertiseSection = lazy(() => import('./sections/ExpertiseSection'));
const ProblemsSection  = lazy(() => import('./sections/ProblemsSection'));
const ProjectsSection  = lazy(() => import('./sections/ProjectsSection'));
const ServicesSection  = lazy(() => import('./sections/ServicesSection'));
const ProcessSection   = lazy(() => import('./sections/ProcessSection'));
const Footer           = lazy(() => import('./components/Footer'));
const ProjectModal     = lazy(() => import('./components/ProjectModal'));

// Named exports — wrap in a default export for lazy()
const TrustSection   = lazy(() => import('./sections/TrustCTAContact').then(m => ({ default: m.TrustSection })));
const CTASection     = lazy(() => import('./sections/TrustCTAContact').then(m => ({ default: m.CTASection })));
const ContactSection = lazy(() => import('./sections/TrustCTAContact').then(m => ({ default: m.ContactSection })));

// Data
import { projects, Project } from './data/projects';
import { services } from './data/services';
import { processSteps } from './data/process';

// Minimal fallback — preserves layout while section loads
function SectionFallback() {
  return <div style={{ minHeight: 200 }} aria-hidden="true" />;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      {/* Animated particle background — always visible */}
      <ParticlesBackground />

      {/* Sticky navigation — always visible */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* =========================================
          PAGE SECTIONS — Conversion Story Order:
          Hook → About → Authority → Proof →
          Capabilities → Process → Trust → Action
      ========================================= */}

      {/* 1. Hook — eager, above the fold */}
      <HeroSection />

      {/* 2–10. All below-fold sections lazy loaded */}

      <Suspense fallback={<SectionFallback />}>
        <ProblemsSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ExpertiseSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection
          projects={projects}
          onOpenProject={setSelectedProject}
        />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ServicesSection services={services} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ProcessSection steps={processSteps} />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <TrustSection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Project Detail Modal — only mounts when a project is selected */}
      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </>
  );
}