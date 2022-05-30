import type { UseTypesOf } from "../../lib/use-types-of"
import { skipToContentStyles } from "./skip-to-content.styles"

type SkipToContentProps = UseTypesOf["a"]

export const SkipToContent = ({
  children,
  href = "#main",
  ...props
}: SkipToContentProps) => (
  <a css={skipToContentStyles} href={href} {...props}>
    {children}
  </a>
)
