import type { Lead } from '@/types'
import { config } from '@/config'

export type N8nResult = {
  success: boolean
  reason?: 'no_endpoint' | 'network_error' | 'server_error'
}

export async function sendToN8n(lead: Lead): Promise<N8nResult> {
  const endpoint = config.n8n.webhookUrl

  if (!endpoint) {
    return { success: false, reason: 'no_endpoint' }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    })

    if (!response.ok) {
      return { success: false, reason: 'server_error' }
    }

    return { success: true }
  } catch {
    return { success: false, reason: 'network_error' }
  }
}
