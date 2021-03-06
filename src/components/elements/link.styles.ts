import type { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"
import { focusStyles } from "../models/text-section.styles"

type VariantStyle = string
type OptionStyle = string

const base: CSSObject = {
  cursor: "pointer",
  ":focus": focusStyles,
}

const variants: Variants<VariantStyle> = {}
const options: Options<OptionStyle> = {}

export type LinkStylesProps = {
  variant?: VariantStyle
}

export const linkStyles = ({ variant = "" }: LinkStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
