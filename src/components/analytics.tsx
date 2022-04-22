import * as React from "react"
import { GetTypesOf } from "../lib/get-types-of"
import { useGtag } from "../lib/gtag"
import { useObserver } from "../lib/use-observer"

type AnalyticsProps = GetTypesOf["div"] & {
  area: "region" | "unit"
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
  const ref = React.useRef<HTMLDivElement>(null)

  const entry = useObserver(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  if (!!entry?.isIntersecting && ref.current.dataset.v === undefined) {
    ref.current.dataset.v = ""

    useGtag("event", "viewing", {
      event_id: ref.current.dataset.analytics,
    })
  }

  const handleMouseEnter = () => {
    if (ref.current.dataset.e === undefined) {
      ref.current.dataset.e = ""

      useGtag("event", "engagement", {
        event_id: ref.current.dataset.analytics,
      })
    }
  }

  const analyticsId = `${area}:${eventId ? eventId : variant}`

  switch (area) {
    case `region`:
      return (
        <section
          data-analytics={analyticsId}
          data-style={area}
          data-theme={theme}
          data-variant={variant}
          ref={ref}
        >
          {children}
        </section>
      )
    case `unit`:
      return (
        <div
          data-analytics={analyticsId}
          data-style={area}
          data-theme={theme}
          data-variant={variant}
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
