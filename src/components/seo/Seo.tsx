import { useEffect } from 'react'
import { SITE_URL } from '@/config'

type SeoProps = {
  title: string
  description: string
  path: string
  image?: string
  type?: string
}

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export function Seo({
  title,
  description,
  path,
  image = '/og-image.png',
  type = 'website',
}: SeoProps) {
  const fullUrl = `${SITE_URL}${path}`
  const fullImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  useEffect(() => {
    document.title = title
    upsertMeta('name', 'description', description)
    upsertLink('canonical', fullUrl)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:url', fullUrl)
    upsertMeta('property', 'og:image', fullImage)
    upsertMeta('property', 'og:site_name', 'Animal Fitness Club')
    upsertMeta('property', 'og:locale', 'pt_BR')
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertMeta('name', 'twitter:image', fullImage)
  }, [title, description, fullUrl, fullImage, type])

  return null
}
