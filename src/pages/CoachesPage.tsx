import { Seo } from '@/components/seo/Seo'
import { PageHero } from '@/components/site/PageHero'
import { PageCta } from '@/components/site/PageCta'
import { Badge } from '@/components/ui/badge'
import { coachPlaceholders } from '@/lib/site-data'
import { Eye, Shield, Heart, Instagram, User } from 'lucide-react'

const values = [
  {
    icon: Eye,
    title: 'Acompanhamento individual',
    desc: 'Cada aluno é único. Seu treino, sua execução e seu progresso são acompanhados de perto.',
  },
  {
    icon: Shield,
    title: 'Técnica e segurança',
    desc: 'Movimento bem executado é movimento seguro. Nossos coaches corrigem, orientam e garantem qualidade.',
  },
  {
    icon: Heart,
    title: 'Motivação real',
    desc: 'Não é sobre gritar. É sobre conhecer você, entender seus dias difíceis e te puxar para cima quando precisa.',
  },
]

export default function CoachesPage() {
  return (
    <>
      <Seo
        title="Coaches & Personal Trainers | Animal Fitness Club"
        description="Conheça os coaches da Animal Fitness Club. Profissionais dedicados que acompanham cada treino e cada evolução em São Caetano do Sul."
        path="/coaches"
      />
      <PageHero
        title="Coaches da Animal"
        subtitle="Quem treina com você faz diferença. Nossos coaches não são apenas instrutores — são parceiros da sua evolução."
      />
      <section className="section-padding bg-animal-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-4 leading-tight">
            Por que nossos coaches fazem diferença
          </h2>
          <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-10">
            Em muitas academias, você treina sozinho mesmo com gente ao redor. Na Animal, alguém de
            verdade está olhando pelo seu treino. Nossos coaches conhecem seu nome, seus objetivos e
            seus desafios — e estão ali para garantir que cada sessão te leve mais perto de onde
            você quer chegar.
          </p>
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
            Nossa filosofia de coaching
          </h2>
          <div className="bg-animal-black rounded-2xl p-8 mb-12 border border-white/5">
            <p className="text-white/75 leading-relaxed text-center max-w-2xl mx-auto text-sm sm:text-base">
              "Treinamento de verdade não é só sobre suor. É sobre movimento com propósito,
              progresso mensurável e uma relação de confiança entre coach e aluno. Na Animal, cada
              treino tem intenção."
            </p>
          </div>
          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl uppercase text-animal-black mb-6 leading-tight">
            Conheça a equipe
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coachPlaceholders.map((coach) => (
              <div key={coach.id} className="card-light overflow-hidden">
                <div className="relative aspect-square bg-gray-50 flex items-center justify-center">
                  <User className="w-14 h-14 text-gray-300" />
                  <Badge className="absolute top-3 right-3 bg-animal-orange/15 text-animal-orange border-animal-orange/30 text-[10px] uppercase">
                    Em breve
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base uppercase text-animal-black mb-1">
                    [Nome do Coach]
                  </h3>
                  <p className="text-animal-orange text-[11px] font-semibold uppercase mb-2">
                    [Especialidade]
                  </p>
                  <p className="text-animal-black/40 text-xs leading-relaxed mb-3">
                    [Bio pendente — conteúdo será preenchido com dados reais dos coaches.]
                  </p>
                  <span className="inline-flex items-center gap-1 text-animal-black/40 text-xs">
                    <Instagram className="w-4 h-4" /> @instagram
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-animal-black/40 text-sm mt-6">
            As informações dos coaches serão preenchidas em breve com dados reais da equipe.
          </p>
        </div>
      </section>
      <PageCta
        title="Quer treinar com acompanhamento de verdade?"
        subtitle="Agende sua aula experimental e conheça os coaches da Animal em pessoa."
      />
    </>
  )
}
