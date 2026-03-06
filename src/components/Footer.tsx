// ===============================
// COMPONENT: Footer
// ===============================

export default function Footer() {
  return (
    <footer style={{
      padding: '32px 0',
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Designed &amp; Built by{' '}
          <span style={{ color: 'var(--accent-violet)' }}>Eleazar Rosete</span>
          {' '}· Website Developer &amp; Automation Builder ·{' '}
          <span style={{ color: 'var(--accent-violet)' }}>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
