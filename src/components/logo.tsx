import React from 'react'

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-7"
      viewBox="0 0 250 200"
      fill="none"
    >
      <circle
        cx="100"
        cy="100"
        r="100"
        fill="#1d1d1f"
        className="fill-current text-brand-default"
      />
      <rect
        width="50"
        height="200"
        transform="matrix(1 0 0 -1 200 200)"
        fill="#1d1d1f"
        className="fill-current text-brand-default"
      />
    </svg>
  )
}

export default Logo
