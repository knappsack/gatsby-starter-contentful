import * as React from "react"

type ObserverProps = IntersectionObserverInit & {
  triggerOnce?: boolean
}

export const useObserver = (
  elementRef: React.RefObject<Element>,
  { root, rootMargin, threshold, triggerOnce = false }: ObserverProps
) => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>(null)

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    const node = elementRef?.current
    const hasIOSupport = !!window.IntersectionObserver

    if (!hasIOSupport || !node || triggerOnce) return

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

    triggerOnce = !triggerOnce

    return () => observer.unobserve(node)
  }, [elementRef])

  return entry
}
