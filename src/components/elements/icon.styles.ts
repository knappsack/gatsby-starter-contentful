import { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Variants, Options } from "../../styles/types"

type VariantStyle = "large" | "medium" | "small"

const base: CSSObject = {}

const variants: Variants<VariantStyle> = {
  large: {
    height: 48,
    width: 48,
    strokeWidth: 1,
  },
  medium: {
    height: 32,
    width: 32,
    strokeWidth: 1.5,
  },
  small: {
    height: 16,
    width: 16,
    strokeWidth: 1.5,
  },
}

export type IconStylesProps = {
  variant: VariantStyle
}

export const iconStyles = ({ variant }: IconStylesProps) => {
  return mediaQuery([base, variants[variant]])
}
