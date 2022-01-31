import { RefObject, useEffect, useState } from 'react'

type ObserverProps = {
  root: any
  rootMargin: string
  threshold: number | number[]
}

export const useObserver = (
  elementRef: RefObject<Element>,
  { root, rootMargin, threshold }: ObserverProps
) => {
  
  const [entry, setEntry] = useState<IntersectionObserverEntry>(null)

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {

    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const options = { threshold, root, rootMargin }
    const observer = new IntersectionObserver(updateEntry, options)

    observer.observe(node)

    return () => observer.unobserve(node)

  }, [elementRef])

  return entry
}
