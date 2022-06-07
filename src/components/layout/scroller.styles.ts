import { CSSObject } from "@emotion/react"
import { theme } from '../../styles/global-css-variables.css'
import { mediaQuery } from "../../styles/media-query"
import { Options, Variants } from "../../styles/types"

type VariantStyle = "content" | "item"
type OptionStyle = Options<"scroll">

const base: CSSObject = {}

const variants: Variants<VariantStyle> = {
  content: {
    display: "flex",
    flexWrap: [undefined, undefined, "wrap"],
    gap: [undefined, undefined, "24px 0"],
    justifyContent: [undefined, undefined, "center"],
    width: "100%",
  },
  item: {
    display: "inline-flex",
    scrollSnapAlign: "start",
    scrollSnapCoordinate: "left",
    ":last-of-type > div": {
      marginRight: theme.spacing.xxlarge,
    },
  },
}

export type ScrollerStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const scrollerStyles = ({ variant }: ScrollerStylesProps) => {
  return mediaQuery([base], variants[variant])
}
