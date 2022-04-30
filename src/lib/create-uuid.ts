import * as React from "react"

export const createUuid = (prefix = "uuid") => {
  return prefix + React.useId()
}
