import * as React from "react"

import { isBrowser } from "./is-browser"

export const useWindowWidth = () => {
  if (!isBrowser) return { windowWidth: 0 }

  const [windowWidth, setWindowWidth] = React.useState(0)

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [windowWidth])

  return { windowWidth }
}
