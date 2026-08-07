import { type ReactNode } from 'react'
import { useMagnetic } from '@/hooks/use-magnetic'
import { cn } from '@/lib/utils'

type MagneticLinkProps = {
  children: ReactNode
  className?: string
  strength?: number
  href: string
  onClick?: () => void
}

export function MagneticLink({
  children,
  className,
  strength = 0.15,
  href,
  onClick,
}: MagneticLinkProps) {
  const ref = useMagnetic<HTMLAnchorElement>(strength)

  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      className={cn('inline-flex items-center will-change-transform', className)}
    >
      {children}
    </a>
  )
}
