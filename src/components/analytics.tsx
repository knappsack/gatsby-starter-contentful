import * as React from "react"

import { UseTypesOf } from "../lib/use-types-of"
import { useGtag } from "../lib/gtag"
import { isBrowser } from "../lib/is-browser"

type AnalyticsProps = UseTypesOf["div"] & {
  area: "section" | "unit" | "nav"
  eventId?: string
  theme?: string
  variant: string
}

export const Analytics = ({
  area,
  eventId,
  variant,
  children,
}: AnalyticsProps) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const [context, setContext] = React.useState({
    engagement: false,
    inViewport: false,
  })

  const handleMouseEnter = () => {
    if (context.engagement) return
    setContext({ ...context, engagement: true })

    useGtag("event", "engagement", {
      event_id: ref.current?.dataset.analytics,
    })
  }

  const handleScroll = () => {
    if (!ref) return null
    
    const bounding = ref.current?.getBoundingClientRect()
    const elementHeight = ref.current?.offsetHeight || 0
    const elementWidth = ref.current?.offsetWidth || 0

    if (!bounding) return null
    
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
        event_id: ref.current?.dataset.analytics,
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
    ref: ref,
  }

  switch (area) {
    case "nav":
      return <nav {...props}>{children}</nav>
    case "section":
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
