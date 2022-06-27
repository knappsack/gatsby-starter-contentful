import { createGlobalTheme } from "@vanilla-extract/css"

export const theme = createGlobalTheme(`:root`, {
  /** @note https://tailwindcss.com/docs/background-color  */
  colors: {
    border: "rgba(0 0 0 / 10%)",
    dark: "#1d1d1f",
    focus: "rgba(165 180 252)",
    highlight: "#f92672",
    hover: "rgb(55 48 163)",
    light: "rgb(255 255 255)",
    link: "rgb(79 70 229)",
    section: "#f5f5f5",
    text: "#1d1d1f",
    transparent: "transparent",
  },
  font: {
    family: {
      code: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
      body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
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
