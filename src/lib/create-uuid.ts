import * as React from "react"

export const uuid = (prefix = "uuid") => {
  return prefix + React.useId()
}
