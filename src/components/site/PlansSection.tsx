import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/site/Reveal'
import { useConversionFlow } from '@/contexts/conversion-flow'
import { track } from '@/analytics/tracker'

const plans = [
  {
    name: 'LIFE',
    description: '3 check-ins por semana',
    features: [
      'Acesso à estrutura completa',
      'Acompanhamento de coaches',
      '3 check-ins por semana',
      'Comunidade Animal',
    ],
    highlight: false,
  },
  {
    name: 'TOP',
    description: 'Check-ins livres',
    features: [
      'Acesso à estrutura completa',
      'Acompanhamento de coaches',
      'Check-ins livres',
      'Comunidade Animal',
      'Máxima flexibilidade',
    ],
    highlight: true,
  },
]

export function PlansSection() {
  const { openFlow } = useConversionFlow()
  return (
    <section id="planos" className="section-padding bg-animal-white relative isolate">
      <div className="container mx-auto">
        <Reveal className="text-center mb-12 md:mb-14">
          <span className="text-eyebrow mb-3 inline-block">Planos</span>
          <h2 className="section-title text-animal-black max-w-3xl mx-auto">
            Encontre o plano que combina com a sua rotina.
          </h2>
          <p className="text-animal-black/50 max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Sem enrolação. Escolha o que funciona pra você e comece hoje mesmo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-6 sm:p-8 lg:p-10 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'bg-dark-premium-textured text-white shadow-[0_8px_40px_-12px_rgba(0,0,0,0.4)] border border-white/[0.1]'
                    : 'card-light'
                }`}
              >
                {plan.highlight && (
                  <div
                    className="absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none animate-gentle-pulse"
                    style={{
                      background:
                        'radial-gradient(circle, hsl(20 100% 50% / 0.06), transparent 70%)',
                    }}
                  />
                )}
                {plan.highlight && (
                  <Badge className="absolute top-4 right-4 bg-animal-orange text-white uppercase text-[10px]">
                    Mais flexível
                  </Badge>
                )}
                <h3 className="font-display text-3xl lg:text-4xl uppercase mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm font-semibold uppercase mb-6 text-animal-orange">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-2 text-sm ${
                        plan.highlight ? 'text-white/75' : 'text-animal-black/70'
                      }`}
                    >
                      <Check className="w-4 h-4 text-animal-orange shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    track('plan_clicked', { campaign: plan.name })
                    openFlow()
                  }}
                  size="lg"
                  className={`w-full font-bold uppercase tracking-wide h-12 rounded-full transition-all duration-500 hover:-translate-y-0.5 ${
                    plan.highlight
                      ? 'bg-animal-orange hover:bg-animal-orange/85 text-white hover:shadow-[0_0_28px_-4px_hsl(20_100%_50%/0.45)]'
                      : 'bg-animal-black hover:bg-animal-black/90 text-white hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.3)]'
                  }`}
                >
                  Descobrir Meu Plano
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
