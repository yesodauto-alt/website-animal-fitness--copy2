import { useEffect, useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/site/Reveal'
import { getPlans, Plan } from '@/services/plans'
import { useRealtime } from '@/hooks/use-realtime'
import { track } from '@/analytics/tracker'

export function PlansSection() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [loading, setLoading] = useState(true)

  const loadPlans = async () => {
    setLoading(true)
    const items = await getPlans()
    setPlans(items)
    setLoading(false)
  }

  useEffect(() => {
    loadPlans()
  }, [])

  useRealtime('plans', () => {
    loadPlans()
  })

  return (
    <section id="planos" className="section-padding bg-animal-white relative isolate">
      <div className="container mx-auto">
        <Reveal className="text-center mb-12 md:mb-14">
          <span className="text-eyebrow mb-3 inline-block">Planos & Matrícula</span>
          <h2 className="section-title text-animal-black max-w-3xl mx-auto">
            Encontre o Plano Ideal Para o Seu Ritmo
          </h2>
          <p className="text-animal-black/60 max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Acesso à melhor estrutura, coaches dedicados e uma comunidade que te motiva a ir além.
          </p>
        </Reveal>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card-light p-8 animate-pulse h-96 bg-black/5" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              const isPopular =
                i === 1 ||
                plan.name.toLowerCase().includes('top') ||
                plan.name.toLowerCase().includes('anual')
              return (
                <Reveal key={plan.id || plan.name} delay={i * 150}>
                  <div
                    className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between h-full transition-all duration-500 hover:-translate-y-1 ${
                      isPopular
                        ? 'bg-dark-premium-textured text-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] border border-white/[0.12]'
                        : 'card-light'
                    }`}
                  >
                    {isPopular && (
                      <Badge className="absolute top-4 right-4 bg-animal-orange text-white uppercase text-[10px] tracking-wider">
                        Mais Vendido
                      </Badge>
                    )}

                    <div>
                      <h3 className="font-display text-2xl lg:text-3xl uppercase mb-1">
                        {plan.name}
                      </h3>
                      <p
                        className={`text-xs font-medium mb-6 ${isPopular ? 'text-white/60' : 'text-animal-black/60'}`}
                      >
                        {plan.description}
                      </p>

                      <div className="mb-6 pb-6 border-b border-black/10 dark:border-white/10">
                        <span className="text-xs uppercase text-animal-orange font-bold block mb-1">
                          A partir de
                        </span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold">R$</span>
                          <span className="font-display text-4xl lg:text-5xl tracking-tight">
                            {plan.price}
                          </span>
                          <span
                            className={`text-xs ${isPopular ? 'text-white/60' : 'text-animal-black/50'}`}
                          >
                            /mês
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                              isPopular ? 'text-white/80' : 'text-animal-black/75'
                            }`}
                          >
                            <Check className="w-4 h-4 text-animal-orange shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className={`w-full font-bold uppercase tracking-wide h-12 rounded-full transition-all duration-500 ${
                        isPopular
                          ? 'bg-animal-orange hover:bg-animal-orange/85 text-white shadow-[0_0_24px_-4px_hsl(20_100%_50%/0.5)]'
                          : 'bg-animal-black hover:bg-animal-black/90 text-white'
                      }`}
                    >
                      <a
                        href="#contato"
                        onClick={() => track('plan_clicked', { campaign: plan.name })}
                      >
                        Garantir Este Plano
                      </a>
                    </Button>
                  </div>
                </Reveal>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
