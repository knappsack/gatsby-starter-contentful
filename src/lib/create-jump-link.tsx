import React from 'react'
import slugify from '@sindresorhus/slugify'
import { GetTypesOf } from './get-types-of'

type CreateJumpLinkProps = GetTypesOf['a']

export const createJumpLink = ({ children }: CreateJumpLinkProps) => {
  const slug = children[0].key
    ? children[0]?.props?.children.toString()
    : children[0].toString()

  return <a href={`#${slugify(slug)}`}>{children}</a>
}
