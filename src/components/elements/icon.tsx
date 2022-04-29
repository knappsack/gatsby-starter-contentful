import * as React from "react"

type IconProps = {
  name: string
}

export const Icon = ({ name }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2rem"
      height="2rem"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-style="icon"
    >
      <use href={`/feather-icons-sprite.svg#${name}`} />
    </svg>
  )
}
