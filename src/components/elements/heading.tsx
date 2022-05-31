import * as React from "react"

import type { UseTypesOf } from "../../lib/use-types-of"
import type { HeadingStylesProps } from "./heading.styles"
import { AnyForwardRef } from "../../lib/create-any-element"
import { headingStyles } from "./heading.styles"

/**
 * UseTypesOf makes sure you only inherit Types of `h3`.
 * All heading elements sharing the same types.
 */
export type HeadingProps = UseTypesOf["h3"] & HeadingStylesProps

/**
 * By default the Heading component will render as `h3`,
 * but can be overridden with the `is` property.
 *
 * Property `is` will accept all JSX Intrinsic Elements.
 *
 * @example // How to render Heading component as e.g <div> instead
 *
 * './app.tsx'
 * -----------
 * const option = false
 * const element = option ? 'h1' : 'div'
 * const App = () => <Heading is={element} {...props} />
 *
 * './heading.tsx'
 * ---------------
 * const Heading = () => <Any is='h3' {...props} />
 */
export const Heading = React.forwardRef(
  (
    { children, variant, options, ...props }: HeadingProps,
    ref: React.Ref<HTMLHeadingElement>
  ) => {
    const styles = headingStyles({ variant, options })

    return (
      <AnyForwardRef is="h3" css={styles} {...props} ref={ref}>
        {children}
      </AnyForwardRef>
    )
  }
)
