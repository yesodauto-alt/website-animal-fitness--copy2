import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/site/PageHero'
import { PageCta } from '@/components/site/PageCta'
import { Button } from '@/components/ui/button'
import { Flame, Users, TrendingUp, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Flame,
    title: 'WODs variados',
    desc: 'Treinos do dia sempre diferentes, combinando força, cardio e habilidades para desafiar você de formas novas.',
  },
  {
    icon: Users,
    title: 'Comunidade que treina junto',
    desc: 'No Cross, ninguém treina sozinho. A energia do grupo te puxa para cima nos dias difíceis.',
  },
  {
    icon: TrendingUp,
    title: 'Intensidade escalonável',
    desc: 'Seja no primeiro dia ou no milésimo, o treino se adapta ao seu nível sem perder a essência.',
  },
]

export default function CrossPage() {
  return (
    <>
      <Seo
        title="Cross Training em São Caetano do Sul | Animal Fitness Club"
        description="Treinos funcionais de alta intensidade em grupo. Desafio, energia e comunidade na Animal Fitness Club em São Caetano do Sul."
        path="/cross"
      />
      <PageHero
        title="Cross na Animal"
        subtitle="Treino funcional de alta intensidade em grupo. Desafio, energia e uma comunidade que treina junto — do aquecimento ao último round."
      />
      <section className="section-padding bg-animal-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-4 leading-tight">
            Treino funcional de alta intensidade em grupo
          </h2>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-4">
            O Cross na Animal Fitness Club é sobre intensidade, variedade e comunidade. A cada aula,
            você enfrenta um treino diferente que combina movimentos funcionais — levantar, puxar,
            empurrar, correr — em formatos que desafiam seu corpo e sua mente.
          </p>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-10">
            Não importa se você está começando ou se já treina há anos. O treino é escalonável: a
            intensidade se ajusta ao seu nível, mas a energia é sempre a mesma.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {benefits.map((b) => (
              <div key={b.title} className="card-light group p-6">
                <div className="icon-badge group-hover:bg-animal-orange">
                  <b.icon className="w-5 h-5 text-animal-orange transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-display text-sm uppercase text-animal-black mb-2">{b.title}</h3>
                <p className="text-animal-black/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-6 leading-tight">
            Como funciona uma aula de Cross
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                n: '01',
                t: 'Aquecimento dirigido',
                d: 'Preparação específica para os movimentos do treino do dia.',
              },
              {
                n: '02',
                t: 'Componente de força ou técnica',
                d: 'Trabalho focado em construir força ou aprimorar a execução de movimentos.',
              },
              {
                n: '03',
                t: 'WOD — Treino do dia',
                d: 'O treino principal: intenso, variado e feito em grupo. É aqui que a mágica acontece.',
              },
            ].map((s) => (
              <div key={s.n} className="flex gap-3">
                <span className="font-display text-animal-orange text-lg shrink-0 w-8">{s.n}</span>
                <div>
                  <h3 className="font-semibold text-animal-black mb-1 text-sm sm:text-base">
                    {s.t}
                  </h3>
                  <p className="text-animal-black/55 text-sm">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-animal-black rounded-2xl p-8 text-center border border-white/5">
            <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-3">
              Quer focar em hipertrofia e força?
            </h3>
            <p className="text-white/55 text-sm mb-5 max-w-md mx-auto">
              Conheça a musculação na Animal e tenha acompanhamento individualizado no seu treino.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-animal-orange/40 text-animal-orange hover:bg-animal-orange/10 h-11"
            >
              <Link to="/musculacao">
                Conhecer a Musculação <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <PageCta
        title="Bora sentir a energia do Cross na Animal?"
        subtitle="Agende sua aula experimental e treine com a gente. A comunidade está te esperando."
      />
    </>
  )
}
