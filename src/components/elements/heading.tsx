import React from 'react'

export type HeadingProps = {
  children: React.ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
  return <h2 className="text-2xl font-bold">{children}</h2>
}
