export const navItems = [
  { label: 'A Animal', href: '#diferenciais' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Aulas', href: '#aulas' },
  { label: 'Coaches', href: '#coaches' },
  { label: 'Planos', href: '#planos' },
  { label: 'Unidades', href: '#unidades' },
  { label: 'Contato', href: '#contato' },
] as const

import { WHATSAPP_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL } from '@/config'

export { WHATSAPP_URL, INSTAGRAM_URL, GOOGLE_MAPS_URL }

import { MEDIA } from '@/lib/media'

export const faqItems = [
  {
    question: 'Nunca treinei. Posso começar?',
    answer:
      'Sim! A Animal recebe pessoas de todos os níveis de condicionamento. Nossos coaches estão preparados para te acompanhar desde o primeiro dia, respeitando seu ritmo e seus objetivos.',
  },
  {
    question: 'Como funciona a aula experimental?',
    answer:
      'Você agenda um horário, conhece a estrutura, os coaches e a comunidade. É a melhor forma de sentir a energia da Animal antes de decidir.',
  },
  {
    question: 'Qual a diferença entre Cross e musculação?',
    answer:
      'A musculação foca em hipertrofia e força com exercícios guiados. O Cross combina intensidade, variedade e treinos funcionais em grupo. Na Animal, você pode escolher o seu jeito — ou fazer os dois.',
  },
  {
    question: 'Como funcionam os planos?',
    answer:
      'Temos o plano LIFE, com 3 check-ins por semana, e o plano TOP, com check-ins livres. Fale com a nossa equipe para descobrir qual combina com a sua rotina.',
  },
  {
    question: 'Qual unidade devo escolher?',
    answer:
      'Escolha a unidade mais próxima de você ou da sua rotina. Todas as unidades Animal oferecem a mesma estrutura e qualidade de acompanhamento.',
  },
] as const

export type UnitData = {
  id: string
  name: string
  slug: string
  address: string
  image: string
  mapsUrl: string
  whatsappUrl: string
  pending: boolean
}

export const units: UnitData[] = [
  {
    id: 'barcelona',
    name: 'Barcelona',
    slug: 'barcelona',
    address: '[Endereço pendente — em breve]',
    image: MEDIA.units.barcelona,
    mapsUrl: GOOGLE_MAPS_URL,
    whatsappUrl: WHATSAPP_URL,
    pending: true,
  },
  {
    id: 'nova-gerti',
    name: 'Nova Gerti',
    slug: 'nova-gerti',
    address: '[Endereço pendente — em breve]',
    image: MEDIA.units.novaGerti,
    mapsUrl: GOOGLE_MAPS_URL,
    whatsappUrl: WHATSAPP_URL,
    pending: true,
  },
]

export type CoachPlaceholder = {
  id: string
  pending: boolean
}

export const coachPlaceholders: CoachPlaceholder[] = [
  { id: 'coach-1', pending: true },
  { id: 'coach-2', pending: true },
  { id: 'coach-3', pending: true },
  { id: 'coach-4', pending: true },
]
