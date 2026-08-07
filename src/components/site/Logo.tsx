import { Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Dumbbell className="w-7 h-8 text-animal-orange" fill="currentColor" />
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl text-white tracking-wide">ANIMAL</span>
        <span className="text-[10px] tracking-[0.25em] text-animal-orange font-semibold">
          FITNESS CLUB
        </span>
      </div>
    </div>
  )
}
