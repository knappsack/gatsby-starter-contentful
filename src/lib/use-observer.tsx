import { useState, useEffect } from 'react'

type ObserverProps = {(
  root: any, 
  rootMargin: string, 
  threshold: number | number[]
)}

export const useObserver: ObserverProps = (root, rootMargin, threshold) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { rootMargin, threshold },
    )

    root && observer.observe(root.current)

    return () => observer.unobserve(root.current)
  }, [])

  return isVisible
}
