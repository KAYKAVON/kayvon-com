import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import CardGlow from '../components/CardGlow'

const SPEAKER_KIT_URL =
  'https://cdn.prod.website-files.com/6984d5c05a53301643b3fb8d/69feafd697406c80a61ecd2a_V2%20Speaker%20Kit%20(2).pdf'

const audienceCards = [
  {
    title: 'An Upgraded Mental Model',
    body: 'A clearer way to understand revenue, systems, and capital so decisions feel lighter and faster.',
  },
  {
    title: 'Actionable Leverage Points',
    body: 'Practical ways to increase profit inside an existing business without adding complexity.',
  },
  {
    title: 'Conviction Through Clarity',
    body: 'A sharper understanding of what matters most and what can be ignored.',
  },
]

const keynotes = [
  {
    num: '01',
    title: 'From Revenue to Wealth: The Architecture of Money Movement',
    subtitle: 'Why Revenue Doesn\'t Equal Wealth',
    body: 'Many operators believe more revenue will eventually solve everything. It rarely does. This talk explains why successful businesses still feel constrained and how wealth is created through structure, not effort.',
    audience: 'Founders, operators, private equity backed teams, 7 to 9 figure executives.',
  },
  {
    num: '02',
    title: 'Money Movement: How to Make Money Move Faster Without Adding Complexity',
    subtitle: 'Find the Hidden Friction',
    body: 'Money rarely stalls because of demand. It stalls because of friction. This talk reveals the hidden choke points inside businesses that slow growth. Leaders leave with a clear framework for identifying where money gets stuck.',
    audience: 'Operators, COOs, CFOs, growth stage leadership teams.',
  },
  {
    num: '03',
    title: 'The Comprehension Economy: Why Clarity Is the New Competitive Advantage',
    subtitle: 'Markets Reward Clarity',
    body: 'Markets reward clarity. Leaders who simplify complexity move faster, execute better, and build stronger trust. This talk explores why clarity has become the most valuable leadership skill.',
    audience: 'Executive teams, marketing leaders, brand and strategy leaders.',
  },
]

const faqs = [
  {
    q: 'What types of events does Kayvon speak at?',
    a: 'Kayvon speaks at corporate conferences, private equity portfolio company events, CEO roundtables, industry summits, and private leadership retreats. His ideal audience is operators, founders, and executives who are already winning and want to move to the next level.',
  },
  {
    q: 'How far in advance should we book?',
    a: 'For best availability, inquire at least 8-12 weeks in advance. For major events with significant attendance, 3-6 months is recommended. Rush bookings within 4 weeks are accommodated when the schedule allows.',
  },
  {
    q: 'Does Kayvon customize his keynotes for each event?',
    a: 'Yes. Every engagement includes a pre-event call to understand the audience, the objectives, and the outcomes that matter most to the organizer. Kayvon customizes the framework and examples to make the talk immediately relevant.',
  },
  {
    q: 'What are the speaking fees?',
    a: 'Speaking fees vary based on event type, location, and engagement scope. Submit a booking inquiry through the form below and you will receive detailed information within 24 hours.',
  },
  {
    q: 'Is a virtual keynote available?',
    a: 'Yes. Kayvon is available for high-quality virtual keynotes for distributed teams, global conferences, and hybrid events. Virtual engagements are delivered with the same preparation and customization as in-person.',
  },
  {
    q: 'What does the speaker kit include?',
    a: 'The speaker kit includes Kayvon\'s full biography, headshots, keynote descriptions, technical requirements, and testimonials. Download it using the button above or request a custom media package through the booking form.',
  },
]

export default function Speaker() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
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
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, source: 'speaker' }),
      })
      if (res.ok) setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#fff',
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
    fontSize: 15,
    fontWeight: 400,
    padding: '14px 16px',
    outline: 'none',
  }

  return (
    <>
      <SEO
        title="Book Kayvon Kay as a Keynote Speaker | Revenue Architecture"
        description="Kayvon Kay speaks to founders, operators, and leadership teams about revenue mechanics, AI-powered systems, and capital flow. Book him for your next event."
        canonical="https://kayvon.com/speaker"
      />

      {/* HERO */}
      <section
        style={{
          background: '#000042',
          paddingTop: 148,
          paddingBottom: 100,
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
          <span className="eyebrow">Keynote Speaker</span>
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
            Stop Inspiring Your Audience.
            <br />
            <span style={{ color: '#d4f179' }}>Start Making Them More Money.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              fontWeight: 400,
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.55)',
              marginBottom: 48,
              maxWidth: 580,
            }}
          >
            Kayvon speaks to operators, founders, and leadership teams who care
            about results. His keynotes deliver clear frameworks for revenue,
            systems, and capital — so money moves faster, friction disappears,
            and performance compounds.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#booking-form"
              style={{
                background: '#d4f179',
                color: '#000042',
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: '1px',
                padding: '16px 28px',
                textDecoration: 'none',
                textTransform: 'uppercase',
                display: 'inline-block',
              }}
            >
              Book Kayvon to Speak →
            </a>
            <a
              href={SPEAKER_KIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: '1px solid rgba(212,241,121,0.3)',
                color: 'rgba(255,255,255,0.7)',
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: '0.5px',
                padding: '16px 28px',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Download Speaker Kit ↓
            </a>
          </div>
        </div>
      </section>

      {/* WHAT THE AUDIENCE GETS */}
      <section style={{ background: '#000042', padding: '100px 40px', borderTop: '1px solid rgba(212,241,121,0.1)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="eyebrow">What Your Audience Gets</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: 56,
            }}
          >
            Results, Not Inspiration
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }} className="audience-grid">
            {audienceCards.map(c => (
              <CardGlow
                key={c.title}
                hoverBorder
                style={{
                  border: '1px solid rgba(212,241,121,0.1)',
                  padding: '40px 36px',
                  cursor: 'default',
                }}
              >
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: '-0.5px',
                    color: '#fff',
                    marginBottom: 16,
                  }}
                >
                  {c.title}
                </h3>
                <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(255,255,255,0.5)' }}>
                  {c.body}
                </p>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* THE KEYNOTES */}
      <section style={{ background: '#d4f179', padding: '100px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <span className="eyebrow-dark">The Keynotes</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#000042',
              marginBottom: 56,
            }}
          >
            Three Frameworks That Move Rooms
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {keynotes.map(k => (
              <CardGlow
                key={k.num}
                limeGlow
                style={{
                  background: 'rgba(0,0,66,0.06)',
                  border: '1px solid rgba(0,0,66,0.08)',
                  padding: '40px 44px',
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, alignItems: 'start' }} className="keynote-inner">
                  <div
                    style={{
                      fontSize: 'clamp(40px, 5vw, 64px)',
                      fontWeight: 900,
                      letterSpacing: '-3px',
                      color: 'rgba(0,0,66,0.15)',
                      lineHeight: 1,
                    }}
                  >
                    {k.num}
                  </div>
                  <div>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(0,0,66,0.4)', marginBottom: 10 }}>
                      {k.subtitle}
                    </p>
                    <h3
                      style={{
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        fontWeight: 900,
                        letterSpacing: '-0.5px',
                        color: '#000042',
                        marginBottom: 16,
                        lineHeight: 1.2,
                      }}
                    >
                      {k.title}
                    </h3>
                    <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(0,0,66,0.6)', marginBottom: 20 }}>
                      {k.body}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 500, color: 'rgba(0,0,66,0.5)' }}>
                      <span style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', fontSize: 11 }}>Ideal audience: </span>
                      {k.audience}
                    </p>
                  </div>
                </div>
              </CardGlow>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: '#000042', padding: '100px 40px', borderBottom: '1px solid rgba(212,241,121,0.1)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 48, fontWeight: 900, color: 'rgba(212,241,121,0.15)', lineHeight: 1, marginBottom: 32 }}>"</div>
          <blockquote
            style={{
              fontSize: 'clamp(18px, 2.2vw, 26px)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: 'rgba(255,255,255,0.85)',
              letterSpacing: '-0.3px',
              marginBottom: 40,
            }}
          >
            I've been a marketer for over two decades. Working with Kayvon was the exact amplifier
            I needed — a rare and perfect blend of sales and operational excellence.
          </blockquote>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#d4f179' }}>
            — Mike Dillard, Mike Dillard Marketing
          </p>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section id="booking-form" style={{ background: '#d4f179', padding: '100px 40px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <span className="eyebrow-dark">Book Kayvon</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#000042',
              marginBottom: 48,
            }}
          >
            Speaker Booking Inquiry
          </h2>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <p style={{ fontSize: 24, fontWeight: 800, color: '#000042', marginBottom: 16 }}>Inquiry received.</p>
              <p style={{ fontSize: 16, color: 'rgba(0,0,66,0.6)' }}>Kayvon reviews every inquiry personally. You'll hear back within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <input
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={e => setFormData(p => ({ ...p, firstName: e.target.value }))}
                  style={inputStyle}
                />
                <input
                  required
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={e => setFormData(p => ({ ...p, lastName: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle}
                />
                <input
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="form-row">
                <input
                  placeholder="Company"
                  value={formData.company}
                  onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                  style={inputStyle}
                />
                <input
                  placeholder="Company Website"
                  value={formData.website}
                  onChange={e => setFormData(p => ({ ...p, website: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <select
                value={formData.revenue}
                onChange={e => setFormData(p => ({ ...p, revenue: e.target.value }))}
                style={{ ...inputStyle, color: formData.revenue ? '#fff' : 'rgba(255,255,255,0.4)' }}
              >
                <option value="" disabled>Annual Revenue</option>
                <option value="$15K">$15K</option>
                <option value="$25K">$25K</option>
                <option value="$50K">$50K</option>
                <option value="$75K">$75K</option>
                <option value="$100K+">$100K+</option>
              </select>
              <textarea
                placeholder="Tell us about your event — audience size, date, location, and what you're hoping to achieve."
                value={formData.message}
                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                rows={5}
                style={{ ...inputStyle, resize: 'vertical' }}
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
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#000042', padding: '100px 40px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <span className="eyebrow">FAQ</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#fff',
              marginBottom: 48,
            }}
          >
            Speaker Booking Questions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderTop: '1px solid rgba(212,241,121,0.1)',
                  ...(i === faqs.length - 1 ? { borderBottom: '1px solid rgba(212,241,121,0.1)' } : {}),
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '28px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: 24,
                  }}
                >
                  <span
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: openFaq === i ? '#d4f179' : '#fff',
                      letterSpacing: '-0.3px',
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: '#d4f179',
                      fontSize: 20,
                      fontWeight: 400,
                      flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'none',
                      transition: 'transform 0.3s',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? '400px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 400,
                      lineHeight: 1.75,
                      color: 'rgba(255,255,255,0.55)',
                      paddingBottom: 28,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .audience-grid { grid-template-columns: 1fr !important; }
          .keynote-inner { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
