import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SEO from '../components/SEO'

export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    revenue: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'contact' }),
      })
      if (res.ok) navigate('/thank-you')
    } catch {
      navigate('/thank-you')
    } finally {
      setSubmitting(false)
    }
  }

  const darkInput: React.CSSProperties = {
    width: '100%',
    background: 'rgba(0,0,66,0.12)',
    border: '1px solid rgba(0,0,66,0.2)',
    color: '#000042',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 15,
    fontWeight: 400,
    padding: '14px 16px',
    outline: 'none',
  }

  return (
    <>
      <SEO
        title="Work With Kayvon Kay | Book a Private Analysis"
        description="Apply to work with Kayvon Kay, The Revenue Architect. Private engagements for 7-9 figure operators ready to convert performance into compounding wealth."
        canonical="https://kayvon.com/contact"
      />

      {/* HERO */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 80,
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
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span className="eyebrow">Work Together</span>
          <h1
            style={{
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              fontWeight: 900,
              letterSpacing: '-2.5px',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: 28,
            }}
          >
            Ready to Architect
            <br />
            <span style={{ color: '#d4f179' }}>Your Wealth?</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.55)',
              maxWidth: 580,
            }}
          >
            This work is designed for operators who are already winning
            but know their current structure will not create real wealth.
            I personally review every submission.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section style={{ background: '#d4f179', padding: '100px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="contact-row">
              <input
                required
                placeholder="First Name"
                value={formData.firstName}
                onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                style={darkInput}
              />
              <input
                required
                placeholder="Last Name"
                value={formData.lastName}
                onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                style={darkInput}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="contact-row">
              <input
                required
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                style={darkInput}
              />
              <input
                placeholder="Phone Number"
                value={formData.phone}
                onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                style={darkInput}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="contact-row">
              <input
                placeholder="Company Name"
                value={formData.company}
                onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                style={darkInput}
              />
              <input
                placeholder="Company Website"
                value={formData.website}
                onChange={e => setFormData(p => ({ ...p, website: e.target.value }))}
                style={darkInput}
              />
            </div>
            <select
              value={formData.revenue}
              onChange={e => setFormData(p => ({ ...p, revenue: e.target.value }))}
              style={{
                ...darkInput,
                color: formData.revenue ? '#000042' : 'rgba(0,0,66,0.4)',
              }}
            >
              <option value="" disabled>Annual Revenue</option>
              <option value="$15K">$15K</option>
              <option value="$25K">$25K</option>
              <option value="$50K">$50K</option>
              <option value="$75K">$75K</option>
              <option value="$100K+">$100K+</option>
            </select>
            <textarea
              required
              placeholder="How can I help you?"
              value={formData.message}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
              rows={6}
              style={{ ...darkInput, resize: 'vertical' }}
            />
            <button
              type="submit"
              disabled={submitting}
              style={{
                background: '#000042',
                color: '#d4f179',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '18px 36px',
                border: 'none',
                cursor: submitting ? 'not-allowed' : 'pointer',
                alignSelf: 'flex-start',
                opacity: submitting ? 0.7 : 1,
              }}
            >
              {submitting ? 'Sending...' : 'Submit →'}
            </button>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .contact-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
