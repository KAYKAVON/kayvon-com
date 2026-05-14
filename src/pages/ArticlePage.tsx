import { useEffect, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'
import BlogBody from '../components/BlogBody'

interface Post {
  slug: string
  title: string
  metaTitle?: string
  metaDescription?: string
  category?: string
  pillarCluster?: string
  isPillar?: number
  pillarSlug?: string
  body: string
  publishedAt?: string
  wordCount?: number
}

interface RelatedPost {
  slug: string
  title: string
  category?: string
  isPillar?: number
  publishedAt?: string
}

function formatDate(d: string | undefined) {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }
  catch { return d }
}

function readTime(wc: number | undefined) {
  return wc ? `${Math.max(5, Math.round(wc / 200))} min` : '8 min'
}

const AUTHOR_BIO = `Kayvon Kay is the Revenue Architect — helping 7 to 9 figure operators turn revenue into compounding wealth. He is the founder of <a href="https://salesfit.ai" style="color:#d4f179">SalesFit.ai</a>, the Sales Team Intelligence Platform, and <a href="https://thesalesconnection.com" style="color:#d4f179">The Sales Connection</a>, a high-performance sales recruitment firm. He has built 101 sales teams and generated $375M+ in client revenue across two decades.`

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Post | null>(null)
  const [related, setRelated] = useState<RelatedPost[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    setNotFound(false)

    fetch(`/api/posts/${slug}`)
      .then(r => {
        if (!r.ok) throw new Error('not found')
        return r.json()
      })
      .then((data: Post) => {
        setPost(data)
        setLoading(false)
        // Fetch related posts from same cluster
        if (data.pillarCluster) {
          fetch(`/api/posts/cluster/${data.pillarCluster}`)
            .then(r => r.json())
            .then((clusterPosts: RelatedPost[]) => {
              setRelated(clusterPosts.filter(p => p.slug !== slug).slice(0, 3))
            })
            .catch(() => {})
        }
      })
      .catch(() => {
        setNotFound(true)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <section style={{ background: '#000042', minHeight: '100vh', paddingTop: 148, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.3)' }}>Loading...</p>
      </section>
    )
  }

  if (notFound || !post) return <Navigate to="/articles" replace />

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription || '',
    datePublished: post.publishedAt,
    author: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com', jobTitle: 'Revenue Architect' },
    publisher: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
    url: `https://kayvon.com/articles/${post.slug}`,
  }

  return (
    <>
      <SEO
        title={post.metaTitle || `${post.title} | Kayvon Kay`}
        description={post.metaDescription || ''}
        canonical={`https://kayvon.com/articles/${post.slug}`}
        ogType="article"
        jsonLD={articleSchema}
      />

      {/* ARTICLE HEADER */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 56,
          paddingLeft: 40,
          paddingRight: 40,
          borderBottom: '1px solid rgba(212,241,121,0.1)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, flexWrap: 'wrap' }}>
            <Link to="/articles" style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.3)', textDecoration: 'none', letterSpacing: '0.5px' }}>
              ← Articles
            </Link>
            {post.category && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 12 }}>·</span>
                <span style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                  color: '#d4f179', background: 'rgba(212,241,121,0.1)', padding: '4px 10px',
                }}>
                  {post.category}
                </span>
              </>
            )}
            {post.isPillar ? (
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(212,241,121,0.5)' }}>
                Complete Guide
              </span>
            ) : null}
          </div>

          <h1
            style={{
              fontSize: 'clamp(26px, 3.5vw, 46px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: 28,
            }}
          >
            {post.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Kayvon Kay</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>Revenue Architect · kayvon.com</p>
            </div>
            {post.publishedAt && (
              <>
                <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{formatDate(post.publishedAt)}</span>
              </>
            )}
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{readTime(post.wordCount)} read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ background: '#000042', padding: '56px 40px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <BlogBody html={post.body} />

          {/* AUTHOR BIO */}
          <div
            style={{
              marginTop: 72,
              borderTop: '1px solid rgba(212,241,121,0.1)',
              paddingTop: 40,
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: 16 }}>
              About the Author
            </p>
            <p
              style={{ fontSize: 15, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)' }}
              dangerouslySetInnerHTML={{ __html: AUTHOR_BIO }}
            />
          </div>

          {/* BOTTOM CTA */}
          <div
            style={{
              marginTop: 64,
              background: '#d4f179',
              padding: '40px 44px',
              textAlign: 'center',
            }}
          >
            <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 900, letterSpacing: '-1px', color: '#000042', marginBottom: 16 }}>
              Book a Private Wealth Architecture Analysis
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(0,0,66,0.6)', marginBottom: 28 }}>
              The framework is in the article. The implementation is a private engagement.
            </p>
            <Link
              to="/contact"
              style={{
                background: '#000042',
                color: '#d4f179',
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '14px 28px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              kayvon.com/contact →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section style={{ background: '#000042', borderTop: '1px solid rgba(212,241,121,0.1)', padding: '72px 40px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <span className="eyebrow">Related Articles</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="related-grid">
              {related.map(a => (
                <Link key={a.slug} to={`/articles/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <CardGlow
                    hoverBorder
                    style={{ border: '1px solid rgba(212,241,121,0.1)', padding: '28px 24px', cursor: 'pointer', height: '100%' }}
                  >
                    {a.category && (
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#d4f179', background: 'rgba(212,241,121,0.1)', padding: '4px 10px', display: 'inline-block', marginBottom: 14 }}>
                        {a.category}
                      </span>
                    )}
                    <h3 style={{ fontSize: 16, fontWeight: 800, letterSpacing: '-0.3px', lineHeight: 1.3, color: '#fff', marginBottom: 0 }}>
                      {a.title}
                    </h3>
                  </CardGlow>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .related-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  )
}
