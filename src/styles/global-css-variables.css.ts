import { createGlobalTheme } from "@vanilla-extract/css"

export const theme = createGlobalTheme(`:root`, {
  colors: {
    transparent: "transparent",
    current: "currentColor",
    border: "#d2d2d2",
    default: "#1d1d1f",
    heading: "#1d1d1f",
    link: "#06c",
    hover: "#0077ed",
    focus: "hsl(210deg 100% 49% / 60%)",
    section: "#f5f5f5",
    text: "#1d1d1f",
    unit: "#fff",
  },
  font: {
    family: {
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      default: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    },
    weight: {
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
    size: {
      default: "18px",
      xsmall: "8px",
      small: "12px",
      medium: "16px",
      large: "20px",
      xlarge: "24px",
      xxlarge: "32px",
      huge: "50px",
    },
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
})
