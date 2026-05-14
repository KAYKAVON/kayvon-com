const mysql = require('mysql2/promise')

let pool = null

function getPool() {
  if (pool) return pool

  const url = process.env.DATABASE_URL
  if (!url) {
    console.warn('[DB] DATABASE_URL not set — blog features will use fallback static data')
    return null
  }

  pool = mysql.createPool({
    uri: url,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  })

  return pool
}

async function query(sql, params = []) {
  const p = getPool()
  if (!p) return null
  try {
    const [rows] = await p.execute(sql, params)
    return rows
  } catch (err) {
    console.error('[DB] Query error:', err.message)
    return null
  }
}

module.exports = { getPool, query }
