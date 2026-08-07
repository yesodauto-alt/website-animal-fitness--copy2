import { useEffect, useState } from 'react'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Reveal } from '@/components/site/Reveal'
import { getClasses, ClassItem } from '@/services/classes'
import { useRealtime } from '@/hooks/use-realtime'
import { track } from '@/analytics/tracker'

const DAYS = [
  'Todos',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function ClassesSection() {
  const [classes, setClasses] = useState<ClassItem[]>([])
  const [selectedDay, setSelectedDay] = useState('Todos')
  const [loading, setLoading] = useState(true)

  const loadClasses = async () => {
    setLoading(true)
    const items = await getClasses()
    setClasses(items)
    setLoading(false)
  }

  useEffect(() => {
    loadClasses()
  }, [])

  useRealtime('classes', () => {
    loadClasses()
  })

  const filtered =
    selectedDay === 'Todos' ? classes : classes.filter((c) => c.day_of_week === selectedDay)

  return (
    <section id="aulas" className="section-padding bg-animal-black relative isolate">
      <div className="container mx-auto">
        <Reveal className="text-center mb-10 md:mb-12">
          <span className="text-eyebrow mb-3 inline-block">Grade de Aulas</span>
          <h2 className="section-title text-white max-w-3xl mx-auto">
            Treinos Guiados Por Coaches Especialistas
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mt-4 text-sm sm:text-base">
            Encontre a modalidade e o horário que melhor se encaixam no seu dia.
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="flex justify-center mb-10 overflow-x-auto pb-2 scrollbar-none"
        >
          <div className="flex gap-2 p-1.5 bg-white/5 border border-white/10 rounded-full">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shrink-0 ${
                  selectedDay === day
                    ? 'bg-animal-orange text-white shadow-[0_0_16px_-2px_hsl(20_100%_50%/0.5)]'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </Reveal>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="card-dark p-6 animate-pulse h-48 bg-white/5" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-12 text-white/50 card-dark max-w-md mx-auto">
            Nenhuma aula cadastrada para este dia no momento.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <div className="card-dark p-6 sm:p-7 flex flex-col justify-between h-full group hover:border-animal-orange/40 transition-all duration-300">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <Badge className="bg-animal-orange/15 text-animal-orange border-animal-orange/30 font-bold uppercase text-[10px]">
                        {item.day_of_week}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs text-white/70 font-semibold bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-animal-orange" />
                        {item.time_slot}
                      </div>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl uppercase text-white mb-2 group-hover:text-animal-orange transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-white/60 mt-3">
                      <User className="w-4 h-4 text-animal-orange shrink-0" />
                      <span>
                        Coach: <strong className="text-white/85">{item.instructor}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-white/40">
                      Vagas Limitadas
                    </span>
                    <Button
                      asChild
                      size="sm"
                      className="bg-white/10 hover:bg-animal-orange text-white text-xs font-bold uppercase tracking-wider h-8 rounded-full transition-all duration-300"
                    >
                      <a
                        href="#contato"
                        onClick={() => track('trial_requested', { class: item.title })}
                      >
                        Reservar Aula <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
