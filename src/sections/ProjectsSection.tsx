// ===============================
// SECTION: Projects Showcase
// Category toggle: "Websites" ↔ "Automations"
// Hover effect reveals "View Details" overlay on each card.
// Clicking the card opens the modal.
// ===============================

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Eye, Globe, Zap } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectsSectionProps {
  projects: Project[];
  onOpenProject: (project: Project) => void;
}

type Category = 'website' | 'automation';

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ProjectsSection({ projects, onOpenProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('website');

  const filtered = projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" aria-label="Projects showcase" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* ── Section header ── */}
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
            <span
              aria-hidden="true"
              style={{
                width: 6, height: 6, borderRadius: '50%',
                background: 'var(--accent-violet)', display: 'inline-block',
              }}
            />
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
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Built
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 48, lineHeight: 1.7,
          }}>
            Real projects. Real problems solved. Hover any card and click to see the full breakdown.
          </p>
        </motion.div>

        {/* ── Category toggle ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          style={{ marginBottom: 52, display: 'flex', justifyContent: 'center' }}
        >
          <CategoryToggle active={activeCategory} onChange={setActiveCategory} />
        </motion.div>

        {/* ── Cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -12, transition: { duration: 0.2 } }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 22,
            }}
          >
            {filtered.length === 0 ? (
              <EmptyState category={activeCategory} />
            ) : (
              filtered.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={onOpenProject}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}

// ===============================
// Sub-component: CategoryToggle
// ===============================
function CategoryToggle({
  active,
  onChange,
}: {
  active: Category;
  onChange: (c: Category) => void;
}) {
  const tabs: { id: Category; label: string; Icon: typeof Globe }[] = [
    { id: 'website',    label: 'Websites',    Icon: Globe },
    { id: 'automation', label: 'Automations', Icon: Zap   },
  ];

  return (
    <div
      role="tablist"
      aria-label="Filter projects by category"
      style={{
        position: 'relative',
        display: 'inline-flex',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: 5,
        boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
      }}
    >
      {/* Sliding pill indicator */}
      <motion.div
        aria-hidden="true"
        animate={{ x: active === 'website' ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
        style={{
          position: 'absolute',
          top: 5, left: 5,
          width: 'calc(50% - 5px)',
          height: 'calc(100% - 10px)',
          borderRadius: 10,
          background:
            active === 'website'
              ? 'linear-gradient(135deg, rgba(168,85,247,0.35) 0%, rgba(99,102,241,0.25) 100%)'
              : 'linear-gradient(135deg, rgba(251,191,36,0.28) 0%, rgba(245,158,11,0.18) 100%)',
          border:
            active === 'website'
              ? '1px solid rgba(168,85,247,0.45)'
              : '1px solid rgba(251,191,36,0.4)',
          boxShadow:
            active === 'website'
              ? '0 0 18px rgba(168,85,247,0.25), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 0 18px rgba(251,191,36,0.2), inset 0 1px 0 rgba(255,255,255,0.06)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {tabs.map(({ id, label, Icon }) => {
        const isActive = active === id;
        const isWebsite = id === 'website';
        const activeColor = isWebsite ? '#C084FC' : '#FCD34D';
        const inactiveColor = 'var(--text-muted)';

        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(id)}
            style={{
              position: 'relative', zIndex: 1,
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 26px', borderRadius: 10,
              border: 'none', background: 'transparent', cursor: 'pointer',
              fontFamily: 'Sora, sans-serif', fontSize: '0.875rem',
              fontWeight: isActive ? 700 : 500,
              color: isActive ? activeColor : inactiveColor,
              letterSpacing: '0.01em', transition: 'color 0.25s ease',
              minWidth: 148, justifyContent: 'center', outline: 'none',
            }}
          >
            <motion.span
              aria-hidden="true"
              animate={{ color: isActive ? activeColor : inactiveColor, scale: isActive ? 1 : 0.88 }}
              transition={{ duration: 0.25 }}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Icon size={15} strokeWidth={isActive ? 2.2 : 1.8} />
            </motion.span>

            {label}

            <AnimatePresence>
              {isActive && (
                <motion.span
                  key="dot"
                  aria-hidden="true"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: 5, height: 5, borderRadius: '50%',
                    background: activeColor, boxShadow: `0 0 6px ${activeColor}`,
                    flexShrink: 0,
                  }}
                />
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}

// ===============================
// Sub-component: EmptyState
// ===============================
function EmptyState({ category }: { category: Category }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        gridColumn: '1 / -1',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '80px 24px', gap: 14,
        color: 'var(--text-muted)',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '0.8rem', letterSpacing: '0.06em',
        border: '1px dashed var(--border)', borderRadius: 20,
        background: 'var(--bg-card)',
      }}
    >
      {category === 'website' ? (
        <Globe size={32} strokeWidth={1.2} color="rgba(168,85,247,0.4)" aria-hidden="true" />
      ) : (
        <Zap size={32} strokeWidth={1.2} color="rgba(251,191,36,0.4)" aria-hidden="true" />
      )}
      <span style={{ opacity: 0.55 }}>No {category} projects yet</span>
    </motion.div>
  );
}

// ===============================
// Sub-component: ProjectCard
// Handles both image URLs and emoji strings as icons.
// ===============================
function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  const [hovered, setHovered] = useState(false);

  // Detect if icon is an emoji/text (no slash, no dot) vs an imported image path
  const isEmoji = project.icon && !project.icon.includes('/') && !project.icon.includes('.');

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => onOpen(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onOpen(project); }}
      style={{
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? 'var(--border-bright)' : 'var(--border)'}`,
        borderRadius: 20, overflow: 'hidden', cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
        position: 'relative',
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.25)' : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.28s ease',
      }}
    >
      {/* ── Thumbnail ── */}
      <div
        style={{
          height: 170, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden', flexShrink: 0,
          borderRadius: 18, background: 'var(--gradient-card)',
        }}
      >
        {isEmoji ? (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(99,102,241,0.08) 100%)',
              fontSize: '3.5rem', userSelect: 'none',
            }}
          >
            {project.icon}
          </div>
        ) : (
          /* ✅ FIX: descriptive alt text + lazy loading for below-fold images */
          <img
            src={project.icon}
            alt={`${project.title} — ${project.tag} project thumbnail`}
            loading="lazy"
            decoding="async"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', zIndex: 0,
            }}
          />
        )}

        {/* Eye icon badge — only shown when NOT hovered */}
        {!isEmoji && (
          <div
            aria-hidden="true"
            style={{
              position: 'relative', zIndex: 1,
              opacity: hovered ? 0 : 1,
              transition: 'opacity 0.25s ease',
            }}
          >
            <div style={{
              width: 50, height: 50, borderRadius: 50,
              background: 'rgba(168,85,247,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid rgba(168,85,247,0.4)',
            }}>
              <Eye size={20} color="#D8B4FE" aria-hidden="true" />
            </div>
          </div>
        )}

        {/* ── Hover overlay ── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            backdropFilter: hovered ? 'blur(6px)' : 'blur(0px)',
            WebkitBackdropFilter: hovered ? 'blur(6px)' : 'blur(0px)',
            background: hovered ? 'rgba(7,7,13,0.65)' : 'rgba(7,7,13,0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 10,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease',
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: 46, height: 46, borderRadius: '50%',
            background: 'rgba(168,85,247,0.25)',
            border: '1px solid rgba(168,85,247,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 20px rgba(168,85,247,0.3)',
          }}>
            <Eye size={18} color="#C084FC" aria-hidden="true" />
          </div>
          <span style={{
            fontFamily: 'Sora, sans-serif', fontSize: '0.9rem',
            fontWeight: 700, color: '#fff', letterSpacing: '0.02em',
          }}>
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
    </motion.div>
  );
}