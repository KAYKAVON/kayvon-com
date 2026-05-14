require('dotenv').config()
const { getPool } = require('./db')

async function migrate() {
  const pool = getPool()
  if (!pool) {
    console.error('DATABASE_URL not set. Cannot migrate.')
    process.exit(1)
  }

  const conn = await pool.getConnection()

  await conn.execute(`
    CREATE TABLE IF NOT EXISTS blog_posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(255) UNIQUE NOT NULL,
      title TEXT NOT NULL,
      metaTitle TEXT,
      metaDescription TEXT,
      category VARCHAR(100),
      pillarCluster VARCHAR(100),
      isPillar TINYINT(1) DEFAULT 0,
      pillarSlug VARCHAR(255),
      body LONGTEXT,
      heroImageUrl VARCHAR(500),
      publishedAt DATETIME DEFAULT NOW(),
      wordCount INT DEFAULT 0,
      createdAt DATETIME DEFAULT NOW(),
      updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW()
    ) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
  `)

  console.log('[Migrate] blog_posts table ready.')
  conn.release()
  process.exit(0)
}

migrate().catch(err => {
  console.error('[Migrate] Error:', err)
  process.exit(1)
})
