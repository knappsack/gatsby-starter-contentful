import * as React from "react"
import { AppProvider } from "../../lib/app-provider"

const RootElement = ({ children }) => (
  <AppProvider value={undefined}>{children}</AppProvider>
)

export default RootElement
