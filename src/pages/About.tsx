import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'

const focusAreas = [
  {
    num: '01',
    title: 'Revenue\nMechanics',
    body: 'Restructuring offers, pricing, and sales systems so revenue converts cleanly into profit.',
    outcomes: [
      'Higher margins per transaction',
      'Decoupled revenue from time',
      'Scalable offer architecture',
    ],
  },
  {
    num: '02',
    title: 'AI-Leveraged\nSystems',
    body: 'Automating decision flow so scale does not increase operational complexity.',
    outcomes: [
      'Reduced operational friction',
      'Faster cash conversion cycles',
      'Elimination of manual bottlenecks',
    ],
  },
  {
    num: '03',
    title: 'Capital\nFlow',
    body: 'Structuring cash, credit, and financing so growth is funded intelligently and wealth becomes transferable.',
    outcomes: [
      'Optimized cash reserves',
      'Strategic growth funding',
      'Accelerated wealth compounding',
    ],
  },
]

const credentials = [
  { value: '$375M+', label: 'In verified client revenue generated' },
  { value: '101', label: 'Sales teams built, restructured, and scaled' },
  { value: '20 YRS', label: 'In high-performance operating environments' },
  { value: '#1', label: 'Amazon bestseller — Pitch Me: The Art of Effortless Selling' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About Kayvon Kay | The Revenue Architect"
        description="Kayvon Kay spent years in 7-9 figure operating environments. Learn how he identified the gap between revenue and wealth — and built a framework to close it."
        canonical="https://kayvon.com/about"
      />

      {/* HERO */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 100,
          paddingLeft: 40,
          paddingRight: 40,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -60,
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(300px, 38vw, 600px)',
            fontWeight: 900,
            color: 'rgba(212,241,121,0.03)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          K
        </div>

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '55% 1fr',
            gap: 80,
            alignItems: 'start',
            position: 'relative',
            zIndex: 2,
          }}
          className="about-hero-grid"
        >
          <div>
            <span className="eyebrow">The Architect</span>
            <h1
              style={{
                fontSize: 'clamp(36px, 4.5vw, 58px)',
                fontWeight: 900,
                letterSpacing: '-2.5px',
                lineHeight: 1.05,
                color: '#fff',
                marginBottom: 40,
              }}
            >
              I Saw a Gap Between
              <br />
              <span style={{ color: '#d4f179' }}>Revenue and Wealth.</span>
            </h1>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.55)',
                marginBottom: 24,
              }}
            >
              I spent years in rooms where 7, 8, and 9-figure deals were being made.
              Operators were generating massive revenue, yet their businesses remained
              inefficient, complex, and cash heavy. They were earning well. But they
              were not building real, transferable wealth.
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.8)',
                marginBottom: 24,
              }}
            >
              The problem was not motivation. It was architecture.
            </p>
            <p
              style={{
                fontSize: 18,
                fontWeight: 400,
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.55)',
              }}
            >
              So I stopped chasing tactics and started focusing on the structure
              beneath the business. How revenue enters. How it flows. How it
              compounds. That is the work I do today.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {credentials.map(c => (
              <CardGlow
                key={c.value}
                hoverBorder
                style={{
                  padding: '28px 32px',
                  border: '1px solid rgba(212,241,121,0.1)',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    fontWeight: 900,
                    letterSpacing: '-2px',
                    color: '#d4f179',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  {c.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.45)',
                    lineHeight: 1.5,
                  }}
                >
                  {c.label}
                </div>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* THREE FOCUS AREAS */}
      <section
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
            right: -100,
            bottom: -80,
            fontSize: 'clamp(300px, 35vw, 500px)',
            fontWeight: 900,
            color: 'rgba(0,0,66,0.05)',
            lineHeight: 1,
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          KV
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow-dark">The Work</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#000042',
              marginBottom: 64,
            }}
          >
            Three Focus Areas
          </h2>

          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
            className="focus-grid"
          >
            {focusAreas.map(a => (
              <CardGlow
                key={a.num}
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
                    color: 'rgba(0,0,66,0.35)',
                    marginBottom: 20,
                  }}
                >
                  {a.num}
                </div>
                <h3
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    lineHeight: 1.1,
                    color: '#000042',
                    marginBottom: 16,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {a.title}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    fontWeight: 400,
                    lineHeight: 1.7,
                    color: 'rgba(0,0,66,0.6)',
                    marginBottom: 24,
                  }}
                >
                  {a.body}
                </p>
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(0,0,66,0.4)',
                    marginBottom: 12,
                  }}
                >
                  Key Outcomes
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {a.outcomes.map(o => (
                    <li
                      key={o}
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        color: 'rgba(0,0,66,0.7)',
                        paddingLeft: 14,
                        position: 'relative',
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0 }}>·</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        style={{
          background: '#000042',
          padding: '100px 40px',
          borderTop: '1px solid rgba(212,241,121,0.1)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#d4f179',
              marginBottom: 40,
            }}
          >
            Wealth Follows Structure,<br />Not Effort.
          </h2>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 20,
            }}
          >
            Most operators do not lack work ethic. They lack structure.
            Money follows the path of least resistance. When systems,
            strategy, or capital structures create friction, wealth slows down.
          </p>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            My advantage is not more information. It is the ability to see
            where money gets trapped and redesign the path so it moves
            faster and compounds.
          </p>
        </div>
      </section>

      {/* BEYOND THE WORK */}
      <section
        style={{
          background: '#000042',
          padding: '80px 40px',
          borderTop: '1px solid rgba(212,241,121,0.1)',
        }}
      >
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Beyond the Work</span>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.55)',
            }}
          >
            Outside of work, I follow the same principles I help clients build.
            Clarity. Leverage. Long-term thinking. Disciplined training, time
            with family, and designing a life that compounds instead of burns out.
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
              fontSize: 'clamp(28px, 3.5vw, 44px)',
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
            }}
          >
            Book a Private Analysis →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .about-hero-grid { grid-template-columns: 1fr !important; }
          .focus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
