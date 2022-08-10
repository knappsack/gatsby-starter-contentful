import * as React from "react"

import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"
import { AppProvider } from "./src/lib/app-provider"
import { RefreshData } from "./src/lib/refresh-data"
import type { GatsbyBrowser } from "gatsby"

const emotionCache = createCache({
  key: "knappsack",
})

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <AppProvider value={undefined}>
    <CacheProvider value={emotionCache}>
      {element}
      <RefreshData />
    </CacheProvider>
  </AppProvider>
)
