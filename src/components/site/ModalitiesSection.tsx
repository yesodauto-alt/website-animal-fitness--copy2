import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SmartImage } from '@/components/site/SmartImage'
import { EnergyLine } from '@/components/site/EnergyLine'
import { Reveal } from '@/components/site/Reveal'
import { track } from '@/analytics/tracker'
import { MEDIA } from '@/lib/media'

export function ModalitiesSection() {
  return (
    <section id="modalidades" className="bg-animal-black relative isolate">
      <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] overflow-hidden group">
        <SmartImage
          src={MEDIA.modalities.musculacao}
          alt="Treino de musculação na Animal Fitness Club"
          className="absolute inset-0 w-full h-full"
          imgClassName="duration-[1.5s] ease-out group-hover:scale-[1.03] group-hover:brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-animal-black/92 via-animal-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <Reveal className="max-w-xl">
              <EnergyLine variant="accent" className="w-10 mb-4" />
              <span className="text-eyebrow mb-3 inline-block">Modalidade</span>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tight">
                Musculação
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-5 max-w-md leading-relaxed">
                Foco em hipertrofia, força e evolução. Equipamentos de primeira e coaches que
                acompanham cada movimento.
              </p>
              <Link
                to="/musculacao"
                onClick={() =>
                  track('trial_requested', { page: 'modalities', campaign: 'Musculação' })
                }
                className="inline-flex items-center gap-2 text-animal-orange font-bold uppercase text-sm tracking-wide mt-6 group/link transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(20_100%_50%/0.25)]"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] overflow-hidden group">
        <SmartImage
          src={MEDIA.modalities.cross}
          alt="Treino de cross na Animal Fitness Club"
          className="absolute inset-0 w-full h-full"
          imgClassName="duration-[1.5s] ease-out group-hover:scale-[1.03] group-hover:brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-animal-black/92 via-animal-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-end z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <Reveal className="max-w-xl ml-auto text-right" animation="slide-left">
              <EnergyLine variant="accent" className="w-10 mb-4 ml-auto" />
              <span className="text-eyebrow mb-3 inline-block">Modalidade</span>
              <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-[0.9] tracking-tight">
                Cross
              </h2>
              <p className="text-white/60 text-sm sm:text-base mt-5 max-w-md ml-auto leading-relaxed">
                Treinos funcionais de alta intensidade em grupo. Desafio, energia e uma comunidade
                que treina junto.
              </p>
              <Link
                to="/cross"
                onClick={() => track('trial_requested', { page: 'modalities', campaign: 'Cross' })}
                className="inline-flex items-center gap-2 text-animal-orange font-bold uppercase text-sm tracking-wide mt-6 group/link transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(20_100%_50%/0.25)]"
              >
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
