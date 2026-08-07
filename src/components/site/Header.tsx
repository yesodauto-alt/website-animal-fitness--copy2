import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { Logo } from '@/components/site/Logo'
import { AuthDialog } from '@/components/site/AuthDialog'
import { useScrollPosition } from '@/hooks/use-scroll-position'
import { useAuth } from '@/hooks/use-auth'
import { navItems } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { track } from '@/analytics/tracker'

export function Header() {
  const isScrolled = useScrollPosition(50)
  const { isAuthenticated, user } = useAuth()
  const [open, setOpen] = useState(false)
  const [authOpen, setAuthOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-animal-black/85 backdrop-blur-xl shadow-[0_4px_30px_-10px_rgba(0,0,0,0.5)] border-b border-white/[0.08]'
            : 'bg-transparent',
        )}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link to="/" aria-label="Animal Fitness Club - Página inicial" className="rounded">
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-white/85 hover:text-animal-orange focus-visible:text-animal-orange transition-all duration-300 uppercase tracking-wide rounded relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-animal-orange after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={() => setAuthOpen(true)}
                variant="ghost"
                className="text-white hover:text-animal-orange hover:bg-white/10 font-bold uppercase text-xs h-9 px-3 gap-1.5"
              >
                <User className="w-4 h-4 text-animal-orange" />
                {isAuthenticated ? user?.name?.split(' ')[0] || 'Minha Conta' : 'Área do Membro'}
              </Button>

              <Button
                asChild
                className="bg-animal-orange hover:bg-animal-orange/85 text-white font-bold uppercase tracking-wide text-xs h-9 px-5 rounded-full transition-all duration-500 hover:shadow-[0_0_20px_-4px_hsl(20_100%_50%/0.45)] hover:-translate-y-0.5"
              >
                <a href="#contato" onClick={() => track('trial_requested', { page: 'header' })}>
                  Agendar Aula Grátis
                </a>
              </Button>
            </div>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden text-white hover:bg-white/10 h-11 w-11"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-animal-black border-animal-orange/20 w-[300px] p-0"
              >
                <div className="flex flex-col gap-2 mt-16 px-6">
                  <div className="mb-4">
                    <Logo />
                  </div>
                  <nav className="flex flex-col">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <a
                          href={item.href}
                          className="text-base font-semibold text-white/90 hover:text-animal-orange focus-visible:text-animal-orange transition-colors py-3.5 border-b border-white/10 uppercase tracking-wide rounded"
                        >
                          {item.label}
                        </a>
                      </SheetClose>
                    ))}
                  </nav>
                  <Button
                    onClick={() => {
                      setOpen(false)
                      setAuthOpen(true)
                    }}
                    variant="outline"
                    className="mt-4 border-white/20 text-white hover:bg-white/10 w-full font-bold uppercase text-xs h-11 gap-2"
                  >
                    <User className="w-4 h-4 text-animal-orange" />
                    {isAuthenticated ? 'Sua Conta' : 'Área do Membro'}
                  </Button>

                  <SheetClose asChild>
                    <a
                      href="#contato"
                      onClick={() => track('trial_requested', { page: 'header' })}
                      className="mt-3 inline-flex items-center justify-center bg-animal-orange hover:bg-animal-orange/85 text-white font-bold uppercase tracking-wide text-sm px-6 py-3.5 rounded-full transition-all duration-300 min-h-[48px]"
                    >
                      Agendar Aula Grátis
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </>
  )
}
