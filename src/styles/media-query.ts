import facepaint from "facepaint"

const breakpoints = [734, 1068]

export const mediaQuery = facepaint(
  breakpoints.map(breakPoint => `@media (min-width: ${breakPoint}px)`)
)
