import * as React from "react"

import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { AppProvider } from "../../lib/app-provider"
import { RefreshData } from "../../lib/refresh-data"

const emotionCache = createCache({
  key: 'knappsack',
})

type RootElementProps = { children: React.ReactNode }

const RootElement = ({ children }: RootElementProps) => (
  <AppProvider value={undefined}>
    <CacheProvider value={emotionCache}>
      {children}
      <RefreshData />
    </CacheProvider>
  </AppProvider>
)

export default RootElement
