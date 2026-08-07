import { useState, useCallback, useEffect } from 'react'
import { track } from '@/analytics/tracker'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import type { CreateLeadInput } from '@/types'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronLeft, Loader2, MessageCircle, MapPin } from 'lucide-react'
import { units } from '@/lib/site-data'
import { createLead } from '@/services/lead-service'
import { cn } from '@/lib/utils'

type FlowData = {
  goal: string
  training_preference: string
  frequency: string
  unit: string
  name: string
  phone: string
  email: string
}

const INITIAL: FlowData = {
  goal: '',
  training_preference: '',
  frequency: '',
  unit: '',
  name: '',
  phone: '',
  email: '',
}

const STEPS: { key: keyof FlowData; title: string; sub: string; options: string[] }[] = [
  {
    key: 'goal',
    title: 'Qual é o seu principal objetivo?',
    sub: 'Escolha a que mais combina com você',
    options: [
      'Emagrecer',
      'Ganhar massa muscular',
      'Melhorar condicionamento',
      'Criar uma rotina saudável',
      'Melhorar performance',
    ],
  },
  {
    key: 'training_preference',
    title: 'Como você prefere treinar?',
    sub: 'Não existe resposta errada',
    options: ['Sozinho', 'Em grupo', 'Gosto dos dois', 'Ainda não sei'],
  },
  {
    key: 'frequency',
    title: 'Quantos dias por semana?',
    sub: 'Seja honesto com você mesmo',
    options: ['1-2', '3', '4', '5+'],
  },
]

function OptionButton({
  label,
  sublabel,
  selected,
  onClick,
}: {
  label: string
  sublabel?: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full text-left px-4 py-3 rounded-lg border transition-all duration-200',
        selected
          ? 'border-animal-orange bg-animal-orange/15 text-white'
          : 'border-white/15 bg-white/5 text-white/70 hover:border-white/30 hover:text-white',
      )}
    >
      {sublabel ? (
        <>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-animal-orange shrink-0" />
            <span className="font-semibold">{label}</span>
          </span>
          <span className="block text-xs text-white/40 mt-1 ml-6">{sublabel}</span>
        </>
      ) : (
        label
      )}
    </button>
  )
}

export function ConversionFlowDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  const [step, setStep] = useState(0)
  const [data, setData] = useState<FlowData>(INITIAL)
  const [consent, setConsent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [leadSent, setLeadSent] = useState(false)

  const reset = useCallback(() => {
    setStep(0)
    setData(INITIAL)
    setConsent(false)
    setSubmitting(false)
    setLeadSent(false)
  }, [])

  useEffect(() => {
    if (open) {
      track('quiz_started')
    }
  }, [open])

  const handleOpenChange = (v: boolean) => {
    if (!v) setTimeout(reset, 300)
    onOpenChange(v)
  }

  const update = (field: keyof FlowData, value: string) =>
    setData((d) => ({ ...d, [field]: value }))

  const canProceed =
    step < 3
      ? !!data[STEPS[step].key]
      : step === 3
        ? !!data.unit
        : step === 4
          ? data.name.trim().length > 0 && data.phone.trim().length > 0 && consent
          : false

  const handleNext = async () => {
    if (step < 4) {
      track('quiz_step_completed', { page: String(step) })
      setStep((s) => s + 1)
      return
    }
    setSubmitting(true)
    track('quiz_completed', { unit: data.unit })
    const input: CreateLeadInput = {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      goal: data.goal,
      training_preference: data.training_preference,
      frequency: data.frequency,
      unit: data.unit,
    }
    const result = await createLead(input)
    setLeadSent(result.success)
    setSubmitting(false)
    setStep(5)
  }

  const selStep = step < 3 ? STEPS[step] : null
  const isResult = step === 5
  const waUrl = getWhatsAppUrl({
    origin: 'quiz',
    lead: {
      name: data.name,
      phone: data.phone,
      email: data.email || undefined,
      goal: data.goal,
      training_preference: data.training_preference,
      frequency: data.frequency,
      unit: data.unit,
    },
  })

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-animal-black border-animal-orange/20 text-white">
        <DialogTitle className="sr-only">Descubra Seu Treino Animal</DialogTitle>

        {!isResult && (
          <>
            <p className="text-animal-orange font-bold text-xs uppercase tracking-wide mb-1">
              Descubra Seu Treino Animal
            </p>
            <div className="flex gap-1.5 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'h-1 flex-1 rounded-full transition-colors',
                    i <= step ? 'bg-animal-orange' : 'bg-white/15',
                  )}
                />
              ))}
            </div>
          </>
        )}

        {selStep && (
          <div className="space-y-4">
            <div>
              <h2 className="font-display text-xl uppercase text-white">{selStep.title}</h2>
              <p className="text-white/50 text-sm mt-1">{selStep.sub}</p>
            </div>
            <div className="space-y-2">
              {selStep.options.map((opt) => (
                <OptionButton
                  key={opt}
                  label={opt}
                  selected={data[selStep.key] === opt}
                  onClick={() => update(selStep.key, opt)}
                />
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <h2 className="font-display text-xl uppercase text-white">
                Qual unidade é melhor para você?
              </h2>
              <p className="text-white/50 text-sm mt-1">Escolha a mais próxima da sua rotina</p>
            </div>
            <div className="space-y-2">
              {units.map((u) => (
                <OptionButton
                  key={u.id}
                  label={u.name}
                  sublabel={u.address}
                  selected={data.unit === u.id}
                  onClick={() => {
                    update('unit', u.id)
                    track('unit_selected', { unit: u.id })
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div>
              <h2 className="font-display text-xl uppercase text-white">Quase lá!</h2>
              <p className="text-white/50 text-sm mt-1">
                Precisamos de alguns dados para entrar em contato
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <Label className="text-white/70 text-sm">Nome *</Label>
                <Input
                  value={data.name}
                  onChange={(e) => update('name', e.target.value)}
                  className="bg-white/5 border-white/15 text-white mt-1"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <Label className="text-white/70 text-sm">WhatsApp *</Label>
                <Input
                  value={data.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  className="bg-white/5 border-white/15 text-white mt-1"
                  placeholder="(11) 99999-9999"
                />
              </div>
              <div>
                <Label className="text-white/70 text-sm">E-mail</Label>
                <Input
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  className="bg-white/5 border-white/15 text-white mt-1"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Checkbox
                  checked={consent}
                  onCheckedChange={(v) => setConsent(v === true)}
                  className="border-white/30 mt-1"
                />
                <span className="text-xs text-white/50 leading-relaxed">
                  Concordo com o tratamento dos meus dados para fins de contato, conforme a LGPD.
                </span>
              </div>
            </div>
          </div>
        )}

        {isResult && (
          <div className="text-center py-6 space-y-6">
            <h2 className="font-display text-2xl uppercase text-white leading-tight">
              Legal, {data.name.split(' ')[0]}.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Já temos algumas informações para ajudar nossa equipe a indicar a melhor experiência
              para você.
            </p>
            {!leadSent && (
              <p className="text-yellow-400/70 text-xs">
                Não foi possível enviar seus dados automaticamente. Use o botão abaixo para falar
                com nossa equipe.
              </p>
            )}
            <Button
              asChild
              size="lg"
              className="bg-animal-orange hover:bg-animal-orange/90 text-white font-bold uppercase tracking-wide w-full"
            >
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Falar com a Equipe Animal
              </a>
            </Button>
          </div>
        )}

        {!isResult && (
          <div className="flex gap-3 pt-2">
            {step > 0 && (
              <Button
                variant="ghost"
                onClick={() => setStep((s) => s - 1)}
                className="text-white/60 hover:text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-4 h-4" /> Voltar
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed || submitting}
              className="flex-1 bg-animal-orange hover:bg-animal-orange/90 text-white font-bold uppercase tracking-wide"
            >
              {submitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : step === 4 ? (
                'Enviar'
              ) : (
                'Continuar'
              )}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
