import slugify from "@sindresorhus/slugify"
import { UseTypesOf } from "./use-types-of"

type CreateJumpLinkProps = UseTypesOf["a"]

export const createJumpLink = ({ children }: CreateJumpLinkProps) => {
  const slug = children?.toString() || ''
  
  return <a href={`#${slugify(slug)}`}>{children}</a>
}
