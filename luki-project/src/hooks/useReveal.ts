import { useEffect, useRef } from 'react'

/**
 * Adds the "in" class to an element with class "reveal" once it enters the
 * viewport, animating it in. Respects prefers-reduced-motion implicitly
 * because the CSS transition is disabled globally in that case.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
