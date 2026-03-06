// ===============================
// SECTION: Services
// What clients can hire Eleazar for
// ===============================

import { motion } from 'framer-motion';
// import { Clock } from 'lucide-react';
import { Service } from '../data/services';

interface ServicesSectionProps {
  services: Service[];
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" style={{ padding: '100px 0', position: 'relative' }}>
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
            Services
          </div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, marginBottom: 16,
          }}>
            What You Can{' '}
            <span style={{
              background: 'var(--gradient-hero)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Hire Me For
            </span>
          </h2>
          <p style={{
            fontSize: '1.1rem', color: 'var(--text-secondary)',
            maxWidth: 560, marginBottom: 60, lineHeight: 1.7,
          }}>
            Transparent offerings with clear timelines. No surprises.
          </p>
        </motion.div>

        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 22px;
          }
          @media (max-width: 1000px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 600px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="services-grid"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              style={{
                background: service.featured ? 'var(--gradient-card)' : 'var(--bg-card)',
                border: service.featured ? '1px solid var(--border-bright)' : '1px solid var(--border)',
                borderRadius: 20,
                padding: '32px 28px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 48px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              }}
            >
              {service.featured && (
                <div style={{
                  position: 'absolute', top: 20, right: 20,
                  fontSize: '0.68rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontWeight: 500, textTransform: 'uppercase',
                  letterSpacing: '0.08em', padding: '4px 10px',
                  borderRadius: 6,
                  background: 'var(--gradient-btn)', color: '#fff',
                }}>
                  Most Popular
                </div>
              )}

              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: 'var(--gradient-card)',
                border: '1px solid var(--border-bright)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 24, marginBottom: 22,
              }}>
                {service.icon}
              </div>

              <h3 style={{
                fontFamily: 'Sora, sans-serif',
                fontSize: '1.1rem', fontWeight: 700, marginBottom: 10,
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '0.88rem', color: 'var(--text-secondary)',
                lineHeight: 1.7, marginBottom: 20,
              }}>
                {service.description}
              </p>

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px' }}>
                {service.features.map(f => (
                  <li key={f} style={{
                    fontSize: '0.85rem', color: 'var(--text-secondary)',
                    padding: '6px 0 6px 20px',
                    position: 'relative',
                    borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{
                      position: 'absolute', left: 0,
                      color: 'var(--accent-violet)',
                    }}>→</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 8,
                fontSize: '0.8rem', color: 'var(--accent-cyan)',
                fontFamily: 'JetBrains Mono, monospace',
              }}>

                {/*show the delivery time */}
                {/* <Clock size={13} />
                Delivery: {service.delivery} */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}