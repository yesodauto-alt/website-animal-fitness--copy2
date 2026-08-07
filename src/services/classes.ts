import pb from '@/lib/pocketbase/client'

export interface ClassItem {
  id: string
  title: string
  instructor: string
  time_slot: string
  day_of_week: string
  created?: string
  updated?: string
}

export async function getClasses(): Promise<ClassItem[]> {
  try {
    const records = await pb.collection('classes').getFullList<ClassItem>({
      sort: 'day_of_week,time_slot',
    })
    return records
  } catch (err) {
    console.error('Error fetching classes:', err)
    return []
  }
}
