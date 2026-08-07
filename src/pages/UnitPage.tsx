import { useParams, Link } from 'react-router-dom'
import { Seo } from '@/components/seo/Seo'
import { StructuredData } from '@/components/seo/StructuredData'
import { PageHero } from '@/components/site/PageHero'
import { PageCta } from '@/components/site/PageCta'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { units, WHATSAPP_URL } from '@/lib/site-data'
import { track } from '@/analytics/tracker'
import { MapPin, MessageCircle, CalendarPlus, Dumbbell, Users, BadgeAlert } from 'lucide-react'

export default function UnitPage() {
  const { slug } = useParams<{ slug: string }>()
  const unit = units.find((u) => u.slug === slug)

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-animal-white pt-20 px-4">
        <div className="text-center">
          <h1 className="font-display text-2xl sm:text-3xl uppercase text-animal-black mb-4">
            Unidade não encontrada
          </h1>
          <Link
            to="/"
            className="text-animal-orange font-semibold hover:underline focus-visible:underline rounded"
          >
            ← Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Seo
        title={`Animal Fitness Club ${unit.name} | Academia em São Caetano do Sul`}
        description={`Unidade ${unit.name} da Animal Fitness Club. Musculação, Cross e comunidade que treina junto. Agende sua aula experimental.`}
        path={`/unidades/${unit.slug}`}
        image={unit.image}
      />
      <StructuredData variant="unit" unitSlug={unit.slug} />
      <PageHero
        title={`Unidade ${unit.name}`}
        subtitle="Musculação, Cross e uma comunidade que treina junto. Venha conhecer a Animal de perto."
      />
      <section className="section-padding bg-animal-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={unit.image}
                alt={`Unidade ${unit.name} da Animal Fitness Club`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl uppercase text-animal-black mb-4 leading-tight">
                Sobre a unidade
              </h2>
              <p className="text-sm sm:text-base text-animal-black/65 leading-relaxed mb-4">
                A unidade {unit.name} da Animal Fitness Club oferece a mesma estrutura de qualidade
                e acompanhamento de coaches que você encontra em todas as nossas unidades.
              </p>
              {unit.pending && (
                <Badge className="bg-animal-orange/15 text-animal-orange border-animal-orange/30 mb-4">
                  <BadgeAlert className="w-3 h-3 mr-1" />
                  Algumas informações estão pendentes
                </Badge>
              )}
              <p className="text-animal-black/55 text-sm flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-animal-orange shrink-0" />
                {unit.address}
              </p>
            </div>
          </div>
          <h2 className="font-display text-xl sm:text-2xl uppercase text-animal-black mb-6 leading-tight">
            Modalidades disponíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <Link
              to="/musculacao"
              className="card-light group p-6 focus-visible:ring-2 focus-visible:ring-animal-orange focus-visible:ring-offset-2"
            >
              <Dumbbell className="w-7 h-7 text-animal-orange mb-3" />
              <h3 className="font-display text-base uppercase text-animal-black mb-2">
                Musculação
              </h3>
              <p className="text-animal-black/55 text-sm">
                Treino de força e hipertrofia com acompanhamento de coaches.
              </p>
            </Link>
            <Link
              to="/cross"
              className="card-light group p-6 focus-visible:ring-2 focus-visible:ring-animal-orange focus-visible:ring-offset-2"
            >
              <Users className="w-7 h-7 text-animal-orange mb-3" />
              <h3 className="font-display text-base uppercase text-animal-black mb-2">Cross</h3>
              <p className="text-animal-black/55 text-sm">
                Treino funcional de alta intensidade em grupo.
              </p>
            </Link>
          </div>
          <h2 className="font-display text-xl sm:text-2xl uppercase text-animal-black mb-6 leading-tight">
            Como chegar
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Button
              asChild
              variant="outline"
              className="border-animal-orange/30 text-animal-orange hover:bg-animal-orange/10 h-11"
            >
              <a
                href={unit.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('maps_clicked', { unit: unit.id, page: 'unit_page' })}
              >
                <MapPin className="w-4 h-4 mr-2" /> Ver no mapa
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-animal-orange/30 text-animal-orange hover:bg-animal-orange/10 h-11"
            >
              <a
                href={unit.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_clicked', { unit: unit.id, page: 'unit_page' })}
              >
                <MessageCircle className="w-4 h-4 mr-2" /> Falar no WhatsApp
              </a>
            </Button>
            <Button asChild className="bg-animal-orange hover:bg-animal-orange/90 text-white h-11">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('trial_requested', { unit: unit.id, page: 'unit_page' })}
              >
                <CalendarPlus className="w-4 h-4 mr-2" /> Agendar Aula
              </a>
            </Button>
          </div>
        </div>
      </section>
      <PageCta
        title={`Venha treinar na unidade ${unit.name}`}
        subtitle="Agende sua aula experimental e conheça a estrutura, os coaches e a comunidade da Animal."
      />
    </>
  )
}
