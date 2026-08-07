import { Instagram, MapPin, MessageCircle, FileText } from 'lucide-react'
import { Logo } from '@/components/site/Logo'
import { navItems, WHATSAPP_URL, INSTAGRAM_URL, units } from '@/lib/site-data'
import { track } from '@/analytics/tracker'

export function Footer() {
  return (
    <footer className="bg-animal-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-animal-orange/15 to-transparent" />
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-48 h-12 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top, hsl(20 100% 50% / 0.05), transparent 70%)',
        }}
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Treinamento de verdade, coaches especializados e uma comunidade que transforma
              academia em um dos melhores momentos do seu dia.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base uppercase mb-4 text-animal-orange tracking-wide">
              Navegação
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white/65 hover:text-animal-orange focus-visible:text-animal-orange transition-colors duration-200 text-sm rounded"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-display text-base uppercase mb-4 text-animal-orange tracking-wide">
              Unidades
            </h4>
            <div className="flex flex-col gap-2.5">
              {units.map((unit) => (
                <a
                  key={unit.id}
                  href={`/unidades/${unit.slug}`}
                  className="text-white/65 hover:text-animal-orange focus-visible:text-animal-orange transition-colors duration-200 text-sm flex items-center gap-1.5 rounded"
                >
                  <MapPin className="w-3.5 h-3.5 text-animal-orange/70" />
                  {unit.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base uppercase mb-4 text-animal-orange tracking-wide">
              Contato
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('instagram_clicked', { page: 'footer' })}
                className="text-white/65 hover:text-animal-orange focus-visible:text-animal-orange transition-colors duration-200 text-sm flex items-center gap-2 rounded"
              >
                <Instagram className="w-4 h-4" /> Instagram
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('whatsapp_clicked', { page: 'footer' })}
                className="text-white/65 hover:text-animal-orange focus-visible:text-animal-orange transition-colors duration-200 text-sm flex items-center gap-2 rounded"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a
                href="#"
                className="text-white/65 hover:text-animal-orange focus-visible:text-animal-orange transition-colors duration-200 text-sm flex items-center gap-2 rounded"
              >
                <FileText className="w-4 h-4" /> Política de Privacidade
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6">
          <p className="text-white/35 text-xs text-center">
            © {new Date().getFullYear()} Animal Fitness Club. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
