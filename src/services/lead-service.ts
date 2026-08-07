import { captureUtmParams } from '@/lib/utm'
import { sendToN8n } from '@/integrations/n8n-adapter'
import { track } from '@/analytics/tracker'
import type { Lead, CreateLeadInput, CreateLeadResult } from '@/types'

export async function createLead(input: CreateLeadInput): Promise<CreateLeadResult> {
  const utm = captureUtmParams()

  const lead: Lead = {
    name: input.name,
    phone: input.phone,
    email: input.email ?? '',
    goal: input.goal,
    training_preference: input.training_preference,
    frequency: input.frequency,
    unit: input.unit,
    source: 'website',
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    utm_content: utm.utm_content,
    utm_term: utm.utm_term,
    landing_page: window.location.href,
    created_at: new Date().toISOString(),
  }

  track('lead_created', {
    unit: lead.unit,
    campaign: lead.utm_campaign,
    utm_source: lead.utm_source,
    utm_campaign: lead.utm_campaign,
  })

  const result = await sendToN8n(lead)

  if (result.success) {
    return { success: true, lead }
  }

  return { success: false, reason: result.reason, lead }
}

export type { Lead, CreateLeadInput, CreateLeadResult }
