import * as React from "react"

type AnyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Any = (props: AnyProps) => {
  const type = props.is || "div"
  const attributes = Object.assign({}, props)
  delete attributes.is
  return React.createElement(type, attributes, props.children)
}

export const AnyForwardRef = React.forwardRef(
  (props: AnyProps, ref: React.ForwardedRef<unknown>) => {
    const type = props.is || "div"
    const attributes = Object.assign({}, props)
    delete attributes.is
    return React.createElement(type, { ...attributes, ref }, props.children)
  }
)
