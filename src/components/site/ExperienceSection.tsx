import { Quote } from 'lucide-react'
import { SmartImage } from '@/components/site/SmartImage'
import { Reveal } from '@/components/site/Reveal'
import { EnergyLine } from '@/components/site/EnergyLine'
import { MEDIA } from '@/lib/media'
import { Button } from '@/components/ui/button'

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      className="section-padding bg-dark-premium-textured section-dark-premium text-white relative overflow-hidden isolate"
    >
      <div className="container mx-auto">
        <Reveal className="mb-10 md:mb-14">
          <EnergyLine variant="accent" className="w-12 mb-4" />
          <span className="text-eyebrow mb-3 inline-block">A experiência Animal</span>
          <h2 className="section-title text-white max-w-3xl">
            É difícil explicar a Animal.
            <br />
            É mais fácil viver.
          </h2>
        </Reveal>

        <div className="grid grid-cols-12 gap-3 lg:gap-5 mb-12 md:mb-16">
          <Reveal
            className="col-span-12 lg:col-span-7 relative rounded-xl overflow-hidden group"
            animation="fade-up"
          >
            <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-xl">
              <SmartImage
                src={MEDIA.experience.main}
                alt="Pessoas treinando juntas na Animal Fitness Club"
                className="w-full h-full"
                imgClassName="duration-700 group-hover:scale-105 group-hover:brightness-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-animal-black/80 via-transparent to-transparent rounded-xl" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-xl" />
              <div className="absolute bottom-0 left-0 p-5 sm:p-8 z-10">
                <p className="font-display text-2xl sm:text-4xl uppercase text-white/90 leading-tight">
                  Treino. Evolução.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-3 lg:gap-5">
            <Reveal
              className="relative rounded-xl overflow-hidden group lg:h-full"
              animation="slide-left"
              delay={150}
            >
              <div className="relative aspect-[2/1] lg:aspect-auto lg:h-full overflow-hidden rounded-xl">
                <SmartImage
                  src={MEDIA.experience.small1}
                  alt="Pessoa levantando peso na Animal"
                  className="w-full h-full"
                  imgClassName="duration-700 group-hover:scale-105 group-hover:brightness-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-animal-black/80 via-transparent to-transparent rounded-xl" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-xl" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 z-10">
                  <p className="font-display text-xl sm:text-2xl uppercase text-white/90">Gente.</p>
                </div>
              </div>
            </Reveal>
            <Reveal
              className="relative rounded-xl overflow-hidden group lg:h-full"
              animation="slide-left"
              delay={300}
            >
              <div className="relative aspect-[2/1] lg:aspect-auto lg:h-full overflow-hidden rounded-xl">
                <SmartImage
                  src={MEDIA.experience.small2}
                  alt="Pessoa treinando na Animal"
                  className="w-full h-full"
                  imgClassName="duration-700 group-hover:scale-105 group-hover:brightness-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-animal-black/80 via-transparent to-transparent rounded-xl" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-xl" />
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 z-10">
                  <p className="font-display text-xl sm:text-2xl uppercase text-white/90">
                    Pertencimento.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="flex justify-center mb-6">
          <div className="glow-divider w-32" />
        </div>
        <Reveal className="max-w-3xl mx-auto text-center">
          <Quote className="w-9 h-9 text-animal-orange/80 mx-auto mb-4" />
          <p className="font-display text-xl sm:text-3xl lg:text-4xl uppercase leading-[1.15] text-white">
            Tem academia que você frequenta.
            <br />
            Tem academia que vira parte da sua rotina.
          </p>
          <p className="font-display text-2xl sm:text-4xl uppercase text-animal-orange mt-6 text-glow-orange">
            Isso é ser Animal.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-animal-orange hover:bg-animal-orange/85 text-white font-bold uppercase tracking-wide text-sm sm:text-base px-6 sm:px-8 h-12 sm:h-auto rounded-full transition-all duration-300 hover:shadow-[0_0_28px_-4px_hsl(20_100%_50%/0.5)] hover:-translate-y-0.5"
          >
            <a href="#cta-final">Quero Viver uma Aula Animal</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
