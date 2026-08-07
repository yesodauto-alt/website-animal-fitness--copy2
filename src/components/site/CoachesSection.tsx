import { Instagram, User } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/site/Reveal'
import { coachPlaceholders } from '@/lib/site-data'

export function CoachesSection() {
  return (
    <section
      id="coaches"
      className="section-padding bg-dark-premium-textured section-dark-premium text-white relative overflow-hidden"
    >
      <div className="container mx-auto">
        <Reveal className="text-center mb-3">
          <span className="text-eyebrow mb-3 inline-block">Quem treina com você</span>
          <h2 className="section-title text-white max-w-3xl mx-auto">
            Quem treina com você faz diferença.
          </h2>
        </Reveal>
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <p className="text-white/55 text-sm sm:text-base leading-relaxed">
            Em breve, apresentaremos nossos coaches com fotos, especialidades e histórias reais.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coachPlaceholders.map((coach, i) => (
            <Reveal key={coach.id} delay={i * 100}>
              <div className="card-dark overflow-hidden h-full relative group">
                <div
                  className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, hsl(20 100% 50% / 0.05), transparent 70%)',
                  }}
                />
                <div className="relative aspect-square bg-gradient-to-br from-white/[0.03] to-transparent flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
                  <User className="w-14 h-14 text-white/15" />
                  <Badge className="absolute top-3 right-3 bg-animal-orange/20 text-animal-orange border-animal-orange/30 text-[10px] uppercase">
                    Em breve
                  </Badge>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-base sm:text-lg uppercase text-white mb-1">
                    [Nome do Coach]
                  </h3>
                  <p className="text-animal-orange text-[11px] font-semibold uppercase mb-2">
                    [Especialidade]
                  </p>
                  <p className="text-white/35 text-xs leading-relaxed mb-3">
                    [Mini bio pendente — conteúdo será preenchido com dados reais dos coaches.]
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-white/35 hover:text-animal-orange focus-visible:text-animal-orange transition-colors text-xs rounded"
                    aria-label="Instagram do coach (em breve)"
                  >
                    <Instagram className="w-4 h-4" /> @instagram
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
