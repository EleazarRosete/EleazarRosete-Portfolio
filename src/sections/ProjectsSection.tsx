// ===============================
// SECTION: Projects Showcase
// Hover effect reveals "View Details" overlay on each card.
// Clicking the card (or overlay) opens the modal.
// The "View Project" button lives inside the modal popup.
// ===============================

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Eye } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsSection({ projects, onOpenProject }: ProjectsSectionProps) {
  return (
    <section id="projects" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
            fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent-violet)', background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.25)', padding: '6px 14px',
            borderRadius: 100, marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-violet)', display: 'inline-block' }} />
            Portfolio
          </div>

          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 16,
          }}>
            Systems I've{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Built
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 60, lineHeight: 1.7,
          }}>
            Real projects. Real problems solved. Hover any card and click to see the full breakdown.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 22,
          }}
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={onOpenProject}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ===============================
// Sub-component: ProjectCard
// Hover state drives the overlay reveal on the thumbnail.
// Entire card is clickable — opens the modal.
// ===============================
function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-bright)' : 'var(--border)'}`,
        borderRadius: 20,
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.25)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.28s ease',
      }}
    >
{/* ── Thumbnail ── */}
<div
  style={{
    height: 170,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    flexShrink: 0,
    borderRadius: 18,
    background: 'var(--gradient-card)',
  }}
>
  {/* Icon as full thumbnail */}
  <img
    src={project.icon}
    alt={project.tag}
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover', // ensures image fills the container without distortion
      zIndex: 0,
    }}
  />

{/* Tag replaced with Eye icon */}
<div
  style={{
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  }}
>
  <div
    style={{
      width: 50,
      height: 50,
      borderRadius: 50,
      background: 'rgba(168,85,247,0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(168,85,247,0.4)',
    }}
  >
    <Eye size={20} color="#D8B4FE" />
  </div>
</div>

  {/* ── Hover overlay — blurred "View Details" ── */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 2,
      backdropFilter: hovered ? 'blur(6px)' : 'blur(0px)',
      WebkitBackdropFilter: hovered ? 'blur(6px)' : 'blur(0px)',
      background: hovered ? 'rgba(7,7,13,0.65)' : 'rgba(7,7,13,0)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 10,
      opacity: hovered ? 1 : 0,
      transition:
        'opacity 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease',
      pointerEvents: 'none', // clicks fall through to the card
    }}
  >
    <div
      style={{
        width: 46,
        height: 46,
        borderRadius: '50%',
        background: 'rgba(168,85,247,0.25)',
        border: '1px solid rgba(168,85,247,0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 20px rgba(168,85,247,0.3)',
      }}
    >
      <Eye size={18} color="#C084FC" />
    </div>
    <span
      style={{
        fontFamily: 'Sora, sans-serif',
        fontSize: '0.9rem',
        fontWeight: 700,
        color: '#fff',
        letterSpacing: '0.02em',
      }}
    >
      View Details
    </span>
  </div>
</div>

      {/* ── Card body ── */}
      <div style={{ padding: '20px 22px 12px', flex: 1 }}>
        <h3 style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: '1rem', fontWeight: 700, marginBottom: 8,
          color: 'var(--text-primary)',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.85rem', color: 'var(--text-secondary)',
          lineHeight: 1.65, marginBottom: 16,
        }}>
          {project.summary}
        </p>

        {/* Tech chips */}
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {project.tech.slice(0, 3).map(t => (
            <span key={t} style={{
              fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace',
              padding: '3px 9px', borderRadius: 6,
              background: 'var(--bg-secondary)', color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}>
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span style={{
              fontSize: '0.7rem', fontFamily: 'JetBrains Mono, monospace',
              padding: '3px 9px', borderRadius: 6,
              background: 'var(--bg-secondary)', color: 'var(--text-muted)',
              border: '1px solid var(--border)',
            }}>
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* ── Card footer — hint text only, button is in the modal ──
      <div style={{
        padding: '10px 22px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'flex-end',
        borderTop: '1px solid var(--border)',
        marginTop: 8,
      }}>
        <span style={{
          fontSize: '0.74rem', fontWeight: 500,
          color: hovered ? 'var(--accent-violet)' : 'var(--text-muted)',
          fontFamily: 'JetBrains Mono, monospace',
          transition: 'color 0.25s',
          letterSpacing: '0.04em',
          display: 'flex', alignItems: 'center', gap: 5,
        }}>
          <Eye size={11} />
          click to open
        </span>
      </div> */}
    </motion.div>
  );
}