import * as React from "react"

type AnyElementProps = {
  is: keyof JSX.IntrinsicElements
  className?: string
}

export const AnyElement: React.FC<AnyElementProps> = ({
  children,
  ...props
}) => {
  const type = props.is || "div"
  const attributes = Object.assign({}, props)
  delete attributes.is
  /**
   * Emotion CSS-in-JS helper
   * ------------------------
   * Copy className to new element. This allows for creating
   * components that inherit styling from the base component.
   */
  attributes.className = props.className
  return React.createElement(type, attributes, children)
}
