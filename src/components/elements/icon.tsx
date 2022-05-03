import * as React from "react"

type IconProps = {
  name: string
}

export const Icon = (props: IconProps) => {
  const { name } = props

  return (
    <svg
      data-style="icon"
      fill="none"
      height="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href={`/feather-icons-sprite.svg#${name}`} />
    </svg>
  )
}
