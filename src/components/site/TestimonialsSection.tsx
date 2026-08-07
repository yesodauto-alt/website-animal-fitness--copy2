import { Star, MessageSquareQuote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/Reveal'

export function TestimonialsSection() {
  return (
    <section id="comunidade" className="section-padding bg-animal-white relative isolate">
      <div className="container mx-auto">
        <Reveal className="text-center mb-3">
          <span className="text-eyebrow mb-3 inline-block">Comunidade</span>
          <h2 className="section-title text-animal-black max-w-3xl mx-auto">
            Não precisa acreditar na gente. Pergunte para quem já é Animal.
          </h2>
        </Reveal>
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <p className="text-animal-black/50 text-sm sm:text-base">
            Em breve, avaliações reais do Google estarão disponíveis aqui.
          </p>
        </Reveal>

        <Reveal className="max-w-2xl mx-auto">
          <div className="card-light p-8 lg:p-14 text-center relative overflow-hidden">
            <div
              className="absolute -top-16 -right-16 w-40 h-40 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, hsl(20 100% 50% / 0.04), transparent 70%)',
              }}
            />
            <div className="w-14 h-14 rounded-full bg-animal-orange/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquareQuote className="w-7 h-7 text-animal-orange" />
            </div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-animal-orange" fill="currentColor" />
              ))}
            </div>
            <p className="text-animal-black/55 text-sm leading-relaxed mb-6">
              As avaliações reais dos nossos alunos no Google serão exibidas aqui assim que a
              integração estiver disponível.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-animal-orange/30 text-animal-orange hover:bg-animal-orange/10 hover:text-animal-orange font-semibold uppercase text-sm h-11 rounded-full transition-all duration-300"
            >
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">
                Avaliar no Google
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
