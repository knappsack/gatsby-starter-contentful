import type { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"

const base: CSSObject = {
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.default,
  lineHeight: 1.5,
}

export const focusStyles: CSSObject = {
  borderRadius: 6,
  outline: `${theme.colors.focus} solid 4px`,
  outlineOffset: "4px",
}

const anchor: CSSObject = {
  color: theme.colors.link,
  textDecoration: "underline",
  ":focus": focusStyles,
}

export const anchorStyles = () => {
  return mediaQuery([base, anchor])
}

const paragraph: CSSObject = {
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.default,
  lineHeight: 1.5,
}

export const paragraphStyles = () => {
  return mediaQuery([base, paragraph])
}

const blockquote: CSSObject = {
  borderLeft: `4px solid ${theme.colors.border}`,
  display: "grid",
  fontSize: theme.font.size.xlarge,
  fontStyle: "italic",
  gap: theme.spacing.default,
  marginBottom: 24,
  marginTop: 24,
  paddingLeft: 24,
  "> *": {
    fontSize: "inherit",
  },
}

export const blockquoteStyles = () => {
  return mediaQuery([base, blockquote])
}

const list: CSSObject = {
  listStyleType: "revert",
  paddingLeft: theme.spacing.large,
}

export const listStyles = () => {
  return mediaQuery([base, list])
}

const listItem: CSSObject = {}

export const listItemStyles = () => {
  return mediaQuery([base, listItem])
}

const bold: CSSObject = {
  fontWeight: "bold",
}

export const boldStyles = () => {
  return mediaQuery([base, bold])
}

const italic: CSSObject = {
  fontStyle: "italic",
}

export const italicStyles = () => {
  return mediaQuery([base, italic])
}

const underline: CSSObject = {
  textDecoration: "underline",
}

export const underlineStyles = () => {
  return mediaQuery([base, underline])
}

const code: CSSObject = {
  padding: 2,
  fontSize: ".875em",
  fontFamily: theme.font.family.code,
  color: theme.colors.highlight,
}

export const codeStyles = () => {
  return mediaQuery([base, code])
}

const hr: CSSObject = {
  color: theme.colors.border,
}

export const hrStyles = () => {
  return mediaQuery([base, hr])
}
