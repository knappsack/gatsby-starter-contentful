import React from 'react'
import { GetTypesOf } from '../../lib/get-types-of'
import { AnyElement } from '../../lib/react-create-any-element'
import { TopicSectionVariant } from '../contentful/contentful-topic-section'

export type HeadingProps = GetTypesOf['p'] & {
  variant: TopicSectionVariant
}

export const Abstract = ({ variant, children, ...props }: HeadingProps) => {
  return (
    <AnyElement is="p" data-style="abstract" data-variant={variant} {...props}>
      {children}
    </AnyElement>
  )
}
