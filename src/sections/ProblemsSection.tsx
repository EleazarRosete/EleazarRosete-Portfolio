// ===============================
// SECTION: Problem → Solution
// Speaks to client pain points and shows how Eleazar solves them
// ===============================

import { motion } from 'framer-motion';

// ===============================
// EDITABLE: PAIN POINTS & SOLUTIONS
// ===============================
const PAIN_POINTS = [
  {
    icon: '📅',
    title: 'Booking system is chaotic',
    desc: "Clients can't book easily online. Managing appointments manually is stressful and error-prone.",
  },
  {
    icon: '🐌',
    title: 'Lead follow-up is inconsistent',
    desc: 'Potential clients slip through the cracks because outreach and follow-ups rely on memory.',
  },
  {
    icon: '💸',
    title: 'Outdated website is costing you clients',
    desc: 'Your site looks old, isn’t mobile-friendly, and fails to inspire trust or convert visitors.',
  },
];

const SOLUTIONS = [
  {
    icon: '✅',
    title: 'Seamless online booking integration',
    desc: 'Clients can book 24/7 via your website with Calendly or a custom booking system, reducing manual work.',
  },
  {
    icon: '✅',
    title: 'Automated client follow-ups',
    desc: 'AI-powered workflows handle lead outreach, reminders, and follow-ups automatically, ensuring nothing falls through the cracks.',
  },
  {
    icon: '✅',
    title: 'Modern, high-converting website',
    desc: 'Professional, mobile-ready design with fast performance — built to inspire trust and convert visitors into clients.',
  },
];
export default function ProblemsSection() {
  return (
    <section id="problems" style={{ padding: '100px 0', position: 'relative' }}>
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
            Why It Matters
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 16,
          }}>
            Sound{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Familiar?
            </span>
          </h2>
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 60, lineHeight: 1.7,
          }}>
            Most businesses lose time and money on processes that could be automated.
            Here's what I hear most — and how I solve it.
          </p>
        </motion.div>

        {/* Pain + Arrow + Solution grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'start',
        }}>
          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(239,68,68,0.8)', marginBottom: 4,
            }}>
              ← The Problems
            </div>
            {PAIN_POINTS.map((p) => (
              <div key={p.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '18px 20px', borderRadius: 14,
                background: 'rgba(239,68,68,0.06)',
                border: '1px solid rgba(239,68,68,0.15)',
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: 2 }}>{p.icon}</span>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>{p.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Arrow — hidden on mobile via flex direction */}
          <motion.div
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', color: 'var(--accent-violet)',
              alignSelf: 'center',
            }}
          >
            →
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '0.72rem', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--accent-violet)', marginBottom: 4,
            }}>
              → The Solutions
            </div>
            {SOLUTIONS.map((s) => (
              <div key={s.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: 14,
                padding: '18px 20px', borderRadius: 14,
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.2)',
              }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: 2 }}>{s.icon}</span>
                <div>
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4 }}>{s.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
