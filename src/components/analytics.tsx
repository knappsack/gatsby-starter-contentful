import React, { useRef } from 'react'
import { GetTypesOf } from '../lib/get-types-of'
import { isBrowser } from '../lib/is-browser'
import { useObserver } from '../lib/use-observer'

declare global {
  interface Window {
    gtag: (event: string, action: string, value: { event_id: string }) => void
  }
}

type AnalyticsProps = GetTypesOf['div'] & {
  eventId?: string
  theme?: string
  variant: string
  analyze: 'region' | 'unit'
}

export const Analytics = ({
  analyze,
  eventId,
  theme,
  variant,
  children,
}: AnalyticsProps) => {

  const ref = useRef(null)
  const inViewport = useObserver(ref, '0px', 0.5)

  if (inViewport) {

    const regionId = ref.current.dataset.analyticsRegion
    const unitId = ref.current.dataset.analyticsUnit
    const eventId = `${regionId ? regionId : unitId}`

    if (isBrowser && window.gtag) {
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
      window.gtag('event', 'page_section', {
        event_id: eventId,
      })
    }
  }

  const getAnalyticsId = `${analyze}:${eventId ? eventId : variant}`

  switch (analyze) {
    case `region`:
      return (
        <section data-analytics-region={getAnalyticsId} ref={ref}>
          {children}
        </section>
      )
    case `unit`:
      return (
        <div data-analytics-unit={getAnalyticsId} ref={ref}>
          {children}
        </div>
      )
    default:
      return <div ref={ref}>{children}</div>
  }
}
