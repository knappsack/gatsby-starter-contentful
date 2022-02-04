import React, { useRef } from 'react'
import { GetTypesOf } from '../lib/get-types-of'
import { useGtag } from '../lib/gtag'
import { useObserver } from '../lib/use-observer'

type AnalyticsProps = GetTypesOf['div'] & {
  area: 'region' | 'unit'
  eventId?: string
  theme?: string
  variant: string
}

export const Analytics = ({
  area,
  eventId,
  theme,
  variant,
  children,
}: AnalyticsProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const entry = useObserver(ref, {
    root: null,
    rootMargin: '0px',
    threshold: 0.75,
  })

  if (!!entry?.isIntersecting) {
    useGtag('event', 'viewing', {
      event_id:
        ref.current.dataset.analyticsRegion ||
        ref.current.dataset.analyticsUnit,
    })
  }

  const handleMouseEnter = () => {
    useGtag('event', 'engagement', {
      event_id: ref.current.dataset.analyticsUnit,
    })
  }

  const setAnalyticsId = `${area}:${eventId ? eventId : variant}`

  switch (area) {
    case `region`:
      return (
        <section
          data-style={area}
          data-analytics-region={setAnalyticsId}
          data-theme={theme}
          data-variant={variant.toLocaleLowerCase()}
          ref={ref}
        >
          {children}
        </section>
      )
    case `unit`:
      return (
        <div
          data-style={area}
          data-analytics-unit={setAnalyticsId}
          data-theme={theme}
          data-variant={variant.toLocaleLowerCase()}
          onMouseEnter={handleMouseEnter}
          ref={ref}
        >
          {children}
        </div>
      )
    default:
      return <div>{children}</div>
  }
}
