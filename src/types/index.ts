export type Lead = {
  name: string
  phone: string
  email: string
  goal: string
  training_preference: string
  frequency: string
  unit: string
  source: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  landing_page: string
  created_at: string
}

export type CreateLeadInput = {
  name: string
  phone: string
  email?: string
  goal: string
  training_preference: string
  frequency: string
  unit: string
}

export type CreateLeadResult = {
  success: boolean
  reason?: 'no_endpoint' | 'network_error' | 'server_error'
  lead?: Lead
}

export type ConversionEventName =
  | 'page_view'
  | 'hero_cta_clicked'
  | 'whatsapp_clicked'
  | 'quiz_started'
  | 'quiz_step_completed'
  | 'quiz_completed'
  | 'lead_created'
  | 'trial_requested'
  | 'unit_selected'
  | 'plan_clicked'
  | 'instagram_clicked'
  | 'maps_clicked'

export type ConversionEvent = {
  event: ConversionEventName
  timestamp: string
  page?: string
  unit?: string
  campaign?: string
  utm_source?: string
  utm_campaign?: string
  [key: string]: unknown
}

export type AnalyticsProvider = {
  name: string
  track: (event: ConversionEvent) => void
}
