import type { CSSObject } from "@emotion/react"
import { theme } from "../../styles/global-css-variables.css"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from "../../styles/types"
import * as styles from "../models/text-section.styles"

type VariantStyle = "xlarge" | "large" | "medium" | "small"

const base: CSSObject = {
  display: "grid",
  whiteSpace: "normal",
  wordWrap: "break-word",
  fontFamily: theme.font.family.body,
  fontSize: theme.font.size.default,
  gap: theme.spacing.small,
  lineHeight: 1.5,
  // Markdown
  p: styles.paragraphStyles(),
  strong: styles.boldStyles(),
  em: styles.italicStyles(),
  code: styles.codeStyles(),
  ul: styles.listStyles(),
  table: styles.paragraphStyles(),
  del: {
    textDecoration: "line-through",
  },
  a: styles.anchorStyles(),
  blockquote: {
    borderLeft: `4px solid ${theme.colors.border}`,
    fontStyle: "italic",
    paddingLeft: theme.spacing.default,
  },
}

const variants: Variants<VariantStyle> = {
  xlarge: {
    fontSize: theme.font.size.xxlarge,
    fontStyle: "italic",
    lineHeight: 1.375,
  },
  large: {
    fontSize: [theme.font.size.large, theme.font.size.xlarge],
  },
  medium: {
    fontSize: theme.font.size.default,
  },
  small: {
    fontSize: theme.font.size.small,
  },
}

export type AbstractStylesProps = {
  variant: VariantStyle
  options?: Partial<{
    parse: boolean
  }>
}

export const abstractStyles = ({ variant }: AbstractStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
