import React from 'react'
import { GetTypesOf } from '../lib/get-types-of'

type LayoutProps = GetTypesOf['div'] & {
  variant: string
  theme: string
}

export const Layout = ({ children, variant, theme, ...props }: LayoutProps) => {
  return (
    <div data-style="layout" data-variant={variant.toLocaleLowerCase()} data-theme={theme} {...props}>
      {children}
    </div>
  )
}
