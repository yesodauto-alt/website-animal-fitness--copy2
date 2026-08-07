import type { AnalyticsProvider } from '@/types'

export const googleAnalyticsProvider: AnalyticsProvider = {
  name: 'google-analytics',
  track: (event) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as unknown as { gtag: (...args: unknown[]) => void }).gtag
      gtag('event', event.event, {
        page_path: event.page,
        unit: event.unit,
        campaign: event.campaign,
        utm_source: event.utm_source,
        utm_campaign: event.utm_campaign,
      })
    }
  },
}

export const facebookPixelProvider: AnalyticsProvider = {
  name: 'facebook-pixel',
  track: (event) => {
    if (typeof window !== 'undefined' && 'fbq' in window) {
      const fbq = (window as unknown as { fbq: (...args: unknown[]) => void }).fbq
      fbq('trackCustom', event.event, {
        page: event.page,
        unit: event.unit,
        campaign: event.campaign,
      })
    }
  },
}
