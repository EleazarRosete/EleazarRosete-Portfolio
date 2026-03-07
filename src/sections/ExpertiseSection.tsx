// ===============================
// SECTION: Expertise / Authority
// Feature cards showing core capabilities
// ===============================

import { motion } from 'framer-motion';
import { useRef } from 'react';

// ===============================
// EDITABLE: EXPERTISE CARDS
// Add or remove cards as needed
// ===============================
const EXPERTISE = [
  {
    icon: '🌐',
    title: 'Website Development',
    description: 'Responsive, fast, and conversion-optimized websites built with modern frameworks. Booking systems, admin panels, and custom functionality included.',
  },
  {
    icon: '⚡',
    title: 'Business Automation',
    description: 'Building scalable workflow automation with n8n and similar platforms — optimizing lead handling, internal processes, and client onboarding..',
  },
  {
    icon: '🤖',
    title: 'AI Integrations',
    description: 'Smart AI-powered systems that personalize outreach, process documents, and answer queries using RAG technology — without breaking the bank.',
  },
  {
    icon: '🔄',
    title: 'Workflow Optimization',
    description: 'Audit your current processes, identify friction points, and design leaner systems that scale with your business growth.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ExpertiseSection() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      id="expertise"
      ref={ref}
      style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.72rem', fontWeight: 500,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent-violet)',
            background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.25)',
            padding: '6px 14px', borderRadius: 100,
            marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-violet)', display: 'inline-block' }} />
            What I Do
          </div>

          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 16,
          }}>
            Built for Business.{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Engineered for Efficiency.
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 60, lineHeight: 1.7,
          }}>
            From elegant websites to powerful automation pipelines — I combine technical depth
            with strategic thinking to deliver solutions that actually move the needle.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 20,
          }}
        >
          {EXPERTISE.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '32px 28px',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-bright)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14,
                background: 'var(--gradient-card)',
                border: '1px solid var(--border-bright)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, marginBottom: 20,
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.05rem', fontWeight: 600, marginBottom: 10,
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
