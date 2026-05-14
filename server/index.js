const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3000
const DIST = path.join(__dirname, '../dist')

app.use(express.json())

// ── SEO meta config per route ──────────────────────────────────────────────────

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
    description:
      'Kayvon Kay is the Revenue Architect. Helping 7-9 figure operators turn consistent revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture.',
    canonical: 'https://kayvon.com/',
  },
  '/about': {
    title: 'About Kayvon Kay | The Revenue Architect',
    description:
      'Kayvon Kay spent years in 7-9 figure operating environments. Learn how he identified the gap between revenue and wealth — and built a framework to close it.',
    canonical: 'https://kayvon.com/about',
  },
  '/speaker': {
    title: 'Book Kayvon Kay as a Keynote Speaker | Revenue Architecture',
    description:
      'Kayvon Kay speaks to founders, operators, and leadership teams about revenue mechanics, AI-powered systems, and capital flow. Book him for your next event.',
    canonical: 'https://kayvon.com/speaker',
  },
  '/articles': {
    title: 'Articles | Kayvon Kay — Intelligence for Operators',
    description:
      'Frameworks, insights, and intelligence for operators who think in systems. Revenue, capital, and AI-powered growth from Kayvon Kay, The Revenue Architect.',
    canonical: 'https://kayvon.com/articles',
  },
  '/contact': {
    title: 'Work With Kayvon Kay | Book a Private Analysis',
    description:
      'Apply to work with Kayvon Kay, The Revenue Architect. Private engagements for 7-9 figure operators ready to convert performance into compounding wealth.',
    canonical: 'https://kayvon.com/contact',
  },
  '/thank-you': {
    title: 'Submission Received | Kayvon Kay',
    description:
      'Your inquiry has been received. Kayvon personally reviews every submission and will respond within 24 hours.',
    canonical: 'https://kayvon.com/thank-you',
  },
}

const ARTICLE_META = {
  'fixing-bad-credit-financial-identity-business-leverage': {
    title: 'Why Fixing Bad Credit Is Really About Rebuilding Financial Identity and Business Leverage | Kayvon Kay',
    description:
      'Fixing bad credit is not about a number. For operators, it is about rebuilding the financial identity that determines access to capital, leverage, and compounding wealth.',
    canonical: 'https://kayvon.com/articles/fixing-bad-credit-financial-identity-business-leverage',
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Why Fixing Bad Credit Is Really About Rebuilding Financial Identity and Business Leverage',
      datePublished: '2026-01-15',
      author: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
      publisher: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
      url: 'https://kayvon.com/articles/fixing-bad-credit-financial-identity-business-leverage',
    }),
  },
  'successful-founders-anxiety-hidden-ceiling-business-growth': {
    title: 'Why Successful Founders Still Feel Anxious: The Hidden Ceiling Blocking Real Business Growth | Kayvon Kay',
    description:
      'Successful founders often feel anxious despite strong revenue. Learn why this is an architecture problem — not a motivation problem — and how to break through the hidden ceiling.',
    canonical: 'https://kayvon.com/articles/successful-founders-anxiety-hidden-ceiling-business-growth',
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Why Successful Founders Still Feel Anxious: The Hidden Ceiling Blocking Real Business Growth',
      datePublished: '2026-02-03',
      author: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
      publisher: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
      url: 'https://kayvon.com/articles/successful-founders-anxiety-hidden-ceiling-business-growth',
    }),
  },
  'buying-vs-starting-business-smarter-path-growth': {
    title: 'Buying a Business vs Starting One: The Smarter Path to Real Business Growth | Kayvon Kay',
    description:
      'For operators who understand business, buying an existing company may be the smarter path than starting one. Here is why acquisition beats the startup grind.',
    canonical: 'https://kayvon.com/articles/buying-vs-starting-business-smarter-path-growth',
    schema: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Buying a Business vs Starting One: The Smarter Path to Real Business Growth',
      datePublished: '2026-03-12',
      author: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
      publisher: { '@type': 'Person', name: 'Kayvon Kay', url: 'https://kayvon.com' },
      url: 'https://kayvon.com/articles/buying-vs-starting-business-smarter-path-growth',
    }),
  },
}

// ── Meta injection ─────────────────────────────────────────────────────────────

function buildMetaBlock(meta) {
  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <link rel="canonical" href="${meta.canonical}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${meta.canonical}" />
    <meta property="og:type" content="${meta.ogType || 'website'}" />`.trim()
}

function buildJsonLD(meta) {
  const schemas = [`<script type="application/ld+json">${PERSON_SCHEMA}</script>`]
  if (meta.schema) {
    schemas.push(`<script type="application/ld+json">${meta.schema}</script>`)
  }
  return schemas.join('\n    ')
}

function injectMeta(template, meta) {
  let html = template
  html = html.replace(
    /<!-- PAGE_META_START -->[\s\S]*?<!-- PAGE_META_END -->/,
    `<!-- PAGE_META_START -->\n    ${buildMetaBlock(meta)}\n    <!-- PAGE_META_END -->`
  )
  html = html.replace(
    /<!-- JSON_LD_START -->[\s\S]*?<!-- JSON_LD_END -->/,
    `<!-- JSON_LD_START -->\n    ${buildJsonLD(meta)}\n    <!-- JSON_LD_END -->`
  )
  return html
}

// ── Sitemap ────────────────────────────────────────────────────────────────────

const articleSlugs = Object.keys(ARTICLE_META)

function generateSitemap() {
  const base = 'https://kayvon.com'
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/speaker', priority: '0.9', changefreq: 'monthly' },
    { url: '/articles', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    ...articleSlugs.map(slug => ({
      url: `/articles/${slug}`,
      priority: '0.7',
      changefreq: 'monthly',
    })),
  ]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    p => `  <url>
    <loc>${base}${p.url}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`
}

// ── Routes ─────────────────────────────────────────────────────────────────────

app.get('/sitemap.xml', (_req, res) => {
  res.set('Content-Type', 'application/xml')
  res.send(generateSitemap())
})

app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, company, website, revenue, message, source } = req.body
  console.log(`[Contact Form] source=${source || 'contact'} name="${firstName} ${lastName}" email="${email}" company="${company}" revenue="${revenue}"`)
  if (message) console.log(`[Contact Form] message: ${message.substring(0, 120)}`)
  res.json({ success: true })
})

// Serve static assets from dist/
app.use(
  express.static(DIST, {
    index: false,
    maxAge: '1y',
    immutable: true,
  })
)

// SPA fallback with meta injection
let template = null

app.get('*', (req, res) => {
  try {
    if (!template) {
      template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')
    }

    const p = req.path
    let meta = PAGE_META[p]

    if (!meta) {
      const articleMatch = p.match(/^\/articles\/(.+)$/)
      if (articleMatch) {
        const slug = articleMatch[1]
        const articleMeta = ARTICLE_META[slug]
        if (articleMeta) {
          meta = { ...articleMeta, ogType: 'article' }
        }
      }
    }

    if (!meta) meta = PAGE_META['/']

    res.set('Content-Type', 'text/html')
    res.send(injectMeta(template, meta))
  } catch (err) {
    console.error('Server error:', err)
    res.status(500).send('Server error')
  }
})

app.listen(PORT, () => {
  console.log(`kayvon.com running on port ${PORT}`)
})
