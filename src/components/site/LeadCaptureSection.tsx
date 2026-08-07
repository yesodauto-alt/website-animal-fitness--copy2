import { useEffect, useState } from 'react'
import { Send, CheckCircle2, Phone, Mail, User, MessageSquare, Dumbbell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Reveal } from '@/components/site/Reveal'
import { getPlans, Plan } from '@/services/plans'
import { submitLead } from '@/services/leads'
import { track } from '@/analytics/tracker'

export function LeadCaptureSection() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [interestPlan, setInterestPlan] = useState<string>('')

  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    getPlans().then((data) => setPlans(data))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const fieldErrors: Record<string, string> = {}
    if (!fullName.trim()) {
      fieldErrors.full_name = 'O nome completo é obrigatório'
    }
    if (!email.trim() || !email.includes('@')) {
      fieldErrors.email = 'Digite um e-mail válido'
    }

    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }

    setSubmitting(true)
    const result = await submitLead({
      full_name: fullName,
      email,
      phone,
      message,
      interest_plan: interestPlan || undefined,
    })
    setSubmitting(false)

    if (result.success) {
      setSubmitted(true)
      track('lead_created', { plan: interestPlan })
    } else {
      if (result.errors) {
        setErrors(result.errors)
      } else {
        setErrors({ general: result.message || 'Erro ao enviar mensagem.' })
      }
    }
  }

  return (
    <section
      id="contato"
      className="section-padding bg-animal-black relative isolate border-t border-white/10"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-eyebrow mb-3 inline-block">Agende Sua Aula Experimental</span>
              <h2 className="section-title text-white mb-6">Venha Treinar Na Animal Fitness</h2>
              <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-8">
                Preencha o formulário e nossa equipe entrará em contato para agendar seu treino
                teste gratuito e tirar todas as suas dúvidas sobre os planos.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-animal-orange/15 border border-animal-orange/30 flex items-center justify-center shrink-0">
                    <Dumbbell className="w-5 h-5 text-animal-orange" />
                  </div>
                  <span>Acesso completo à estrutura no seu 1º treino</span>
                </div>
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-10 h-10 rounded-xl bg-animal-orange/15 border border-animal-orange/30 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-animal-orange" />
                  </div>
                  <span>Acompanhamento direto com coaches especialistas</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={150}>
              <div className="card-dark p-6 sm:p-8 lg:p-10 border border-white/10">
                {submitted ? (
                  <div className="text-center py-10 space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-2xl uppercase text-white">
                      Solicitação Enviada!
                    </h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto">
                      Obrigado, <strong className="text-white">{fullName}</strong>! Nossa equipe
                      entrará em contato via WhatsApp ou e-mail em breve.
                    </p>
                    <Button
                      onClick={() => {
                        setSubmitted(false)
                        setFullName('')
                        setEmail('')
                        setPhone('')
                        setMessage('')
                        setInterestPlan('')
                      }}
                      variant="outline"
                      className="border-animal-orange/40 text-animal-orange hover:bg-animal-orange/10 mt-4"
                    >
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="font-display text-2xl uppercase text-white mb-2">
                      Formulário de Interesse
                    </h3>

                    {errors.general && (
                      <div className="p-3 bg-red-500/15 border border-red-500/30 rounded-lg text-red-400 text-xs">
                        {errors.general}
                      </div>
                    )}

                    <div>
                      <Label className="text-xs text-white/70 font-semibold uppercase">
                        Nome Completo *
                      </Label>
                      <div className="relative mt-1">
                        <User className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                        <Input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Digite seu nome"
                          className={`pl-9 bg-white/5 border-white/15 text-white ${errors.full_name ? 'border-red-500' : ''}`}
                        />
                      </div>
                      {errors.full_name && (
                        <p className="text-xs text-red-400 mt-1 font-medium">{errors.full_name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs text-white/70 font-semibold uppercase">
                          E-mail *
                        </Label>
                        <div className="relative mt-1">
                          <Mail className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className={`pl-9 bg-white/5 border-white/15 text-white ${errors.email ? 'border-red-500' : ''}`}
                          />
                        </div>
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <Label className="text-xs text-white/70 font-semibold uppercase">
                          Telefone / WhatsApp
                        </Label>
                        <div className="relative mt-1">
                          <Phone className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                          <Input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="(11) 99999-9999"
                            className="pl-9 bg-white/5 border-white/15 text-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-xs text-white/70 font-semibold uppercase">
                        Plano ou Modalidade de Interesse
                      </Label>
                      <Select value={interestPlan} onValueChange={setInterestPlan}>
                        <SelectTrigger className="bg-white/5 border-white/15 text-white mt-1">
                          <SelectValue placeholder="Selecione uma opção (opcional)" />
                        </SelectTrigger>
                        <SelectContent className="bg-animal-black border-white/20 text-white">
                          {plans.map((p) => (
                            <SelectItem key={p.id} value={p.id}>
                              {p.name} - R$ {p.price}/mês
                            </SelectItem>
                          ))}
                          <SelectItem value="cross">CrossFit / Treino Funcional</SelectItem>
                          <SelectItem value="musculacao">Musculação Clássica</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-xs text-white/70 font-semibold uppercase">
                        Mensagem / Dúvidas
                      </Label>
                      <div className="relative mt-1">
                        <MessageSquare className="w-4 h-4 text-white/40 absolute left-3 top-3.5" />
                        <Textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Conte-nos seus objetivos ou horários preferidos..."
                          className="pl-9 bg-white/5 border-white/15 text-white min-h-[90px]"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-animal-orange hover:bg-animal-orange/85 font-bold uppercase tracking-wide h-12 text-sm mt-2 rounded-full transition-all duration-300 shadow-[0_0_20px_-4px_hsl(20_100%_50%/0.4)]"
                    >
                      {submitting ? (
                        'Enviando...'
                      ) : (
                        <>
                          Solicitar Aula Experimental Grátis
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
