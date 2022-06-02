import * as React from "react"

import { AppProvider } from "../../lib/app-provider"
import { RefreshData } from "../../lib/refresh-data"

type RootElementProps = { children: React.ReactNode }

const RootElement = ({ children }: RootElementProps) => (
  <AppProvider value={undefined}>
    {children}
    <RefreshData />
  </AppProvider>
)

export default RootElement
