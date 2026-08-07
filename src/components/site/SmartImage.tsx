import { useState, useRef, useEffect } from 'react'
import { Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

type SmartImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  fallbackText?: string
  loading?: 'lazy' | 'eager'
}

export function SmartImage({
  src,
  alt,
  className,
  imgClassName,
  fallbackText = 'Animal Fitness Club',
  loading = 'lazy',
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true)
    }
  }, [])

  if (hasError) {
    return (
      <div
        className={cn(
          'relative flex items-center justify-center bg-gradient-to-br from-animal-black via-animal-black/95 to-black overflow-hidden',
          className,
        )}
      >
        <div className="absolute inset-0 bg-animal-orange/[0.03]" />
        <div className="relative flex flex-col items-center gap-2">
          <Dumbbell className="w-8 h-8 text-animal-orange/20" />
          <span className="font-display text-xs uppercase tracking-[0.2em] text-white/15">
            {fallbackText}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        onError={() => setHasError(true)}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-full object-cover transition-[opacity,transform,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isLoaded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-[1.02] translate-y-2',
          imgClassName,
        )}
      />
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-animal-black via-animal-black/95 to-black transition-opacity duration-700 pointer-events-none',
          isLoaded ? 'opacity-0' : 'opacity-100 animate-pulse',
        )}
      />
      {isLoaded && isVisible && (
        <div className="photo-reveal-overlay absolute inset-0 z-20 pointer-events-none" />
      )}
    </div>
  )
}
