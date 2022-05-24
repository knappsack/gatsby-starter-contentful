import { createGlobalTheme } from "@vanilla-extract/css"

export const theme = createGlobalTheme(`:root`, {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    border: "#d2d2d2",
    default: "#1d1d1f",
    heading: "#1d1d1f",
    link: "#06c",
    region: "#f5f5f5",
    text: "#1d1d1f",
    unit: "#fff",
  },
  fontFamily: {
    body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    default: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
  spacing: {
    default: "16px",
    xsmall: "4px",
    small: "8px",
    medium: "12px",
    large: "24px",
    xlarge: "32px",
    xxlarge: "48px",
  },
  size: {
    default: "18px",
    xsmall: "8px",
    small: "12px",
    medium: "16px",
  },
  fontWeight: {
    default: "400",
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  screens: {
    sm: "640px",
    // => @media (min-width: 640px) { ... }
    md: "768px",
    // => @media (min-width: 768px) { ... }
    lg: "1024px",
    // => @media (min-width: 1024px) { ... }
    xl: "1280px",
    // => @media (min-width: 1280px) { ... }
    "2xl": "1536px",
    // => @media (min-width: 1536px) { ... }
  },
})
