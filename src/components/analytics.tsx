import * as React from "react"

import { UseTypesOf } from "../lib/use-types-of"
import { useGtag } from "../lib/gtag"
import { isBrowser } from "../lib/is-browser"
import { analyticsStyles, AnalyticsStylesProps } from "./analytics.styles"

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

  const [context, setContext] = React.useState({
    inViewport: false,
  })

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

  const styles = analyticsStyles({ variant, options })

  const properties = {
    ...props,
    "data-analytics": analyticsId,
    css: styles,
    ref: ref,
  }

  switch (area) {
    case "nav":
      return <nav {...properties}>{children}</nav>
    case "section":
      return <section {...properties}>{children}</section>
    default:
      return <>{children}</>
  }
}
