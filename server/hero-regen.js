'use strict'

/**
 * CLI: Batch-generate hero images for all blog posts that are missing one.
 *
 * Usage:
 *   DATABASE_URL=<url> CLOUDINARY_URL=<url> node server/hero-regen.js
 *
 * Add --all flag to regenerate even posts that already have a heroImageUrl:
 *   DATABASE_URL=<url> CLOUDINARY_URL=<url> node server/hero-regen.js --all
 *
 * Add --slug=<slug> to regenerate a single post:
 *   DATABASE_URL=<url> CLOUDINARY_URL=<url> node server/hero-regen.js --slug=revenue-based-quota-setting
 */

require('dotenv').config({ quiet: true })
const { query } = require('./db')
const { generateHero } = require('./generate-hero')

const FORCE_ALL = process.argv.includes('--all')
const SLUG_ARG = process.argv.find(a => a.startsWith('--slug='))
const TARGET_SLUG = SLUG_ARG ? SLUG_ARG.split('=')[1] : null

async function run() {
  let posts

  if (TARGET_SLUG) {
    posts = await query('SELECT slug, title FROM blog_posts WHERE slug = ?', [TARGET_SLUG])
    if (!posts || posts.length === 0) {
      console.error(`No post found with slug: ${TARGET_SLUG}`)
      process.exit(1)
    }
  } else if (FORCE_ALL) {
    posts = await query('SELECT slug, title FROM blog_posts ORDER BY publishedAt DESC')
  } else {
    posts = await query(
      'SELECT slug, title FROM blog_posts WHERE heroImageUrl IS NULL OR heroImageUrl = "" ORDER BY publishedAt DESC'
    )
  }

  if (!posts || posts.length === 0) {
    console.log('No posts need hero images. Use --all to force regeneration.')
    process.exit(0)
  }

  console.log(`Generating hero images for ${posts.length} post(s)...\n`)

  let ok = 0
  let fail = 0

  for (const post of posts) {
    process.stdout.write(`  [${ok + fail + 1}/${posts.length}] ${post.slug} ... `)
    try {
      const url = await generateHero(post.title, post.slug)
      await query('UPDATE blog_posts SET heroImageUrl = ? WHERE slug = ?', [url, post.slug])
      console.log(`✓  ${url}`)
      ok++
    } catch (err) {
      console.log(`✗  ${err.message}`)
      fail++
    }
  }

  console.log(`\nDone. ${ok} succeeded, ${fail} failed.`)
  process.exit(fail > 0 ? 1 : 0)
}

run().catch(err => {
  console.error('Fatal:', err.message)
  process.exit(1)
})
