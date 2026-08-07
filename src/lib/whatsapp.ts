import type { CreateLeadInput, Lead } from '@/types'
import { config } from '@/config'
import { units } from '@/lib/site-data'

export type WhatsAppOrigin =
  | 'hero'
  | 'quiz'
  | 'plans'
  | 'units'
  | 'modalities'
  | 'final_cta'
  | 'header'
  | 'floating'
  | 'general'

export type WhatsAppContext = {
  origin?: WhatsAppOrigin
  unit?: string
  modality?: string
  plan?: string
  lead?: CreateLeadInput | Lead
}

function getUnitName(unitId?: string): string {
  if (!unitId) return ''
  return units.find((u) => u.id === unitId)?.name ?? unitId
}

export function generateWhatsAppMessage(context: WhatsAppContext = {}): string {
  const { origin, lead } = context
  const lines: string[] = []

  if (lead) {
    lines.push(
      'Olá! Acabei de fazer o "Descubra Seu Treino Animal" no site e quero conhecer a Animal Fitness Club!',
    )
    lines.push('', '📝 *Meus dados:*')
    lines.push(`• Nome: ${lead.name}`)
    lines.push(`• WhatsApp: ${lead.phone}`)
    if (lead.email) lines.push(`• E-mail: ${lead.email}`)

    lines.push('', '🏋️ *Meu perfil:*')
    lines.push(`• Objetivo: ${lead.goal}`)
    lines.push(`• Prefiro treinar: ${lead.training_preference}`)
    lines.push(`• Frequência semanal: ${lead.frequency}x`)
    const unitName = getUnitName(lead.unit)
    if (unitName) lines.push(`• Unidade de interesse: ${unitName}`)
    lines.push('', 'Quero agendar minha aula experimental!')
  } else {
    switch (origin) {
      case 'hero':
        lines.push('Olá! Vi o site da Animal Fitness Club e quero agendar uma aula experimental!')
        break
      case 'plans':
        lines.push(
          'Olá! Gostaria de saber mais sobre os planos da Animal Fitness Club e agendar uma aula experimental.',
        )
        if (context.plan) lines.push('', `Tenho interesse no plano *${context.plan}*.`)
        break
      case 'units':
        lines.push('Olá! Gostaria de agendar uma aula experimental na Animal Fitness Club.')
        {
          const unitName = getUnitName(context.unit)
          if (unitName) lines.push('', `Unidade de interesse: ${unitName}`)
        }
        break
      case 'modalities':
        lines.push('Olá! Gostaria de agendar uma aula experimental na Animal Fitness Club.')
        if (context.modality) lines.push('', `Tenho interesse em: ${context.modality}`)
        break
      case 'final_cta':
        lines.push('Olá! Conheci a Animal pelo site e gostaria de agendar uma aula experimental.')
        break
      case 'header':
        lines.push('Olá! Gostaria de saber mais sobre a Animal Fitness Club!')
        break
      case 'floating':
        lines.push('Olá! Gostaria de tirar algumas dúvidas sobre a Animal Fitness Club.')
        break
      default:
        lines.push('Olá! Conheci a Animal pelo site e gostaria de agendar uma aula experimental.')
    }
  }

  return encodeURIComponent(lines.join('\n'))
}

export function getWhatsAppUrl(context: WhatsAppContext = {}): string {
  const message = generateWhatsAppMessage(context)
  const base = config.whatsapp.url.split('?')[0]
  return `${base}?text=${message}`
}
