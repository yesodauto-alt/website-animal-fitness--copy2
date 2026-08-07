export const WHATSAPP_URL = 'https://wa.me/5511999999999'
export const INSTAGRAM_URL = 'https://instagram.com/animalfitnessclub'
export const GOOGLE_MAPS_URL = 'https://maps.google.com'
export const SITE_URL = 'https://website-animal-fitness-12031.goskip.app'

export const config = {
  site: {
    url: SITE_URL,
  },
  whatsapp: {
    url: WHATSAPP_URL,
    phone: '5511999999999',
  },
  instagram: {
    url: INSTAGRAM_URL,
  },
  maps: {
    url: GOOGLE_MAPS_URL,
  },
  n8n: {
    webhookUrl: import.meta.env.VITE_N8N_WEBHOOK_URL ?? '',
  },
  analytics: {
    enabled: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  },
} as const
