import * as React from "react"

import { marked } from 'marked'
import { abstractStyles } from "./abstract.styles"
import type { AbstractStylesProps } from "./abstract.styles"
import type { UseTypesOf } from "../../lib/use-types-of"
import { AnyForwardRef } from "../../lib/create-any-element"

export type HeadingProps = UseTypesOf["p"] & AbstractStylesProps

export const Abstract = React.forwardRef(
  (
    { children, options, variant, ...props }: HeadingProps,
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    const parse = marked.parse(children?.toString() || "")
    const html = options?.parse ? parse : children?.toString() || ""
    const is = options?.parse ? "div" : "p"
    const styles = abstractStyles({ variant })

    return (
      <AnyForwardRef
        {...props}
        css={styles}
        dangerouslySetInnerHTML={{ __html: html }}
        is={is}
        ref={ref}
      />
    )
  }
)
