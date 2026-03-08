// ===============================
// COMPONENT: Navbar
// Sticky top navigation with theme toggle and mobile menu
// ===============================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Theme } from '../hooks/useTheme';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

// ===============================
// EDITABLE: NAV LINKS
// ===============================
const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Services',  href: '#services'  },
  { label: 'Process',   href: '#process'   },
  { label: 'Contact',   href: '#contact'   },
];

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    background: 'var(--nav-bg)',
    borderBottom: '1px solid var(--border)',
  };

  const logoStyle: React.CSSProperties = {
    fontFamily: 'Sora, sans-serif',
    fontWeight: 700,
    fontSize: '1.1rem',
    letterSpacing: '-0.02em',
    color: 'var(--text-primary)',
  };

  return (
    <>
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-cta-btn       { display: block; }
        .nav-burger        { display: none; }

        @media (max-width: 1000px) {
          .nav-desktop-links { display: none !important; }
          .nav-cta-btn       { display: none !important; }
          .nav-burger        { display: flex !important; }
        }
      `}</style>

      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          ...navStyle,
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: scrolled ? '12px 0' : '16px 0',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.3)' : 'none',
          transition: 'padding 0.3s ease, box-shadow 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Logo */}
            <a href="#hero" style={logoStyle}>
              Eleazar<span style={{ color: 'var(--accent-violet)' }}>.</span>
            </a>

            {/* Desktop Links — hidden on mobile, flex on md+ */}
            <ul className="nav-desktop-links" style={{
              alignItems: 'center', gap: 36,
              listStyle: 'none', margin: 0, padding: 0,
            }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.88rem', fontWeight: 500,
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Right Side Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{
                  width: 38, height: 38,
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {theme === 'dark' ? <Moon size={16} aria-hidden="true" /> : <Sun size={16} aria-hidden="true" />}
              </button>

              {/* CTA Button — desktop only */}
              <a
                href="#cta"
                className="nav-cta-btn"
                style={{
                  fontSize: '0.85rem', fontWeight: 600,
                  padding: '9px 20px',
                  borderRadius: 8,
                  background: 'var(--gradient-btn)',
                  color: '#fff',
                  transition: 'opacity 0.2s, transform 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.88';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Start a Project
              </a>

              {/* Mobile Menu Toggle — visible only below md */}
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className="nav-burger"
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                style={{
                  width: 38, height: 38, borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--bg-card)',
                  color: 'var(--text-secondary)',
                  alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                {mobileOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', top: 70, left: 0, right: 0,
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border)',
              padding: '16px 24px',
              zIndex: 999,
            }}
          >
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      display: 'block', padding: '12px 16px',
                      borderRadius: 10,
                      color: 'var(--text-secondary)',
                      fontWeight: 500, fontSize: '0.95rem',
                      transition: 'all 0.2s',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li style={{ marginTop: 8 }}>
                <a
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'block', padding: '12px 16px',
                    borderRadius: 10,
                    background: 'var(--gradient-btn)',
                    color: '#fff',
                    fontWeight: 600, textAlign: 'center',
                  }}
                >
                  Start a Project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}