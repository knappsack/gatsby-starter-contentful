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
  const ref = React.useRef<{ engagement: boolean, viewing: boolean } & HTMLDivElement>(null)

  const entry = useObserver(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  if (!!entry?.isIntersecting && ref.current.viewing === undefined) {
    ref.current.viewing = true

    useGtag("event", "viewing", {
      event_id: ref.current.dataset.analytics,
    })
  }

  const handleMouseEnter = () => {
    if (ref.current.engagement === undefined) {
      ref.current.engagement = true

      useGtag("event", "engagement", {
        event_id: ref.current.dataset.analytics,
      })
    }
  }

  const analyticsId = `${area}:${eventId ? eventId : variant}`

  const analyticsAttr = {
    "data-analytics": analyticsId,
    "data-style": area,
    "data-theme": theme,
    "data-variant": variant,
    ref: ref,
  }

  switch (area) {
    case `region`:
      return <section {...analyticsAttr}>{children}</section>
    case `unit`:
      return (
        <div {...analyticsAttr} onMouseEnter={handleMouseEnter}>
          {children}
        </div>
      )
    default:
      return <div>{children}</div>
  }
}
