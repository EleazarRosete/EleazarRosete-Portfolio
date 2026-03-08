// ===============================
// SECTION: Trust / Philosophy
// ===============================

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

// ===============================
// EDITABLE: TRUST VALUES
// ===============================
const TRUST_VALUES = [
  { icon: '🎯', label: 'Results-Oriented' },
  { icon: '🔐', label: 'Reliable & Secure' },
  { icon: '💬', label: 'Clear Communication' },
  { icon: '🚀', label: 'Fast Delivery' },
  { icon: '♾️', label: 'Long-term Thinking' },
];

export function TrustSection() {
  return (
    <section id="trust" aria-label="Philosophy and values" style={{ padding: '100px 0', textAlign: 'center' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: 780, margin: '0 auto' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem',
            fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--accent-violet)', background: 'rgba(168,85,247,0.1)',
            border: '1px solid rgba(168,85,247,0.25)', padding: '6px 14px',
            borderRadius: 100, marginBottom: 28,
          }}>
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-violet)', display: 'inline-block' }} />
            Philosophy
          </div>

          <div aria-hidden="true" style={{ width: 60, height: 3, background: 'var(--gradient-hero)', borderRadius: 3, margin: '0 auto 28px' }} />

          <p style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.2rem, 3vw, 1.85rem)',
            fontWeight: 600, lineHeight: 1.45,
            color: 'var(--text-primary)',
            fontStyle: 'italic', marginBottom: 24,
          }}>
            "Technology should serve your business goals — not the other way around.
            I focus on building systems that make your business more efficient,
            more scalable, and more profitable."
          </p>

          <p style={{
            fontSize: '0.95rem', color: 'var(--text-secondary)',
            maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7,
          }}>
            Every decision I make — from architecture to UI — is guided by one question:
            does this create real value for the client's business?
          </p>

          {/* Values */}
          <motion.div
            style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {TRUST_VALUES.map(v => (
              <motion.div
                key={v.label}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
              >
                <div
                  aria-hidden="true"
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: 'var(--gradient-card)',
                    border: '1px solid var(--border-bright)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20,
                  }}>
                  {v.icon}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                  {v.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ===============================
// SECTION: Final CTA
// ===============================
export function CTASection() {
  return (
    <section id="cta" aria-label="Call to action" style={{ padding: '70px 0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'var(--gradient-card)',
            border: '1px solid var(--border-bright)',
            borderRadius: 28,
            padding: 'clamp(40px, 6vw, 70px) clamp(28px, 5vw, 60px)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Glow — decorative */}
          <div aria-hidden="true" style={{
            position: 'absolute', top: '-50%', left: '50%',
            transform: 'translateX(-50%)',
            width: 600, height: 600, borderRadius: '50%',
            background: 'var(--glow-indigo)', filter: 'blur(80px)',
            pointerEvents: 'none',
          }} />

          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 800, marginBottom: 16,
            position: 'relative',
          }}>
            Let's Build Something That<br />
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Solves Your Problem.
            </span>
          </h2>

          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 480, margin: '0 auto 36px',
            position: 'relative',
          }}>
            Ready to automate your workflows or launch a website that converts?
            Let's talk about your project.
          </p>

          <a
            href="#contact"
            aria-label="Go to contact section to discuss your project"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '15px 32px', borderRadius: 12,
              background: 'var(--gradient-btn)',
              color: '#fff', fontWeight: 700, fontSize: '0.98rem',
              boxShadow: '0 4px 24px var(--glow-indigo)',
              transition: 'all 0.25s',
              position: 'relative',
              textDecoration: 'none',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px var(--glow-indigo)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 24px var(--glow-indigo)';
            }}
          >
            <span aria-hidden="true">💬</span> Discuss Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}

// ===============================
// SECTION: Contact
// EDITABLE: Update email, LinkedIn, Messenger links
// ===============================

export function ContactSection() {
  const [showResume, setShowResume] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async () => {
    if (!formRef.current) return;
    setStatus('sending');

    const inputs = formRef.current.querySelectorAll('input, select, textarea');
    const formData: Record<string, string> = {};
    inputs.forEach((el) => {
      const input = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (input.name) formData[input.name] = input.value;
    });

    try {
      await emailjs.send(
        'service_6r5fizx',
        'template_d9i4vsc',
        formData,
        'yxOEHZm5eso6MWKPO'
      );
      setStatus('sent');
      inputs.forEach((el) => {
        const input = el as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
        input.value = '';
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const btnLabel = {
    idle:    '✉ Send Message',
    sending: '⏳ Sending...',
    sent:    '✓ Message Sent!',
    error:   '✗ Failed. Try again.',
  }[status];

  const btnBg = {
    idle:    'var(--gradient-btn)',
    sending: 'var(--gradient-btn)',
    sent:    'linear-gradient(135deg, #22C55E, #16A34A)',
    error:   'linear-gradient(135deg, #EF4444, #DC2626)',
  }[status];

  const inputStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 12, padding: '13px 16px',
    fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem',
    color: 'var(--text-primary)', outline: 'none',
    width: '100%', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.85rem', fontWeight: 500,
    color: 'var(--text-secondary)', marginBottom: 8,
  };

  const links = [
    { icon: '📄', label: 'Resume',   value: 'View & Download PDF',   href: '#',                                                        isResume: true  },
    { icon: '📧', label: 'Email',    value: 'ele.rosete@gmail.com',   href: 'mailto:ele.rosete@gmail.com',                              isResume: false },
    { icon: '💼', label: 'LinkedIn', value: 'Connect professionally', href: 'https://www.linkedin.com/in/eleazar-rosete-461564370/',    isResume: false },
    { icon: '📘', label: 'Facebook', value: 'Visit Profile',          href: 'https://www.facebook.com/eleazar.rosete.2024',            isResume: false },
    { icon: '🟢', label: 'WhatsApp', value: '+63-968-282-3420',       href: 'https://wa.me/+639682823420',                             isResume: false },
  ];

  return (
    <section id="contact" aria-label="Contact Eleazar Rosete" style={{ background: 'var(--bg-secondary)', padding: '100px 0', position: 'relative', zIndex: 10 }}>
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
            <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-violet)', display: 'inline-block' }} />
            Get In Touch
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 60,
          }}>
            Let's Start a{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Conversation
            </span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 48, alignItems: 'start',
        }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: 12 }}>
              Reach Out Anytime
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: 32 }}>
              Whether you have a project in mind or just want to explore possibilities, I'm happy to chat.
              Typical response time: within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.isResume ? undefined : link.href}
                  onClick={link.isResume ? (e) => { e.preventDefault(); setShowResume(true); } : undefined}
                  aria-label={`Contact via ${link.label}: ${link.value}`}
                  target={!link.isResume && !link.href.startsWith('mailto') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 14,
                    padding: '14px 16px', borderRadius: 14,
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    transition: 'all 0.25s',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--border-bright)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div aria-hidden="true" style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: 'var(--gradient-card)',
                    border: '1px solid var(--border-bright)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{link.label}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              ref={formRef}
              aria-label="Contact form"
              style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
            >
              {/* Name */}
              <div>
                <label htmlFor="full_name" style={labelStyle}>Full Name</label>
                <input
                  id="full_name"
                  type="text"
                  name="full_name"
                  placeholder="John Doe"
                  autoComplete="name"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="reply_to" style={labelStyle}>Email Address</label>
                <input
                  id="reply_to"
                  type="email"
                  name="reply_to"
                  placeholder="johndoe@company.com"
                  autoComplete="email"
                  style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="project_type" style={labelStyle}>Project Type</label>
                <select
                  id="project_type"
                  name="project_type"
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  <option value="">Select a service…</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Workflow Automation">Workflow Automation</option>
                  <option value="AI Workflow Integrations">AI Workflow Integrations</option>
                  <option value="Automation Consultation">Automation Consultation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" style={labelStyle}>Tell me about your project</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project, goals, and any relevant details…"
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent-violet)')}
                  onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'sending'}
                aria-disabled={status === 'sending'}
                aria-live="polite"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: 15, borderRadius: 12,
                  background: btnBg,
                  color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  border: 'none',
                  boxShadow: '0 4px 20px var(--glow-indigo)',
                  transition: 'all 0.25s',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={e => {
                  if (status === 'sending') return;
                  e.currentTarget.style.opacity = '0.88';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {btnLabel}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <>
          <style>{`
            .resume-backdrop {
              position: fixed; inset: 0; z-index: 1000;
              background: rgba(0,0,0,0.75); backdrop-filter: blur(6px);
              display: flex; align-items: center; justify-content: center;
              padding: 16px;
            }
            .resume-modal {
              background: var(--bg-card);
              border: 1px solid var(--border);
              border-radius: 16px;
              overflow: hidden;
              width: 100%;
              max-width: 800px;
              height: 70vh;
              max-height: 90dvh;
              display: flex; flex-direction: column;
            }
          `}</style>

          <div className="resume-backdrop" onClick={() => setShowResume(false)}>
            <div className="resume-modal" onClick={e => e.stopPropagation()}>

              {/* Modal Header */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 16px', borderBottom: '1px solid var(--border)',
                flexShrink: 0, gap: 8,
              }}>
                <span style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 600,
                  fontSize: 'clamp(0.82rem, 3vw, 1rem)',
                  color: 'var(--text-primary)',
                  overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                }}>
                  📄 Eleazar Rosete — Resume
                </span>

                <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                  <a
                    href="/src/assets/resume.pdf"
                    download="Eleazar_Rosete_Resume.pdf"
                    onClick={e => e.stopPropagation()}
                    style={{
                      padding: '8px 14px', borderRadius: 8,
                      background: 'var(--gradient-btn)',
                      color: '#fff', fontWeight: 600,
                      fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                      textDecoration: 'none', fontFamily: 'DM Sans, sans-serif',
                      display: 'inline-flex', alignItems: 'center', gap: 5,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ⬇ Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setShowResume(false)}
                    style={{
                      padding: '8px 12px', borderRadius: 8,
                      background: 'transparent',
                      border: '1px solid var(--border)',
                      color: 'var(--text-secondary)', cursor: 'pointer',
                      fontSize: '1rem', lineHeight: 1, flexShrink: 0,
                    }}
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <iframe
                src="/src/assets/resume.pdf"
                title="Eleazar Rosete Resume"
                style={{ width: '100%', flex: 1, border: 'none', minHeight: 0 }}
              />
            </div>
          </div>
        </>
      )}

    </section>
  );
}