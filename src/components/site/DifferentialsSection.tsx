import { SmartImage } from '@/components/site/SmartImage'
import { EnergyLine } from '@/components/site/EnergyLine'
import { Reveal } from '@/components/site/Reveal'
import { MEDIA } from '@/lib/media'

const steps = [
  {
    num: '01',
    title: 'Coaches que conhecem você',
    description:
      'Não é só treinar e ir embora. Aqui, alguém de verdade está olhando pelo seu progresso, ajustando sua rotina e te puxando pra cima nos dias difíceis.',
    image: MEDIA.differentials.coaches,
  },
  {
    num: '02',
    title: 'Uma comunidade que puxa você pra cima',
    description:
      'A Animal não é um lugar onde você finge que os outros não existem. É onde você conhece gente que treina junto, sofre junto e comemora junto.',
    image: MEDIA.differentials.community,
  },
  {
    num: '03',
    title: 'Estrutura para você evoluir',
    description:
      'Equipamentos de primeira, espaço pensado pra você treinar bem e o ambiente certo pra você chegar no seu objetivo — seja qual for.',
    image: MEDIA.differentials.structure,
  },
]

export function DifferentialsSection() {
  return (
    <section
      id="diferenciais"
      className="section-padding bg-dark-premium-textured section-dark-premium text-white relative isolate overflow-hidden"
    >
      <div className="container mx-auto">
        <Reveal className="mb-10 md:mb-14">
          <EnergyLine variant="accent" className="w-12 mb-4" />
          <h2 className="section-title text-white max-w-2xl">
            Academia boa tem equipamento. Academia inesquecível tem pessoas.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 150} animation="fade-up">
              <div className="card-dark overflow-hidden h-full group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SmartImage
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full"
                    imgClassName="duration-700 group-hover:scale-105 group-hover:brightness-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-animal-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06]" />
                  <span className="absolute top-4 left-4 font-display text-5xl text-animal-orange leading-none">
                    {step.num}
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-2 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
