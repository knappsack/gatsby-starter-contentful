import * as React from "react"

import { AppProvider } from "../../lib/app-provider"

type RootElementProps = { children: React.ReactNode }

const RootElement = ({ children }: RootElementProps) => (
  <AppProvider value={undefined}>{children}</AppProvider>
)

export default RootElement
