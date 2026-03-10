import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { LayoutGrid, MessageSquare, Mail, Linkedin, Instagram, ArrowDownRight } from 'lucide-react';

const HERO_NAME = 'Eleazar Rosete';
const HERO_ROLES = ['Web Developer', 'Automation Specialist'];
const HERO_TAGLINE = 'I build websites and automation systems that solve real business problems — so you can focus on growing, not managing.';

const HERO_STATS = [
  { num: '2+',      label: 'Websites Delivered',                 description: 'Custom, responsive, and high-performance websites built for clients.' },
  { num: '2+',      label: 'Automation Systems Live',            description: 'AI and workflow automation pipelines actively improving efficiency.' },
  { num: '2x',      label: 'Faster Processes',                   description: 'Automated workflows that cut operational time in half.' },
  { num: '100%',    label: 'Performance-Optimized Sites',        description: 'Websites designed for speed, SEO, and mobile-first user experience.' },
];

const SOCIAL_LINKS = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/eleazar-rosete-461564370/', label: 'LinkedIn' },
    { icon: Instagram,  href: 'https://www.instagram.com/dsgnbyzar/',  label: 'Instagram'  },
];

function useTypingCycle(words: string[], typingSpeed = 75, deletingSpeed = 40, pauseMs = 1800) {
  const [display, setDisplay]   = useState('');
  const [wordIdx, setWordIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && charIdx < current.length) {
      t = setTimeout(() => setCharIdx(c => c + 1), typingSpeed);
    } else if (!deleting && charIdx === current.length) {
      t = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && charIdx > 0) {
      t = setTimeout(() => setCharIdx(c => c - 1), deletingSpeed);
    } else {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
    }
    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, typingSpeed, deletingSpeed, pauseMs]);

  return display;
}

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 24 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] },
});

export default function HeroSection() {
  const typedRole = useTypingCycle(HERO_ROLES);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows — subtle, not distracting */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'var(--glow-indigo)', filter: 'blur(160px)',
        top: -200, left: -100, pointerEvents: 'none', opacity: 0.6,
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'var(--glow-violet)', filter: 'blur(130px)',
        bottom: -100, right: 100, pointerEvents: 'none', opacity: 0.4,
      }} />

      {/* Subtle grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        backgroundImage: `linear-gradient(rgba(168,85,247,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,0.02) 1px,transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      {/* Main content — centered, single column, generous whitespace */}
      <div style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: '60px 24px',
        position: 'relative',
        zIndex: 2,
        width: '100%',
      }}>

        {/* Available pill */}
        <motion.div {...fadeUp(0)} style={{ marginBottom: 28 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 100,
            border: '1px solid var(--border-bright)', background: 'rgba(124,58,237,0.08)',
            fontSize: '0.78rem', fontWeight: 500, color: 'var(--accent-violet)',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#22C55E',
              boxShadow: '0 0 8px rgba(34,197,94,0.7)', display: 'inline-block',
            }} />
            Currently Available for New Projects
          </span>
        </motion.div>

        {/* Code intro */}
        <motion.p {...fadeUp(0.06)} style={{
          fontFamily: 'JetBrains Mono, monospace', fontSize: '0.78rem',
          color: 'var(--accent-cyan)', letterSpacing: '0.14em',
          textTransform: 'uppercase', marginBottom: 14,
        }}>
          &lt; Hello World /&gt;
        </motion.p>

        {/* Name */}
        <motion.h1 {...fadeUp(0.12)} style={{
          fontFamily: 'Sora, sans-serif',
          fontSize: 'clamp(2.8rem, 6vw, 4.8rem)',
          fontWeight: 800, lineHeight: 1.06,
          letterSpacing: '-0.03em', marginBottom: 8,
        }}>
          I'm{' '}
          <span style={{
            background: 'var(--gradient-hero)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            {HERO_NAME}
          </span>
        </motion.h1>

        {/* Typing role */}
        <motion.div {...fadeUp(0.18)} style={{ minHeight: 40, marginBottom: 22 }}>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.1rem, 2.8vw, 1.55rem)',
            fontWeight: 600, color: 'var(--text-secondary)',
            display: 'flex', alignItems: 'center', gap: 3,
          }}>
            {typedRole}
            <span style={{
              display: 'inline-block', width: 2, height: '1.1em',
              background: 'var(--accent-violet)', marginLeft: 1,
              animation: 'blink-cursor 1s step-end infinite',
            }} />
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p {...fadeUp(0.24)} style={{
          fontSize: 'clamp(0.95rem, 1.8vw, 1.08rem)',
          color: 'var(--text-secondary)', maxWidth: 560,
          lineHeight: 1.8, marginBottom: 38,
        }}>
          {HERO_TAGLINE}
        </motion.p>

        {/* CTA buttons */}
        <motion.div {...fadeUp(0.30)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 48 }}>
          <a href="#projects" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 28px', borderRadius: 12,
            background: 'var(--gradient-btn)', color: '#fff',
            fontWeight: 600, fontSize: '0.92rem',
            boxShadow: '0 4px 20px var(--glow-indigo)', transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px var(--glow-indigo)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px var(--glow-indigo)'; }}
          >
            <LayoutGrid size={15} /> View My Work
          </a>
          <a href="#cta" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '13px 28px', borderRadius: 12,
            border: '1px solid var(--border-bright)', background: 'transparent',
            color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem', transition: 'all 0.25s',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(168,85,247,0.08)'; e.currentTarget.style.borderColor = 'var(--accent-violet)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <MessageSquare size={15} /> Start a Project
          </a>
        </motion.div>

        {/* Divider */}
        <motion.div {...fadeUp(0.34)} style={{
          width: '100%', height: 1,
          background: 'linear-gradient(90deg, var(--border-bright) 0%, transparent 100%)',
          marginBottom: 36,
        }} />

        {/* Stats + socials row */}
        <motion.div {...fadeUp(0.38)} style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: 24,
        }}>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
            {HERO_STATS.map((stat, i) => (
              <div key={i} style={{ textAlign: 'left' }}>
                <div style={{
                  fontFamily: 'Sora, sans-serif', fontSize: '1.5rem', fontWeight: 800, lineHeight: 1,
                  background: 'var(--gradient-hero)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 4 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: '0.7rem', color: 'var(--text-muted)',
              fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', marginRight: 4,
            }}>
              FIND ME ON
            </span>
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" title={label} style={{
                width: 34, height: 34, borderRadius: 9,
                border: '1px solid var(--border)', background: 'var(--bg-card)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-violet)'; e.currentTarget.style.color = 'var(--accent-violet)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a href="#expertise"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
          color: 'var(--text-muted)', fontSize: '0.7rem',
          fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em',
          zIndex: 2, textDecoration: 'none', transition: 'color 0.2s',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-violet)')}
        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)')}
      >
        <ArrowDownRight size={13} style={{ transform: 'rotate(45deg)' }} />
        scroll
      </motion.a>

      <style>{`
        @keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }
      `}</style>
    </section>
  );
}