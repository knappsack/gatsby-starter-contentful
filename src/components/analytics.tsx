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
  ...props
}: AnalyticsProps) => {
  const ref = React.useRef<HTMLDivElement>(undefined)

  const [status, setStatus] = React.useState({
    viewport: false,
    engagement: false,
  })

  const entry = useObserver(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  })

  if (!!entry?.isIntersecting) {
    if (status.viewport) return
    setStatus({ ...status, viewport: true })

    useGtag("event", "viewing", {
      event_id: ref.current.dataset.analytics,
    })
  }

  const handleMouseEnter = () => {
    if (status.engagement) return
    setStatus({ ...status, engagement: true })

    useGtag("event", "engagement", {
      event_id: ref.current.dataset.analytics,
    })
  }

  const analyticsId = `${area}:${eventId ? eventId : variant}`

  const analyticsProps = {
    "data-analytics": analyticsId,
    "data-style": area,
    "data-theme": theme,
    "data-variant": variant,
    ref: ref,
    ...props,
  }

  switch (area) {
    case "region":
      return <section {...analyticsProps}>{children}</section>
    case "unit":
      return (
        <div {...analyticsProps} onMouseEnter={handleMouseEnter}>
          {children}
        </div>
      )
    default:
      return <>{children}</>
  }
}
