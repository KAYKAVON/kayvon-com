import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical: string
  ogType?: string
  jsonLD?: object | object[]
}

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Kayvon Kay',
  jobTitle: 'Revenue Architect',
  url: 'https://kayvon.com',
  sameAs: ['https://salesfit.ai', 'https://www.linkedin.com/in/kayvonkay'],
  description:
    'Kayvon Kay is the Revenue Architect — helping 7-9 figure operators turn revenue into compounding wealth through revenue mechanics, AI-powered systems, and capital flow architecture.',
}

export default function SEO({ title, description, canonical, ogType = 'website', jsonLD }: SEOProps) {
  useEffect(() => {
    document.title = title

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
      if (!el) {
        el = document.createElement('link')
        el.setAttribute('rel', rel)
        document.head.appendChild(el)
      }
      el.setAttribute('href', href)
    }

    const setScript = (id: string, content: object | object[]) => {
      let el = document.querySelector(`#${id}`) as HTMLScriptElement | null
      if (!el) {
        el = document.createElement('script')
        el.setAttribute('type', 'application/ld+json')
        el.setAttribute('id', id)
        document.head.appendChild(el)
      }
      el.textContent = JSON.stringify(content)
    }

    setMeta('name', 'description', description)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
    setMeta('property', 'og:type', ogType)
    setLink('canonical', canonical)
    setScript('json-ld-person', PERSON_SCHEMA)

    if (jsonLD) {
      setScript('json-ld-page', jsonLD)
    }
  }, [title, description, canonical, ogType, jsonLD])

  return null
}
