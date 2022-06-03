import { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import { Options, Variants } from '../../styles/types'
import { focusStyles } from "./text-section.styles"

type VariantStyle = "small" | "medium" | "large"
type OptionStyle = Options<"square" | "wide">

const base: CSSObject = {
  height: "auto",
  maxWidth: "100%",
  objectFit: "cover",
  ":focus": focusStyles,
}

const variants: Variants<VariantStyle> = {
  small: {},
  medium: {},
  large: {},
}

const square: CSSObject = {
  aspectRatio: "1 / 1",
}

const wide: CSSObject = {
  aspectRatio: "16 / 9",
}

export type AssetStylesProps = {
  variant: VariantStyle
  options?: OptionStyle
}

export const assetStyles = ({ variant, options }: AssetStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.square && square,
    options?.wide && wide,
  ])
}
