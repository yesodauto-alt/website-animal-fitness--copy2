import { useRef, useEffect } from 'react'

export function useMagnetic<T extends HTMLElement = HTMLAnchorElement>(strength = 0.2) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      el.style.transition = 'transform 0.15s ease-out'
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    }

    const handleLeave = () => {
      el.style.transition = 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
      el.style.transform = 'translate(0, 0)'
    }

    el.addEventListener('mousemove', handleMove)
    el.addEventListener('mouseleave', handleLeave)
    return () => {
      el.removeEventListener('mousemove', handleMove)
      el.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return ref
}
