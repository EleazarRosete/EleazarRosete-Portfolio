// ===============================
// SECTION: Professional Process
// Six-step client-focused workflow
// ===============================

import { motion } from 'framer-motion';
import { ProcessStep } from '../data/process';

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export default function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" style={{ background: 'var(--bg-secondary)', padding: '100px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
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
            How We Work
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 16,
          }}>
            A Process Built for{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Real Results
            </span>
          </h2>
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 64, lineHeight: 1.7,
          }}>
            No guesswork, no surprises. Every project follows a clear six-step framework.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 4,
          position: 'relative',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{ textAlign: 'center', padding: '20px 12px' }}
            >
              {/* Step number bubble */}
              <motion.div
                whileHover={{ scale: 1.12 }}
                style={{
                  width: 54, height: 54, borderRadius: 14,
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-bright)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 18px',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.8rem', fontWeight: 500,
                  color: 'var(--accent-violet)',
                  transition: 'background 0.25s, color 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'var(--gradient-btn)';
                  (e.currentTarget as HTMLDivElement).style.color = '#fff';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background = 'var(--bg-card)';
                  (e.currentTarget as HTMLDivElement).style.color = 'var(--accent-violet)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-bright)';
                }}
              >
                {step.num}
              </motion.div>

              <h4 style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '0.9rem', fontWeight: 600, marginBottom: 8,
              }}>
                {step.title}
              </h4>
              <p style={{
                fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Revision note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: 40, textAlign: 'center' }}
        >
          <p style={{
            fontSize: '0.88rem', color: 'var(--text-muted)',
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '10px 20px', borderRadius: 100,
            background: 'var(--bg-card)', border: '1px solid var(--border)',
          }}>
            Includes{' '}
            <strong style={{ color: 'var(--accent-violet)' }}>3–5 minor revisions</strong>{' '}
            and{' '}
            <strong style={{ color: 'var(--accent-violet)' }}>1–2 major revisions</strong>{' '}
            during the concept phase.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
