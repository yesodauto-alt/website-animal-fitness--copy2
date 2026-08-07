import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/site/PageHero'
import { PageCta } from '@/components/site/PageCta'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import { useConversionFlow } from '@/contexts/conversion-flow'
import { track } from '@/analytics/tracker'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

const planFaq = [
  {
    question: 'Posso trocar de plano depois?',
    answer:
      'Sim! Você pode trocar de plano a qualquer momento. Fale com nossa equipe para encontrar a melhor opção.',
  },
  {
    question: 'Musculação e Cross estão inclusos?',
    answer:
      'Ambas as modalidades estão disponíveis. O plano LIFE oferece 3 check-ins por semana e o TOP oferece check-ins livres para você treinar quando quiser.',
  },
  {
    question: 'Como funciona o check-in?',
    answer:
      'O check-in é o registro da sua entrada na unidade. No plano LIFE, você tem 3 check-ins por semana. No plano TOP, os check-ins são livres.',
  },
  {
    question: 'Tem fidelidade?',
    answer:
      'Para informações sobre fidelidade e condições específicas, fale com nossa equipe pelo WhatsApp. Estamos aqui para ajudar.',
  },
]

export default function PlanosPage() {
  const { openFlow } = useConversionFlow()
  return (
    <>
      <Seo
        title="Planos de Academia em São Caetano do Sul | Animal Fitness Club"
        description="Planos LIFE e TOP com flexibilidade para sua rotina. Musculação e Cross com acompanhamento de coaches especializados na Animal Fitness Club."
        path="/planos"
      />
      <PageHero
        title="Planos da Animal"
        subtitle="Sem enrolação. Escolha o que funciona pra você e comece hoje mesmo."
      />
      <section className="section-padding bg-animal-white">
        <div className="container mx-auto max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-0.5 ${plan.highlight ? 'bg-animal-black text-white shadow-elevation border border-white/5' : 'card-light'}`}
              >
                {plan.highlight && (
                  <Badge className="absolute top-4 right-4 bg-animal-orange text-white uppercase text-[10px]">
                    Mais flexível
                  </Badge>
                )}
                <h2 className="font-display text-3xl lg:text-4xl uppercase mb-2">{plan.name}</h2>
                <p className="text-xs sm:text-sm font-semibold uppercase mb-6 text-animal-orange">
                  {plan.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-2 text-sm ${plan.highlight ? 'text-white/75' : 'text-animal-black/70'}`}
                    >
                      <Check className="w-4 h-4 text-animal-orange shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => {
                    track('plan_clicked', { campaign: plan.name })
                    openFlow()
                  }}
                  size="lg"
                  className={`w-full font-bold uppercase tracking-wide h-12 ${plan.highlight ? 'bg-animal-orange hover:bg-animal-orange/90 text-white' : 'bg-animal-black hover:bg-animal-black/90 text-white'}`}
                >
                  Descobrir Meu Plano
                </Button>
              </div>
            ))}
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-4 leading-tight">
            Qual plano combina com você?
          </h2>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-4">
            Se você tem uma rotina bem definida e sabe quantos dias por semana vai treinar, o plano
            LIFE é perfeito: 3 check-ins por semana com toda a estrutura e acompanhamento da Animal.
          </p>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-14">
            Já se você quer flexibilidade total — treinar quando quiser, quantas vezes quiser — o
            plano TOP é a escolha certa. Check-ins livres para você aproveitar cada momento.
          </p>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-6 leading-tight">
            Perguntas frequentes sobre planos
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {planFaq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`plan-${i}`}
                className="bg-white border border-black/5 rounded-xl px-5 sm:px-6 shadow-subtle"
              >
                <AccordionTrigger className="text-left font-semibold text-animal-black hover:no-underline text-sm sm:text-base py-5 sm:py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-animal-black/55 text-sm leading-relaxed pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <PageCta
        title="Ainda em dúvida sobre qual plano escolher?"
        subtitle="Fale com nossa equipe e descubra o plano que combina com a sua rotina."
      />
    </>
  )
}
