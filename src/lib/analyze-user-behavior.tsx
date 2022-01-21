import React, { useEffect, useRef } from 'react'
import { GetPropTypesOf } from './get-prop-types-of'
import { isBrowser } from './is-browser'

/**
 * To send Google Analytics Events on a web page where 
 * the global site tag has been added, use the gtag.js 
 * event command with the following syntax:
 * 
 * @url https://developers.google.com/analytics/devguides/collection/gtagjs/events
 * 
 * gtag('event', <action>, {
 *   'event_category': <category>,
 *   'event_label': <label>,
 *   'value': <value>
 * });
 */

declare global {
  interface Window {
    gtag: (
      event: string,
      action: string,
      value: Record<string, string>
    ) => void
  }
}

type ScrollSpyProps = GetPropTypesOf['section'] & {
  variation: string
}

export const AnalyzeUserBehavior = ({ variation, children }: ScrollSpyProps) => {
  const sectionRef = useRef(null)
  const inViewport = useRef(false)

  const handleScrollEvent = () => {
    const boundingRect = sectionRef.current.getBoundingClientRect()
    const outViewport = inViewport.current
    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0
    )

    if (boundingRect.height > viewportHeight) {
      inViewport.current =
        boundingRect.top < viewportHeight / 3 &&
        boundingRect.bottom > (viewportHeight / 3) * 2
    } else {
      inViewport.current =
        boundingRect.top > 0 && boundingRect.bottom < viewportHeight
    }

    if (outViewport != inViewport.current) {
      const eventId =
        inViewport.current &&
        sectionRef.current.dataset.analyticsSection + `-in-viewport`

      /**
       * Send the event to Google Analytics
       * @url https://developers.google.com/tag-platform/gtagjs/routing
       */
      if (isBrowser && window.gtag) {
        window.gtag('event', 'page_section', { event_id: eventId })
      }
    }
  }

  useEffect(() => {
    if (!isBrowser) return

    window.addEventListener('scroll', handleScrollEvent, { passive: true })
    // This is needed on first page load
    handleScrollEvent()
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  return (
    <section data-analytics-section={variation} ref={sectionRef}>
      {children}
    </section>
  )
}
