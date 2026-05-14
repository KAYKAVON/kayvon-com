import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const KVMark = () => (
  <svg viewBox="0 0 38 38" fill="none" style={{ width: 28, height: 28 }}>
    <path d="M4 6h8l7 13L13 32H4l7-13L4 6z" fill="#d4f179" />
    <path d="M19 6l7 13-7 13h7l11-13L26 6h-7z" fill="#d4f179" />
  </svg>
)

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/speaker', label: 'Speaker' },
  { to: '/articles', label: 'Articles' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (to: string) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(0,0,66,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(212,241,121,0.1)' : '1px solid transparent',
          transition: 'background 0.3s, border-color 0.3s',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 40px',
            height: 72,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <KVMark />
            <span
              style={{
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '3px',
                color: '#d4f179',
                textTransform: 'uppercase',
              }}
            >
              KAYVON KAY
            </span>
          </Link>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 32,
            }}
            className="desktop-nav"
          >
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.3px',
                  color: isActive(l.to) ? '#d4f179' : 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => {
                  if (!isActive(l.to)) (e.target as HTMLElement).style.color = '#fff'
                }}
                onMouseLeave={e => {
                  if (!isActive(l.to)) (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.5)'
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              style={{
                background: '#d4f179',
                color: '#000042',
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: '1px',
                padding: '11px 22px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              Book a Meeting →
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 4,
            }}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: '#d4f179',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: '#d4f179',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.3s',
              }}
            />
            <span
              style={{
                display: 'block',
                width: 24,
                height: 2,
                background: '#d4f179',
                transition: 'transform 0.3s, opacity 0.3s',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: '#000042',
          zIndex: 99,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 40,
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s ease',
        }}
      >
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            style={{
              fontSize: 28,
              fontWeight: 800,
              letterSpacing: '-0.5px',
              color: isActive(l.to) ? '#d4f179' : '#fff',
              textDecoration: 'none',
            }}
          >
            {l.label}
          </Link>
        ))}
        <Link
          to="/contact"
          style={{
            marginTop: 16,
            background: '#d4f179',
            color: '#000042',
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: '1px',
            padding: '14px 28px',
            textDecoration: 'none',
            textTransform: 'uppercase',
          }}
        >
          Book a Meeting →
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
