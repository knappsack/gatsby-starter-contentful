import { RefObject, useEffect, useState } from 'react'

type ObserverProps = IntersectionObserverInit & {
  triggerOnce?: boolean
}

export const useObserver = (
  elementRef: RefObject<Element>,
  { root, rootMargin, threshold, triggerOnce = true }: ObserverProps
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>(null)

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node) return

    const options = {
      threshold,
      root,
      rootMargin,
      /**
       * IntersectionObserver V2
       * @url https://caniuse.com/intersectionobserver-v2
       */ trackVisibility: true,
      delay: 100,
    }
    const observer = new IntersectionObserver(updateEntry, options)

    observer.observe(node)

    return () => observer.unobserve(node)
  }, [elementRef])

  return entry
}
