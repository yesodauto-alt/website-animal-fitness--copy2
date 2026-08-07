import pb from '@/lib/pocketbase/client'
import { extractFieldErrors } from '@/lib/pocketbase/errors'

export interface CreateLeadPayload {
  full_name: string
  email: string
  phone?: string
  message?: string
  interest_plan?: string
}

export interface SubmitLeadResult {
  success: boolean
  leadId?: string
  errors?: Record<string, string>
  message?: string
}

export async function submitLead(payload: CreateLeadPayload): Promise<SubmitLeadResult> {
  try {
    const record = await pb.collection('leads').create({
      full_name: payload.full_name,
      email: payload.email,
      phone: payload.phone || '',
      message: payload.message || '',
      interest_plan: payload.interest_plan || null,
    })
    return { success: true, leadId: record.id }
  } catch (err) {
    const fieldErrors = extractFieldErrors(err)
    return {
      success: false,
      errors: fieldErrors,
      message:
        Object.keys(fieldErrors).length > 0
          ? 'Por favor, corrija os campos destacados.'
          : 'Ocorreu um erro ao enviar suas informações.',
    }
  }
}
