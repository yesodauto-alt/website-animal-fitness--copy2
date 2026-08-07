import { Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SmartImage } from '@/components/site/SmartImage'
import { Reveal } from '@/components/site/Reveal'
import { INSTAGRAM_URL } from '@/lib/site-data'
import { track } from '@/analytics/tracker'

const socialImages = [
  {
    src: 'https://img.usecurling.com/p/400/400?q=people%20fitness%20training%20gym',
    alt: 'Pessoas treinando fitness na Animal',
  },
  {
    src: 'https://img.usecurling.com/p/400/400?q=person%20weightlifting%20gym',
    alt: 'Pessoa levantando peso na Animal',
  },
  {
    src: 'https://img.usecurling.com/p/400/400?q=person%20crossfit%20workout%20training',
    alt: 'Pessoa treinando crossfit na Animal',
  },
  {
    src: 'https://img.usecurling.com/p/400/400?q=gym%20friends%20people%20community',
    alt: 'Comunidade da Animal junto',
  },
  {
    src: 'https://img.usecurling.com/p/400/400?q=person%20strength%20training%20gym',
    alt: 'Pessoa treinando força na Animal',
  },
  {
    src: 'https://img.usecurling.com/p/400/400?q=fitness%20motivation%20person%20gym',
    alt: 'Motivação no treino da Animal',
  },
]

export function SocialSection() {
  return (
    <section className="section-padding bg-animal-white relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-1/3 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, hsl(20 100% 50% / 0.08), transparent)',
        }}
      />
      <div className="container mx-auto">
        <Reveal className="text-center mb-10">
          <span className="text-eyebrow mb-3 inline-block">Comunidade</span>
          <h2 className="section-title text-animal-black mb-3">#SOMOSANIMAL</h2>
          <p className="text-animal-black/50 max-w-xl mx-auto text-sm">
            A comunidade Animal em cada treino. Compartilhe usando{' '}
            <span className="text-animal-orange font-semibold">#SOMOSANIMAL</span> e apareça aqui.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3 mb-10">
          {socialImages.map((img, i) => (
            <a
              key={i}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('instagram_clicked')}
              className="group relative aspect-square overflow-hidden rounded-lg focus-visible:ring-2 focus-visible:ring-animal-orange focus-visible:ring-offset-2"
              aria-label="Ver no Instagram"
            >
              <SmartImage
                src={img.src}
                alt={img.alt}
                className="w-full h-full"
                imgClassName="transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-animal-black/0 group-hover:bg-animal-black/50 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-black/[0.05] group-hover:ring-animal-orange/20 rounded-lg transition-all duration-500 pointer-events-none" />
            </a>
          ))}
        </Reveal>

        <Reveal className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-animal-orange/30 text-animal-orange hover:bg-animal-orange/10 hover:text-animal-orange font-semibold uppercase tracking-wide h-11 rounded-full transition-all duration-300"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('instagram_clicked', { page: 'social' })}
            >
              <Instagram className="w-4 h-4 mr-2" /> Seguir no Instagram
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
