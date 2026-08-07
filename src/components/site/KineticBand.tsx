import { cn } from '@/lib/utils'

type KineticBandProps = {
  className?: string
  text?: string
}

export function KineticBand({ className, text = 'TREINE • EVOLUA • PERTENÇA' }: KineticBandProps) {
  const content = `${text} • `
  return (
    <div
      className={cn('kinetic-band-wrapper overflow-hidden py-6 sm:py-10', className)}
      aria-hidden="true"
    >
      <div className="kinetic-track">
        <span className="kinetic-text">{content}</span>
        <span className="kinetic-text">{content}</span>
      </div>
    </div>
  )
}
