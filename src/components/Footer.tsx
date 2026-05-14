import { Link } from 'react-router-dom'

// Reuses the same logo file as the nav — /public/logo.svg or /public/logo.png
function FooterLogo() {
  return (
    <img
      src="/logo.svg"
      alt="Kayvon Kay"
      style={{ height: 36, width: 'auto', display: 'block' }}
      onError={e => {
        const img = e.currentTarget
        if (!img.src.endsWith('logo.png')) img.src = '/logo.png'
      }}
    />
  )
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#000042',
        borderTop: '1px solid rgba(212,241,121,0.1)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '64px 40px 40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          <div>
            <div style={{ marginBottom: 12 }}>
              <FooterLogo />
            </div>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.5px',
              }}
            >
              The Revenue Architect
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 32,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: 20,
                }}
              >
                Quick Links
              </p>
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/speaker', label: 'Speaker' },
                { to: '/articles', label: 'Articles' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <div key={l.to} style={{ marginBottom: 12 }}>
                  <Link
                    to={l.to}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: 20,
                }}
              >
                Legal
              </p>
              {[
                { to: '/terms', label: 'Terms of Service' },
                { to: '/privacy', label: 'Privacy Policy' },
              ].map(l => (
                <div key={l.to} style={{ marginBottom: 12 }}>
                  <Link
                    to={l.to}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => ((e.target as HTMLElement).style.color = '#fff')}
                    onMouseLeave={e => ((e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)')}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(212,241,121,0.1)',
            paddingTop: 24,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Kayvon Kay. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  )
}
