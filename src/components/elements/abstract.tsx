import * as React from "react"

import { abstractStyles } from "./abstract.styles"
import type { UseTypesOf } from "../../lib/use-types-of"
import { AnyForwardRef } from "../../lib/create-any-element"

export type HeadingProps = UseTypesOf["p"]

export const Abstract = React.forwardRef(
  (
    { children, ...props }: HeadingProps,
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    const styles = abstractStyles

    return (
      <AnyForwardRef is="p" css={styles} {...props} ref={ref}>
        {children}
      </AnyForwardRef>
    )
  }
)
