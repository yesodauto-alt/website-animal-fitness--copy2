import { ArrowRight } from 'lucide-react'
import { EnergyLine } from '@/components/site/EnergyLine'
import { track } from '@/analytics/tracker'
import { useConversionFlow } from '@/contexts/conversion-flow'
import { MEDIA } from '@/lib/media'

export function HeroSection() {
  const { openFlow } = useConversionFlow()

  return (
    <section className="relative bg-animal-black h-[100svh] isolate overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={MEDIA.hero.bg}
          alt="Comunidade treinando na Animal Fitness Club"
          className="w-full h-full object-cover object-[center_25%] animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-animal-black/85 via-animal-black/40 to-animal-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-animal-black/60 via-transparent to-animal-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-animal-black via-animal-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-animal-orange/20 to-transparent" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex-1 flex flex-col justify-center max-w-[1100px]">
          <h1 className="font-display text-white uppercase leading-[0.95] tracking-tight">
            <span className="block text-[9.5vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5vw] animate-fade-in-up">
              Você não entra
              <br />
              só para treinar.
            </span>
            <span className="block text-animal-orange text-[9.5vw] sm:text-[8vw] md:text-[5.5vw] lg:text-[5vw] mt-1.5 sm:mt-2 md:mt-2.5 text-glow-orange animate-fade-in-up animate-delay-200">
              Você entra para
              <br />
              fazer parte.
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-sm text-white/55 max-w-sm animate-fade-in-up animate-delay-300">
            Musculação, Cross e uma comunidade que transforma o seu treino no melhor momento do dia.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 animate-fade-in-up animate-delay-300 mt-6 sm:mt-7">
          <a
            href="#cta-final"
            onClick={() => track('hero_cta_clicked', { page: 'hero' })}
            className="group inline-flex items-center gap-1.5 magnetic-cta transition-transform duration-300 ease-out will-change-transform"
          >
            <span className="font-display text-[0.6rem] sm:text-[0.65rem] uppercase tracking-wider text-white border-b border-animal-orange/40 pb-0.5 group-hover:border-animal-orange transition-colors duration-300">
              Agendar Aula Experimental
            </span>
            <span className="w-5 h-5 rounded-full bg-animal-orange/15 border border-animal-orange/30 flex items-center justify-center group-hover:bg-animal-orange group-hover:border-animal-orange group-hover:shadow-[0_0_12px_-2px_hsl(20_100%_50%/0.4)] transition-all duration-300">
              <ArrowRight className="w-2.5 h-2.5 text-animal-orange group-hover:text-white transition-colors duration-300" />
            </span>
          </a>
          <button
            onClick={() => {
              track('hero_cta_clicked', { page: 'hero' })
              openFlow()
            }}
            className="group text-[0.65rem] sm:text-[0.7rem] font-medium uppercase tracking-wide text-white/40 hover:text-white/70 transition-colors duration-300"
          >
            Conhecer a Animal <span className="arrow-shift group-hover:translate-x-1.5">→</span>
          </button>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-[5] pointer-events-none opacity-20">
        <EnergyLine />
      </div>
    </section>
  )
}
