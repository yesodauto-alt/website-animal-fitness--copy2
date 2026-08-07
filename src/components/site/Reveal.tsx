import { type ReactNode } from 'react'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'clip-reveal'
}

export function Reveal({ children, className, delay = 0, animation = 'fade-up' }: RevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const hiddenClasses: Record<string, string> = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'slide-left': 'opacity-0 translate-x-8',
    'slide-right': 'opacity-0 -translate-x-8',
    'clip-reveal': 'opacity-0',
  }

  const visibleClasses: Record<string, string> = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-in': 'opacity-100',
    'slide-left': 'opacity-100 translate-x-0',
    'slide-right': 'opacity-100 translate-x-0',
    'clip-reveal': 'opacity-100',
  }

  const clipPathStyle =
    animation === 'clip-reveal'
      ? { clipPath: isVisible ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)' }
      : {}

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isVisible ? visibleClasses[animation] : hiddenClasses[animation],
        className,
      )}
      style={{ transitionDelay: `${delay}ms`, ...clipPathStyle }}
    >
      {children}
    </div>
  )
}
