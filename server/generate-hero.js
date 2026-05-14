'use strict'

/**
 * Blog post hero image pipeline.
 *
 * Generates a 1200×630px branded card for each blog post:
 *   - #000042 background
 *   - Large translucent "K" watermark
 *   - Post title in white Helvetica bold (auto-wrapped)
 *   - "KV" mark + "KAYVON KAY" bottom-right in #d4f179
 *   - Thin lime rule above the bottom label
 *
 * Uploads to Cloudinary and returns the secure CDN URL.
 *
 * Required env vars:
 *   CLOUDINARY_URL  cloudinary://api_key:api_secret@cloud_name
 *   (or CLOUDINARY_CLOUD_NAME + CLOUDINARY_API_KEY + CLOUDINARY_API_SECRET)
 */

const cloudinary = require('cloudinary').v2
const sharp = require('sharp')

const WIDTH = 1200
const HEIGHT = 630
const FONT = 'Helvetica Neue, Helvetica, Arial, sans-serif'
const BRAND_COLOR = '#d4f179'
const BG_COLOR = '#000042'

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function wrapText(text, maxChars = 36) {
  const words = text.split(' ')
  const lines = []
  let current = ''
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word
    if (candidate.length > maxChars && current) {
      lines.push(current)
      current = word
    } else {
      current = candidate
    }
  }
  if (current) lines.push(current)
  return lines.slice(0, 4) // max 4 lines
}

function buildSvg(title) {
  const lines = wrapText(title)
  const lineHeight = 68
  const totalTextH = lines.length * lineHeight
  // center the title block vertically, nudge up slightly
  const startY = Math.round((HEIGHT - totalTextH) / 2) - 20

  const titleLines = lines
    .map(
      (line, i) =>
        `<text x="80" y="${startY + i * lineHeight}"
          font-family="${FONT}"
          font-weight="700"
          font-size="58"
          fill="white"
          letter-spacing="-1"
        >${escapeXml(line)}</text>`
    )
    .join('\n')

  return `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${BG_COLOR}"/>

  <!-- Watermark K -->
  <text
    x="680" y="570"
    font-family="${FONT}"
    font-weight="900"
    font-size="620"
    fill="${BRAND_COLOR}"
    opacity="0.07"
    letter-spacing="-20"
  >K</text>

  <!-- Left accent bar -->
  <rect x="80" y="${startY - 24}" width="4" height="${totalTextH + 16}" fill="${BRAND_COLOR}" opacity="0.9"/>

  <!-- Title -->
  ${titleLines}

  <!-- Bottom rule -->
  <rect x="80" y="${HEIGHT - 72}" width="56" height="2" fill="${BRAND_COLOR}"/>

  <!-- KV mark bottom-right -->
  <text
    x="${WIDTH - 48}" y="${HEIGHT - 80}"
    font-family="${FONT}"
    font-weight="900"
    font-size="42"
    fill="${BRAND_COLOR}"
    text-anchor="end"
    letter-spacing="-2"
  >KV</text>
  <text
    x="${WIDTH - 48}" y="${HEIGHT - 48}"
    font-family="${FONT}"
    font-weight="500"
    font-size="13"
    fill="${BRAND_COLOR}"
    opacity="0.7"
    text-anchor="end"
    letter-spacing="3"
  >KAYVON KAY</text>
</svg>`
}

async function renderPng(title) {
  const svg = buildSvg(title)
  return sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .png({ compressionLevel: 8 })
    .toBuffer()
}

function uploadToCloudinary(buffer, slug) {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        public_id: `kayvon-blog/${slug}`,
        overwrite: true,
        resource_type: 'image',
        format: 'jpg',
        transformation: [{ quality: 'auto:best' }],
      },
      (err, result) => (err ? reject(err) : resolve(result.secure_url))
    )
    stream.end(buffer)
  })
}

/**
 * Generate a hero image for a blog post and upload it to Cloudinary.
 *
 * @param {string} title  - The post title
 * @param {string} slug   - The post slug (used as Cloudinary public_id)
 * @returns {Promise<string>} Cloudinary secure URL
 */
async function generateHero(title, slug) {
  if (!process.env.CLOUDINARY_URL &&
      !(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET)) {
    throw new Error('Cloudinary credentials not set. Set CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET.')
  }

  const buffer = await renderPng(title)
  const url = await uploadToCloudinary(buffer, slug)
  return url
}

module.exports = { generateHero }
