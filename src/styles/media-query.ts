import facepaint from "facepaint"

const breakpoints = [768]

export const mediaQuery = facepaint(
  breakpoints.map(breakPoint => `@media (min-width: ${breakPoint}px)`)
)
