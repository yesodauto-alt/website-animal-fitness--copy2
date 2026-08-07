import { cn } from '@/lib/utils'

type EnergyLineProps = {
  variant?: 'horizontal' | 'vertical' | 'accent'
  className?: string
  animated?: boolean
}

export function EnergyLine({
  variant = 'horizontal',
  className,
  animated = true,
}: EnergyLineProps) {
  if (variant === 'vertical') {
    return (
      <div
        className={cn('energy-line-vertical relative w-px h-full', className)}
        aria-hidden="true"
      />
    )
  }

  if (variant === 'accent') {
    return (
      <div className={cn('energy-line-accent h-px w-16 relative', className)} aria-hidden="true">
        <div className={cn('energy-line-pulse', !animated && 'energy-line-pulse-static')} />
      </div>
    )
  }

  return (
    <div className={cn('energy-line relative h-px w-full', className)} aria-hidden="true">
      <div className={cn('energy-line-pulse', !animated && 'energy-line-pulse-static')} />
    </div>
  )
}
