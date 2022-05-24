import { CSSObject } from "@emotion/react"
import { mediaQuery } from "../../styles/media-query"
import type { Variants } from '../../styles/types'

const base: CSSObject = {
  display: "flex",
  fontWeight: "bold",
  gap: 24,
}

const variants: Variants<GroupStylesProps["variant"]> = {
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

const reverse: Variants<GroupStylesProps["variant"]> = {
  row: {
    flexDirection: "row-reverse",
  },
  column: {
    flexDirection: "column-reverse",
  },
}

export type GroupStylesProps = {
  variant: "row" | "column"
  options?: Partial<{
    reverse: boolean
    space: boolean
  }>
}

export const groupStyles = ({ variant, options }: GroupStylesProps) => {
  return mediaQuery([
    base,
    variants[variant],
    options?.space && space,
    options?.reverse && reverse[variant],
  ])
}
