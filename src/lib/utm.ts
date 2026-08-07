export type UtmParams = {
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
}

const UTM_KEYS: (keyof UtmParams)[] = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
]

const STORAGE_KEY = 'animal_utm_params'

function getDefaultUtm(): UtmParams {
  return { utm_source: '', utm_medium: '', utm_campaign: '', utm_content: '', utm_term: '' }
}

function getMergedUtm(partial: Partial<UtmParams>): UtmParams {
  const stored = sessionStorage.getItem(STORAGE_KEY)
  let base: UtmParams = getDefaultUtm()
  if (stored) {
    try {
      base = { ...base, ...JSON.parse(stored) }
    } catch {
      // use defaults
    }
  }
  return { ...base, ...partial }
}

export function captureUtmParams(): UtmParams {
  const urlParams = new URLSearchParams(window.location.search)
  const fromUrl: Partial<UtmParams> = {}
  let hasUtmInUrl = false

  for (const key of UTM_KEYS) {
    const value = urlParams.get(key)
    if (value) {
      fromUrl[key] = value
      hasUtmInUrl = true
    }
  }

  if (hasUtmInUrl) {
    const merged = getMergedUtm(fromUrl)
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
    return merged
  }

  const stored = sessionStorage.getItem(STORAGE_KEY)
  if (stored) {
    try {
      return { ...getDefaultUtm(), ...JSON.parse(stored) }
    } catch {
      // fall through to defaults
    }
  }

  return getDefaultUtm()
}
