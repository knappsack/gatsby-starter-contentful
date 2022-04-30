import * as React from "react"

type AnyProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>

export const Any: React.FC<AnyProps> = ({ children, ...props }) => {
  const type = props.is || "div"
  const attributes = Object.assign({}, props)
  delete attributes.is
  /**
   * Emotion CSS-in-JS helper
   * ------------------------
   * Copy className to new element. This enables
   * inherit styles from the base component.
   */
  attributes.className = props.className
  return React.createElement(type, attributes, children)
}
