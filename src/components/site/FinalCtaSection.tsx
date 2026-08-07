import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/Reveal'
import { WHATSAPP_URL } from '@/lib/site-data'
import { track } from '@/analytics/tracker'

export function FinalCtaSection() {
  return (
    <section
      id="cta-final"
      className="relative bg-dark-premium-textured section-dark-premium py-20 md:py-32 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06]">
        <img
          src="https://img.usecurling.com/p/1920/600?q=people%20fitness%20community%20dark&color=dark"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-animal-orange/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-animal-orange/08 to-transparent" />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-20 pointer-events-none animate-gentle-pulse"
        style={{
          background: 'radial-gradient(ellipse at top, hsl(20 100% 50% / 0.08), transparent 70%)',
        }}
      />
      <div
        className="absolute left-[20%] top-1/2 w-px h-24 pointer-events-none animate-gentle-pulse"
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(20 100% 50% / 0.1), transparent)',
          animationDelay: '2s',
        }}
      />
      <div
        className="absolute right-[25%] top-1/3 w-px h-32 pointer-events-none animate-gentle-pulse"
        style={{
          background:
            'linear-gradient(to bottom, transparent, hsl(20 100% 50% / 0.08), transparent)',
          animationDelay: '3.5s',
        }}
      />

      <Reveal className="relative z-10 container mx-auto text-center max-w-3xl">
        <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl uppercase text-white leading-[1.1] mb-6">
          O seu próximo treino
          <br />
          pode ser <span className="text-animal-orange">animal!</span>
        </h2>
        <p className="text-white/65 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Não importa se você está começando ou recomeçando. Vem conhecer a comunidade.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-animal-orange hover:bg-animal-orange/85 text-white font-bold uppercase tracking-wide text-base sm:text-lg px-8 sm:px-10 py-6 h-12 sm:h-auto rounded-full transition-all duration-500 hover:shadow-[0_0_36px_-4px_hsl(20_100%_50%/0.45)] hover:-translate-y-0.5"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('trial_requested', { page: 'final_cta' })}
          >
            Agendar Minha Aula Grátis
          </a>
        </Button>
      </Reveal>
    </section>
  )
}
