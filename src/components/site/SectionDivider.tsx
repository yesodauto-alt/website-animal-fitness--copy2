import { cn } from '@/lib/utils'

type SectionDividerProps = {
  variant?: 'light' | 'dark'
  className?: string
}

export function SectionDivider({ variant = 'dark', className }: SectionDividerProps) {
  return (
    <div className={cn('relative h-px w-full max-w-5xl mx-auto', className)} aria-hidden="true">
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-r from-transparent to-transparent',
          variant === 'dark' ? 'via-white/[0.06]' : 'via-black/[0.06]',
        )}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-animal-orange/12 to-transparent" />
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-1 w-24 h-3 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(20 100% 50% / 0.1), transparent 70%)',
        }}
      />
    </div>
  )
}
