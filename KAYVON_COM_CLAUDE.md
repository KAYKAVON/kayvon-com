# KAYVON.COM — FULL BUILD BRIEF
## Claude Code Mission — Zero Human Intervention

---

## LOCAL PROJECT PATH
```
C:\Users\GamerTech\OneDrive\Desktop\Claud Projects\KayvonCom
```

## STACK
- React + TypeScript + Vite
- Node.js + Express (SSR for SEO)
- Railway deployment
- Tailwind CSS (or inline styles — match existing SalesFit pattern)
- OnceHub booking embed

## GITHUB REPO
Create new repo: KAYKAVON/kayvon-com

---

## STEP 0 — BEFORE WRITING A SINGLE LINE OF CODE

Read the full brief below. Understand the positioning, the design system, the copy, and the page architecture before touching anything. This site must feel like it was built by a world-class studio — not an AI. Every detail matters.

---

## THE POSITIONING — NON-NEGOTIABLE

**Kayvon Kay is the Revenue Architect.**
**The result of Revenue Architecture is wealth.**

This is not a consulting site. This is not a coaching site. This is the online presence of someone who walks into 7, 8, and 9-figure operating environments and rebuilds the structure underneath what already works — so revenue compounds into wealth.

The site must feel like:
- You are already successful and you are choosing whether to work with him
- He is selective — not everyone qualifies
- The work is specific, structural, and proven — not motivational
- Authority through specificity, not hype

The site must NOT feel like:
- A marketing funnel
- A course creator or influencer
- Generic consultant with stock photos
- AI-generated template

---

## BRAND SYSTEM — EXACT SPECIFICATIONS

### Colors
- **Trust (primary dark):** `#000042` — deep navy, used for backgrounds, text
- **Wealth (primary accent):** `#d4f179` — lime yellow-green, used for CTAs, highlights, accents
- **White:** `#ffffff` — used for text on dark backgrounds
- **Muted text:** `rgba(255,255,255,0.5)` on dark, `rgba(0,0,66,0.5)` on lime
- **Subtle borders:** `rgba(212,241,121,0.1)` on dark backgrounds
- **Card hover tint:** `rgba(212,241,121,0.04)`

### Typography
- **Font:** Helvetica Neue, Helvetica, Arial, sans-serif
- **Display headings:** weight 900, letter-spacing -2px, tight line-height 1.0-1.1
- **Section headings:** weight 800, letter-spacing -0.5px
- **Body:** weight 400, line-height 1.75, color rgba(255,255,255,0.55)
- **Labels/eyebrows:** weight 700, letter-spacing 3px, font-size 10-11px, ALL CAPS
- **Nav links:** weight 500, letter-spacing 0.3px, font-size 13px

### Logo
Build the KV mark as inline SVG:
```svg
<svg viewBox="0 0 38 38" fill="none">
  <path d="M4 6h8l7 13L13 32H4l7-13L4 6z" fill="#d4f179"/>
  <path d="M19 6l7 13-7 13h7l11-13L26 6h-7z" fill="#d4f179"/>
</svg>
```
Wordmark: "KAYVON KAY" in Helvetica Neue Bold, letter-spacing 3px, color #d4f179

### Design Principles
- **No gradients** — flat surfaces only
- **No shadows** — depth through color contrast and layering
- **No stock images** — typography and geometry create visual interest
- **Cursor spotlight** — radial glow follows mouse globally across every dark section
- **Card hover glow** — each interactive card has a local spotlight that tracks mouse position inside the card
- **Giant background letterforms** — oversized "K" or "KV" at 4-8% opacity create depth without imagery
- **Razor-sharp edges** — no border-radius on primary elements, subtle radius (4px max) on secondary
- **1px borders** — `rgba(212,241,121,0.1)` on dark, never thick borders

---

## GLOBAL INTERACTIONS — BUILD THESE ON EVERY PAGE

### 1. Global Cursor Spotlight
Every dark section gets a global cursor glow:
```javascript
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
```
The glow element:
```css
position: fixed;
width: 600px;
height: 600px;
border-radius: 50%;
background: radial-gradient(circle, rgba(212,241,121,0.06) 0%, transparent 70%);
transform: translate(-50%, -50%);
pointer-events: none;
z-index: 0;
transition: none;
```

### 2. Card Local Glow
Every interactive card (misfire cards, proof cards, service cards):
```javascript
card.addEventListener('mousemove', e => {
  const r = card.getBoundingClientRect();
  glowEl.style.left = (e.clientX - r.left) + 'px';
  glowEl.style.top = (e.clientY - r.top) + 'px';
});
card.addEventListener('mouseenter', () => glowEl.style.opacity = '1');
card.addEventListener('mouseleave', () => glowEl.style.opacity = '0');
```

### 3. Nav behavior
- Transparent on page load
- On scroll past 80px: background becomes `rgba(0,0,66,0.95)` with backdrop-filter blur
- Active page link color: `#d4f179`
- All other links: `rgba(255,255,255,0.5)` → hover `#fff`

---

## NAVIGATION — ALL PAGES

```
[KV mark + KAYVON KAY wordmark]    Home  About  Speaker  Articles  Contact    [BOOK A MEETING →]
```

- Logo links to /
- BOOK A MEETING button: background #d4f179, color #000042, font-weight 800, letter-spacing 1px, padding 11px 22px, no border-radius
- Mobile: hamburger menu, full-screen overlay in #000042 with lime links

---

## PAGE 1 — HOME (/)

### Hero Section
Full viewport height. Dark background #000042. Two column grid (55% left / 45% right).

**Left column:**
```
[eyebrow line + "THE REVENUE ARCHITECT"]

I Am The Revenue
Architect.
The Result
Is Wealth.

[body text]
$375M+ in real revenue. For operators who already win
and are ready to build something that compounds.

[CTA buttons]
[BOOK A MEETING →]    [See how it works ↓]
```

H1 font-size: 68px, weight 900, letter-spacing -3px, line-height 1.0
"The Result Is Wealth." — color #d4f179

**Right column:**
Dark panel with subtle lime border-left. Giant "K" at 4% opacity. Four stat cards stacked:
- $375M+ / IN CLIENT REVENUE GENERATED
- 101 / SALES TEAMS BUILT
- 20 YRS / IN HIGH-PERFORMANCE REVENUE ARCHITECTURE  
- #1 / AMAZON BESTSELLER — PITCH ME

Each stat card: hover triggers local glow + subtle background shift

### Trust Bar
Below hero. Full width. Scrolling marquee of publication logos (text-based, not images):
FORBES · ENTREPRENEUR · FAST COMPANY · INC. · APPLE PODCASTS TOP 10

### The Problem Section
Background: #000042

```
[eyebrow] THE REALITY

You've Built a Winning Machine.
Now It's Time to Make It Compound.

[body]
Revenue does not automatically become wealth. At scale, money gets
trapped inside strategies, systems, and structures built to perform —
not multiply. Growth slows because the architecture was never designed
to compound. The real problem is throughput.

This is not a repair. It is an upgrade.

[CTA] BOOK A MEETING →
```

### The Three Leverage Points
Background: #d4f179. Three columns. The "process" section.

```
[eyebrow in navy] THE WORK

How Revenue Becomes Wealth

[3 columns]

01                    02                    03
Revenue               AI-Powered            Capital
Leverage              Systems               Flow

I identify where      I replace manual      I design capital
revenue is capped     effort with systems   pathways so money
and restructure it    that move money       compounds instead
for scale.            faster.               of sitting idle.

[key outcomes — 3 bullets each]
```

Giant "KV" at 5% opacity in background.

### For Operators Who Already Win
Background: #000042. This section qualifies the reader.

```
[eyebrow] THIS IS FOR

Operators Who Already Win.
(And know the next level won't come from trying harder.)

[4 qualification statements — each as a card with hover glow]

✓ You run a profitable machine.
  Revenue is consistent. The ceiling is the problem.

✓ You're not chasing survival.
  You're expanding leverage, identity, and optionality.

✓ You think in systems, not tactics.
  Speed, architecture, and throughput matter most.

✓ You're done optimizing income.
  You're converting performance into compounding wealth.
```

### Social Proof
Background: #000042. One testimonial, large and prominent.

```
"I've been a marketer for over two decades. Working with Kayvon
was the exact amplifier I needed — a rare and perfect blend of
sales and operational excellence."

— Mike Dillard, Mike Dillard Marketing
```

### Final CTA
Background: #d4f179.

```
Ready to Architect Your Wealth?

This work is designed for operators who are already winning
but know their current structure will not create real wealth.

[BOOK A PRIVATE ANALYSIS →]

This is not consulting. It is wealth architecture.
```

---

## PAGE 2 — ABOUT (/about)

### Hero
```
[eyebrow] THE ARCHITECT

I Saw a Gap Between
Revenue and Wealth.
```
Two column: copy left, large stat block right.

**Copy:**
"I spent years in rooms where 7, 8, and 9-figure deals were being made. Operators were generating massive revenue, yet their businesses remained inefficient, complex, and cash heavy. They were earning well. But they were not building real, transferable wealth.

The problem was not motivation. It was architecture.

So I stopped chasing tactics and started focusing on the structure beneath the business. How revenue enters. How it flows. How it compounds. That is the work I do today."

### Three Focus Areas
Same layout as home leverage points but in more detail:

**Revenue Mechanics**
Restructuring offers, pricing, and sales systems so revenue converts cleanly into profit.
Key outcomes: Higher margins per transaction · Decoupled revenue from time · Scalable offer architecture

**AI-Leveraged Systems**
Automating decision flow so scale does not increase operational complexity.
Key outcomes: Reduced operational friction · Faster cash conversion cycles · Elimination of manual bottlenecks

**Capital Flow**
Structuring cash, credit, and financing so growth is funded intelligently and wealth becomes transferable.
Key outcomes: Optimized cash reserves · Strategic growth funding · Accelerated wealth compounding

### Philosophy Block
Background: #d4f179

```
Wealth Follows Structure, Not Effort.

Most operators do not lack work ethic. They lack structure.
Money follows the path of least resistance. When systems,
strategy, or capital structures create friction, wealth slows down.

My advantage is not more information. It is the ability to see
where money gets trapped and redesign the path so it moves
faster and compounds.
```

### Credentials
Four large stat displays:

$375M+ · In verified client revenue generated
101 · Sales teams built, restructured, and scaled  
20 YRS · In high-performance operating environments
#1 · Amazon bestseller — Pitch Me: The Art of Effortless Selling

### Beyond the Work
```
Outside of work, I follow the same principles I help clients build.
Clarity. Leverage. Long-term thinking. Disciplined training, time
with family, and designing a life that compounds instead of burns out.
```

### CTA
Same final CTA as home page.

---

## PAGE 3 — SPEAKER (/speaker)

### Hero
```
[eyebrow] KEYNOTE SPEAKER

Stop Inspiring Your Audience.
Start Making Them More Money.

Kayvon speaks to operators, founders, and leadership teams
who care about results. His keynotes deliver clear frameworks
for revenue, systems, and capital — so money moves faster,
friction disappears, and performance compounds.

[BOOK KAYVON TO SPEAK →]    [DOWNLOAD SPEAKER KIT ↓]
```

Speaker kit PDF link: https://cdn.prod.website-files.com/6984d5c05a53301643b3fb8d/69feafd697406c80a61ecd2a_V2%20Speaker%20Kit%20(2).pdf

### What the Audience Gets
Three columns with hover glow cards:

**An Upgraded Mental Model**
A clearer way to understand revenue, systems, and capital so decisions feel lighter and faster.

**Actionable Leverage Points**
Practical ways to increase profit inside an existing business without adding complexity.

**Conviction Through Clarity**
A sharper understanding of what matters most and what can be ignored.

### The Keynotes
Three keynote cards. Each expandable or full display. Dark cards with lime accent on hover.

**01 — From Revenue to Wealth: The Architecture of Money Movement**
Why Revenue Doesn't Equal Wealth. Many operators believe more revenue will eventually solve everything. It rarely does. This talk explains why successful businesses still feel constrained and how wealth is created through structure, not effort.
Ideal audience: Founders, operators, private equity backed teams, 7 to 9 figure executives.

**02 — Money Movement: How to Make Money Move Faster Without Adding Complexity**
Money rarely stalls because of demand. It stalls because of friction. This talk reveals the hidden choke points inside businesses that slow growth. Leaders leave with a clear framework for identifying where money gets stuck.
Ideal audience: Operators, COOs, CFOs, growth stage leadership teams.

**03 — The Comprehension Economy: Why Clarity Is the New Competitive Advantage**
Markets reward clarity. Leaders who simplify complexity move faster, execute better, and build stronger trust. This talk explores why clarity has become the most valuable leadership skill.
Ideal audience: Executive teams, marketing leaders, brand and strategy leaders.

### Testimonial
Same Mike Dillard quote.

### Speaker Booking Form
OnceHub embed OR contact form with fields:
- First name, Last name
- Email, Phone
- Company, Website
- Annual Revenue (dropdown: $15K / $25K / $50K / $75K / $100K+)
- How can I help you? (textarea)
- Submit button: background #000042, color #d4f179

### FAQ Section
Accordion-style. 5-6 common speaker booking questions. Build with smooth expand/collapse animation.

---

## PAGE 4 — ARTICLES (/articles)

### Hero
```
[eyebrow] ARTICLES

Intelligence for Operators
Who Think in Systems.
```

### Blog Grid
3-column card grid. Each card:
- Category tag (lime, small caps)
- Title (weight 800)
- Excerpt (2-3 lines, muted)
- Read time
- Date
- Hover: card border goes lime, subtle glow

**Existing articles to display:**
1. Why Fixing Bad Credit Is Really About Rebuilding Financial Identity and Business Leverage
2. Why Successful Founders Still Feel Anxious: The Hidden Ceiling Blocking Real Business Growth
3. Buying a Business vs Starting One: The Smarter Path to Real Business Growth

### Individual Article Page (/articles/[slug])
- Full article layout
- Author block: Kayvon Kay, The Revenue Architect, kayvon.com
- Related articles at bottom
- CTA block mid-article and bottom: "Ready to architect your wealth? → Book a private analysis"
- Full SEO: meta title, meta description, canonical, Article JSON-LD schema, Speakable schema on answer blocks

---

## PAGE 5 — CONTACT (/contact)

### Hero
```
[eyebrow] WORK TOGETHER

Ready to Architect
Your Wealth?

This work is designed for operators who are already winning
but know their current structure will not create real wealth.
I personally review every submission.
```

### Contact Form
Fields (matching current site):
- First name, Last name
- Email, Phone Number
- Company Name, Company Website
- Annual Revenue (dropdown)
- How can I help you? (textarea)
- [SUBMIT →] button

Form submission: POST to a simple Express endpoint that sends email notification. No third-party form service needed.

Background: #d4f179 for the form section (matching current design)

### OnceHub Booking
Below the form OR as a tab:
"Prefer to book directly? Schedule a call →"
Embed OnceHub iframe.

---

## PAGE 6 — BOOKING CONFIRMATION (/thank-you)

```
[KV mark large, centered]

Your submission has been received.

Kayvon personally reviews every inquiry.
You'll hear back within 24 hours.

In the meantime:

[Read the Articles →]    [Download the Speaker Kit →]
```

Background: #000042. Simple, clean, no clutter.

---

## SEO REQUIREMENTS — EVERY PAGE

Every page must have:

```html
<title>[Page Title] | Kayvon Kay — The Revenue Architect</title>
<meta name="description" content="[unique per page]">
<link rel="canonical" href="https://kayvon.com/[slug]">
<meta property="og:title" content="[title]">
<meta property="og:description" content="[description]">
<meta property="og:url" content="https://kayvon.com/[slug]">
<meta property="og:type" content="website">
```

Person schema on every page:
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kayvon Kay",
  "jobTitle": "Revenue Architect",
  "url": "https://kayvon.com",
  "sameAs": [
    "https://salesfit.ai",
    "https://www.linkedin.com/in/kayvonkay"
  ],
  "description": "Kayvon Kay is the Revenue Architect — helping 7-9 figure operators turn revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture."
}
```

Sitemap at /sitemap.xml covering all 6 pages + all article slugs.
robots.txt: allow all except /thank-you.

---

## FOOTER — ALL PAGES

Two column:
Left: KV mark + "KAYVON KAY" wordmark + "The Revenue Architect" tagline

Right: Two link columns
Quick Links: Home · About · Speaker · Articles · Contact
Legal: Terms of Service · Privacy Policy

Bottom bar: © 2026 Kayvon Kay. All rights reserved.

---

## DEPLOYMENT

- Railway project: kayvon-com
- Domain: use Railway subdomain until kayvon.com is transferred
- Environment variables needed: none for v1 (no database, static content + form endpoint)
- Build command: npm run build
- Start command: node server/index.js

---

## QUALITY GATES — CHECK BEFORE EVERY COMMIT

- [ ] Cursor spotlight glow active on all dark sections
- [ ] Card hover glow tracking mouse position on all interactive cards
- [ ] Nav becomes solid on scroll
- [ ] All CTAs link to /contact or OnceHub embed
- [ ] All 6 pages render with correct meta tags
- [ ] Canonical URLs are self-referencing (never homepage)
- [ ] Person JSON-LD schema on every page
- [ ] Mobile responsive — test at 375px, 768px, 1280px
- [ ] No stock images anywhere
- [ ] No border-radius on primary elements
- [ ] Font weights: only 400, 500, 800, 900
- [ ] Colors: only #000042, #d4f179, white, and their opacity variants
- [ ] No gradients, no shadows, no blur effects
- [ ] Form submission works and sends notification
- [ ] sitemap.xml contains all pages
- [ ] robots.txt correct

---

## WHAT SUCCESS LOOKS LIKE

A VP of Sales, founder, or 8-figure operator lands on kayvon.com and within 3 seconds thinks:

"This person is operating at a completely different level than every other consultant I've seen. I need to get in a room with them."

The site earns that reaction through:
- Typography that commands attention
- Copy that speaks directly to their exact situation
- Interactions that feel crafted, not generated
- Authority through specificity — real numbers, real frameworks, real positioning
- Zero clutter, zero noise, zero template energy

That is the mission. Build it.

---

## BLOG SYSTEM — BUILD THIS AS PART OF THE SITE

### Database
Same architecture as SalesFit. MySQL on Railway.
Table: blog_posts (slug, title, metaTitle, metaDescription, category, pillarCluster, body, heroImageUrl, publishedAt, wordCount)

### Blog URL structure
/articles/[slug]

### Blog listing page
/articles — grid of all posts, filterable by category

### Auto-sitemap
Every new post automatically added to sitemap.xml

---

## KEYWORD UNIVERSE — KAYVON.COM OWNS ALL OF THESE

Every blog post, every page, every meta tag is optimized around this keyword list. Claude Code builds pillar pages and spoke posts for every cluster below.

### FULL KEYWORD LIST
- Fractional CRO
- Fractional Chief Revenue Officer
- Revenue architect
- Revenue architecture
- Business wealth building
- Wealth architecture for operators
- Capital flow strategy
- Scaling a business
- How to scale to 8 figures
- Business scaling strategy
- Sales consulting
- Sales consultant
- Business consultant
- Business expert
- Hire a sales expert
- Revenue operations consulting
- Sales leadership consulting
- Sales management
- Sales manager training
- Sales speaker
- Sales keynote speaker
- Keynote speaker sales
- Sales trainer
- Sales training
- Sales training programs
- How to scale a sales team
- Build a sales team
- Hiring a sales team
- Sales team management
- Sales team structure
- Sales leadership
- How to hire salespeople
- Sales recruitment
- Sales performance consulting
- Revenue growth consulting
- B2B sales consulting
- SaaS sales consulting
- Outsourced CRO
- Part time CRO
- On demand CRO
- Chief Revenue Officer consultant
- Sales process consulting
- Sales strategy consultant
- Revenue strategy
- Business growth consultant
- Scaling revenue
- 7 figure business
- 8 figure business
- Operator wealth
- Founder wealth building
- Business compounding

---

## PILLAR BLOG CLUSTERS — BUILD ALL 5

### PILLAR 1: FRACTIONAL CRO
**Pillar page slug:** /articles/fractional-cro-complete-guide
**Primary keyword:** fractional CRO
**H1:** The Fractional CRO: What They Do, When You Need One, and How to Find the Right One

**Spoke posts (8):**
1. What Is a Fractional CRO and Is It Right for Your Business → fractional-cro-what-is-it
2. Fractional CRO vs Full Time CRO: The Decision Framework → fractional-cro-vs-full-time
3. How Much Does a Fractional CRO Cost → fractional-cro-cost
4. What Does a Fractional CRO Actually Do Day to Day → fractional-cro-responsibilities
5. When to Hire a Fractional CRO vs a Sales Consultant → fractional-cro-vs-sales-consultant
6. How to Evaluate a Fractional CRO Before You Sign → how-to-evaluate-fractional-cro
7. The Fractional CRO Playbook for B2B SaaS Companies → fractional-cro-saas-playbook
8. How a Fractional CRO Scales Revenue Without Adding Headcount → fractional-cro-scale-revenue

### PILLAR 2: REVENUE ARCHITECTURE
**Pillar page slug:** /articles/revenue-architecture-complete-guide
**Primary keyword:** revenue architecture
**H1:** Revenue Architecture: The System That Turns Revenue Into Compounding Wealth

**Spoke posts (8):**
1. What Is Revenue Architecture and Why Most Businesses Don't Have It → what-is-revenue-architecture
2. Revenue vs Wealth: Why High Revenue Operators Still Feel Broke → revenue-vs-wealth-operators
3. How to Build a Revenue Engine That Compounds → how-to-build-revenue-engine
4. The Three Leverage Points That Separate Revenue From Wealth → three-leverage-points-revenue-wealth
5. Revenue Operations vs Revenue Architecture: What's the Difference → revops-vs-revenue-architecture
6. How to Scale Revenue Past $5M Without Adding Complexity → scale-revenue-past-5m
7. Capital Flow Strategy for 7 and 8 Figure Operators → capital-flow-strategy-operators
8. The Throughput Problem: Why Money Gets Trapped in Successful Businesses → throughput-problem-business

### PILLAR 3: SCALING SALES TEAMS
**Pillar page slug:** /articles/how-to-scale-a-sales-team
**Primary keyword:** how to scale a sales team
**H1:** How to Scale a Sales Team: The Complete Playbook for Founders and Revenue Leaders

**Spoke posts (8):**
1. When to Hire Your First Sales Rep → when-to-hire-first-sales-rep
2. How to Build a Sales Team From Scratch → how-to-build-sales-team-from-scratch
3. Sales Team Structure for Growth Stage Companies → sales-team-structure-growth-stage
4. How to Hire Salespeople That Actually Close → how-to-hire-salespeople-that-close
5. Sales Compensation Plans That Attract and Retain Top Performers → sales-compensation-plans-top-performers
6. How to Onboard a Sales Team Without Losing 90 Days → onboard-sales-team-fast
7. Sales Team Management: The Framework That Replaces Micromanagement → sales-team-management-framework
8. How to Scale from 2 to 20 Sales Reps Without Losing Culture → scale-2-to-20-sales-reps

### PILLAR 4: BUSINESS WEALTH BUILDING
**Pillar page slug:** /articles/business-wealth-building-for-operators
**Primary keyword:** business wealth building
**H1:** Business Wealth Building: How Successful Operators Turn Revenue Into Lasting Wealth

**Spoke posts (8):**
1. Why Successful Founders Still Feel Broke: The Revenue Trap → why-successful-founders-feel-broke
2. How to Structure Your Business for Wealth Not Just Revenue → structure-business-for-wealth
3. The Difference Between Earning Well and Building Real Wealth → earning-well-vs-building-wealth
4. Capital Flow: How to Make Money Move Faster in Your Business → capital-flow-business
5. AI-Powered Systems That Create Leverage Without Adding Headcount → ai-systems-business-leverage
6. How to Buy a Business vs Start One: The Wealth Building Math → buy-vs-start-business-wealth
7. Offer Architecture: How to Price for Profit Not Just Revenue → offer-architecture-pricing-profit
8. The Compounding Business: How to Build a Machine That Multiplies → compounding-business-machine

### PILLAR 5: SALES SPEAKER AND TRAINING
**Pillar page slug:** /articles/sales-keynote-speaker-guide
**Primary keyword:** sales keynote speaker
**H1:** What to Look for in a Sales Keynote Speaker (And Why Most Miss the Mark)

**Spoke posts (8):**
1. The Best Sales Keynote Topics That Actually Change How Teams Sell → best-sales-keynote-topics
2. Sales Training vs Sales Keynote: Which One Your Team Actually Needs → sales-training-vs-keynote
3. How to Book a Sales Speaker for Your Revenue Kickoff → book-sales-speaker-revenue-kickoff
4. What Makes a Great Sales Trainer (Beyond Motivation) → what-makes-great-sales-trainer
5. Sales Management Training: What New Managers Actually Need → sales-management-training-new-managers
6. How to Run a Sales Kickoff That Changes Behavior Not Just Energy → sales-kickoff-changes-behavior
7. The ROI of Investing in Sales Training for Your Team → roi-sales-training-team
8. Sales Leadership Development: Building Managers Who Multiply Revenue → sales-leadership-development

---

## CROSS-PROPERTY LINKING RULES — MANDATORY

Every blog post on kayvon.com must follow these linking rules:

### Link to SalesFit.ai when:
- Mentioning sales assessment, behavioral assessment, hiring salespeople, evaluating candidates, sales rep performance, quota attainment, DISC alternatives
- Anchor text examples: "sales team assessment", "behavioral assessment tool", "SalesFit's assessment platform"
- Link destination: https://salesfit.ai

### Link to TheSalesConnection.com when:
- Mentioning building a sales team, recruiting salespeople, sales staffing, outsourced sales, finding sales reps
- Anchor text examples: "The Sales Connection", "sales recruitment", "building a sales team"
- Link destination: https://thesalesconnection.com

### Internal links:
- Every spoke links back to its pillar within first 200 words
- Every spoke links to 2 other spokes in the same cluster
- Cross-cluster links where topic overlap is natural

### Author bio on every post:
"Kayvon Kay is the Revenue Architect — helping 7 to 9 figure operators turn revenue into compounding wealth. He is the founder of SalesFit.ai, the Sales Team Intelligence Platform, and The Sales Connection, a high-performance sales recruitment firm. He has built 101 sales teams and generated $375M+ in client revenue across two decades."

---

## BLOG POST FORMAT — MANDATORY ON EVERY POST

Every post must follow this exact structure:

1. Category tag + H1
2. Author block: Kayvon Kay | Revenue Architect | kayvon.com
3. "The short answer:" block — 2-3 sentences directly answering the title
4. Key Takeaways (5-6 bullets)
5. H2 sections (4-6, at least one phrased as a question)
6. Data table or comparison (at least one per post)
7. Named real-world example or scenario
8. Mid-article CTA: "Ready to architect your revenue? Book a private analysis → kayvon.com/contact"
9. FAQ section (5 questions)
10. Related articles (3 from same cluster)
11. Bottom CTA: "Book a Private Wealth Architecture Analysis → kayvon.com/contact"
12. Cross-property links wired per rules above

Minimum word count: 2,000 words per post
Voice: Direct. No hedging. First person. Challenges conventional wisdom.
Specific numbers always: "101 teams" not "many teams" / "$375M+" not "significant revenue"

---

## PUBLISHING SEQUENCE

Build in this order:
1. All 5 pillar pages first
2. Then all spoke posts cluster by cluster
3. Pillar 1 (Fractional CRO) first — highest search volume, fastest authority
4. Pillar 3 (Scaling Sales Teams) second — bridges kayvon.com to SalesFit
5. Pillar 5 (Speaker/Training) third — supports the speaker page
6. Pillar 2 (Revenue Architecture) fourth
7. Pillar 4 (Business Wealth) fifth

Total: 5 pillar pages + 40 spoke posts = 45 new pages of topical authority

