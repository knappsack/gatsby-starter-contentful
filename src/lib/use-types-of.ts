type ReactJSXIntrinsicElements = JSX.IntrinsicElements
type JSXIntrinsicElements = keyof ReactJSXIntrinsicElements

/**
 * Get any IntrinsicElements Prop Types
 * @example type Component = UseTypesOf['div']
 */
export type UseTypesOf = {
  [K in JSXIntrinsicElements]: ReactJSXIntrinsicElements[K]
}
