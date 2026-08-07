import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/site/PageHero'
import { PageCta } from '@/components/site/PageCta'
import { Button } from '@/components/ui/button'
import { Dumbbell, Users, TrendingUp, MapPin } from 'lucide-react'
import { units } from '@/lib/site-data'

const values = [
  {
    icon: Dumbbell,
    title: 'Treinamento de verdade',
    desc: 'Não é sobre fazer exercício. É sobre treinar com propósito, técnica e acompanhamento real.',
  },
  {
    icon: Users,
    title: 'Comunidade de verdade',
    desc: 'A Animal não é um lugar onde você finge que os outros não existem. É onde você encontra gente que treina junto.',
  },
  {
    icon: TrendingUp,
    title: 'Resultados de verdade',
    desc: 'Seu progresso é acompanhado, revisado e celebrado. Na Animal, evolução não é acidente.',
  },
]

export default function SobrePage() {
  return (
    <>
      <Seo
        title="Sobre a Animal Fitness Club | Academia em São Caetano do Sul"
        description="Treinamento de verdade, comunidade de verdade. Conheça a história e os valores da Animal Fitness Club em São Caetano do Sul."
        path="/sobre"
      />
      <PageHero
        title="Sobre a Animal"
        subtitle="Treinamento de verdade, comunidade de verdade. Conheça o que nos move e por que somos diferentes."
      />
      <section className="section-padding bg-animal-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-4 leading-tight">
            Nossa história
          </h2>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-4">
            A Animal Fitness Club nasceu de uma ideia simples: academia boa tem equipamento, mas
            academia inesquecível tem pessoas. Por isso, construímos um espaço onde o treino é
            sério, o acompanhamento é real e a comunidade é genuína.
          </p>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-10">
            Em São Caetano do Sul, somos o lugar onde você não entra só para treinar — você entra
            para fazer parte. Seja na musculação ou no Cross, nosso time de coaches está pronto para
            te acompanhar em cada passo da sua jornada.
          </p>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-6 leading-tight">
            O que nos move
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {values.map((v) => (
              <div key={v.title} className="card-light group p-6">
                <div className="icon-badge group-hover:bg-animal-orange">
                  <v.icon className="w-5 h-5 text-animal-orange transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-display text-sm uppercase text-animal-black mb-2">{v.title}</h3>
                <p className="text-animal-black/55 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-6 leading-tight">
            Nossas unidades
          </h2>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-6">
            Estamos em São Caetano do Sul com unidades prontas para te receber. Cada uma oferece a
            mesma estrutura de qualidade e o mesmo acompanhamento de coaches que faz a Animal ser a
            Animal.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            {units.map((unit) => (
              <Link
                key={unit.id}
                to={`/unidades/${unit.slug}`}
                className="card-light group overflow-hidden focus-visible:ring-2 focus-visible:ring-animal-orange focus-visible:ring-offset-2"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={unit.image}
                    alt={`Unidade ${unit.name} da Animal Fitness Club`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base uppercase text-animal-black mb-1">
                    {unit.name}
                  </h3>
                  <p className="text-animal-black/45 text-sm flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-animal-orange/70" /> {unit.address}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-animal-black rounded-2xl p-8 text-center border border-white/5">
            <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-3">
              Quer conhecer a Animal de perto?
            </h3>
            <p className="text-white/55 text-sm mb-5 max-w-md mx-auto">
              Agende uma aula experimental e sinta a diferença de treinar em uma academia que se
              importa com você.
            </p>
            <Button
              asChild
              className="bg-animal-orange hover:bg-animal-orange/90 text-white font-bold uppercase tracking-wide h-11"
            >
              <a href="#cta-final">Agendar Aula Grátis</a>
            </Button>
          </div>
        </div>
      </section>
      <PageCta
        title="Faça parte da comunidade Animal"
        subtitle="Seu próximo treino pode ser o primeiro na Animal. Vem conhecer a gente."
      />
    </>
  )
}
