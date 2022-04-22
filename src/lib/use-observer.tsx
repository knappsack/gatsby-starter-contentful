import * as React from "react"

export const useObserver = (
  ref: React.RefObject<HTMLDivElement>,
  { root, rootMargin, threshold }: IntersectionObserverInit
) => {
  const [entry, setEntry] = React.useState<IntersectionObserverEntry>(null)

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry)
  }

  React.useEffect(() => {
    const node = ref?.current

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
  }, [ref])

  return entry
}
