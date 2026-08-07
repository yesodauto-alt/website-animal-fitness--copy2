import logoImg from '@/assets/image-41f17.png'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <img
        src={logoImg}
        alt="Animal Fitness Club"
        className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  )
}
