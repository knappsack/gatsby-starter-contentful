import * as React from "react"

import { AnyForwardRef } from "../../lib/create-any-element"
import type { UseTypesOf } from "../../lib/use-types-of"
import type { GridTemplateStylesProps } from "./grid-template.styles"
import { gridTemplateStyles } from "./grid-template.styles"

type GridTemplateProps = UseTypesOf["div"] & GridTemplateStylesProps

export const GridTemplate = React.forwardRef(
  (
    { children, variant, ...props }: GridTemplateProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    const styles = gridTemplateStyles({ variant })

    return (
      <AnyForwardRef is="div" css={styles} {...props} ref={ref}>
        {children}
      </AnyForwardRef>
    )
  }
)
