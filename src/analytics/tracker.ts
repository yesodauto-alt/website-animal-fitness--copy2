import type { ConversionEvent, ConversionEventName, AnalyticsProvider } from '@/types'
import { captureUtmParams } from '@/lib/utm'
import { config } from '@/config'

const providers: AnalyticsProvider[] = []

export function registerAnalyticsProvider(provider: AnalyticsProvider) {
  providers.push(provider)
}

export function track(
  eventName: ConversionEventName,
  additionalProperties?: Partial<ConversionEvent>,
): ConversionEvent {
  const utm = captureUtmParams()

  const event: ConversionEvent = {
    event: eventName,
    timestamp: new Date().toISOString(),
    page: window.location.pathname,
    utm_source: utm.utm_source,
    utm_campaign: utm.utm_campaign,
    ...additionalProperties,
  }

  if (config.analytics.enabled || import.meta.env.DEV) {
    console.log('[Analytics]', event.event, event)
  }

  for (const provider of providers) {
    try {
      provider.track(event)
    } catch (err) {
      console.error(`[Analytics] Provider "${provider.name}" failed:`, err)
    }
  }

  window.dispatchEvent(new CustomEvent('conversion_event', { detail: event }))

  return event
}

export function trackPageView(page?: string): ConversionEvent {
  return track('page_view', { page: page ?? window.location.pathname })
}
