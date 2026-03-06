// ===============================
// SECTION: About Me
// Personal story, timeline, fun facts, and what drives Eleazar
// ===============================

import { motion } from 'framer-motion';
import { Code2, Zap, Coffee, BookOpen } from 'lucide-react';
import eleazar from '../assets/eleazar.png';

// ================================================================
// ✏️ EDITABLE ZONE — Update all personal details below
// ================================================================

// ✏️ Your short bio — displayed in the main paragraph
const BIO_PARAGRAPHS = [
  `I'm a self-driven developer based in the Philippines who fell in love with building things that actually work. What started as curiosity about how websites were built turned into a full-on obsession with creating digital systems that solve real problems for real people.`,
  `Today I specialize in two things: building clean, high-converting websites and designing automation systems that eliminate the repetitive work that drains businesses every day. I don't just write code — I think deeply about the problem first.`,
];

// ✏️ Career / personal milestone timeline
const TIMELINE = [
  {
    year: '2021',
    title: 'Started the journey',
    desc: 'Wrote my first line of HTML. Got hooked immediately.',
  },
    {
year: '2022 - 2025',
title: 'Academic Projects',
desc: 'Developed various academic projects focused on practical problem-solving, software development, and applying technical concepts learned during coursework.'
  },
  {
    year: '2026 Jan - Feb',
    title: 'Discovered automation',
    desc: 'Found n8n. Everything changed. Started building workflows instead of just websites.',
  },
{
  year: 'Present',
  title: 'Automation Integration',
  desc: 'Leveraging n8n to integrate workflow automation into websites, enabling features such as lead management, automated follow-ups, and scheduled reminders. These systems help businesses improve customer engagement and streamline operational tasks.'
},
  // {
  //   year: '2026',
  //   title: 'Dived into AI',
  //   desc: 'Integrated OpenAI into client projects — chatbots, outreach systems, document pipelines.',
  // },
  // {
  //   year: '2024',
  //   title: 'Full-stack systems builder',
  //   desc: 'Now delivering end-to-end digital systems: websites + automation + AI in one package.',
  // },
];

// ✏️ Fun / personal facts shown in the fact cards
const FUN_FACTS = [
  { icon: Coffee, label: 'Fueled by', value: 'Coffee and focused late-night development sessions' },
  { icon: BookOpen, label: 'Currently learning', value: 'Advanced AI integrations and workflow automation with n8n' },
  { icon: Zap, label: 'Superpower', value: 'Turning complex business processes into simple automated workflows' },
  { icon: Code2, label: 'Favorite stack', value: 'React, TypeScript, Node.js, and n8n' },
];

// ✏️ Profile photo — same as hero or a different shot
// Replace with your own URL or local import
const ABOUT_PHOTO_URL = eleazar;

// ================================================================
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

// ================================================================
export default function AboutSection() {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 64 }}
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
            About Me
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 16,
          }}>
            The Person Behind{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              the Code
            </span>
          </h2>
        </motion.div>

        {/* Main two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 56, alignItems: 'start', marginBottom: 72,
        }}>

          {/* Left — photo + fun facts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* ✏️ ABOUT PHOTO — update ABOUT_PHOTO_URL at top of file */}
            <div style={{
              borderRadius: 24, overflow: 'hidden',
              border: '1px solid var(--border-bright)',
              marginBottom: 28, position: 'relative',
              background: 'var(--bg-card)',
            }}>
              <img
                src={ABOUT_PHOTO_URL}
                alt="Eleazar Rosete"
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%',
                background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 100%)',
              }} />
              {/* Name caption */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
              }}>
                <div style={{ fontSize: '1rem' }}>Eleazar Rosete</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-violet)', fontFamily: 'JetBrains Mono, monospace' }}>
              @dsgnbyzar  
                </div>
              </div>
            </div>

            {/* Fun facts grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12,
            }}>
              {/* ✏️ Update FUN_FACTS array at top of file */}
              {FUN_FACTS.map(({ icon: Icon, label, value }) => (
                <div key={label} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 14, padding: '14px 16px',
                  transition: 'border-color 0.25s',
                }}
                  onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border-bright)')}
                  onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)')}
                >
                  <Icon size={16} style={{ color: 'var(--accent-violet)', marginBottom: 8 }} />
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 4 }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '0.82rem', fontWeight: 500, lineHeight: 1.4 }}>{value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            {/* Bio paragraphs */}
            {/* ✏️ Update BIO_PARAGRAPHS array at top of file */}
            <div style={{ marginBottom: 44 }}>
              {BIO_PARAGRAPHS.map((para, i) => (
                <p key={i} style={{
                  fontSize: '1rem', color: 'var(--text-secondary)',
                  lineHeight: 1.8, marginBottom: 18,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Timeline */}
            <div style={{ marginBottom: 8 }}>
              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontSize: '1rem',
                fontWeight: 600, marginBottom: 24,
                color: 'var(--text-primary)',
              }}>
                My Journey
              </h3>

              {/* ✏️ Update TIMELINE array at top of file */}
              <div style={{ position: 'relative' }}>
                {/* Vertical line */}
                <div style={{
                  position: 'absolute', left: 20, top: 0, bottom: 0,
                  width: 1, background: 'var(--border-bright)', opacity: 0.5,
                }} />

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{ display: 'flex', flexDirection: 'column', gap: 0 }}
                >
                  {TIMELINE.map((item, i) => (
                    <motion.div
                      key={item.year}
                      variants={itemVariants}
                      style={{
                        display: 'flex', gap: 20,
                        paddingBottom: i < TIMELINE.length - 1 ? 28 : 0,
                        paddingLeft: 0,
                      }}
                    >
                      {/* Dot */}
                      <div style={{ position: 'relative', flexShrink: 0, width: 40 }}>
                        <div style={{
                          width: 10, height: 10, borderRadius: '50%',
                          background: 'var(--accent-violet)',
                          border: '2px solid var(--bg-primary)',
                          boxShadow: '0 0 8px var(--glow-violet)',
                          position: 'absolute', left: 16, top: 5,
                        }} />
                      </div>

                      {/* Content */}
                      <div style={{ paddingBottom: 4 }}>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '0.68rem', fontWeight: 500,
                          color: 'var(--accent-cyan)', letterSpacing: '0.1em',
                          display: 'block', marginBottom: 4,
                        }}>
                          {item.year}
                        </span>
                        <h4 style={{
                          fontFamily: 'Sora, sans-serif',
                          fontSize: '0.92rem', fontWeight: 600, marginBottom: 4,
                        }}>
                          {item.title}
                        </h4>
                        <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
