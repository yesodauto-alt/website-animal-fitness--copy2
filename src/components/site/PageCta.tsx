import { Button } from '@/components/ui/button'
import { WHATSAPP_URL } from '@/lib/site-data'
import { track } from '@/analytics/tracker'

type PageCtaProps = {
  title: string
  subtitle: string
}

export function PageCta({ title, subtitle }: PageCtaProps) {
  return (
    <section
      id="cta-final"
      className="relative bg-dark-premium-textured section-dark-premium py-20 md:py-28 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-animal-orange/25 to-transparent" />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-40 h-16 pointer-events-none animate-gentle-pulse"
        style={{
          background: 'radial-gradient(ellipse at top, hsl(20 100% 50% / 0.07), transparent 70%)',
        }}
      />
      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase text-white leading-[1.1] mb-4">
          {title}
        </h2>
        <p className="text-white/60 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <Button
          asChild
          size="lg"
          className="bg-animal-orange hover:bg-animal-orange/85 text-white font-bold uppercase tracking-wide text-base sm:text-lg px-8 sm:px-10 h-12 sm:h-auto rounded-full transition-all duration-500 hover:shadow-[0_0_28px_-4px_hsl(20_100%_50%/0.45)] hover:-translate-y-0.5"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('trial_requested', { page: 'content_page' })}
          >
            Agendar Minha Aula Grátis
          </a>
        </Button>
      </div>
    </section>
  )
}
