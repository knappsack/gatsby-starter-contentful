import React from 'react'
import { GetTypesOf } from '../../lib/get-types-of'

type GridTemplateProps = GetTypesOf['div'] & {
  variant: string
  theme: string
}

export const GridTemplate = ({ children, variant, theme, ...props }: GridTemplateProps) => {
  return (
    <div data-style="grid-template" data-variant={variant} data-theme={theme} {...props}>
      {children}
    </div>
  )
}
