import { iconStyles } from "./icon.styles"
import type { IconStylesProps } from "./icon.styles"
import type { UseTypesOf } from "../../lib/use-types-of"

type IconProps = UseTypesOf["svg"] & {
  name: string
  variant: IconStylesProps["variant"]
}

export const Icon = ({ variant, name, ...props }: IconProps) => {
  const styles = iconStyles({ variant })

  return (
    <svg
      fill="none"
      height="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      css={styles}
      {...props}
    >
      <use href={`/feather-icons-sprite.svg#${name}`} />
    </svg>
  )
}
