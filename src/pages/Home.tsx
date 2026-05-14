import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'

const stats = [
  { value: '$375M+', label: 'In Client Revenue Generated' },
  { value: '101', label: 'Sales Teams Built' },
  { value: '20 YRS', label: 'In High-Performance Revenue Architecture' },
  { value: '#1', label: 'Amazon Bestseller — Pitch Me' },
]

const leveragePoints = [
  {
    num: '01',
    title: 'Revenue\nLeverage',
    body: 'I identify where revenue is capped and restructure it for scale.',
    outcomes: [
      'Higher margins per transaction',
      'Decoupled revenue from time',
      'Scalable offer architecture',
    ],
  },
  {
    num: '02',
    title: 'AI-Powered\nSystems',
    body: 'I replace manual effort with systems that move money faster.',
    outcomes: [
      'Reduced operational friction',
      'Faster cash conversion cycles',
      'Elimination of manual bottlenecks',
    ],
  },
  {
    num: '03',
    title: 'Capital\nFlow',
    body: 'I design capital pathways so money compounds instead of sitting idle.',
    outcomes: [
      'Optimized cash reserves',
      'Strategic growth funding',
      'Accelerated wealth compounding',
    ],
  },
]

const qualifiers = [
  {
    check: '✓',
    title: 'You run a profitable machine.',
    body: 'Revenue is consistent. The ceiling is the problem.',
  },
  {
    check: '✓',
    title: "You're not chasing survival.",
    body: "You're expanding leverage, identity, and optionality.",
  },
  {
    check: '✓',
    title: 'You think in systems, not tactics.',
    body: 'Speed, architecture, and throughput matter most.',
  },
  {
    check: '✓',
    title: "You're done optimizing income.",
    body: "You're converting performance into compounding wealth.",
  },
]

const marqueeItems = [
  'FORBES', 'ENTREPRENEUR', 'FAST COMPANY', 'INC.', 'APPLE PODCASTS TOP 10',
  'FORBES', 'ENTREPRENEUR', 'FAST COMPANY', 'INC.', 'APPLE PODCASTS TOP 10',
]

// ── Hero photo panel ────────────────────────────────────────────────────────────
// REPLACE: Add hero photo at /public/images/hero.jpg
// The photo should be a professional portrait, ideally shot on dark or neutral
// background, subject facing or angled toward camera, tall crop (portrait orientation).
// Recommended: 1080×1350px or taller for full-bleed on desktop.
function HeroPhoto() {
  const [error, setError] = useState(false)

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
      }}
    >
      {/* REPLACE: Add hero photo at /public/images/hero.jpg */}
      {!error ? (
        <img
          src="/images/hero.jpg"
          alt="Kayvon Kay — The Revenue Architect"
          onError={() => setError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />
      ) : (
        /* Placeholder shown until hero.jpg is added to /public/images/ */
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,66,0.6)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              border: '2px dashed rgba(212,241,121,0.35)',
              padding: '28px 36px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(212,241,121,0.6)',
                marginBottom: 12,
              }}
            >
              Hero Photo Placeholder
            </p>
            <p
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
              }}
            >
              Drop your photo at<br />
              <code style={{ color: '#d4f179', fontWeight: 700 }}>/public/images/hero.jpg</code>
            </p>
          </div>
        </div>
      )}

      {/* Left-edge fade: blends photo into the dark left panel */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, #000042 0%, rgba(0,0,66,0.5) 30%, transparent 65%)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom fade: grounds the photo into the section below */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '25%',
          background: 'linear-gradient(to top, #000042, transparent)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        title="Kayvon Kay — The Revenue Architect | $375M+ in Client Revenue"
        description="Kayvon Kay is the Revenue Architect. Helping 7-9 figure operators turn consistent revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture."
        canonical="https://kayvon.com/"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      {/* Two-panel full-bleed layout: dark copy left, photo right */}
      <section
        style={{
          background: '#000042',
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 72,
        }}
        className="hero-section"
      >
        {/* LEFT PANEL — Copy */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '80px 48px 80px 40px',
            position: 'relative',
            zIndex: 4,
          }}
          className="hero-left"
        >
          <div style={{ maxWidth: 560, width: '100%', marginLeft: 'auto' }}>
            <span className="eyebrow">The Revenue Architect</span>
            <h1
              style={{
                fontSize: 'clamp(44px, 5.5vw, 68px)',
                fontWeight: 900,
                letterSpacing: '-3px',
                lineHeight: 1.0,
                color: '#fff',
                marginBottom: 24,
              }}
            >
              I Am The Revenue
              <br />
              Architect.
              <br />
              <span style={{ color: '#d4f179' }}>
                The Result
                <br />
                Is Wealth.
              </span>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 40,
                maxWidth: 440,
              }}
            >
              $375M+ in real revenue. For operators who already win
              and are ready to build something that compounds.
            </p>
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link
                to="/contact"
                style={{
                  background: '#d4f179',
                  color: '#000042',
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: '1px',
                  padding: '16px 28px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                Book a Meeting →
              </Link>
              <a
                href="#how-it-works"
                style={{
                  border: '1px solid rgba(212,241,121,0.3)',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 500,
                  fontSize: 13,
                  letterSpacing: '0.5px',
                  padding: '16px 28px',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(212,241,121,0.6)'
                  el.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(212,241,121,0.3)'
                  el.style.color = 'rgba(255,255,255,0.7)'
                }}
              >
                See how it works ↓
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL — Photo + K geometric */}
        {/* REPLACE: Add hero photo at /public/images/hero.jpg */}
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100%',
          }}
          className="hero-right"
        >
          {/* Lime K — sits behind the photo, peeks around edges */}
          {/* This is the geometric brand element, not the SVG approximation */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: '-8%',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: 'clamp(320px, 45vw, 680px)',
              fontWeight: 900,
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              color: '#d4f179',
              opacity: 0.18,
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              letterSpacing: '-8px',
              zIndex: 1,
            }}
          >
            K
          </div>

          {/* REPLACE: Add hero photo at /public/images/hero.jpg */}
          <HeroPhoto />
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#000042',
          borderTop: '1px solid rgba(212,241,121,0.1)',
          borderBottom: '1px solid rgba(212,241,121,0.1)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <CardGlow
              key={s.value}
              hoverBorder
              style={{
                padding: '32px 28px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(212,241,121,0.1)' : 'none',
                cursor: 'default',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 900,
                  letterSpacing: '-1.5px',
                  color: '#d4f179',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </div>
            </CardGlow>
          ))}
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────────────── */}
      <div
        style={{
          background: 'rgba(212,241,121,0.04)',
          borderBottom: '1px solid rgba(212,241,121,0.1)',
          padding: '18px 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            animation: 'marquee 22s linear infinite',
            whiteSpace: 'nowrap',
          }}
        >
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                padding: '0 40px',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── PROBLEM ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: '#000042',
          padding: '120px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">The Reality</span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: 32,
            }}
          >
            You've Built a Winning Machine.
            <br />
            <span style={{ color: '#d4f179' }}>Now It's Time to Make It Compound.</span>
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 16,
            }}
          >
            Revenue does not automatically become wealth. At scale, money gets
            trapped inside strategies, systems, and structures built to perform —
            not multiply. Growth slows because the architecture was never designed
            to compound. The real problem is throughput.
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 500,
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.8)',
              marginBottom: 48,
            }}
          >
            This is not a repair. It is an upgrade.
          </p>
          <Link
            to="/contact"
            style={{
              background: '#d4f179',
              color: '#000042',
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '1px',
              padding: '16px 28px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
            }}
          >
            Book a Meeting →
          </Link>
        </div>
      </section>

      {/* ── THREE LEVERAGE POINTS ────────────────────────────────────────────── */}
      <section
        id="how-it-works"
        style={{
          background: '#d4f179',
          padding: '120px 40px',
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
            fontSize: 'clamp(300px, 35vw, 500px)',
            fontWeight: 900,
            color: 'rgba(0,0,66,0.05)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-10px',
          }}
        >
          KV
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow-dark">The Work</span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#000042',
              marginBottom: 64,
            }}
          >
            How Revenue Becomes Wealth
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
            className="leverage-grid"
          >
            {leveragePoints.map(p => (
              <CardGlow
                key={p.num}
                limeGlow
                style={{
                  background: 'rgba(0,0,66,0.06)',
                  padding: '40px 36px',
                  border: '1px solid rgba(0,0,66,0.08)',
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', color: 'rgba(0,0,66,0.4)', marginBottom: 20 }}>
                  {p.num}
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    lineHeight: 1.1,
                    color: '#000042',
                    marginBottom: 20,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(0,0,66,0.6)', marginBottom: 28 }}>
                  {p.body}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.outcomes.map(o => (
                    <li key={o} style={{ fontSize: 13, fontWeight: 500, color: 'rgba(0,0,66,0.7)', paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#000042', fontWeight: 900 }}>·</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATORS WHO ALREADY WIN ─────────────────────────────────────────── */}
      <section style={{ background: '#000042', padding: '120px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">This Is For</span>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: 16,
            }}
          >
            Operators Who Already Win.
          </h2>
          <p style={{ fontSize: 20, fontWeight: 400, color: 'rgba(255,255,255,0.4)', marginBottom: 64, letterSpacing: '-0.3px' }}>
            (And know the next level won't come from trying harder.)
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }} className="qualifiers-grid">
            {qualifiers.map(q => (
              <CardGlow
                key={q.title}
                hoverBorder
                style={{ border: '1px solid rgba(212,241,121,0.1)', padding: '36px 32px', cursor: 'default' }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, fontWeight: 900, color: '#d4f179', lineHeight: 1.3, flexShrink: 0 }}>
                    {q.check}
                  </span>
                  <div>
                    <p style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.3px', marginBottom: 8 }}>{q.title}</p>
                    <p style={{ fontSize: 15, fontWeight: 400, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{q.body}</p>
                  </div>
                </div>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ─────────────────────────────────────────────────────── */}
      <section style={{ background: '#000042', borderTop: '1px solid rgba(212,241,121,0.1)', padding: '100px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: 'rgba(212,241,121,0.15)', lineHeight: 1, marginBottom: 32 }}>"</div>
          <blockquote
            style={{
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '-0.3px',
              marginBottom: 40,
            }}
          >
            I've been a marketer for over two decades. Working with Kayvon
            was the exact amplifier I needed — a rare and perfect blend of
            sales and operational excellence.
          </blockquote>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#d4f179' }}>
            — Mike Dillard, Mike Dillard Marketing
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section style={{ background: '#d4f179', padding: '100px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#000042',
              marginBottom: 24,
            }}
          >
            Ready to Architect Your Wealth?
          </h2>
          <p style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.75, color: 'rgba(0,0,66,0.6)', marginBottom: 40 }}>
            This work is designed for operators who are already winning
            but know their current structure will not create real wealth.
          </p>
          <Link
            to="/contact"
            style={{
              background: '#000042',
              color: '#d4f179',
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: '1px',
              padding: '18px 36px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: 24,
            }}
          >
            Book a Private Analysis →
          </Link>
          <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(0,0,66,0.45)', letterSpacing: '0.5px' }}>
            This is not consulting. It is wealth architecture.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .hero-right { min-height: 55vw !important; }
          .hero-left { padding: 48px 24px 40px !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .leverage-grid { grid-template-columns: 1fr !important; }
          .qualifiers-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-right { min-height: 70vw !important; }
        }
      `}</style>
    </>
  )
}
