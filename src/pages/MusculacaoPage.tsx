import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/site/PageHero'
import { PageCta } from '@/components/site/PageCta'
import { Button } from '@/components/ui/button'
import { Target, Users, Dumbbell, CalendarCheck, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Target,
    title: 'Periodização real',
    desc: 'Seu treino não é genérico. Nossos coaches montam e ajustam sua rotina com base nos seus objetivos e evolução.',
  },
  {
    icon: Users,
    title: 'Coaches atentos',
    desc: 'Não é só treinar e ir embora. Alguém de verdade está olhando pela sua execução e progresso a cada sessão.',
  },
  {
    icon: Dumbbell,
    title: 'Equipamentos de primeira',
    desc: 'Espaço pensado para você treinar bem, com materiais de qualidade para hipertrofia e força.',
  },
  {
    icon: CalendarCheck,
    title: 'Acompanhamento contínuo',
    desc: 'Seu progresso é revisado regularmente. Cargas, exercícios e estratégias mudam conforme você evolui.',
  },
]

export default function MusculacaoPage() {
  return (
    <>
      <Seo
        title="Musculação em São Caetano do Sul | Animal Fitness Club"
        description="Treino de musculação com coaches especializados, equipamentos de primeira e acompanhamento real. Hipertrofia e força na Animal Fitness Club em São Caetano do Sul."
        path="/musculacao"
      />
      <PageHero
        title="Musculação na Animal"
        subtitle="Treino de força e hipertrofia com acompanhamento de coaches que olham pelo seu progresso — não apenas pelo seu acesso à academia."
      />
      <section className="section-padding bg-animal-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-4 leading-tight">
            Treino de força e hipertrofia com acompanhamento real
          </h2>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-4">
            Na Animal Fitness Club, musculação não é só entrar, fazer alguns exercícios e sair. É
            treinar com propósito. Nossos coaches acompanham sua execução, ajustam cargas e garantem
            que cada movimento te leve mais perto do seu objetivo — seja ganhar massa muscular,
            aumentar força ou melhorar seu condicionamento.
          </p>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-10">
            Com uma estrutura completa e equipamentos de primeira, você tem tudo o que precisa para
            evoluir. E o mais importante: alguém de verdade está olhando pelo seu progresso.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {benefits.map((b) => (
              <div key={b.title} className="card-light group p-6">
                <div className="icon-badge group-hover:bg-animal-orange">
                  <b.icon className="w-5 h-5 text-animal-orange transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-display text-base uppercase text-animal-black mb-2">
                  {b.title}
                </h3>
                <p className="text-animal-black/55 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-6 leading-tight">
            Como funciona seu primeiro treino
          </h2>
          <ol className="space-y-4 mb-10">
            <li className="flex gap-3">
              <span className="font-display text-animal-orange text-2xl shrink-0">1</span>
              <p className="text-animal-black/65 leading-relaxed text-sm sm:text-base">
                Você agenda uma aula experimental e conhece a estrutura, os coaches e a comunidade.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-animal-orange text-2xl shrink-0">2</span>
              <p className="text-animal-black/65 leading-relaxed text-sm sm:text-base">
                Nosso time entende seus objetivos, seu nível de condicionamento e sua rotina.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="font-display text-animal-orange text-2xl shrink-0">3</span>
              <p className="text-animal-black/65 leading-relaxed text-sm sm:text-base">
                Você treina com acompanhamento real e sente a diferença de uma academia que se
                importa com seu progresso.
              </p>
            </li>
          </ol>
          <div className="bg-animal-black rounded-2xl p-8 text-center border border-white/5">
            <h3 className="font-display text-lg sm:text-xl uppercase text-white mb-3">
              Também curte treino funcional?
            </h3>
            <p className="text-white/55 text-sm mb-5 max-w-md mx-auto">
              Conheça o Cross na Animal e descubra como combinar força e intensidade em grupo.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-animal-orange/40 text-animal-orange hover:bg-animal-orange/10 h-11"
            >
              <Link to="/cross">
                Conhecer o Cross <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <PageCta
        title="Pronto para treinar musculação de verdade?"
        subtitle="Agende sua aula experimental e sinta a diferença de treinar com acompanhamento real."
      />
    </>
  )
}
