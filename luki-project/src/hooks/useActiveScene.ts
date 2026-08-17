import { useEffect, useRef, useState } from 'react'

/**
 * Tracks which scroll-story scene is currently active by observing a set of
 * scene marker elements. Used to drive the sticky phone's screen content in
 * ScrollStory.tsx.
 */
export function useActiveScene(sceneCount: number) {
  const [active, setActive] = useState(0)
  const refs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.current.findIndex((el) => el === entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { threshold: 0.55 }
    )
    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [sceneCount])

  return { active, refs }
}
