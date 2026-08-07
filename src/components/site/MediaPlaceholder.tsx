import { Dumbbell } from 'lucide-react'
import { cn } from '@/lib/utils'

type MediaPlaceholderProps = {
  id: string
  className?: string
}

export function MediaPlaceholder({ id, className }: MediaPlaceholderProps) {
  return (
    <div className={cn('media-placeholder relative overflow-hidden', className)}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
        <Dumbbell className="w-4 h-4 text-animal-orange/20" />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/15 font-mono">{id}</span>
        <span className="text-[9px] uppercase tracking-wider text-white/10">
          Mídia Animal — Substituir
        </span>
      </div>
    </div>
  )
}
