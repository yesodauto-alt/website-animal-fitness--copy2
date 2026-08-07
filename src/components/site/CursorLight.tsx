import { useEffect, useRef, useState } from 'react'

export function CursorLight() {
  const ref = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setEnabled(true)

    const el = ref.current
    if (!el) return

    let rafId = 0

    const onMove = (e: MouseEvent) => {
      if (rafId) return
      rafId = requestAnimationFrame(() => {
        rafId = 0
        el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`

        const target = e.target as HTMLElement | null
        if (
          target &&
          target.closest('form, input, select, textarea, [role="dialog"], [role="textbox"]')
        ) {
          el.style.opacity = '0'
        } else {
          el.style.opacity = '1'
        }
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  if (!enabled) return null

  return (
    <div ref={ref} className="cursor-light pointer-events-none fixed z-[100]" aria-hidden="true" />
  )
}
