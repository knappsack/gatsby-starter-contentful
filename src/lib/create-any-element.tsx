import * as React from "react"

type AnyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Any = (props: AnyProps) => {
  const type = props.is || "div"
  const attributes = Object.assign({}, props)
  delete attributes.is
  /**
   * Emotion CSS-in-JS helper
   * ------------------------
   * Copying the className to create element
   * inherit styles from the base component.
   */
  attributes.className = props.className
  return React.createElement(type, attributes, props.children)
}

export const AnyForwardRef = React.forwardRef(
  (props: AnyProps, ref: React.ForwardedRef<unknown>) => {
    const type = props.is || "div"
    const attributes = Object.assign({}, props)
    delete attributes.is
    attributes.className = props.className
    return React.createElement(type, { ...attributes, ref }, props.children)
  }
)
