import { useEffect } from 'react'
import { SITE_URL, INSTAGRAM_URL } from '@/config'
import { units } from '@/lib/site-data'

type StructuredDataProps = {
  variant?: 'organization' | 'unit'
  unitSlug?: string
}

export function StructuredData({ variant = 'organization', unitSlug }: StructuredDataProps) {
  useEffect(() => {
    const scriptId = 'ld-json-structured-data'
    document.getElementById(scriptId)?.remove()

    let data: Record<string, unknown>

    if (variant === 'unit' && unitSlug) {
      const unit = units.find((u) => u.slug === unitSlug)
      if (!unit) return
      data = {
        '@context': 'https://schema.org',
        '@type': 'SportsActivityLocation',
        name: `Animal Fitness Club - ${unit.name}`,
        url: `${SITE_URL}/unidades/${unit.slug}`,
        image: unit.image,
        parentOrganization: {
          '@type': 'SportsActivityLocation',
          name: 'Animal Fitness Club',
          url: SITE_URL,
        },
      }
    } else {
      data = {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'SportsActivityLocation'],
        name: 'Animal Fitness Club',
        description:
          'Treinamento de verdade, coaches especializados e uma comunidade que transforma academia em um dos melhores momentos do seu dia.',
        url: SITE_URL,
        image: `${SITE_URL}/og-image.png`,
        sameAs: [INSTAGRAM_URL],
        areaServed: { '@type': 'City', name: 'São Caetano do Sul' },
        department: units.map((u) => ({
          '@type': 'SportsActivityLocation',
          name: `Animal Fitness Club - ${u.name}`,
          url: `${SITE_URL}/unidades/${u.slug}`,
        })),
      }
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    script.id = scriptId
    document.head.appendChild(script)

    return () => {
      document.getElementById(scriptId)?.remove()
    }
  }, [variant, unitSlug])

  return null
}
