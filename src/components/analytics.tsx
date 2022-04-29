import * as React from "react"

import { GetTypesOf } from "../lib/get-types-of"
import { useGtag } from "../lib/gtag"
import { isBrowser } from "../lib/is-browser"

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
  const ref = React.useRef(undefined)
  const [context, setContext] = React.useState({
    engagement: false,
    inViewport: false,
  })

  const handleMouseEnter = () => {
    if (context.engagement) return
    setContext({ ...context, engagement: true })

    useGtag("event", "engagement", {
      event_id: ref.current.dataset.analytics,
    })
  }

  const handleScroll = () => {
    const element = ref.current
    const bounding = element.getBoundingClientRect()
    const elementHeight = element.offsetHeight
    const elementWidth = element.offsetWidth

    if (
      !context.inViewport &&
      bounding.top >= -elementHeight &&
      bounding.left >= -elementWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          elementWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          elementHeight
    ) {
      setContext({ ...context, inViewport: true })

      useGtag("event", "viewing", {
        event_id: element.dataset.analytics,
      })
    }
  }

  React.useEffect(() => {
    if (!isBrowser) return

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const analyticsId = `${area}:${eventId ? eventId : variant}`

  const props = {
    "data-analytics": analyticsId,
    "data-style": area,
    "data-theme": theme,
    "data-variant": variant,
    ref: ref,
  }

  switch (area) {
    case "region":
      return <section {...props}>{children}</section>
    case "unit":
      return (
        <div {...props} onMouseEnter={handleMouseEnter}>
          {children}
        </div>
      )
    default:
      return <>{children}</>
  }
}
