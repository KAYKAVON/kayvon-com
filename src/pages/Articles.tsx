import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'
import { articles } from '../data/articles'

export default function Articles() {
  return (
    <>
      <SEO
        title="Articles | Kayvon Kay — Intelligence for Operators"
        description="Frameworks, insights, and intelligence for operators who think in systems. Revenue, capital, and AI-powered growth from Kayvon Kay, The Revenue Architect."
        canonical="https://kayvon.com/articles"
      />

      {/* HERO */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 80,
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
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">Articles</span>
          <h1
            style={{
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 900,
              letterSpacing: '-2.5px',
              lineHeight: 1.05,
              color: '#fff',
            }}
          >
            Intelligence for Operators
            <br />
            <span style={{ color: '#d4f179' }}>Who Think in Systems.</span>
          </h1>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section style={{ background: '#000042', padding: '80px 40px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
            className="articles-grid"
          >
            {articles.map(article => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <CardGlow
                  hoverBorder
                  style={{
                    border: '1px solid rgba(212,241,121,0.1)',
                    padding: '36px 32px',
                    height: '100%',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ marginBottom: 'auto' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#d4f179',
                        background: 'rgba(212,241,121,0.1)',
                        padding: '4px 10px',
                        marginBottom: 20,
                      }}
                    >
                      {article.category}
                    </span>
                    <h2
                      style={{
                        fontSize: 20,
                        fontWeight: 800,
                        letterSpacing: '-0.5px',
                        lineHeight: 1.25,
                        color: '#fff',
                        marginBottom: 16,
                      }}
                    >
                      {article.title}
                    </h2>
                    <p
                      style={{
                        fontSize: 14,
                        fontWeight: 400,
                        lineHeight: 1.7,
                        color: 'rgba(255,255,255,0.45)',
                        marginBottom: 28,
                      }}
                    >
                      {article.excerpt}
                    </p>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderTop: '1px solid rgba(212,241,121,0.08)',
                      paddingTop: 20,
                    }}
                  >
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>
                      {article.date}
                    </span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>
                      {article.readTime} read
                    </span>
                  </div>
                </CardGlow>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#d4f179', padding: '100px 40px', textAlign: 'center' }}>
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
            Articles give you the framework. A private analysis gives you the implementation.
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
          .articles-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .articles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
