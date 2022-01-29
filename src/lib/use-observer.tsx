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

    return () => observer.observe(node)

  }, [elementRef])

  return entry
}

// import { useState, useEffect } from 'react'

// type ObserverProps = {
//   (root?: any, rootMargin?: string, threshold?: number | number[])
// }

// export const useObserver: ObserverProps = (root, rootMargin, threshold) => {

//   const [isVisible, setIsVisible] = useState(false)
//   const target = root.current

//   const options = {
//     root: target,
//     rootMargin,
//     threshold,
//   }

//   useEffect(() => {

//     console.log(target)

//     const observer = new IntersectionObserver(([entry]) => {
//       console.log(entry)
//       setIsVisible(entry.isIntersecting)
//     }, options)

//     if (target) observer.observe(target)

//     return () => {
//       observer.disconnect()
//     }

//   }, [target])

//   return isVisible
// }
