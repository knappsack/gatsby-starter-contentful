import * as React from "react"

import { AnyForwardRef } from "../../lib/create-any-element"
import type { UseTypesOf } from "../../lib/use-types-of"
import type { GroupStylesProps } from "./group.styles"
import { groupStyles } from "./group.styles"

type GroupProps = UseTypesOf["div"] & GroupStylesProps

export const Group = React.forwardRef(
  (
    { children, variant, options, ...props }: GroupProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const styles = groupStyles({ variant, options })

    return (
      <AnyForwardRef is="div" css={styles} {...props} ref={ref}>
        {children}
      </AnyForwardRef>
    )
  }
)
