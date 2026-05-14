import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'
import { getArticle, getRelatedArticles, ArticleSection } from '../data/articles'

function CtaMid() {
  return (
    <div
      style={{
        background: '#d4f179',
        padding: '40px 44px',
        margin: '48px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      <p style={{ fontSize: 18, fontWeight: 800, color: '#000042', letterSpacing: '-0.3px' }}>
        Ready to architect your wealth?
      </p>
      <Link
        to="/contact"
        style={{
          background: '#000042',
          color: '#d4f179',
          fontWeight: 800,
          fontSize: 12,
          letterSpacing: '1px',
          padding: '14px 24px',
          textDecoration: 'none',
          textTransform: 'uppercase',
          flexShrink: 0,
        }}
      >
        Book a Private Analysis →
      </Link>
    </div>
  )
}

function renderSection(section: ArticleSection, index: number) {
  switch (section.type) {
    case 'h2':
      return (
        <h2
          key={index}
          style={{
            fontSize: 'clamp(22px, 2.5vw, 30px)',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: 1.15,
            color: '#fff',
            marginTop: 56,
            marginBottom: 20,
          }}
        >
          {section.text}
        </h2>
      )
    case 'h3':
      return (
        <h3
          key={index}
          style={{
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: '-0.5px',
            color: '#d4f179',
            marginTop: 36,
            marginBottom: 12,
          }}
        >
          {section.text}
        </h3>
      )
    case 'p':
      return (
        <p
          key={index}
          style={{
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 1.85,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: 20,
          }}
        >
          {section.text}
        </p>
      )
    case 'ul':
      return (
        <ul
          key={index}
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginBottom: 24,
            paddingLeft: 0,
          }}
        >
          {section.items?.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 17,
                fontWeight: 400,
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.65)',
                paddingLeft: 20,
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', left: 0, color: '#d4f179', fontWeight: 900 }}>·</span>
              {item}
            </li>
          ))}
        </ul>
      )
    case 'cta-mid':
      return <CtaMid key={index} />
    default:
      return null
  }
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticle(slug) : undefined

  if (!article) return <Navigate to="/articles" replace />

  const related = getRelatedArticles(article.slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.dateISO,
    author: {
      '@type': 'Person',
      name: 'Kayvon Kay',
      url: 'https://kayvon.com',
      jobTitle: 'Revenue Architect',
    },
    publisher: {
      '@type': 'Person',
      name: 'Kayvon Kay',
      url: 'https://kayvon.com',
    },
    url: `https://kayvon.com/articles/${article.slug}`,
  }

  return (
    <>
      <SEO
        title={`${article.title} | Kayvon Kay`}
        description={article.metaDescription}
        canonical={`https://kayvon.com/articles/${article.slug}`}
        ogType="article"
        jsonLD={articleSchema}
      />

      {/* ARTICLE HEADER */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 64,
          paddingLeft: 40,
          paddingRight: 40,
          borderBottom: '1px solid rgba(212,241,121,0.1)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
            <Link
              to="/articles"
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                letterSpacing: '0.5px',
              }}
            >
              ← Articles
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: 12 }}>·</span>
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
              {article.category}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: 28,
            }}
          >
            {article.title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 2 }}>Kayvon Kay</p>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>The Revenue Architect · kayvon.com</p>
            </div>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{article.date}</span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>·</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>{article.readTime} read</span>
          </div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ background: '#000042', padding: '64px 40px 100px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {article.content.map((section, i) => renderSection(section, i))}

          {/* BOTTOM CTA */}
          <div
            style={{
              marginTop: 80,
              borderTop: '1px solid rgba(212,241,121,0.1)',
              paddingTop: 64,
              textAlign: 'center',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                color: '#fff',
                marginBottom: 16,
              }}
            >
              Ready to Architect Your Wealth?
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px' }}>
              The framework is in the article. The implementation is in a private engagement.
            </p>
            <Link
              to="/contact"
              style={{
                background: '#d4f179',
                color: '#000042',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '1px',
                padding: '16px 32px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
              }}
            >
              Book a Private Analysis →
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES */}
      {related.length > 0 && (
        <section
          style={{
            background: '#000042',
            borderTop: '1px solid rgba(212,241,121,0.1)',
            padding: '80px 40px',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <span className="eyebrow">More Articles</span>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }} className="related-grid">
              {related.map(a => (
                <Link key={a.slug} to={`/articles/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <CardGlow
                    hoverBorder
                    style={{
                      border: '1px solid rgba(212,241,121,0.1)',
                      padding: '32px 28px',
                      cursor: 'pointer',
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '2px',
                        textTransform: 'uppercase',
                        color: '#d4f179',
                        background: 'rgba(212,241,121,0.1)',
                        padding: '4px 10px',
                        display: 'inline-block',
                        marginBottom: 16,
                      }}
                    >
                      {a.category}
                    </span>
                    <h3
                      style={{
                        fontSize: 18,
                        fontWeight: 800,
                        letterSpacing: '-0.3px',
                        lineHeight: 1.3,
                        color: '#fff',
                        marginBottom: 12,
                      }}
                    >
                      {a.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
                      {a.readTime} read · {a.date}
                    </p>
                  </CardGlow>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <style>{`
        @media (max-width: 640px) {
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
