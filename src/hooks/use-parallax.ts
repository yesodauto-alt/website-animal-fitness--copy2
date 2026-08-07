import { useRef, useState, useEffect } from 'react'

export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 0.05) {
  const ref = useRef<T>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.innerWidth < 768) return

    let rafId = 0

    const update = () => {
      rafId = 0
      const rect = el.getBoundingClientRect()
      const center = rect.top + rect.height / 2
      const windowCenter = window.innerHeight / 2
      setOffset((center - windowCenter) * speed)
    }

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [speed])

  return { ref, offset }
}
