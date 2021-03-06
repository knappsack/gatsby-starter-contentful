import * as React from "react"

import slugify from "@sindresorhus/slugify"
import type { Block, Inline } from "@contentful/rich-text-types"
import type { UseTypesOf } from "./use-types-of"
import { focusStyles } from "../components/models/text-section.styles"

type CreateJumpLinkProps = UseTypesOf["a"] & {
  node: Block | Inline
}

export const createJumpLink = ({ node, children }: CreateJumpLinkProps) => {
  // @ts-ignore: value is not defined as type
  const value: string | undefined = node?.content[0].value

  if (!value) {
    return <React.Fragment>{children}</React.Fragment>
  }

  const slug = slugify(value)

  return (
    <a id={slug} css={{ ":focus": focusStyles }} href={`#` + slug}>
      {children}
    </a>
  )
}
