import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

type PageHeroProps = {
  title: string
  subtitle: string
  breadcrumb?: string
}

export function PageHero({ title, subtitle, breadcrumb = 'Voltar para o início' }: PageHeroProps) {
  return (
    <section className="relative bg-dark-premium-textured section-dark-premium text-white pt-28 pb-14 md:pb-16 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-animal-orange/25 to-transparent" />
      <div
        className="absolute left-[20%] top-1/3 w-px h-28 pointer-events-none animate-gentle-pulse"
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(20 100% 50% / 0.08), transparent)',
        }}
      />
      <div
        className="absolute right-[15%] top-1/4 w-px h-36 pointer-events-none animate-gentle-pulse"
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(20 100% 50% / 0.06), transparent)',
          animationDelay: '2s',
        }}
      />
      <div className="container mx-auto max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/45 hover:text-animal-orange focus-visible:text-animal-orange transition-colors duration-200 text-sm mb-6 rounded"
        >
          <ArrowLeft className="w-4 h-4" /> {breadcrumb}
        </Link>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.1] mb-4 animate-fade-in-up">
          {title}
        </h1>
        <p className="text-white/55 text-base sm:text-lg max-w-2xl leading-relaxed animate-fade-in-up animate-delay-100">
          {subtitle}
        </p>
      </div>
    </section>
  )
}
