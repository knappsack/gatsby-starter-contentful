import React from 'react'
import { GetTypesOf } from '../../lib/get-types-of'
import { AnyElement } from '../../lib/react-create-any-element'
import { TopicSectionVariant } from '../models/contentful-topic-section'

/**
 * GetTypesOf makes sure you only inherit Types of `h3`.
 * Note: <h1> – <h6> heading elements sharing the same types.
 */
export type HeadingProps = GetTypesOf['h3'] & {
  variant: TopicSectionVariant
}

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
 * const Heading = () => <AnyElement is='h3' {...props} />
 */
export const Heading = ({ variant, children, ...props }: HeadingProps) => {
  return (
    <AnyElement is="h3" data-tag="heading" data-variant={variant} {...props}>
      {children}
    </AnyElement>
  )
}
