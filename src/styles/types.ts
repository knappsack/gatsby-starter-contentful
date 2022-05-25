import { CSSObject } from "@emotion/react"

export type Variants<Variant extends string> = Record<Variant, CSSObject>

export type Options<Option extends string> = Partial<Record<Option, boolean>>
