import * as React from "react"

import { abstractStyles } from "./abstract.styles"
import type { AbstractStylesProps } from "./abstract.styles"
import type { UseTypesOf } from "../../lib/use-types-of"
import { AnyForwardRef } from "../../lib/create-any-element"

export type HeadingProps = UseTypesOf["p"] & AbstractStylesProps

export const Abstract = React.forwardRef(
  (
    { children = "", variant, ...props }: HeadingProps,
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    const styles = abstractStyles({ variant })

    return (
      <AnyForwardRef
        is="p"
        css={styles}
        {...props}
        ref={ref}
        dangerouslySetInnerHTML={{ __html: children?.toString() || "" }}
      />
    )
  }
)
