import * as React from "react"

type AnyElementProps = Partial<{
  children: React.ReactNode
  is: keyof JSX.IntrinsicElements | string
  className: string
}>

export const AnyElement: React.FC<AnyElementProps & any> = ({
  children,
  ...props
}) => {
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
