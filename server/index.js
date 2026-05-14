const express = require('express')
const path = require('path')
const fs = require('fs')
const { query } = require('./db')

const app = express()
const PORT = process.env.PORT || 3000
const DIST = path.join(__dirname, '../dist')

app.use(express.json())

// ── Static article fallback (used when DB unavailable) ─────────────────────────

const STATIC_ARTICLES = [
  {
    slug: 'fixing-bad-credit-financial-identity-business-leverage',
    title: 'Why Fixing Bad Credit Is Really About Rebuilding Financial Identity and Business Leverage',
    metaTitle: 'Why Fixing Bad Credit Is Really About Financial Identity and Business Leverage | Kayvon Kay',
    metaDescription: 'Fixing bad credit is not about a number. For operators, it is about rebuilding the financial identity that determines access to capital, leverage, and compounding wealth.',
    category: 'Capital Flow',
    pillarCluster: 'pillar-4-business-wealth',
    isPillar: 0,
  },
  {
    slug: 'successful-founders-anxiety-hidden-ceiling-business-growth',
    title: 'Why Successful Founders Still Feel Anxious: The Hidden Ceiling Blocking Real Business Growth',
    metaTitle: 'Why Successful Founders Still Feel Anxious | Kayvon Kay',
    metaDescription: 'Successful founders often feel anxious despite strong revenue. Learn why this is an architecture problem and how to break through the hidden ceiling.',
    category: 'Revenue Leverage',
    pillarCluster: 'pillar-4-business-wealth',
    isPillar: 0,
  },
  {
    slug: 'buying-vs-starting-business-smarter-path-growth',
    title: 'Buying a Business vs Starting One: The Smarter Path to Real Business Growth',
    metaTitle: 'Buying a Business vs Starting One: The Smarter Path | Kayvon Kay',
    metaDescription: 'For experienced operators, buying an existing business may be the smarter path. Here is why acquisition beats the startup grind for wealth building.',
    category: 'Capital Flow',
    pillarCluster: 'pillar-4-business-wealth',
    isPillar: 0,
  },
]

// ── SEO meta config ────────────────────────────────────────────────────────────

const PERSON_SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kayvon Kay',
  jobTitle: 'Revenue Architect',
  url: 'https://kayvon.com',
  sameAs: ['https://salesfit.ai', 'https://www.linkedin.com/in/kayvonkay'],
  description:
    'Kayvon Kay is the Revenue Architect — helping 7-9 figure operators turn revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture.',
})

const PAGE_META = {
  '/': {
    title: 'Kayvon Kay — The Revenue Architect | $375M+ in Client Revenue',
    description: 'Kayvon Kay is the Revenue Architect. Helping 7-9 figure operators turn consistent revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture.',
    canonical: 'https://kayvon.com/',
  },
  '/about': {
    title: 'About Kayvon Kay | The Revenue Architect',
    description: 'Kayvon Kay spent years in 7-9 figure operating environments. Learn how he identified the gap between revenue and wealth — and built a framework to close it.',
    canonical: 'https://kayvon.com/about',
  },
  '/speaker': {
    title: 'Book Kayvon Kay as a Keynote Speaker | Revenue Architecture',
    description: 'Kayvon Kay speaks to founders, operators, and leadership teams about revenue mechanics, AI-powered systems, and capital flow. Book him for your next event.',
    canonical: 'https://kayvon.com/speaker',
  },
  '/articles': {
    title: 'Articles | Kayvon Kay — Intelligence for Operators',
    description: 'Frameworks, insights, and intelligence for operators who think in systems. Revenue, capital, AI-powered growth, and wealth architecture from Kayvon Kay.',
    canonical: 'https://kayvon.com/articles',
  },
  '/contact': {
    title: 'Work With Kayvon Kay | Book a Private Analysis',
    description: 'Apply to work with Kayvon Kay, The Revenue Architect. Private engagements for 7-9 figure operators ready to convert performance into compounding wealth.',
    canonical: 'https://kayvon.com/contact',
  },
  '/thank-you': {
    title: 'Submission Received | Kayvon Kay',
    description: 'Your inquiry has been received. Kayvon personally reviews every submission and will respond within 24 hours.',
    canonical: 'https://kayvon.com/thank-you',
  },
}

function buildMetaBlock(meta) {
  return `<title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:type" content="${meta.ogType || 'website'}" />`.trim()
}

function buildJsonLD(extra) {
  const schemas = [`<script type="application/ld+json">${PERSON_SCHEMA}</script>`]
  if (extra) schemas.push(`<script type="application/ld+json">${extra}</script>`)
  return schemas.join('\n    ')
}

function injectMeta(template, meta, extraSchema) {
  let html = template
  html = html.replace(
    /<!-- PAGE_META_START -->[\s\S]*?<!-- PAGE_META_END -->/,
    `<!-- PAGE_META_START -->\n    ${buildMetaBlock(meta)}\n    <!-- PAGE_META_END -->`
  )
  html = html.replace(
    /<!-- JSON_LD_START -->[\s\S]*?<!-- JSON_LD_END -->/,
    `<!-- JSON_LD_START -->\n    ${buildJsonLD(extraSchema)}\n    <!-- JSON_LD_END -->`
  )
  return html
}

// ── API: Blog posts ────────────────────────────────────────────────────────────

app.get('/api/posts', async (req, res) => {
  const { category, cluster } = req.query
  let rows = null

  let sql = 'SELECT slug, title, metaDescription, category, pillarCluster, isPillar, pillarSlug, publishedAt, wordCount FROM blog_posts WHERE 1=1'
  const params = []
  if (category) { sql += ' AND category = ?'; params.push(category) }
  if (cluster) { sql += ' AND pillarCluster = ?'; params.push(cluster) }
  sql += ' ORDER BY isPillar DESC, publishedAt DESC'

  rows = await query(sql, params)

  if (!rows) {
    // Fallback: return static article list
    return res.json(STATIC_ARTICLES)
  }

  res.json(rows)
})

app.get('/api/posts/:slug', async (req, res) => {
  const { slug } = req.params
  const rows = await query('SELECT * FROM blog_posts WHERE slug = ? LIMIT 1', [slug])
  if (rows && rows.length > 0) return res.json(rows[0])
  res.status(404).json({ error: 'Not found' })
})

app.get('/api/posts/cluster/:cluster', async (req, res) => {
  const rows = await query(
    'SELECT slug, title, category, isPillar, publishedAt FROM blog_posts WHERE pillarCluster = ? ORDER BY isPillar DESC, publishedAt ASC',
    [req.params.cluster]
  )
  res.json(rows || [])
})

app.get('/api/categories', async (req, res) => {
  const rows = await query('SELECT DISTINCT category FROM blog_posts ORDER BY category')
  if (rows) return res.json(rows.map(r => r.category).filter(Boolean))
  res.json(['Capital Flow', 'Revenue Leverage', 'Fractional CRO', 'Revenue Architecture', 'Sales Teams', 'Business Wealth', 'Sales Speaker'])
})

// ── API: Contact form ──────────────────────────────────────────────────────────

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, company, website, revenue, message, source } = req.body
  console.log(`[Contact] source=${source || 'contact'} name="${firstName} ${lastName}" email="${email}" company="${company}" revenue="${revenue}"`)
  if (message) console.log(`[Contact] message: ${message.substring(0, 140)}`)
  res.json({ success: true })
})

// ── Sitemap (DB-backed, with static fallback) ──────────────────────────────────

async function buildSitemap() {
  const base = 'https://kayvon.com'
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/speaker', priority: '0.9', changefreq: 'monthly' },
    { url: '/articles', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  ]

  const rows = await query('SELECT slug, isPillar, updatedAt FROM blog_posts ORDER BY isPillar DESC, publishedAt DESC')
  const articlePages = (rows || STATIC_ARTICLES).map(r => ({
    url: `/articles/${r.slug}`,
    priority: r.isPillar ? '0.85' : '0.7',
    changefreq: 'monthly',
  }))

  const pages = [...staticPages, ...articlePages]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${base}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`
}

app.get('/sitemap.xml', async (_req, res) => {
  const xml = await buildSitemap()
  res.set('Content-Type', 'application/xml')
  res.send(xml)
})

// ── Robots ─────────────────────────────────────────────────────────────────────

app.get('/robots.txt', (_req, res) => {
  res.type('text/plain')
  res.send('User-agent: *\nAllow: /\nDisallow: /thank-you\n\nSitemap: https://kayvon.com/sitemap.xml\n')
})

// ── Static assets ──────────────────────────────────────────────────────────────

app.use(express.static(DIST, { index: false, maxAge: '1y', immutable: true }))

// ── SPA fallback with meta injection ──────────────────────────────────────────

let template = null

app.get('*', async (req, res) => {
  try {
    if (!template) template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')
    const p = req.path
    let meta = PAGE_META[p]
    let extraSchema = null

    if (!meta) {
      const m = p.match(/^\/articles\/(.+)$/)
      if (m) {
        const slug = m[1]
        // Try DB first
        const rows = await query('SELECT slug, title, metaTitle, metaDescription, publishedAt FROM blog_posts WHERE slug = ? LIMIT 1', [slug])
        if (rows && rows.length > 0) {
          const post = rows[0]
          meta = {
            title: post.metaTitle || `${post.title} | Kayvon Kay`,
            description: post.metaDescription || '',
            canonical: `https://kayvon.com/articles/${post.slug}`,
            ogType: 'article',
          }
          extraSchema = JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            datePublished: post.publishedAt,
            author: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
            publisher: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
            url: `https://kayvon.com/articles/${post.slug}`,
          })
        } else {
          // Static fallback
          meta = { title: `Kayvon Kay | Article`, description: '', canonical: `https://kayvon.com/articles/${slug}`, ogType: 'article' }
        }
      }
    }

    if (!meta) meta = PAGE_META['/']
    res.set('Content-Type', 'text/html')
    res.send(injectMeta(template, meta, extraSchema))
  } catch (err) {
    console.error('Server error:', err)
    res.status(500).send('Server error')
  }
})

app.listen(PORT, () => console.log(`kayvon.com running on port ${PORT}`))
