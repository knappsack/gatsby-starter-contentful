import { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Options, Variants } from "../../styles/types"

type VariantStyle = "row" | "column"
type OptionStyle = "reverse" | "space" | "center"

const base: CSSObject = {
  display: "flex",
  gap: 8,
}

const variants: Variants<VariantStyle> = {
  row: {
    flexDirection: "row",
  },
  column: {
    flexDirection: "column",
  },
}

const space: CSSObject = {
  justifyContent: "space-between",
}

const center: CSSObject = {
  justifyContent: "center",
}

const reverse: Variants<VariantStyle> = {
  row: {
    flexDirection: "row-reverse",
  },
  column: {
    flexDirection: "column-reverse",
  },
}

export type GroupStylesProps = {
  variant: VariantStyle
  options?: Options<OptionStyle>
}

export const groupStyles = ({ variant, options }: GroupStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.space && space,
    options?.center && center,
    options?.reverse && reverse[variant],
  ])
}
