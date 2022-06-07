import * as React from "react"

import type { UseTypesOf } from "../../lib/use-types-of"
import { useGtag } from "../../lib/gtag"
import { isBrowser } from "../../lib/is-browser"
import { analyticsStyles } from "./analytics.styles"
import type { AnalyticsStylesProps } from "./analytics.styles"

type AnalyticsProps = UseTypesOf["div"] & {
  area: "section" | "nav"
  eventId: string
  options?: AnalyticsStylesProps["options"]
  variant: AnalyticsStylesProps["variant"]
}

export const Analytics = ({
  area,
  eventId,
  variant,
  options,
  children,
  ...props
}: AnalyticsProps) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [inViewport, setInViewport] = React.useState(false)

  const handleScroll = () => {
    if (!ref) return null

    const bounding = ref.current?.getBoundingClientRect()
    const elementHeight = ref.current?.offsetHeight || 0
    const elementWidth = ref.current?.offsetWidth || 0

    if (!bounding) return null

    if (
      !inViewport &&
      bounding.top >= -elementHeight &&
      bounding.left >= -elementWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          elementWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          elementHeight
    ) {
      setInViewport(!inViewport)

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

  const analyticsId = `${area}:${eventId || variant}`
  const styles = analyticsStyles({ variant, options })

  const forwardProps = {
    ...props,
    "data-analytics": analyticsId,
    css: styles,
    ref: ref,
  }

  switch (area) {
    case "nav":
      return <nav {...forwardProps}>{children}</nav>
    case "section":
      return <section {...forwardProps}>{children}</section>
    default:
      return <>{children}</>
  }
}
