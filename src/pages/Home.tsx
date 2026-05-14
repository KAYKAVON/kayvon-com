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
  'FORBES',
  'ENTREPRENEUR',
  'FAST COMPANY',
  'INC.',
  'APPLE PODCASTS TOP 10',
  'FORBES',
  'ENTREPRENEUR',
  'FAST COMPANY',
  'INC.',
  'APPLE PODCASTS TOP 10',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Kayvon Kay — The Revenue Architect | $375M+ in Client Revenue"
        description="Kayvon Kay is the Revenue Architect. Helping 7-9 figure operators turn consistent revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture."
        canonical="https://kayvon.com/"
      />

      {/* HERO */}
      <section
        style={{
          background: '#000042',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 72,
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -80,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(400px, 45vw, 700px)',
            fontWeight: 900,
            color: 'rgba(212,241,121,0.04)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
            letterSpacing: '-20px',
          }}
        >
          K
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '80px 40px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '55% 1fr',
            gap: 64,
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
          className="hero-grid"
        >
          <div>
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
              <span style={{ color: '#d4f179' }}>The Result
              <br />Is Wealth.</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 40,
                maxWidth: 460,
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

          <div
            style={{
              borderLeft: '1px solid rgba(212,241,121,0.15)',
              paddingLeft: 48,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}
          >
            {stats.map(s => (
              <CardGlow
                key={s.value}
                hoverBorder
                style={{
                  padding: '24px 28px',
                  border: '1px solid rgba(212,241,121,0.1)',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(28px, 3vw, 36px)',
                    fontWeight: 900,
                    letterSpacing: '-1.5px',
                    color: '#d4f179',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {s.label}
                </div>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div
        style={{
          background: 'rgba(212,241,121,0.06)',
          borderTop: '1px solid rgba(212,241,121,0.1)',
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
                color: 'rgba(255,255,255,0.35)',
                padding: '0 40px',
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM SECTION */}
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

      {/* THREE LEVERAGE POINTS */}
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
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 2,
            }}
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
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '3px',
                    color: 'rgba(0,0,66,0.4)',
                    marginBottom: 20,
                  }}
                >
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
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: 'rgba(0,0,66,0.6)',
                    marginBottom: 28,
                  }}
                >
                  {p.body}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {p.outcomes.map(o => (
                    <li
                      key={o}
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'rgba(0,0,66,0.7)',
                        paddingLeft: 16,
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: '#000042',
                          fontWeight: 900,
                        }}
                      >
                        ·
                      </span>
                      {o}
                    </li>
                  ))}
                </ul>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATORS WHO ALREADY WIN */}
      <section
        style={{
          background: '#000042',
          padding: '120px 40px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
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
          <p
            style={{
              fontSize: 20,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: 64,
              letterSpacing: '-0.3px',
            }}
          >
            (And know the next level won't come from trying harder.)
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 2,
            }}
            className="qualifiers-grid"
          >
            {qualifiers.map(q => (
              <CardGlow
                key={q.title}
                hoverBorder
                style={{
                  border: '1px solid rgba(212,241,121,0.1)',
                  padding: '36px 32px',
                  cursor: 'default',
                }}
              >
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span
                    style={{
                      fontSize: 20,
                      fontWeight: 900,
                      color: '#d4f179',
                      lineHeight: 1.3,
                      flexShrink: 0,
                    }}
                  >
                    {q.check}
                  </span>
                  <div>
                    <p
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        color: '#fff',
                        letterSpacing: '-0.3px',
                        marginBottom: 8,
                      }}
                    >
                      {q.title}
                    </p>
                    <p
                      style={{
                        fontSize: 15,
                        fontWeight: 400,
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.6,
                      }}
                    >
                      {q.body}
                    </p>
                  </div>
                </div>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section
        style={{
          background: '#000042',
          borderTop: '1px solid rgba(212,241,121,0.1)',
          padding: '100px 40px',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: 'rgba(212,241,121,0.15)',
              lineHeight: 1,
              marginBottom: 32,
            }}
          >
            "
          </div>
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
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#d4f179',
            }}
          >
            — Mike Dillard, Mike Dillard Marketing
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        style={{
          background: '#d4f179',
          padding: '100px 40px',
          textAlign: 'center',
        }}
      >
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
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.75,
              color: 'rgba(0,0,66,0.6)',
              marginBottom: 40,
            }}
          >
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
          <p
            style={{
              fontSize: 13,
              fontWeight: 500,
              color: 'rgba(0,0,66,0.45)',
              letterSpacing: '0.5px',
            }}
          >
            This is not consulting. It is wealth architecture.
          </p>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .leverage-grid { grid-template-columns: 1fr !important; }
          .qualifiers-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
