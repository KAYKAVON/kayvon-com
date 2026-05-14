import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'

interface PostSummary {
  slug: string
  title: string
  metaDescription?: string
  category?: string
  pillarCluster?: string
  isPillar?: number
  publishedAt?: string
  wordCount?: number
}

function formatDate(d: string | undefined) {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
  catch { return d }
}

function readTime(wc: number | undefined) {
  return wc ? `${Math.max(5, Math.round(wc / 200))} min` : '8 min'
}

export default function Articles() {
  const [posts, setPosts] = useState<PostSummary[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      fetch('/api/posts').then(r => r.json()).catch(() => []),
      fetch('/api/categories').then(r => r.json()).catch(() => []),
    ]).then(([postsData, catsData]) => {
      setPosts(postsData)
      setCategories(['All', ...catsData])
      setLoading(false)
    })
  }, [])

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter(p => p.category === activeCategory)

  return (
    <>
      <SEO
        title="Articles | Kayvon Kay — Intelligence for Operators"
        description="Frameworks, insights, and intelligence for operators who think in systems. Revenue, capital, AI-powered growth, and wealth architecture from Kayvon Kay."
        canonical="https://kayvon.com/articles"
      />

      {/* HERO */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 64,
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
              marginBottom: 0,
            }}
          >
            Intelligence for Operators
            <br />
            <span style={{ color: '#d4f179' }}>Who Think in Systems.</span>
          </h1>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      {categories.length > 1 && (
        <div
          style={{
            background: '#000042',
            borderTop: '1px solid rgba(212,241,121,0.08)',
            padding: '24px 40px',
            overflowX: 'auto',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  background: activeCategory === cat ? '#d4f179' : 'transparent',
                  color: activeCategory === cat ? '#000042' : 'rgba(255,255,255,0.5)',
                  border: `1px solid ${activeCategory === cat ? '#d4f179' : 'rgba(212,241,121,0.2)'}`,
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ARTICLES GRID */}
      <section style={{ background: '#000042', padding: '48px 40px 120px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {loading ? (
            <p style={{ color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '80px 0' }}>Loading...</p>
          ) : filtered.length === 0 ? (
            <p style={{ color: 'rgba(255,255,255,0.3)', textAlign: 'center', padding: '80px 0' }}>No articles found.</p>
          ) : (
            <>
              {/* Pillar pages row (if any) */}
              {filtered.some(p => p.isPillar) && (
                <div style={{ marginBottom: 48 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
                    Complete Guides
                  </p>
                  <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
                    className="articles-grid"
                  >
                    {filtered.filter(p => p.isPillar).map(post => (
                      <ArticleCard key={post.slug} post={post} pillar />
                    ))}
                  </div>
                </div>
              )}

              {/* Regular posts */}
              {filtered.some(p => !p.isPillar) && (
                <>
                  {filtered.some(p => p.isPillar) && (
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 20 }}>
                      Deep Dives
                    </p>
                  )}
                  <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
                    className="articles-grid"
                  >
                    {filtered.filter(p => !p.isPillar).map(post => (
                      <ArticleCard key={post.slug} post={post} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
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
          <p style={{ fontSize: 18, fontWeight: 400, lineHeight: 1.75, color: 'rgba(0,0,66,0.6)', marginBottom: 40 }}>
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
        @media (max-width: 900px) { .articles-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .articles-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}

function ArticleCard({ post, pillar }: { post: PostSummary; pillar?: boolean }) {
  return (
    <Link to={`/articles/${post.slug}`} style={{ textDecoration: 'none' }}>
      <CardGlow
        hoverBorder
        style={{
          border: `1px solid ${pillar ? 'rgba(212,241,121,0.2)' : 'rgba(212,241,121,0.1)'}`,
          padding: '36px 32px',
          height: '100%',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          background: pillar ? 'rgba(212,241,121,0.02)' : 'transparent',
        }}
      >
        <div style={{ marginBottom: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {post.category && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#d4f179',
                  background: 'rgba(212,241,121,0.1)',
                  padding: '4px 10px',
                }}
              >
                {post.category}
              </span>
            )}
            {pillar && (
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: 'rgba(212,241,121,0.5)',
                }}
              >
                Complete Guide
              </span>
            )}
          </div>
          <h2
            style={{
              fontSize: pillar ? 20 : 18,
              fontWeight: 800,
              letterSpacing: '-0.3px',
              lineHeight: 1.25,
              color: '#fff',
              marginBottom: 14,
            }}
          >
            {post.title}
          </h2>
          {post.metaDescription && (
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 28,
              }}
            >
              {post.metaDescription.length > 120 ? post.metaDescription.slice(0, 120) + '…' : post.metaDescription}
            </p>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(212,241,121,0.08)',
            paddingTop: 18,
          }}
        >
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{formatDate(post.publishedAt)}</span>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>{readTime(post.wordCount)} read</span>
        </div>
      </CardGlow>
    </Link>
  )
}
