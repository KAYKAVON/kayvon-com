import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const SPEAKER_KIT_URL =
  'https://cdn.prod.website-files.com/6984d5c05a53301643b3fb8d/69feafd697406c80a61ecd2a_V2%20Speaker%20Kit%20(2).pdf'

const KVMarkLarge = () => (
  <svg viewBox="0 0 38 38" fill="none" style={{ width: 64, height: 64 }}>
    <path d="M4 6h8l7 13L13 32H4l7-13L4 6z" fill="#d4f179" />
    <path d="M19 6l7 13-7 13h7l11-13L26 6h-7z" fill="#d4f179" />
  </svg>
)

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Submission Received | Kayvon Kay"
        description="Your inquiry has been received. Kayvon personally reviews every submission and will respond within 24 hours."
        canonical="https://kayvon.com/thank-you"
      />

      <section
        style={{
          background: '#000042',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(400px, 50vw, 700px)',
            fontWeight: 900,
            color: 'rgba(212,241,121,0.025)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-20px',
          }}
        >
          KV
        </div>

        <div
          style={{
            maxWidth: 600,
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 48 }}>
            <KVMarkLarge />
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: 24,
            }}
          >
            Your submission has been received.
          </h1>

          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 8,
            }}
          >
            Kayvon personally reviews every inquiry.
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 64,
            }}
          >
            You'll hear back within 24 hours.
          </p>

          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: 32,
            }}
          >
            In the meantime
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/articles"
              style={{
                background: '#d4f179',
                color: '#000042',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '1px',
                padding: '14px 24px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
              }}
            >
              Read the Articles →
            </Link>
            <a
              href={SPEAKER_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid rgba(212,241,121,0.3)',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: '0.5px',
                padding: '14px 24px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Download Speaker Kit ↓
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
