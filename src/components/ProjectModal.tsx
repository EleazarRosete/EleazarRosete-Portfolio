// ===============================
// COMPONENT: ProjectModal
// Full project case study popup
// ===============================

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  const sectionLabel: React.CSSProperties = {
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '0.68rem',
    fontWeight: 500,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 8,
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 20,
          }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-bright)',
              borderRadius: 24,
              maxWidth: 700,
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
            }}
          >
            
            {/* Modal Header */}
            <div style={{
              padding: '28px 32px 0',
              display: 'flex', alignItems: 'flex-start',
              justifyContent: 'space-between', gap: 16,
            }}>
              <div>
                <div style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.7rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--accent-violet)', marginBottom: 6,
                }}>
                  {project.tag}
                </div>
                <h2 style={{
                  fontFamily: 'Sora, sans-serif',
                  fontSize: '1.4rem', fontWeight: 700,
                  color: 'var(--text-primary)',
                }}>
                  {project.title}
                </h2>
              </div>
              <button
                onClick={onClose}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', flexShrink: 0,
                  transition: 'all 0.2s',
                }}
              >
                <X size={16} />
              </button>
            </div>

              {/* Demo Link */}
              {project.demo && project.demo !== '#' && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    padding: '12px 24px', margin:'10px 0px 0px 25px', borderRadius: 10,
                    background: 'var(--gradient-btn)',
                    color: '#fff', fontWeight: 600, fontSize: '0.9rem',
                    transition: 'all 0.25s',
                  }}
                >
                  <ExternalLink size={15} />
                  View Live Demo
                </a>
              )}


            {/* Modal Body */}
            <div style={{ padding: '24px 32px 32px' }}>
              {/* Problem */}
              <div style={{ marginBottom: 22 }}>
                <p style={sectionLabel}>The Problem</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: 22 }}>
                <p style={sectionLabel}>The Solution</p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.solution}
                </p>
              </div>

              {/* Tech Stack */}
              <div style={{ marginBottom: 22 }}>
                <p style={sectionLabel}>Technology Used</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{
                      fontSize: '0.75rem',
                      fontFamily: 'JetBrains Mono, monospace',
                      padding: '4px 12px', borderRadius: 6,
                      background: 'var(--bg-secondary)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border)',
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div style={{ marginBottom: 24 }}>
                <p style={sectionLabel}>Outcome</p>
                <div style={{
                  background: 'rgba(34,197,94,0.08)',
                  border: '1px solid rgba(34,197,94,0.2)',
                  borderRadius: 12, padding: '16px 18px',
                  fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.65,
                }}>
                  ✅ {project.outcome}
                </div>
              </div>


            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
