import { MapPin, MessageCircle, CalendarPlus, BadgeAlert } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SmartImage } from '@/components/site/SmartImage'
import { Reveal } from '@/components/site/Reveal'
import { units } from '@/lib/site-data'
import { track } from '@/analytics/tracker'

export function UnitsSection() {
  return (
    <section
      id="unidades"
      className="section-padding bg-dark-premium-textured section-dark-premium text-white relative overflow-hidden"
    >
      <div className="container mx-auto">
        <Reveal className="text-center mb-3">
          <span className="text-eyebrow mb-3 inline-block">Unidades</span>
          <h2 className="section-title text-white max-w-3xl mx-auto">Encontre sua Animal</h2>
        </Reveal>
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <p className="text-white/55 text-sm sm:text-base">
            Estamos prontos para te receber. Escolha a unidade mais perto de você.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {units.map((unit, i) => (
            <Reveal key={unit.id} delay={i * 150}>
              <div className="card-dark overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden shrink-0">
                  <SmartImage
                    src={unit.image}
                    alt={`Unidade ${unit.name} da Animal Fitness Club`}
                    className="w-full h-full"
                    imgClassName="duration-700 hover:scale-105 hover:brightness-[1.05]"
                  />
                  <div className="image-overlay-premium" />
                  {unit.pending && (
                    <Badge className="absolute top-3 left-3 z-10 bg-animal-orange/90 text-white uppercase text-[10px] gap-1">
                      <BadgeAlert className="w-3 h-3" />
                      Dados pendentes
                    </Badge>
                  )}
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-2">
                    {unit.name}
                  </h3>
                  <p className="text-white/40 text-xs sm:text-sm italic flex items-start gap-1.5 mb-5">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-animal-orange/60" />
                    {unit.address}
                  </p>
                  <a
                    href={`/unidades/${unit.slug}`}
                    className="group text-animal-orange font-bold text-xs uppercase tracking-wide hover:underline focus-visible:underline mb-4 inline-block rounded transition-all duration-300 hover:drop-shadow-[0_0_8px_hsl(20_100%_50%/0.25)]"
                  >
                    Ver detalhes da unidade{' '}
                    <span className="arrow-shift group-hover:translate-x-1.5">→</span>
                  </a>
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 text-xs uppercase flex-1 h-10 rounded-full transition-all duration-300"
                    >
                      <a
                        href={unit.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('maps_clicked', { unit: unit.id })}
                      >
                        <MapPin className="w-3.5 h-3.5 mr-1" /> Mapa
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white/40 text-xs uppercase flex-1 h-10 rounded-full transition-all duration-300"
                    >
                      <a
                        href={unit.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('whatsapp_clicked', { unit: unit.id, page: 'units' })}
                      >
                        <MessageCircle className="w-3.5 h-3.5 mr-1" /> WhatsApp
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-animal-orange hover:bg-animal-orange/85 text-white text-xs uppercase flex-1 h-10 rounded-full transition-all duration-300 hover:shadow-[0_0_16px_-4px_hsl(20_100%_50%/0.5)] hover:-translate-y-0.5"
                    >
                      <a
                        href="#cta-final"
                        onClick={() => track('trial_requested', { unit: unit.id, page: 'units' })}
                      >
                        <CalendarPlus className="w-3.5 h-3.5 mr-1" /> Agendar
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
