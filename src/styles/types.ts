import { CSSObject } from "@emotion/react"

export type Variants<Variant extends string> = Record<Variant, CSSObject>
