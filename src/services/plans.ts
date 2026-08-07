import pb from '@/lib/pocketbase/client'

export interface Plan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  created?: string
  updated?: string
}

export async function getPlans(): Promise<Plan[]> {
  try {
    const records = await pb.collection('plans').getFullList<any>({
      sort: 'price',
    })
    return records.map((record) => {
      let parsedFeatures: string[] = []
      if (typeof record.features === 'string') {
        try {
          parsedFeatures = JSON.parse(record.features)
        } catch {
          parsedFeatures = [record.features]
        }
      } else if (Array.isArray(record.features)) {
        parsedFeatures = record.features
      }
      return {
        id: record.id,
        name: record.name,
        price: record.price,
        description: record.description,
        features: parsedFeatures,
        created: record.created,
        updated: record.updated,
      }
    })
  } catch (err) {
    console.error('Error fetching plans:', err)
    return []
  }
}
