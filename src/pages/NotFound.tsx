import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

const NotFound = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    console.error('404 Error: User attempted to access non-existent route:', pathname)
  }, [pathname])

  return (
    <div className="min-h-screen flex items-center justify-center bg-animal-black px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl sm:text-8xl text-animal-orange uppercase mb-4">404</h1>
        <p className="text-white/60 text-lg sm:text-xl mb-2">Página não encontrada</p>
        <p className="text-white/40 text-sm mb-8 max-w-md mx-auto">
          A página que você procura pode ter sido movida ou não existe mais.
        </p>
        <Button
          asChild
          className="bg-animal-orange hover:bg-animal-orange/90 text-white font-bold uppercase tracking-wide"
        >
          <Link to="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFound
